import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <Image
              src="/images/logo_stacked.png"
              alt="Uplift Relief Foundation"
              width={160}
              height={44}
              style={{ width: "auto", height: "44px" }}
            />
            <p>
              A grassroots NGO rescuing street animals and educating
              underprivileged children across India. Nagpur since 2026.
            </p>
            <div className="footer-trust">
              <p>
                Registered under the Societies Registration Act. Reg No:
                MAH/564/2026/NAGPUR. Donations eligible for 80G tax exemption.
              </p>
            </div>
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
              <li>
                <Link href="/impact">Impact Reports</Link>
              </li>
              <li>
                <Link href="#">Annual Report 2026</Link>
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
              <li>
                <Link href="#">Corporate CSR</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col footer-contact">
            <h5>Contact</h5>
            <ul>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:hello@upliftrelief.org">
                  hello@upliftrelief.org
                </a>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Nagpur, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Uplift Relief Foundation. All rights reserved.</p>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
