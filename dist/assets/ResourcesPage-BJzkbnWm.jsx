import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  BookOpen,
  ClipboardList,
  Video,
  Link2,
  Download,
  Play,
} from "lucide-react";
import PageShell from "./PageShell";

function Rings({ className = "", stroke = "var(--moss)", opacity = 0.18 }) {
  const radii = [40, 76, 112, 148, 184];
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      {radii.map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          fill="none"
          stroke={stroke}
          strokeWidth={i === 0 ? 2 : 1}
          opacity={opacity - i * 0.02}
        />
      ))}
    </svg>
  );
}

const CATEGORIES = [
  {
    icon: BookOpen,
    title: "Insightful Articles & Blog Posts",
    desc: "Deep dives on sensory processing, emotional regulation, and neurodiversity-affirming practice.",
    cta: "Read articles",
  },
  {
    icon: ClipboardList,
    title: "Downloadable Workbooks & Exercises",
    desc: "Practical, step-by-step guides for skill-building and self-reflection, printable for your own pace.",
    cta: "Download guides",
  },
  {
    icon: Video,
    title: "Webinars & Video Resources",
    desc: "Pre-recorded sessions and expert-led discussions on mental health and neurodiversity topics.",
    cta: "Watch videos",
  },
  {
    icon: Link2,
    title: "Trusted External Links & Partners",
    desc: "A curated list of reliable organizations, support groups, and external resources we recommend.",
    cta: "Explore links",
  },
];

const ARTICLES = [
  { title: "Understanding Sensory Processing", tag: "Neurodiversity", date: "Jun 12, 2026" },
  { title: "Parenting Neurodivergent Kids", tag: "Parenting", date: "May 28, 2026" },
  { title: "Mindfulness for Families", tag: "Wellbeing", date: "May 14, 2026" },
];

const SPECIALIZATIONS = [
  "Child & Adolescent",
  "Couples & Marriage",
  "Individual & Trauma",
  "Multi-generational Family",
];

