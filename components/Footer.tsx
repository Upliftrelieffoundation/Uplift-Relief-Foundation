import Link from "next/link";
import Image from "next/image";

import { Copyright, Mail, MapPin, Phone } from "lucide-react";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <Image
              src="/images/Uplift-Logo.png"
              alt="Uplift Relief Foundation"
              width={160}
              height={44}
              className="w-auto h-32"
            />
            {/* <p> */}
            {/*   A grassroots NGO rescuing street animals and educating */}
            {/*   underprivileged children across India. Nagpur since 2026. */}
            {/* </p> */}
            {/* <div className=" mt-5 p-4 bg-[rgba(255,255,255,0.03)] border border-line rounded-xl text-sm"> */}
            {/*   <p> */}
            {/*     Registered under the Societies Registration Act. Reg No: */}
            {/*     MAH/564/2026/NAGPUR. Donations eligible for 80G tax exemption. */}
            {/*   </p> */}
            {/* </div> */}
          </div>
          <div className="footer-col">
            <h5>Our Work</h5>
            <ul>
              <li>
                <Link href="/work">Animal Rescue</Link>
              </li>
              <li>
                <Link href="/work">Child Education</Link>
              </li>
              <li>
                <Link href="/stories">Field Stories</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Get Involved</h5>
            <ul>
              <li>
                <Link href="/donate">Donate Monthly</Link>
              </li>
              <li>
                <Link href="#">Volunteer</Link>
              </li>
              <li>
                <Link href="#">Partner With Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col footer-contact">
            <h5>Contact</h5>
            <ul>
              <li>
                <Mail />
                <a href="mailto:hello@upliftrelief.org">
                  hello@upliftrelief.org
                </a>
              </li>
              <li>
                <Phone />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <MapPin />
                <span>Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="flex items-center gap-2 text-gray-500">
            <Copyright size={18} /> 2026 Uplift Relief Foundation. All rights
            reserved.
          </p>
          <div className="flex gap-5 justify-between items-center ">
            <a href="#" aria-label="Instagram">
              <BsInstagram size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <BsTwitterX size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <BsLinkedin size={20} />
            </a>
            <a href="#" aria-label="YouTube">
              <GrYoutube size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
