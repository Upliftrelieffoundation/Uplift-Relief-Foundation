import { z } from "zod";

function luhnCheck(cardNumber: string): boolean {
  const digits = cardNumber.replace(/\s/g, "");
  if (!/^\d{13,19}$/.test(digits)) return false;
  let sum = 0;
  let alternate = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = parseInt(digits[i], 10);
    if (alternate) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alternate = !alternate;
  }
  return sum % 10 === 0;
}

function isFutureExpiry(expiry: string): boolean {
  const match = expiry.match(/^(\d{2})\/(\d{2})$/);
  if (!match) return false;
  const month = parseInt(match[1], 10);
  const year = parseInt(match[2], 10) + 2000;
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();
  return year > currentYear || (year === currentYear && month >= currentMonth);
}

export const paymentSchema = z.object({
  cardNumber: z
    .string()
    .min(1, "Card number is required")
    .refine((val) => /^[\d\s]{13,19}$/.test(val.replace(/\s/g, "")), {
      message: "Card number must be 13-19 digits",
    })
    .refine(luhnCheck, { message: "Invalid card number" }),

  expiry: z
    .string()
    .min(1, "Expiry date is required")
    .regex(/^\d{2}\/\d{2}$/, { message: "Must be in MM/YY format" })
    .refine(
      (val) => {
        const [m] = val.split("/").map(Number);
        return m >= 1 && m <= 12;
      },
      { message: "Month must be between 01-12" },
    )
    .refine(isFutureExpiry, { message: "Card has expired" }),

  cvv: z
    .string()
    .min(1, "CVV is required")
    .regex(/^\d{3,4}$/, { message: "CVV must be 3-4 digits" }),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  phone: z
    .string()
    .regex(
      /^\+?[\d\s-]{10,15}$/,
      "Phone must be 10-15 digits (e.g. +91 98765 43210)",
    ),
  pan: z
    .string()
    .regex(
      /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      "Invalid PAN format (e.g. ABCDE1234F)",
    ),
});

export type PaymentFormData = z.output<typeof paymentSchema>;
export type ContactFormData = z.output<typeof contactSchema>;
