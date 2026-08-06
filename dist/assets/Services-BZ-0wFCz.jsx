import React from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Star } from "lucide-react";
import PageShell from "./PageShell";

const SERVICE_ICON_PATHS = {
  child: (
    <>
      <path d="M4 20l4-1 9-9-3-3-9 9-1 4z" />
      <path d="M13 8l3 3" />
    </>
  ),
  couples: (
    <>
      <circle cx="9" cy="12" r="5" />
      <circle cx="15" cy="12" r="5" />
    </>
  ),
  individual: (
    <>
      <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />
      <circle cx="12" cy="11" r="3" />
    </>
  ),
  family: (
    <>
      <circle cx="7" cy="8" r="2.5" />
      <circle cx="17" cy="8" r="2.5" />
      <circle cx="12" cy="6" r="2.2" />
      <path d="M2.5 19c.5-3 2.4-5 4.5-5s4 2 4.5 5" />
      <path d="M12.5 19c.5-2.6 2-4.4 3.8-4.7" />
      <path d="M21.5 19c-.5-3-2.4-5-4.5-5" />
    </>
  ),
};

const SERVICES = [
  {
    key: "child",
    title: "Child & Adolescent Therapy",
    desc: "Play and talk therapy for younger clients to explore emotions, build coping skills, and address sensory needs.",
    bg: "var(--sage)",
  },
  {
    key: "couples",
    title: "Couples & Marriage Counselling",
    desc: "Communication support, conflict resolution, and intimacy building for partners at every stage.",
    bg: "var(--linen)",
  },
  {
    key: "individual",
    title: "Individual & Trauma Therapy",
    desc: "Confidential sessions for stress, anxiety, depression, and somatic processing of traumatic experiences.",
    bg: "var(--sage)",
  },
  {
    key: "family",
    title: "Multi-generational Family Therapy",
    desc: "Navigating complex family dynamics, communication issues, and supporting collective healing and understanding.",
    bg: "#DDEAE6",
  },
];

const SPECIALIZATIONS = [
  "Child & Adolescent",
  "Couples & Marriage",
  "Individual & Trauma",
  "Multi-generational Family",
];

const TESTIMONIALS = [
  {
    quote: "From our very first session, we felt heard and supported — it changed how our family communicates.",
    name: "Qhawelethu client",
  },
  {
    quote: "We finally found a counsellor who understands our son and works with our whole family, not against us.",
    name: "Qhawelethu client",
  },
];

export default function Services({ onNavigate = () => {} }) {
  return (
    <PageShell currentPage="services" onNavigate={onNavigate}>
      <main className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr_360px] gap-10 py-10">
        <div>
          {/* Hero */}
          <section
            className="relative overflow-hidden rounded-2xl px-6 md:px-12 py-14 md:py-16 mb-10"
            style={{ background: "var(--ink)" }}
          >
            <p
              className="relative uppercase tracking-[0.2em] text-[12px] mb-4"
              style={{ color: "var(--ochre)" }}
            >
              Our Therapeutic Services
            </p>
            <h1
              className="relative qw-display text-[34px] md:text-[44px] leading-[1.1] mb-4"
              style={{ color: "var(--cream)" }}
            >
              A Pathway to Healing
            </h1>
            <p className="relative max-w-lg text-[16px]" style={{ color: "var(--sage)" }}>
              Compassionate care for every unique journey — tailored to children, couples,
              individuals, and families alike.
            </p>
          </section>

          {/* Services grid */}
          <section className="grid sm:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.key}
                className="rounded-2xl p-6 flex flex-col gap-3.5"
                style={{ background: s.bg }}
              >
                <div
                  className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--cream)", boxShadow: "0 2px 6px rgba(30,61,59,0.08)" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--moss)" strokeWidth="1.8">
                    {SERVICE_ICON_PATHS[s.key]}
                  </svg>
                </div>
                <h3 className="qw-display text-[19px]" style={{ color: "var(--ink)" }}>
                  {s.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed flex-1"
                  style={{ color: "var(--charcoal)", opacity: 0.8 }}
                >
                  {s.desc}
                </p>
                <a
                  href="#"
                  className="text-[13px] font-semibold inline-flex items-center gap-1.5"
                  style={{ color: "var(--moss)" }}
                >
                  Learn more <ArrowRight size={13} />
                </a>
              </div>
            ))}
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

          <div
            className="rounded-2xl p-6 border"
            style={{ borderColor: "var(--sage)", background: "var(--cream)" }}
          >
            <p className="uppercase tracking-[0.16em] text-[11px] mb-4" style={{ color: "var(--moss)" }}>
              Testimonials
            </p>
            <div className="flex flex-col gap-5">
              {TESTIMONIALS.map((t, i) => (
                <div key={i}>
                  <div className="flex gap-0.5 mb-1.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={12} fill="var(--ochre)" stroke="var(--ochre)" />
                    ))}
                  </div>
                  <p className="text-[13px] leading-relaxed mb-1.5" style={{ color: "var(--charcoal)" }}>
                    "{t.quote}"
                  </p>
                  <div className="text-[12px] font-semibold" style={{ color: "var(--ink)" }}>
                    {t.name}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="text-[13px] font-semibold inline-flex items-center gap-1 mt-4"
              style={{ color: "var(--ochre)" }}
            >
              Read more stories <ArrowRight size={13} />
            </a>
          </div>

          <div
            className="rounded-2xl p-6 border text-[13px]"
            style={{ borderColor: "var(--sage)", background: "var(--cream)", color: "var(--charcoal)" }}
          >
            <div className="flex items-center gap-2.5 mb-2">
              <Phone size={14} style={{ color: "var(--moss)" }} /> +27 76 829 6508
            </div>
            <div className="flex items-center gap-2.5 mb-4">
              <Mail size={14} style={{ color: "var(--moss)" }} /> info@qhawelethuwc.co.za
            </div>
            <div className="flex items-center gap-2.5 mb-4">
              <MapPin size={14} style={{ color: "var(--moss)" }} /> Benoni, Gauteng
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
