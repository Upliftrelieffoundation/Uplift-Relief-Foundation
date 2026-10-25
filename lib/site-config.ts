/**
 * Site configuration and canonical URLs for Uplift Relief Foundation.
 * All public pages, sitemaps, robots.txt, and metadata canonicals must use this production domain.
 */
export const SITE_URL = "https://www.upliftrelieffoundation.org";

export const siteConfig = {
  name: "Uplift Relief Foundation",
  url: SITE_URL,
  description:
    "We rescue injured street animals and provide free education for underprivileged children across India. 100% transparent, grassroots NGO.",
  ogImage: `${SITE_URL}/images/og-image.jpg`,
  logo: `${SITE_URL}/images/logo.png`,
  socialLinks: {
    instagram: "https://www.instagram.com/upliftfoundation",
    facebook: "https://www.facebook.com/upliftfoundation",
  },
} as const;
