"use server";

import Razorpay from "razorpay";
import crypto from "crypto";
import { createClient } from "@/utils/supabase/server";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

export interface DonationInsertData {
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  donorPan?: string;
  amount: number;
  donationMode: "monthly" | "onetime";
  paymentMethod: string;
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}

/**
 * Creates a Razorpay order with the specified amount.
 * @param amount - Amount in INR
 */
export async function createRazorpayOrder(amount: number) {
  try {
    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      throw new Error("Razorpay credentials are not configured in the environment variables.");
    }

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // Razorpay amount in paise (1 INR = 100 paise)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return {
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    };
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    return {
      success: false,
      error: error.message || "Failed to create payment order.",
    };
  }
}

/**
 * Verifies a Razorpay payment signature and logs the successful donation to Supabase.
 * @param data - Donation and transaction details
 */
export async function verifyAndSaveDonation(data: DonationInsertData) {
  try {
    const {
      donorName,
      donorEmail,
      donorPhone,
      donorPan,
      amount,
      donationMode,
      paymentMethod,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    } = data;

    if (!process.env.RAZORPAY_KEY_SECRET) {
      throw new Error("Razorpay key secret is not configured.");
    }

    // Verify signature using HMAC SHA256
    const text = razorpayOrderId + "|" + razorpayPaymentId;
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(text)
      .digest("hex");

    if (generatedSignature !== razorpaySignature) {
      console.error("Signature mismatch:", { generatedSignature, razorpaySignature });
      return {
        success: false,
        error: "Payment verification failed: Signature mismatch.",
      };
    }

    // Initialize Supabase Server Client
    const supabase = await createClient();

    // Insert the successful donation into the database
    const { error } = await supabase.from("donations").insert({
      donor_name: donorName,
      donor_email: donorEmail,
      donor_phone: donorPhone || null,
      donor_pan: donorPan || null,
      amount: amount,
      donation_mode: donationMode,
      payment_method: paymentMethod,
      razorpay_order_id: razorpayOrderId,
      razorpay_payment_id: razorpayPaymentId,
      razorpay_signature: razorpaySignature,
      status: "success",
    });

    if (error) {
      console.error("Database logging error:", error);
      return {
        success: false,
        error: "Payment verified, but failed to log transaction in database. Please contact support.",
      };
    }

    return {
      success: true,
    };
  } catch (error: any) {
    console.error("Error in verifying and logging payment:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred during verification.",
    };
  }
}
