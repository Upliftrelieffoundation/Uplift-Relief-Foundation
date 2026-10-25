"use client";

import { useState, useEffect, useTransition, useCallback } from "react";
import {
  Home,
  Info,
  Heart,
  BookOpen,
  BarChart2,
  Megaphone,
  IndianRupee,
  LogOut,
  Save,
  RefreshCw,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Menu,
  X,
  Eye,
  TrendingUp,
  Users,
  PawPrint,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type SiteData = Record<string, Record<string, string>>;
type Tab =
  | "dashboard"
  | "hero"
  | "about"
  | "causes"
  | "stories"
  | "impact"
  | "cta"
  | "donations";

// ─── Default content (fallbacks when DB is empty) ─────────────────────────────

const DEFAULTS: SiteData = {
  hero: {
    badge: "Registered NGO · India",
    heading_line1: "जीवनम् उद्धर।",
    heading_em: "भविष्यं पुनर्लिख।",
    subtitle: "Trusted NGO for Street Animal Rescue & Free Child Education",
    description:
      "We are a grassroots NGO running 24/7 street animal rescues and free education centres for underprivileged children — because every life deserves a fighting chance.",
    stat1_value: "1,600+",
    stat1_label: "Animals Rescued",
    stat2_value: "50+",
    stat2_label: "Children Educated",
    stat3_value: "215+",
    stat3_label: "Volunteers",
    btn_primary: "Become a Monthly Donor",
    btn_secondary: "Join Rescue Missions",
  },
  about: {
    eyebrow: "Who We Are",
    heading: "A Foundation Built on",
    heading_em: "Compassion",
    paragraph1:
      "Uplift Relief Foundation is a grassroots NGO dedicated to two urgent causes: rescuing and rehabilitating injured street animals, and providing free, quality education to underprivileged children who would otherwise be denied the chance to learn.",
    paragraph2:
      "Our street animal rescue team operates 24/7 — responding to accidents, abuse cases, and disease outbreaks across India.",
    paragraph3:
      "Founded by young changemakers in 2026, we believe compassion — when backed by relentless action — transforms entire communities. 100% of public donations go directly to our programs.",
    stat_volunteers: "215+",
    stat_year: "2026",
    stat_cities: "48+",
  },
  impact: {
    eyebrow1: "100% Financial Transparency",
    eyebrow2: "12A & 80G Certified",
    heading: "You Deserve to Know",
    heading_em: "Everything",
    description:
      "Every rupee you donate is tracked, audited, and directed to the field. We publish annual reports and monthly breakdowns so you always know where your money goes.",
    stat1_target: "1600",
    stat1_suffix: "+",
    stat1_label: "Animals Rescued",
    stat2_target: "50",
    stat2_suffix: "+",
    stat2_label: "Children Educated",
    stat3_target: "100",
    stat3_suffix: "+",
    stat3_label: "Daily Dog Feed",
    stat4_target: "1000",
    stat4_suffix: "+",
    stat4_label: "Radium Belts for Dogs",
    reg_number: "Reg No: MH/2026/1069331",
    breakdown1_pct: "72%",
    breakdown1_title: "Direct Field Work",
    breakdown1_desc:
      "Rescue operations, veterinary care, educational supplies, scholarships.",
    breakdown2_pct: "18%",
    breakdown2_title: "Programs & Growth",
    breakdown2_desc:
      "New centres, volunteer training, outreach, awareness campaigns.",
    breakdown3_pct: "10%",
    breakdown3_title: "Operations",
    breakdown3_desc: "Admin, legal compliance, auditing, technology.",
  },
  cta: {
    eyebrow: "Make a Real Difference",
    heading: "Don't Just Watch.",
    heading_em: "Act Now.",
    description:
      "Your monthly contribution ensures we never say \"no\" to an emergency rescue call or a child wanting to learn.",
    btn_primary: "Start Monthly Giving",
    btn_secondary: "Save an Injured Animal Today",
    trust_badge: "100% Secure · 80G Tax Exempt · Cancel Anytime",
  },
  causes: {
    cause1_tag: "Animal Welfare",
    cause1_title: "Save an Injured Animal",
    cause1_desc:
      "Every day, dozens of street animals suffer from accidents, abuse, and disease. We provide 24/7 emergency rescue, life-saving surgeries, and safe rehabilitation.",
    cause1_btn: "Feed a Street Animal",
    cause1_name: "Bruno",
    cause1_location: "Maharashtra, India",
    cause1_date: "12 October 2026",
    cause1_story:
      "Bruno was found on the roadside with a severe leg fracture after being hit by a vehicle. Our rescue team responded within 30 minutes, administered first aid, and transported him to our vet partner.",
    cause1_condition: "Fractured hind leg - post-surgery recovery",
    cause1_raised: "8400",
    cause1_goal: "12000",
    cause1_status: "Recovering",
    cause2_tag: "Child Education",
    cause2_title: "Sponsor a Child's Education",
    cause2_desc:
      "Poverty forces brilliant minds out of school. We provide free tuition, supplies, and mentorship so every child gets a fair start.",
    cause2_btn: "Sponsor a Student",
    cause2_name: "Asha and Friends",
    cause2_location: "Maharashtra, India",
    cause2_date: "January 2026",
    cause2_story:
      "Asha dropped out of school at age 9 when her family could not afford books or uniforms. Uplift Relief Foundation enrolled her in our free education centre.",
    cause2_condition: "Enrolled - Grade 5, Top Performer",
    cause2_raised: "34500",
    cause2_goal: "50000",
    cause2_status: "Active",
  },
  stories: {
    eyebrow: "Stories from the Field",
    heading: "From Suffering to",
    heading_em: "Second Chances",
    description:
      "Every image is a life that found hope because someone chose to act.",
    story1_tag: "Daily feeding · 100+ dogs",
    story1_title: "Every Day, A Meal. Every Day, A Little Hope.",
    story1_desc:
      "It takes ₹4,500 every day to feed 100+ street dogs. Your contribution can help ensure that no hungry paw is left behind.",
    story1_btn: "Become a Feeding Sponsor",
    story2_tag: "Child Nutrition · Education",
    story2_title: "Sponsor a Meal. Nourish a Young Mind.",
    story2_desc:
      "Every child deserves access to nutritious meals and the opportunity to learn, grow, and dream. With just ₹2,500 per student per week, you can help.",
    story2_btn: "Become a Meal Sponsor",
    story3_tag: "Accident Prevention · Night Safety",
    story3_title: "Make Them Shine. Help Them Stay Safe.",
    story3_desc:
      "Every week, we aim to distribute 1,000+ reflective radium belts to street animals, helping them stay visible to drivers after dark.",
    story3_btn: "Sponsor Radium Belts",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function merge(defaults: Record<string, string>, db: Record<string, string>) {
  return { ...defaults, ...db };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Field({
  label,
  name,
  value,
  onChange,
  multiline = false,
  hint,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  multiline?: boolean;
  hint?: string;
}) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <label
        htmlFor={name}
        style={{
          display: "block",
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "#94a3b8",
          marginBottom: "0.375rem",
        }}
      >
        {label}
      </label>
      {hint && (
        <p style={{ fontSize: "0.7rem", color: "#64748b", marginBottom: "0.35rem" }}>
          {hint}
        </p>
      )}
      {multiline ? (
        <textarea
          id={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          rows={3}
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "0.625rem",
            padding: "0.75rem 1rem",
            color: "#e2e8f0",
            fontSize: "0.9rem",
            resize: "vertical",
            outline: "none",
            boxSizing: "border-box",
            fontFamily: "inherit",
            lineHeight: 1.6,
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(200,162,78,0.5)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
        />
      ) : (
        <input
          id={name}
          type="text"
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "0.625rem",
            padding: "0.75rem 1rem",
            color: "#e2e8f0",
            fontSize: "0.9rem",
            outline: "none",
            boxSizing: "border-box",
            fontFamily: "inherit",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(200,162,78,0.5)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
        />
      )}
    </div>
  );
}

function SectionCard({
  title,
  children,
  onSave,
  isPending,
  toast,
}: {
  title: string;
  children: React.ReactNode;
  onSave: () => void;
  isPending: boolean;
  toast: { type: "success" | "error"; message: string } | null;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "1.25rem",
        padding: "2rem",
        marginBottom: "1.5rem",
      }}
    >
      <h2
        style={{
          fontSize: "1.125rem",
          fontWeight: 700,
          color: "#f1f5f9",
          marginBottom: "1.5rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {title}
      </h2>

      {children}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginTop: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={onSave}
          disabled={isPending}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: isPending
              ? "rgba(200,162,78,0.4)"
              : "linear-gradient(135deg,#c8a24e,#ddb963)",
            color: "#0b1425",
            border: "none",
            borderRadius: "0.625rem",
            padding: "0.75rem 1.5rem",
            fontWeight: 700,
            fontSize: "0.875rem",
            cursor: isPending ? "not-allowed" : "pointer",
            transition: "all 0.2s",
          }}
        >
          {isPending ? (
            <RefreshCw size={15} style={{ animation: "spin 1s linear infinite" }} />
          ) : (
            <Save size={15} />
          )}
          {isPending ? "Saving…" : "Save Changes"}
        </button>

        {toast && (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8rem",
              color: toast.type === "success" ? "#4ade80" : "#f87171",
              fontWeight: 600,
            }}
          >
            {toast.type === "success" ? (
              <CheckCircle size={14} />
            ) : (
              <AlertCircle size={14} />
            )}
            {toast.message}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AdminClient({
  initialData,
  donationStats,
}: {
  initialData: SiteData;
  donationStats: {
    donations: Array<{
      amount: number;
      status: string;
      created_at: string;
      donor_name: string;
      email: string;
    }>;
    total: number;
    count: number;
  };
}) {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [toasts, setToasts] = useState<Record<string, { type: "success" | "error"; message: string } | null>>({});

  // ── Per-section state ─────────────────────────────────────────────────────

  const buildSection = (section: string) =>
    merge(DEFAULTS[section] ?? {}, initialData[section] ?? {});

  const [hero, setHero] = useState(() => buildSection("hero"));
  const [about, setAbout] = useState(() => buildSection("about"));
  const [impact, setImpact] = useState(() => buildSection("impact"));
  const [cta, setCta] = useState(() => buildSection("cta"));
  const [causes, setCauses] = useState(() => buildSection("causes"));
  const [stories, setStories] = useState(() => buildSection("stories"));

  // ── Generic field change ──────────────────────────────────────────────────

  function makeUpdater(setter: React.Dispatch<React.SetStateAction<Record<string, string>>>) {
    return (name: string, value: string) =>
      setter((prev) => ({ ...prev, [name]: value }));
  }

  const updateHero = makeUpdater(setHero);
  const updateAbout = makeUpdater(setAbout);
  const updateImpact = makeUpdater(setImpact);
  const updateCta = makeUpdater(setCta);
  const updateCauses = makeUpdater(setCauses);
  const updateStories = makeUpdater(setStories);

  // ── Save ─────────────────────────────────────────────────────────────────

  const showToast = (key: string, type: "success" | "error", message: string) => {
    setToasts((t) => ({ ...t, [key]: { type, message } }));
    setTimeout(() => setToasts((t) => ({ ...t, [key]: null })), 3500);
  };

  async function save(section: string, data: Record<string, string>) {
    const { saveSectionContent } = await import("@/lib/actions/admin");
    await saveSectionContent(section, data);
  }

  function handleSave(section: string, data: Record<string, string>) {
    startTransition(async () => {
      try {
        await save(section, data);
        showToast(section, "success", "Saved successfully!");
      } catch {
        showToast(section, "error", "Save failed. Check connection.");
      }
    });
  }

  // ── Nav items ─────────────────────────────────────────────────────────────

  const navItems: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "dashboard", label: "Dashboard", icon: <BarChart2 size={18} /> },
    { id: "hero", label: "Hero Section", icon: <Home size={18} /> },
    { id: "about", label: "About", icon: <Info size={18} /> },
    { id: "causes", label: "Causes", icon: <Heart size={18} /> },
    { id: "stories", label: "Stories", icon: <BookOpen size={18} /> },
    { id: "impact", label: "Impact & Stats", icon: <TrendingUp size={18} /> },
    { id: "cta", label: "Call to Action", icon: <Megaphone size={18} /> },
    { id: "donations", label: "Donations", icon: <IndianRupee size={18} /> },
  ];

  // ── Sidebar ───────────────────────────────────────────────────────────────

  const Sidebar = () => (
    <nav
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "rgba(11,20,37,0.98)",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        position: "sticky",
        top: 0,
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: "1.5rem 1.5rem 1rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: "linear-gradient(135deg,#c8a24e,#ddb963)",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PawPrint size={18} color="#0b1425" />
          </div>
          <div>
            <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.2 }}>
              Uplift Admin
            </div>
            <div style={{ color: "#64748b", fontSize: "0.7rem" }}>Content Manager</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div style={{ padding: "1rem 0.75rem", flex: 1 }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              setSidebarOpen(false);
            }}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              borderRadius: "0.625rem",
              border: "none",
              background:
                activeTab === item.id
                  ? "rgba(200,162,78,0.12)"
                  : "transparent",
              color:
                activeTab === item.id ? "#ddb963" : "#94a3b8",
              fontWeight: activeTab === item.id ? 700 : 500,
              fontSize: "0.875rem",
              cursor: "pointer",
              textAlign: "left",
              marginBottom: "0.125rem",
              transition: "all 0.15s",
              borderLeft: activeTab === item.id ? "3px solid #ddb963" : "3px solid transparent",
            }}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {/* Bottom actions */}
      <div
        style={{
          padding: "1rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <a
          href="/"
          target="_blank"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#64748b",
            textDecoration: "none",
            fontSize: "0.8rem",
            padding: "0.5rem 0.75rem",
            borderRadius: "0.5rem",
            transition: "color 0.2s",
          }}
        >
          <Eye size={14} />
          View Website
        </a>
        <form action="/api/auth/signout" method="POST">
          <button
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#64748b",
              background: "none",
              border: "none",
              fontSize: "0.8rem",
              padding: "0.5rem 0.75rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </form>
      </div>
    </nav>
  );

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#080f1e",
        color: "#e2e8f0",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        textarea, input { font-family: 'Inter', system-ui, sans-serif; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { text-align: left; }
        @media (max-width: 768px) {
          .admin-sidebar { display: none; }
          .admin-sidebar.open { display: flex !important; position: fixed; z-index: 100; height: 100vh; }
        }
      `}</style>

      {/* Sidebar */}
      <div className={`admin-sidebar${sidebarOpen ? " open" : ""}`} style={{ display: "flex" }}>
        <Sidebar />
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Top bar */}
        <header
          style={{
            padding: "1rem 1.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(11,20,37,0.8)",
            backdropFilter: "blur(12px)",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              onClick={() => setSidebarOpen((o) => !o)}
              style={{
                background: "none",
                border: "none",
                color: "#94a3b8",
                cursor: "pointer",
                display: "none",
                padding: "0.25rem",
              }}
              className="mobile-menu-btn"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div>
              <h1 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#f1f5f9", margin: 0 }}>
                {navItems.find((n) => n.id === activeTab)?.label}
              </h1>
              <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0 }}>
                Uplift Relief Foundation · CMS
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.75rem",
                color: "#4ade80",
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 8px rgba(74,222,128,0.5)",
                  display: "inline-block",
                }}
              />
              Live
            </span>
          </div>
        </header>

        {/* Content */}
        <main style={{ flex: 1, padding: "2rem 1.5rem", maxWidth: "900px" }}>
          {/* ── DASHBOARD ──────────────────────────────────────────────────────── */}
          {activeTab === "dashboard" && (
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                {[
                  {
                    icon: <IndianRupee size={20} />,
                    label: "Total Raised",
                    value: `₹${(donationStats.total / 100).toLocaleString("en-IN")}`,
                    color: "#ddb963",
                  },
                  {
                    icon: <Users size={20} />,
                    label: "Donors",
                    value: donationStats.count,
                    color: "#60a5fa",
                  },
                  {
                    icon: <PawPrint size={20} />,
                    label: "Animals Rescued",
                    value: hero.stat1_value || "1,600+",
                    color: "#4ade80",
                  },
                  {
                    icon: <BookOpen size={20} />,
                    label: "Children Educated",
                    value: hero.stat2_value || "50+",
                    color: "#a78bfa",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "1rem",
                      padding: "1.5rem",
                    }}
                  >
                    <div style={{ color: card.color, marginBottom: "0.75rem" }}>
                      {card.icon}
                    </div>
                    <div
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: "#f1f5f9",
                        lineHeight: 1,
                        marginBottom: "0.375rem",
                      }}
                    >
                      {card.value}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>
                      {card.label}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "1.25rem",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#f1f5f9",
                    marginBottom: "1rem",
                  }}
                >
                  Quick Edit
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "0.75rem",
                  }}
                >
                  {navItems
                    .filter((n) => n.id !== "dashboard" && n.id !== "donations")
                    .map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.625rem",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "0.75rem",
                          padding: "0.875rem 1rem",
                          color: "#94a3b8",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          cursor: "pointer",
                          transition: "all 0.2s",
                          textAlign: "left",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = "rgba(200,162,78,0.08)";
                          (e.currentTarget as HTMLButtonElement).style.color = "#ddb963";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
                          (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8";
                        }}
                      >
                        {item.icon}
                        Edit {item.label}
                        <ChevronRight size={14} style={{ marginLeft: "auto" }} />
                      </button>
                    ))}
                </div>
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg,rgba(200,162,78,0.1),rgba(200,162,78,0.05))",
                  border: "1px solid rgba(200,162,78,0.2)",
                  borderRadius: "1rem",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#ddb963",
                    marginBottom: "0.5rem",
                  }}
                >
                  ⚡ Setup Required
                </h3>
                <p style={{ fontSize: "0.8rem", color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>
                  Run the SQL migration in your Supabase dashboard to enable persistent content editing.
                  Go to <strong style={{ color: "#ddb963" }}>Supabase → SQL Editor</strong> and run the migration script.
                  Until then, edits save to DB but components still use hardcoded values — update components to call{" "}
                  <code
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      padding: "0.1rem 0.35rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.75rem",
                    }}
                  >
                    getSectionContent()
                  </code>{" "}
                  as server props.
                </p>
              </div>
            </div>
          )}

          {/* ── HERO ────────────────────────────────────────────────────────────── */}
          {activeTab === "hero" && (
            <SectionCard
              title="🏠 Hero Section"
              onSave={() => handleSave("hero", hero)}
              isPending={isPending}
              toast={toasts["hero"] ?? null}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ gridColumn: "1 / -1" }}>
                  <Field label="Badge Text" name="badge" value={hero.badge} onChange={updateHero} />
                </div>
                <Field
                  label="Heading Line 1"
                  name="heading_line1"
                  value={hero.heading_line1}
                  onChange={updateHero}
                  hint="Main Sanskrit headline"
                />
                <Field
                  label="Heading Italic (em)"
                  name="heading_em"
                  value={hero.heading_em}
                  onChange={updateHero}
                  hint="Italic part of the heading"
                />
                <div style={{ gridColumn: "1 / -1" }}>
                  <Field
                    label="Subtitle"
                    name="subtitle"
                    value={hero.subtitle}
                    onChange={updateHero}
                  />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <Field
                    label="Description"
                    name="description"
                    value={hero.description}
                    onChange={updateHero}
                    multiline
                  />
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: "0.75rem",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ddb963", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Stats (below hero)
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                  {[1, 2, 3].map((n) => (
                    <div key={n}>
                      <Field
                        label={`Stat ${n} Value`}
                        name={`stat${n}_value`}
                        value={hero[`stat${n}_value`]}
                        onChange={updateHero}
                      />
                      <Field
                        label={`Stat ${n} Label`}
                        name={`stat${n}_label`}
                        value={hero[`stat${n}_label`]}
                        onChange={updateHero}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field
                  label="Primary Button"
                  name="btn_primary"
                  value={hero.btn_primary}
                  onChange={updateHero}
                />
                <Field
                  label="Secondary Button"
                  name="btn_secondary"
                  value={hero.btn_secondary}
                  onChange={updateHero}
                />
              </div>
            </SectionCard>
          )}

          {/* ── ABOUT ───────────────────────────────────────────────────────────── */}
          {activeTab === "about" && (
            <SectionCard
              title="ℹ️ About Section"
              onSave={() => handleSave("about", about)}
              isPending={isPending}
              toast={toasts["about"] ?? null}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field label="Eyebrow Text" name="eyebrow" value={about.eyebrow} onChange={updateAbout} />
                <Field label="Heading" name="heading" value={about.heading} onChange={updateAbout} />
                <Field label="Heading Italic" name="heading_em" value={about.heading_em} onChange={updateAbout} />
              </div>
              <Field label="Paragraph 1" name="paragraph1" value={about.paragraph1} onChange={updateAbout} multiline />
              <Field label="Paragraph 2" name="paragraph2" value={about.paragraph2} onChange={updateAbout} multiline />
              <Field label="Paragraph 3" name="paragraph3" value={about.paragraph3} onChange={updateAbout} multiline />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                <Field label="Volunteers Count" name="stat_volunteers" value={about.stat_volunteers} onChange={updateAbout} />
                <Field label="Year Founded" name="stat_year" value={about.stat_year} onChange={updateAbout} />
                <Field label="Cities Reached" name="stat_cities" value={about.stat_cities} onChange={updateAbout} />
              </div>
            </SectionCard>
          )}

          {/* ── CAUSES ──────────────────────────────────────────────────────────── */}
          {activeTab === "causes" && (
            <>
              {[1, 2].map((n) => (
                <SectionCard
                  key={n}
                  title={`❤️ Cause ${n}: ${causes[`cause${n}_title`] || `Cause ${n}`}`}
                  onSave={() => handleSave("causes", causes)}
                  isPending={isPending}
                  toast={toasts["causes"] ?? null}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <Field label="Tag" name={`cause${n}_tag`} value={causes[`cause${n}_tag`]} onChange={updateCauses} />
                    <Field label="Title" name={`cause${n}_title`} value={causes[`cause${n}_title`]} onChange={updateCauses} />
                    <div style={{ gridColumn: "1 / -1" }}>
                      <Field label="Description" name={`cause${n}_desc`} value={causes[`cause${n}_desc`]} onChange={updateCauses} multiline />
                    </div>
                    <Field label="Button Label" name={`cause${n}_btn`} value={causes[`cause${n}_btn`]} onChange={updateCauses} />
                    <Field label="Status" name={`cause${n}_status`} value={causes[`cause${n}_status`]} onChange={updateCauses} />
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      borderRadius: "0.75rem",
                      padding: "1rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#60a5fa", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Case File (Modal)
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <Field label="Name" name={`cause${n}_name`} value={causes[`cause${n}_name`]} onChange={updateCauses} />
                      <Field label="Location" name={`cause${n}_location`} value={causes[`cause${n}_location`]} onChange={updateCauses} />
                      <Field label="Rescue Date" name={`cause${n}_date`} value={causes[`cause${n}_date`]} onChange={updateCauses} />
                      <Field label="Condition" name={`cause${n}_condition`} value={causes[`cause${n}_condition`]} onChange={updateCauses} />
                      <Field label="Funds Raised (₹)" name={`cause${n}_raised`} value={causes[`cause${n}_raised`]} onChange={updateCauses} />
                      <Field label="Fund Goal (₹)" name={`cause${n}_goal`} value={causes[`cause${n}_goal`]} onChange={updateCauses} />
                    </div>
                    <Field label="Story" name={`cause${n}_story`} value={causes[`cause${n}_story`]} onChange={updateCauses} multiline />
                  </div>
                </SectionCard>
              ))}
            </>
          )}

          {/* ── STORIES ─────────────────────────────────────────────────────────── */}
          {activeTab === "stories" && (
            <SectionCard
              title="📖 Stories Section"
              onSave={() => handleSave("stories", stories)}
              isPending={isPending}
              toast={toasts["stories"] ?? null}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field label="Eyebrow" name="eyebrow" value={stories.eyebrow} onChange={updateStories} />
                <Field label="Heading" name="heading" value={stories.heading} onChange={updateStories} />
                <Field label="Heading Italic" name="heading_em" value={stories.heading_em} onChange={updateStories} />
                <div style={{ gridColumn: "1 / -1" }}>
                  <Field label="Description" name="description" value={stories.description} onChange={updateStories} />
                </div>
              </div>

              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: "0.75rem",
                    padding: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#a78bfa", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Story Card {n}
                  </p>
                  <Field label="Tag" name={`story${n}_tag`} value={stories[`story${n}_tag`]} onChange={updateStories} />
                  <Field label="Title" name={`story${n}_title`} value={stories[`story${n}_title`]} onChange={updateStories} />
                  <Field label="Description" name={`story${n}_desc`} value={stories[`story${n}_desc`]} onChange={updateStories} multiline />
                  <Field label="Button Label" name={`story${n}_btn`} value={stories[`story${n}_btn`]} onChange={updateStories} />
                </div>
              ))}
            </SectionCard>
          )}

          {/* ── IMPACT ──────────────────────────────────────────────────────────── */}
          {activeTab === "impact" && (
            <SectionCard
              title="📊 Impact & Stats Section"
              onSave={() => handleSave("impact", impact)}
              isPending={isPending}
              toast={toasts["impact"] ?? null}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field label="Eyebrow 1" name="eyebrow1" value={impact.eyebrow1} onChange={updateImpact} />
                <Field label="Eyebrow 2" name="eyebrow2" value={impact.eyebrow2} onChange={updateImpact} />
                <Field label="Heading" name="heading" value={impact.heading} onChange={updateImpact} />
                <Field label="Heading Italic" name="heading_em" value={impact.heading_em} onChange={updateImpact} />
                <div style={{ gridColumn: "1 / -1" }}>
                  <Field label="Description" name="description" value={impact.description} onChange={updateImpact} multiline />
                </div>
                <Field label="Reg Number" name="reg_number" value={impact.reg_number} onChange={updateImpact} />
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: "0.75rem",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#4ade80", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Animated Counters
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n}>
                      <Field label={`Counter ${n} Target`} name={`stat${n}_target`} value={impact[`stat${n}_target`]} onChange={updateImpact} />
                      <Field label={`Counter ${n} Suffix`} name={`stat${n}_suffix`} value={impact[`stat${n}_suffix`]} onChange={updateImpact} />
                      <Field label={`Counter ${n} Label`} name={`stat${n}_label`} value={impact[`stat${n}_label`]} onChange={updateImpact} />
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: "0.75rem",
                  padding: "1rem",
                }}
              >
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ddb963", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Breakdown (Where Money Goes)
                </p>
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    style={{ display: "grid", gridTemplateColumns: "80px 1fr 2fr", gap: "1rem", marginBottom: "0.5rem" }}
                  >
                    <Field label="%" name={`breakdown${n}_pct`} value={impact[`breakdown${n}_pct`]} onChange={updateImpact} />
                    <Field label="Title" name={`breakdown${n}_title`} value={impact[`breakdown${n}_title`]} onChange={updateImpact} />
                    <Field label="Description" name={`breakdown${n}_desc`} value={impact[`breakdown${n}_desc`]} onChange={updateImpact} />
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* ── CTA ─────────────────────────────────────────────────────────────── */}
          {activeTab === "cta" && (
            <SectionCard
              title="📣 Call to Action Section"
              onSave={() => handleSave("cta", cta)}
              isPending={isPending}
              toast={toasts["cta"] ?? null}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field label="Eyebrow" name="eyebrow" value={cta.eyebrow} onChange={updateCta} />
                <Field label="Heading" name="heading" value={cta.heading} onChange={updateCta} />
                <Field label="Heading Italic" name="heading_em" value={cta.heading_em} onChange={updateCta} />
                <div style={{ gridColumn: "1 / -1" }}>
                  <Field label="Description" name="description" value={cta.description} onChange={updateCta} multiline />
                </div>
                <Field label="Primary Button" name="btn_primary" value={cta.btn_primary} onChange={updateCta} />
                <Field label="Secondary Button" name="btn_secondary" value={cta.btn_secondary} onChange={updateCta} />
                <div style={{ gridColumn: "1 / -1" }}>
                  <Field label="Trust Badge Text" name="trust_badge" value={cta.trust_badge} onChange={updateCta} />
                </div>
              </div>
            </SectionCard>
          )}

          {/* ── DONATIONS ───────────────────────────────────────────────────────── */}
          {activeTab === "donations" && (
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                  }}
                >
                  <div style={{ color: "#ddb963", marginBottom: "0.5rem" }}>
                    <IndianRupee size={20} />
                  </div>
                  <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#f1f5f9" }}>
                    ₹{(donationStats.total / 100).toLocaleString("en-IN")}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Total Collected</div>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                  }}
                >
                  <div style={{ color: "#60a5fa", marginBottom: "0.5rem" }}>
                    <Users size={20} />
                  </div>
                  <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#f1f5f9" }}>
                    {donationStats.count}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Completed Donations</div>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                }}
              >
                <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#f1f5f9", margin: 0 }}>
                    Recent Donations
                  </h2>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table>
                    <thead>
                      <tr style={{ background: "rgba(255,255,255,0.02)" }}>
                        {["Donor", "Email", "Amount", "Status", "Date"].map((h) => (
                          <th
                            key={h}
                            style={{
                              padding: "0.75rem 1rem",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              color: "#64748b",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {donationStats.donations.length === 0 ? (
                        <tr>
                          <td colSpan={5} style={{ padding: "2rem", textAlign: "center", color: "#64748b", fontSize: "0.875rem" }}>
                            No donations found. Check your Supabase donations table.
                          </td>
                        </tr>
                      ) : (
                        donationStats.donations.slice(0, 20).map((d, i) => (
                          <tr
                            key={i}
                            style={{
                              borderTop: "1px solid rgba(255,255,255,0.04)",
                              transition: "background 0.15s",
                            }}
                            onMouseEnter={(e) =>
                              ((e.currentTarget as HTMLTableRowElement).style.background = "rgba(255,255,255,0.02)")
                            }
                            onMouseLeave={(e) =>
                              ((e.currentTarget as HTMLTableRowElement).style.background = "transparent")
                            }
                          >
                            <td style={{ padding: "0.875rem 1rem", fontSize: "0.875rem", color: "#e2e8f0", fontWeight: 500 }}>
                              {d.donor_name || "Anonymous"}
                            </td>
                            <td style={{ padding: "0.875rem 1rem", fontSize: "0.8rem", color: "#64748b" }}>
                              {d.email || "—"}
                            </td>
                            <td style={{ padding: "0.875rem 1rem", fontSize: "0.875rem", color: "#ddb963", fontWeight: 600 }}>
                              ₹{((d.amount ?? 0) / 100).toLocaleString("en-IN")}
                            </td>
                            <td style={{ padding: "0.875rem 1rem" }}>
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  padding: "0.25rem 0.625rem",
                                  borderRadius: "999px",
                                  fontSize: "0.7rem",
                                  fontWeight: 700,
                                  background:
                                    d.status === "captured"
                                      ? "rgba(74,222,128,0.12)"
                                      : "rgba(251,191,36,0.12)",
                                  color:
                                    d.status === "captured" ? "#4ade80" : "#fbbf24",
                                }}
                              >
                                {d.status}
                              </span>
                            </td>
                            <td style={{ padding: "0.875rem 1rem", fontSize: "0.8rem", color: "#64748b" }}>
                              {d.created_at
                                ? new Date(d.created_at).toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                  })
                                : "—"}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
