import { useState } from "react";

const phases = [
  {
    id: 1,
    label: "Phase 1",
    title: "Foundation",
    timeline: "May 2026 → Aug 2026",
    color: "#F5A623",
    bg: "#FFF8EC",
    goal: "Understand AI workflows & automation logic",
    learn: [
      "Make.com",
      "Notion databases",
      "AI prompting",
      "WhatsApp automation basics",
      "Content systems",
    ],
    build: [
      "Hotel booking assistant",
      "Real estate lead qualifier",
      "Instagram auto-DM flow",
      "Mini market stock tracker",
    ],
    routine: [
      { type: "Workdays", items: ["45 mins learning", "45 mins building", "15 mins documenting ideas"] },
      { type: "Off Day", items: ["Deep practice + testing systems"] },
    ],
    outcome: "You begin understanding how businesses flow digitally",
  },
  {
    id: 2,
    label: "Phase 2",
    title: "Build Publicly",
    timeline: "Sept 2026 → Jan 2027",
    color: "#2ECC71",
    bg: "#EDFAF3",
    goal: "Become visible online in Uganda",
    learn: [
      "Short-form content strategy",
      "Hooks & captions",
      "Personal branding",
      "AI storytelling",
    ],
    build: [
      "Instagram content system",
      "TikTok/Reels pipeline",
      "WhatsApp lead follow-up flow",
      "AI-powered content calendar",
    ],
    routine: [
      {
        type: "3–4 posts weekly",
        items: [
          "AI for Ugandan businesses",
          "Hotel growth tips",
          "Gen Z culture insights",
          "Automation demos",
        ],
      },
    ],
    outcome: "People begin associating your name with AI systems",
  },
  {
    id: 3,
    label: "Phase 3",
    title: "First Clients",
    timeline: "Feb 2027 → Apr 2027",
    color: "#E74C3C",
    bg: "#FDEDEC",
    goal: "Get paying clients",
    learn: [
      "Sales messaging",
      "Client onboarding",
      "Proposal writing",
      "Local business outreach",
    ],
    build: [
      "Café WhatsApp assistant",
      "Airbnb inquiry bot",
      "Salon booking flow",
      "Apartment inquiry assistant",
    ],
    routine: [
      {
        type: "Weekly",
        items: [
          "DM 10 businesses",
          "Visit 2 local businesses",
          "Post case studies",
          "Improve old systems",
        ],
      },
    ],
    outcome: "First testimonials + monthly retainers",
  },
  {
    id: 4,
    label: "Phase 4",
    title: "Agency Positioning",
    timeline: "May 2027 → July 7th 2027",
    color: "#8E44AD",
    bg: "#F5EEF8",
    goal: "Establish AI agency identity",
    learn: [
      "Packaging offers",
      "Team systems",
      "SOPs",
      "Automation scaling",
    ],
    build: [
      "Agency dashboard",
      "Client onboarding automation",
      "AI customer support templates",
      "Reusable workflow templates",
    ],
    routine: [
      {
        type: "Focus",
        items: [
          "Client retention",
          "Better systems",
          "Building authority online",
        ],
      },
    ],
    outcome: "You become known as a Ugandan AI systems operator",
  },
];

const weeklyRoutine = [
  { dayType: "Workday", focus: "Learning AI workflows", duration: "30–45 mins" },
  { dayType: "Workday", focus: "Building 1 small automation", duration: "30–45 mins" },
  { dayType: "Work Breaks", focus: "Content idea notes in Notion", duration: "10–15 mins" },
  { dayType: "Off Day", focus: "Deep work + recording content", duration: "3–5 hrs" },
  { dayType: "Sunday Evening", focus: "Review & plan next week", duration: "1 hr" },
];

const coreSkills = [
  { skill: "AI Workflow Thinking", why: "Helps you automate businesses", priority: "VERY HIGH", level: 5 },
  { skill: "WhatsApp Automation", why: "Uganda runs heavily on WhatsApp", priority: "VERY HIGH", level: 5 },
  { skill: "Content Systems", why: "Builds visibility & trust", priority: "HIGH", level: 4 },
  { skill: "Offer Packaging", why: "Converts skills into money", priority: "HIGH", level: 4 },
  { skill: "Coding", why: "Helpful later, not urgent now", priority: "LOW", level: 1 },
  { skill: "Graphic Design", why: "Canva basics are enough", priority: "LOW", level: 1 },
];

