import React from "react";
import { Check, Shield, Users } from "lucide-react";

export function DonateSidebar() {
  return (
    <div className="donate-sidebar reveal reveal-d1">
      <div className="sidebar-box">
        <h4>
          <Shield />
          Why Support Us?
        </h4>
        <p>Uplift Relief Foundation is a grassroots NGO built on relentless action and transparency.</p>
        <ul className="sidebar-bullets">
          <li>
            <Check />
            <span>
              <strong>80G Tax Exemption:</strong> Get 50% tax deductions on your donations.
            </span>
          </li>
          <li>
            <Check />
            <span>
              <strong>100% Transparent:</strong> Every rupee is tracked and audited monthly.
            </span>
          </li>
          <li>
            <Check />
            <span>
              <strong>Cancel Anytime:</strong> Easily manage or cancel memberships from your dashboard.
            </span>
          </li>
        </ul>
      </div>

      <div className="sidebar-box bg-[var(--navy)] text-[var(--chalk)] border-0">
        <h4 className="text-[var(--gold)]">
          <Users />
          Donor Care
        </h4>
        <p className="text-[var(--type-2)]">
          Need help with your donation or certificates? Get in touch with our support desk.
        </p>
        <p className="mb-0 font-semibold text-[var(--gold-pale)]">
          Email: billing@upliftrelief.org
          <br />
          Phone: +91 98765 43210
        </p>
      </div>
    </div>
  );
}
