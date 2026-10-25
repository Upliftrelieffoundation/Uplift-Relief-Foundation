import { getSiteContent, getDonationStats } from "@/lib/actions/admin";
import AdminClient from "./AdminClient";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [siteContent, donationStats] = await Promise.all([
    getSiteContent(),
    getDonationStats(),
  ]);

  return <AdminClient initialData={siteContent} donationStats={donationStats} />;
}