const tools = [
  { category: "AI Assistant", tool: "ChatGPT", purpose: "Brainstorming, prompts, strategy", icon: "🤖" },
  { category: "AI Assistant", tool: "Claude", purpose: "Long workflows & documentation", icon: "🧠" },
  { category: "Automation", tool: "Make.com", purpose: "Workflow automation", icon: "⚙️" },
  { category: "Database", tool: "Notion", purpose: "CRM + project management", icon: "📋" },
  { category: "Design", tool: "Canva", purpose: "Reels, graphics, presentations", icon: "🎨" },
  { category: "Social Scheduling", tool: "Meta Business Suite", purpose: "Schedule IG & FB posts", icon: "📱" },
  { category: "Advanced Automation", tool: "n8n", purpose: "More advanced automations later", icon: "🔗" },
];

const systems = [
  { system: "Hotel Booking Assistant", industry: "Hospitality", icon: "🏨" },
  { system: "Airbnb Auto Reply Bot", industry: "Hospitality", icon: "🏡" },
  { system: "Apartment Lead Qualifier", industry: "Real Estate", icon: "🏢" },
  { system: "WhatsApp Reservation Flow", industry: "Restaurants", icon: "🍽️" },
  { system: "Mini Market Stock Tracker", industry: "Retail", icon: "🛒" },
  { system: "Gym Reminder System", industry: "Fitness", icon: "💪" },
  { system: "School Inquiry Assistant", industry: "Education", icon: "🎓" },
  { system: "SACCO Support Bot", industry: "Finance", icon: "💰" },
  { system: "Salon Appointment Flow", industry: "Beauty", icon: "💇" },
  { system: "TikTok Content Generator", industry: "Media", icon: "🎬" },
  { system: "Instagram Comment Automation", industry: "Marketing", icon: "📸" },
  { system: "Real Estate Follow-Up Engine", industry: "Property", icon: "🏗️" },
];

const positioning = [
  { weak: '"I do AI."', strong: '"I help Ugandan businesses automate customer communication."' },
  { weak: '"Digital marketer."', strong: '"AI growth systems builder."' },
  { weak: '"Automation freelancer."', strong: '"WhatsApp & AI systems operator for Kampala businesses."' },
];

const focus = [
  { doMore: "Building projects", doLess: "Watching endless tutorials" },
  { doMore: "Posting consistently", doLess: "Waiting for perfection" },
  { doMore: "Learning automation logic", doLess: "Learning every AI tool" },
  { doMore: "Talking to businesses", doLess: "Overthinking branding" },
  { doMore: "Solving local problems", doLess: "Copying Silicon Valley trends" },
];

const priorityColor = (p) => {
  if (p === "VERY HIGH") return { bg: "#FEF9C3", color: "#92400E", dot: "#F59E0B" };
  if (p === "HIGH") return { bg: "#DCFCE7", color: "#166534", dot: "#22C55E" };
  return { bg: "#F3F4F6", color: "#6B7280", dot: "#D1D5DB" };
};