export default function ResourcesPage({ onNavigate = () => {} }) {
  return (
    <PageShell currentPage="resources" onNavigate={onNavigate}>
      <main className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr_360px] gap-10 py-10">
        <div>
          {/* Hero */}
          <section
            className="relative overflow-hidden rounded-2xl px-6 md:px-12 py-14 md:py-16 mb-10"
            style={{ background: "var(--ink)" }}
          >
            <Rings
              className="absolute -right-24 -top-24 w-[380px] h-[380px]"
              stroke="#DCE6DE"
              opacity={0.14}
            />
            <p
              className="relative uppercase tracking-[0.2em] text-[12px] mb-4"
              style={{ color: "var(--ochre)" }}
            >
              A curated collection
            </p>
            <h1
              className="relative qw-display text-[32px] md:text-[42px] leading-[1.12] mb-4 max-w-xl"
              style={{ color: "var(--cream)" }}
            >
              Mental health &amp; neurodiversity resources, for the whole family.
            </h1>
            <p className="relative max-w-lg text-[16px]" style={{ color: "var(--sage)" }}>
              Articles, workbooks, and guides to support your unique wellness journey — free to
              read, print, and share.
            </p>
          </section>

          {/* Category cards */}
          <section className="grid sm:grid-cols-2 gap-5 mb-14">
            {CATEGORIES.map(({ icon: Icon, title, desc, cta }) => (
              <div
                key={title}
                className="rounded-2xl p-6 border"
                style={{ background: "var(--cream)", borderColor: "var(--sage)" }}
              >
                <div
                  className="w-11 h-11 rounded-full mb-4 flex items-center justify-center"
                  style={{ background: "var(--sage)" }}
                >
                  <Icon size={19} style={{ color: "var(--moss)" }} />
                </div>
                <h3 className="qw-display text-[19px] mb-2" style={{ color: "var(--ink)" }}>
                  {title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed mb-4"
                  style={{ color: "var(--charcoal)", opacity: 0.8 }}
                >
                  {desc}
                </p>
                <a
                  href="#"
                  className="text-[13px] font-semibold inline-flex items-center gap-1.5"
                  style={{ color: "var(--moss)" }}
                >
                  {cta} <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </section>

          {/* Featured articles */}
          <section>
            <p className="uppercase tracking-[0.18em] text-[12px] mb-2" style={{ color: "var(--moss)" }}>
              Latest from the blog
            </p>
            <h2 className="qw-display text-[26px] mb-6" style={{ color: "var(--ink)" }}>
              Recently published
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {ARTICLES.map((a) => (
                <div
                  key={a.title}
                  className="rounded-xl overflow-hidden border"
                  style={{ borderColor: "var(--sage)", background: "var(--cream)" }}
                >
                  <div
                    className="h-28 flex items-center justify-center"
                    style={{ background: "var(--sage)" }}
                  >
                    <BookOpen size={22} style={{ color: "var(--moss)" }} />
                  </div>
                  <div className="p-4">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full"
                      style={{ background: "var(--sage)", color: "var(--ink)" }}
                    >
                      {a.tag}
                    </span>
                    <h4 className="qw-display text-[15px] mt-2.5 mb-1" style={{ color: "var(--ink)" }}>
                      {a.title}
                    </h4>
                    <div className="text-[12px]" style={{ color: "var(--moss)" }}>
                      {a.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6">
          <div className="rounded-2xl p-6" style={{ background: "var(--sage)" }}>
            <p className="uppercase tracking-[0.16em] text-[11px] mb-3" style={{ color: "var(--moss)" }}>
              Meet your counselor
            </p>
            <div className="flex gap-4 items-start mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center qw-display text-xl shrink-0"
                style={{ background: "var(--moss)", color: "white" }}
              >
                F
              </div>
              <div>
                <div className="qw-display text-[18px]" style={{ color: "var(--ink)" }}>
                  Finni Radebe
                </div>
                <div className="text-[13px]" style={{ color: "var(--moss)" }}>
                  Lead Counselor
                </div>
                <div className="text-[11px] mt-1" style={{ color: "var(--charcoal)", opacity: 0.7 }}>
                  SACSSP Reg. 1204167 · HPCSA PS 112345
                </div>
              </div>
            </div>
            <p className="text-[13px] font-semibold mb-2" style={{ color: "var(--ink)" }}>
              Specializations
            </p>
            <div className="grid grid-cols-2 gap-2">
              {SPECIALIZATIONS.map((s) => (
                <span
                  key={s}
                  className="text-[11px] px-2.5 py-1.5 rounded-full text-center"
                  style={{ background: "var(--cream)", color: "var(--ink)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-6 border" style={{ background: "var(--ink)", borderColor: "var(--ink)" }}>
            <p className="uppercase tracking-[0.16em] text-[11px] mb-3" style={{ color: "var(--ochre)" }}>
              Featured video
            </p>
            <div
              className="relative h-32 rounded-xl mb-3 flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: "var(--ochre)" }}
              >
                <Play size={16} fill="var(--ink)" style={{ color: "var(--ink)" }} />
              </div>
            </div>
            <div className="text-[14px] font-semibold" style={{ color: "var(--cream)" }}>
              Recognizing Sensory Overload at Home
            </div>
            <div className="text-[12px] mt-1" style={{ color: "var(--sage)" }}>
              18 min · Webinar recording
            </div>
          </div>

          <div
            className="rounded-2xl p-6 border text-[13px]"
            style={{ borderColor: "var(--sage)", background: "var(--cream)", color: "var(--charcoal)" }}
          >
            <p className="uppercase tracking-[0.16em] text-[11px] mb-3" style={{ color: "var(--moss)" }}>
              Quick download
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "var(--sage)" }}
              >
                <Download size={16} style={{ color: "var(--moss)" }} />
              </div>
              <div>
                <div className="font-semibold" style={{ color: "var(--ink)" }}>
                  Emotional Check-in Chart
                </div>
                <div className="text-[12px]" style={{ color: "var(--moss)" }}>
                  PDF · Ages 5–12
                </div>
              </div>
            </div>
            <a
              href="#"
              className="text-[13px] font-semibold inline-flex items-center gap-1.5"
              style={{ color: "var(--ochre)" }}
            >
              Download now <ArrowRight size={13} />
            </a>
          </div>

          <div className="rounded-2xl p-6 border" style={{ borderColor: "var(--sage)", background: "var(--cream)" }}>
            <div className="flex items-center gap-2.5 mb-2 text-[13px]">
              <Phone size={14} style={{ color: "var(--moss)" }} /> +27 76 829 6508
            </div>
            <div className="flex items-center gap-2.5 mb-4 text-[13px]">
              <Mail size={14} style={{ color: "var(--moss)" }} /> info@qhawelethuwc.co.za
            </div>
            <div className="flex gap-2.5">
              {[MessageCircle].map((Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "var(--sage)" }}
                >
                  <Icon size={14} style={{ color: "var(--ink)" }} />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </PageShell>
  );
}
