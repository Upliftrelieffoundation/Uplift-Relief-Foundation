import { Check, Shield, Users } from "lucide-react";

export function DonateSidebar() {
  return (
    <div className="flex flex-col gap-6 reveal reveal-d1">
      <div className="bg-bg-card border border-line rounded-[20px] p-8">
        <h4 className="text-white mb-4 flex items-center gap-2 font-heading text-[1.25rem]">
          <Shield className="w-5 h-5 text-gold" />
          Why Support Us?
        </h4>
        <p className="text-[0.875rem] text-white/60 leading-[1.7] mb-4">
          Uplift Relief Foundation is a grassroots NGO built on relentless
          action and transparency.
        </p>
        <ul className="list-none flex flex-col gap-3">
          <li className="flex items-start gap-2.5 text-[0.875rem] text-type">
            <Check className="w-4 h-4 text-gold shrink-0 mt-0.75" />
            <span>
              <strong>80G Tax Exemption:</strong> Get 50% tax deductions on your
              donations.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-[0.875rem] text-type">
            <Check className="w-4 h-4 text-gold shrink-0 mt-0.75" />
            <span>
              <strong>100% Transparent:</strong> Every rupee is tracked and
              audited monthly.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-[0.875rem] text-type">
            <Check className="w-4 h-4 text-gold shrink-0 mt-0.75" />
            <span>
              <strong>Cancel Anytime:</strong> Easily manage or cancel
              memberships from your dashboard.
            </span>
          </li>
        </ul>
      </div>

      <div className=" text-white border-0 rounded-[20px] p-8">
        <h4 className="text-gold mb-4 flex items-center gap-2 font-heading text-[1.25rem]">
          <Users className="w-5 h-5 text-gold" />
          Donor Care
        </h4>
        <p className="text-type-2 text-[0.875rem] leading-[1.7] mb-4">
          Need help with your donation or certificates? Get in touch with our
          support desk.
        </p>
        <p className="mb-0 font-semibold text-gold-pale">
          Email: billing@upliftrelief.org
          <br />
          Phone: +91 98765 43210
        </p>
      </div>
    </div>
  );
}