export default function App() {
  const [activePhase, setActivePhase] = useState(0);
  const phase = phases[activePhase];

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0D0D0D",
      minHeight: "100vh",
      color: "#F0ECE3",
      padding: "0",
    }}>

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)",
        borderBottom: "1px solid #2A2A2A",
        padding: "48px 32px 36px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(245,166,35,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(46,204,113,0.06) 0%, transparent 40%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{
              background: "#F5A623",
              color: "#000",
              fontSize: 11,
              fontFamily: "'Courier New', monospace",
              fontWeight: 700,
              letterSpacing: 2,
              padding: "4px 12px",
              borderRadius: 2,
            }}>🇺🇬 UGANDA AI AGENCY</div>
            <div style={{ color: "#555", fontSize: 11, fontFamily: "monospace", letterSpacing: 1 }}>MAY 2026 → JULY 7, 2027</div>
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.15,
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}>
            The Night Shift<br />
            <span style={{ color: "#F5A623" }}>Operator's Playbook</span>
          </h1>
          <p style={{ color: "#888", fontSize: 15, margin: 0, fontFamily: "'Courier New', monospace", letterSpacing: 0.5 }}>
            14 months · 4 phases · 12 systems · 1 agency
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 20px 64px" }}>

        {/* PHASE NAVIGATOR */}
        <section style={{ marginBottom: 40 }}>
          <SectionLabel>PHASES</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
            {phases.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActivePhase(i)}
                style={{
                  background: activePhase === i ? p.color : "#1A1A1A",
                  color: activePhase === i ? "#000" : "#888",
                  border: activePhase === i ? `2px solid ${p.color}` : "2px solid #2A2A2A",
                  borderRadius: 8,
                  padding: "14px 16px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "inherit",
                }}
              >
                <div style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: 2, opacity: 0.7, marginBottom: 4 }}>{p.label}</div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{p.title}</div>
                <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>{p.timeline}</div>
              </button>
            ))}
          </div>
        </section>

        {/* ACTIVE PHASE DETAIL */}
        <section style={{
          background: "#141414",
          border: `1px solid ${phase.color}33`,
          borderLeft: `4px solid ${phase.color}`,
          borderRadius: 12,
          padding: "28px 24px",
          marginBottom: 40,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{
              background: phase.color,
              color: "#000",
              borderRadius: "50%",
              width: 36, height: 36,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: 16,
            }}>{phase.id}</div>
            <div>
              <div style={{ fontSize: 11, fontFamily: "monospace", color: "#666", letterSpacing: 2 }}>{phase.timeline}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: phase.color }}>{phase.title}</div>
            </div>
          </div>

          <div style={{
            background: "#0D0D0D",
            border: "1px solid #222",
            borderRadius: 8,
            padding: "14px 18px",
            marginBottom: 20,
          }}>
            <div style={{ fontSize: 10, color: "#555", fontFamily: "monospace", letterSpacing: 2, marginBottom: 4 }}>MAIN GOAL</div>
            <div style={{ fontSize: 15, color: "#F0ECE3" }}>{phase.goal}</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 10, color: "#555", fontFamily: "monospace", letterSpacing: 2, marginBottom: 10 }}>WHAT TO LEARN</div>
              {phase.learn.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: phase.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "#C0BAB0" }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 10, color: "#555", fontFamily: "monospace", letterSpacing: 2, marginBottom: 10 }}>WHAT TO BUILD</div>
              {phase.build.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 7 }}>
                  <div style={{
                    background: phase.color + "22",
                    color: phase.color,
                    borderRadius: 3,
                    width: 18, height: 18,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1,
                  }}>{i + 1}</div>
                  <span style={{ fontSize: 13, color: "#C0BAB0" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, color: "#555", fontFamily: "monospace", letterSpacing: 2, marginBottom: 10 }}>DAILY / WEEKLY ROUTINE</div>
            {phase.routine.map((r, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: phase.color, fontWeight: 700, marginBottom: 5 }}>{r.type}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {r.items.map((item, j) => (
                    <span key={j} style={{
                      background: "#1E1E1E",
                      border: "1px solid #2A2A2A",
                      borderRadius: 20,
                      padding: "4px 12px",
                      fontSize: 12,
                      color: "#AAA",
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: phase.color + "18",
            border: `1px solid ${phase.color}44`,
            borderRadius: 8,
            padding: "12px 16px",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ fontSize: 18 }}>🎯</span>
            <div>
              <div style={{ fontSize: 10, color: phase.color, fontFamily: "monospace", letterSpacing: 2, marginBottom: 2 }}>EXPECTED OUTCOME</div>
              <div style={{ fontSize: 13, color: "#D0C8BC" }}>{phase.outcome}</div>
            </div>
          </div>
        </section>

        {/* WEEKLY ROUTINE */}
        <section style={{ marginBottom: 40 }}>
          <SectionLabel>YOUR WEEKLY ROUTINE — NIGHT SHIFT FRIENDLY</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {weeklyRoutine.map((r, i) => (
              <div key={i} style={{
                background: "#141414",
                border: "1px solid #222",
                borderRadius: 8,
                padding: "12px 16px",
                display: "grid",
                gridTemplateColumns: "140px 1fr auto",
                alignItems: "center",
                gap: 12,
              }}>
                <div style={{
                  fontSize: 11,
                  fontFamily: "monospace",
                  color: "#F5A623",
                  fontWeight: 700,
                  letterSpacing: 0.5,
                }}>{r.dayType}</div>
                <div style={{ fontSize: 13, color: "#C0BAB0" }}>{r.focus}</div>
                <div style={{
                  background: "#222",
                  borderRadius: 20,
                  padding: "3px 10px",
                  fontSize: 11,
                  color: "#888",
                  whiteSpace: "nowrap",
                  fontFamily: "monospace",
                }}>{r.duration}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CORE SKILLS */}
        <section style={{ marginBottom: 40 }}>
          <SectionLabel>CORE SKILLS TABLE</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {coreSkills.map((s, i) => {
              const pc = priorityColor(s.priority);
              return (
                <div key={i} style={{
                  background: "#141414",
                  border: "1px solid #222",
                  borderRadius: 8,
                  padding: "14px 16px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr auto",
                  alignItems: "center",
                  gap: 12,
                }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#F0ECE3", marginBottom: 2 }}>{s.skill}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>{s.why}</div>
                  </div>
                  <div style={{ display: "flex", gap: 4 }}>
                    {[1, 2, 3, 4, 5].map(dot => (
                      <div key={dot} style={{
                        width: 8, height: 8,
                        borderRadius: "50%",
                        background: dot <= s.level ? pc.dot : "#2A2A2A",
                      }} />
                    ))}
                  </div>
                  <span style={{
                    background: pc.bg,
                    color: pc.color,
                    fontSize: 10,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: 1,
                    padding: "3px 8px",
                    borderRadius: 4,
                    whiteSpace: "nowrap",
                  }}>{s.priority}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* TOOL STACK */}
        <section style={{ marginBottom: 40 }}>
          <SectionLabel>SUGGESTED TOOL STACK</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
            {tools.map((t, i) => (
              <div key={i} style={{
                background: "#141414",
                border: "1px solid #222",
                borderRadius: 8,
                padding: "14px 16px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 20 }}>{t.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#F0ECE3" }}>{t.tool}</div>
                    <div style={{ fontSize: 10, color: "#F5A623", fontFamily: "monospace", letterSpacing: 1 }}>{t.category}</div>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{t.purpose}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 12 SYSTEMS */}
        <section style={{ marginBottom: 40 }}>
          <SectionLabel>12 PRACTICE SYSTEMS TO BUILD BEFORE JULY 2027</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
            {systems.map((s, i) => (
              <div key={i} style={{
                background: "#141414",
                border: "1px solid #222",
                borderRadius: 8,
                padding: "12px 14px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}>
                <div style={{
                  background: "#1E1E1E",
                  border: "1px solid #2A2A2A",
                  borderRadius: 6,
                  width: 36, height: 36,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, flexShrink: 0,
                }}>{s.icon}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#E0DAD0", marginBottom: 2 }}>{s.system}</div>
                  <div style={{ fontSize: 11, color: "#555", fontFamily: "monospace" }}>{s.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* POSITIONING */}
        <section style={{ marginBottom: 40 }}>
          <SectionLabel>YOUR MAIN POSITIONING</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {positioning.map((p, i) => (
              <div key={i} style={{
                background: "#141414",
                border: "1px solid #222",
                borderRadius: 8,
                padding: "14px 16px",
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                alignItems: "center",
                gap: 12,
              }}>
                <div style={{
                  fontSize: 13,
                  color: "#666",
                  textDecoration: "line-through",
                  fontStyle: "italic",
                }}>{p.weak}</div>
                <div style={{ color: "#F5A623", fontSize: 18, textAlign: "center" }}>→</div>
                <div style={{
                  fontSize: 13,
                  color: "#2ECC71",
                  fontWeight: 600,
                }}>{p.strong}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FOCUS TABLE */}
        <section style={{ marginBottom: 40 }}>
          <SectionLabel>FINAL STRATEGIC FOCUS</SectionLabel>
          <div style={{
            background: "#141414",
            border: "1px solid #222",
            borderRadius: 12,
            overflow: "hidden",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "#1A1A1A",
              borderBottom: "1px solid #222",
            }}>
              <div style={{ padding: "12px 20px", fontSize: 11, fontFamily: "monospace", letterSpacing: 2, color: "#2ECC71", fontWeight: 700 }}>✓ DO MORE OF</div>
              <div style={{ padding: "12px 20px", fontSize: 11, fontFamily: "monospace", letterSpacing: 2, color: "#E74C3C", fontWeight: 700, borderLeft: "1px solid #222" }}>✗ DO LESS OF</div>
            </div>
            {focus.map((f, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderBottom: i < focus.length - 1 ? "1px solid #1A1A1A" : "none",
              }}>
                <div style={{ padding: "11px 20px", fontSize: 13, color: "#C0BAB0" }}>{f.doMore}</div>
                <div style={{ padding: "11px 20px", fontSize: 13, color: "#888", borderLeft: "1px solid #1A1A1A" }}>{f.doLess}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER CTA */}
        <div style={{
          background: "linear-gradient(135deg, #1A1200 0%, #0D0D0D 100%)",
          border: "1px solid #F5A62330",
          borderRadius: 12,
          padding: "28px 24px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: 11, fontFamily: "monospace", color: "#F5A623", letterSpacing: 3, marginBottom: 10 }}>DEADLINE</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#F5A623", marginBottom: 8 }}>July 7th, 2027</div>
          <div style={{ fontSize: 14, color: "#666", maxWidth: 400, margin: "0 auto", lineHeight: 1.7 }}>
            From night shift worker to Ugandan AI systems operator.<br />
            <span style={{ color: "#888" }}>One phase at a time. One build at a time.</span>
          </div>
        </div>

      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: 10,
      fontFamily: "'Courier New', monospace",
      letterSpacing: 3,
      color: "#444",
      fontWeight: 700,
      marginBottom: 14,
      paddingBottom: 8,
      borderBottom: "1px solid #1E1E1E",
    }}>{children}</div>
  );
}
