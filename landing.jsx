// Custra · Landing page · early access / waitlist
// Uses the Stacked mark + tokens locked in the handoff package.

// Palette · C — Snow & Indigo.
// Keys keep their names from the original landing for diff-friendliness;
// `peach` is now the primary accent (indigo) and `blue` is the secondary
// highlight (citron).
const P = {
  cream:    '#F7F8FB',   // snow
  paper:    '#EBEEF6',   // mist
  ink:      '#0B0F1A',
  inkSoft:  '#2E3346',
  rule:     '#DDE0EA',
  muted:    '#7B8197',
  mutedDk:  '#5C6178',   // mono caption on dark hero
  blue:     '#D9A13B',   // citron-deep (for text on cream)
  blueSoft: '#FFF1D0',   // citron wash (highlight-row bg alt)
  peach:    '#4F46E5',   // INDIGO — primary accent (CTAs, brand pill, metric)
  peachSoft:'#E4E2FB',   // indigo wash
  cream2:   '#B9BECC',   // hero subtext on ink
};

const fSans  = "'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, system-ui, sans-serif";
const fSerif = "'Instrument Serif', 'Times New Roman', serif";
const fMono  = "'Geist Mono', ui-monospace, 'SF Mono', Menlo, monospace";
const WAITLIST_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzMOP44XCmAv8By8yzMj68IYtoCpgci6eEdlQk-z7M50DSwccveRWLLcMASxHzghhAt/exec';

async function submitWaitlist(e, successMessage) {
  e.preventDefault();
  const form = e.currentTarget;
  const input = form.elements.email || form.querySelector('input[type="email"]');
  const email = input.value.trim();

  await fetch(WAITLIST_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({ email }),
  });

  alert(successMessage);
  form.reset();
}

// ─── The mark ────────────────────────────────────────────────────────
function CustraMark({ size = 24, color, opacity = 1, decorative = true }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 100 100"
      style={{ display: 'block', color, opacity }}
      aria-hidden={decorative ? 'true' : undefined}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : 'Custra'}
    >
      <polyline points="62,18 18,50 62,82" fill="none" stroke="currentColor" strokeOpacity="0.32"
                strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="86,18 42,50 86,82" fill="none" stroke="currentColor"
                strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Wordmark({ size = 22, color = P.ink, weight = 600 }) {
  return (
    <span style={{
      fontFamily: fSans, fontWeight: weight, fontSize: size,
      letterSpacing: '-0.03em', color, lineHeight: 1,
    }}>custra</span>
  );
}

function Lockup({ size = 22, color = P.ink }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.42, color }}>
      <CustraMark size={size} color={color} />
      <Wordmark size={size} color={color} />
    </span>
  );
}

function Mono({ children, color = P.muted, size = 11 }) {
  return (
    <span style={{
      fontFamily: fMono, fontSize: size, letterSpacing: '0.08em',
      color, textTransform: 'uppercase',
    }}>{children}</span>
  );
}

function ResponsiveStyles() {
  return (
    <style>{`
      @media (max-width: 900px) {
        .site-nav {
          align-items: flex-start !important;
          flex-direction: column !important;
          gap: 18px !important;
          padding: 22px 20px !important;
        }

        .site-nav-links {
          gap: 14px !important;
          width: 100% !important;
          overflow-x: auto !important;
          padding-bottom: 2px !important;
        }

        .site-nav-links a,
        .site-nav-links span {
          flex-shrink: 0 !important;
        }

        .hero-section {
          margin-top: 0 !important;
        }

        .hero-inner {
          padding: 72px 20px 112px !important;
        }

        .hero-watermark {
          right: -230px !important;
          bottom: -180px !important;
          transform: scale(0.72) !important;
          transform-origin: bottom right !important;
        }

        .hero-batch {
          position: relative !important;
          top: auto !important;
          right: auto !important;
          padding: 18px 20px 0 !important;
          text-align: left !important;
        }

        .hero-title {
          max-width: 100% !important;
          font-size: 48px !important;
          line-height: 1.02 !important;
        }

        .hero-copy {
          max-width: 100% !important;
          font-size: 17px !important;
          line-height: 1.5 !important;
        }

        .waitlist-form {
          max-width: 100% !important;
          flex-direction: column !important;
          gap: 8px !important;
        }

        .waitlist-input,
        .waitlist-button {
          width: 100% !important;
        }

        .waitlist-button {
          min-height: 46px !important;
        }

        .social-proof {
          align-items: flex-start !important;
          flex-direction: column !important;
          gap: 12px !important;
        }

        .floating-panel-section {
          margin-top: -56px !important;
          padding: 0 16px !important;
        }

        .briefs-panel {
          border-radius: 18px !important;
          padding: 20px !important;
        }

        .panel-header,
        .panel-footer,
        .cases-heading {
          align-items: flex-start !important;
          flex-direction: column !important;
        }

        .briefs-title {
          font-size: 25px !important;
          line-height: 1.08 !important;
        }

        .briefs-grid,
        .steps-grid,
        .cases-grid {
          grid-template-columns: 1fr !important;
        }

        .brief-card {
          padding: 20px !important;
        }

        .brief-card-title {
          font-size: 28px !important;
        }

        .page-section {
          margin-top: 96px !important;
          padding: 0 20px !important;
        }

        .section-title {
          max-width: 100% !important;
          font-size: 38px !important;
          line-height: 1.05 !important;
        }

        .case-intro {
          max-width: 100% !important;
        }

        .manifesto-text {
          font-size: 34px !important;
          line-height: 1.12 !important;
        }

        .founder-line {
          align-items: flex-start !important;
          max-width: 100% !important;
        }

        .founder-meta {
          font-size: 9px !important;
          line-height: 1.4 !important;
        }

        .faq-title {
          font-size: 36px !important;
        }

        .faq-summary {
          align-items: flex-start !important;
          gap: 12px !important;
          font-size: 17px !important;
        }

        .final-cta {
          margin-top: 96px !important;
          padding: 88px 20px 96px !important;
        }

        .final-title {
          font-size: 48px !important;
          line-height: 1.02 !important;
        }

        .site-footer {
          align-items: flex-start !important;
          flex-direction: column !important;
          padding: 30px 20px !important;
        }

        .footer-links {
          flex-wrap: wrap !important;
          gap: 14px !important;
        }
      }

      @media (max-width: 420px) {
        .hero-title,
        .final-title {
          font-size: 42px !important;
        }

        .section-title {
          font-size: 34px !important;
        }

        .manifesto-text {
          font-size: 30px !important;
        }
      }
    `}</style>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="site-nav" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      maxWidth: 1240, margin: '0 auto', padding: '28px 40px',
    }}>
      <Lockup size={24} />
      <div className="site-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href="#how"   style={navLink}>How it works</a>
        <a href="#cases" style={navLink}>Case studies</a>
        <a href="#faq"   style={navLink}>FAQ</a>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 14px', borderRadius: 999,
          background: P.peachSoft, color: P.peach,
          fontFamily: fSans, fontSize: 13, fontWeight: 500,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: P.peach }} />
          Early access · open
        </span>
      </div>
    </nav>
  );
}
const navLink = {
  fontFamily: fSans, fontSize: 14, color: P.inkSoft,
  textDecoration: 'none', fontWeight: 400,
};

// ─── Hero ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-section" style={{
      position: 'relative',
      background: P.ink, color: P.cream,
      overflow: 'hidden',
      marginTop: 12,
    }}>
      {/* watermark — bleeds off bottom-right */}
      <div aria-hidden className="hero-watermark" style={{
        position: 'absolute', right: -120, bottom: -160, color: P.cream,
        opacity: 0.07, pointerEvents: 'none',
      }}>
        <CustraMark size={620} color={P.cream} opacity={1} />
      </div>
      {/* tiny mono crosshair top-right */}
      <div className="hero-batch" style={{
        position: 'absolute', top: 32, right: 40,
        fontFamily: fMono, fontSize: 10, color: P.mutedDk, letterSpacing: '0.12em',
      }}>BATCH 01 · MAY 2026 · 33 ON WAITLIST</div>

      <div className="hero-inner" style={{
        position: 'relative', maxWidth: 1240, margin: '0 auto',
        padding: '120px 40px 140px',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '6px 14px', borderRadius: 999,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.12)',
          fontFamily: fSans, fontSize: 13, color: P.cream2,
          marginBottom: 28,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: P.peach }} />
          Early access · invite-only batches
        </div>

        <h1 className="hero-title" style={{
          fontFamily: fSans, fontSize: 88, fontWeight: 600,
          letterSpacing: '-0.035em', lineHeight: 0.98,
          margin: 0, maxWidth: 940, color: P.cream,
        }}>
          The ad angle that will{' '}
          <em style={{
            fontFamily: fSerif, fontStyle: 'italic', fontWeight: 400,
            letterSpacing: '-0.02em',
          }}>actually</em>{' '}
          lower your CAC.
        </h1>

        <p className="hero-copy" style={{
          margin: '28px 0 0', maxWidth: 600,
          fontFamily: fSans, fontSize: 19, lineHeight: 1.55,
          color: P.cream2, fontWeight: 400,
          textWrap: 'pretty',
        }}>
          Custra mines reviews, ad comments, customer DMs and online communities for the ideas that convert into direct response ad angles — so your next creative test isn't a guess.
        </p>

        {/* email capture */}
        <form
          className="waitlist-form"
          onSubmit={(e) => submitWaitlist(e, "You're on the list. we'll be in touch.")}
          style={{
            marginTop: 36, display: 'flex', gap: 10, maxWidth: 520,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: 14, padding: 6,
          }}
        >
          <input
            className="waitlist-input"
            type="email"
            name="email"
            required
            placeholder="name@yourbrand.com"
            style={{
              flex: 1, background: 'transparent', border: 0, outline: 'none',
              fontFamily: fSans, fontSize: 16, color: P.cream,
              padding: '10px 14px',
            }}
          />
          <button className="waitlist-button" type="submit" style={{
            fontFamily: fSans, fontWeight: 500, fontSize: 15,
            background: P.cream, color: P.ink,
            border: 0, borderRadius: 9, padding: '10px 18px',
            cursor: 'pointer',
          }}>Get early access →</button>
        </form>

        {/* social proof row */}
        <div className="social-proof" style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex' }}>
            {[
              { bg: P.peach },
              { bg: P.blue },
              { bg: '#F6C45F' },
              { bg: '#7BB880' },
              { bg: '#C99BEB' },
            ].map((a, i) => (
              <div key={i} style={{
                width: 28, height: 28, borderRadius: '50%',
                background: a.bg,
                marginLeft: i === 0 ? 0 : -8,
                border: `2px solid ${P.ink}`,
              }} />
            ))}
          </div>
          <span style={{ fontFamily: fSans, fontSize: 14, color: P.cream2 }}>
            <strong style={{ color: P.cream, fontWeight: 500 }}>33 D2C founders</strong> already on the list
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Today's briefs panel (overlaps hero / top of cream) ────────────
// Three angle-brief cards. Each has a short 2-word angle, supporting
// evidence, source meta, predicted CAC/ROAS, and Scripts / Statics CTAs.
function Showcase() {
  const briefs = [
    {
      n: '01',
      status: 'WINNING',
      title: 'Plane proof',
      evidence: '"You can sleep through it on a plane."',
      sources: '37 reviews · 8 ad threads',
      cac: '$14.20',
      roas: '4.8×',
      winner: true,
    },
    {
      n: '02',
      status: 'EMERGING',
      title: 'Partner peace',
      evidence: '"My partner stopped complaining about my reading light."',
      sources: '22 reviews · 4 ad threads',
      cac: '$18.40',
      roas: '3.2×',
    },
    {
      n: '03',
      status: 'TESTING',
      title: 'Travel essential',
      evidence: '"Bought it for one trip, now I take it everywhere."',
      sources: '18 reviews · 3 ad threads',
      cac: '$22.10',
      roas: '2.6×',
    },
  ];

  const statusStyle = (winner) => winner
    ? { bg: P.peachSoft, fg: P.peach }
    : { bg: P.paper,     fg: P.inkSoft };

  return (
    <section className="floating-panel-section" style={{
      position: 'relative',
      maxWidth: 1180, margin: '-80px auto 0', padding: '0 40px',
      zIndex: 2,
    }}>
      <div className="briefs-panel" style={{
        background: '#fff', borderRadius: 24,
        border: `1px solid ${P.rule}`,
        padding: 28,
        boxShadow: '0 24px 80px rgba(11,15,26,0.18), 0 4px 16px rgba(11,15,26,0.06)',
      }}>
        {/* panel header */}
        <div className="panel-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22, flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Lockup size={20} />
            <span style={{ height: 16, width: 1, background: P.rule }} />
            <Mono size={10}>Sleep mask · last 7 days</Mono>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: fMono, fontSize: 10, color: P.muted, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%', background: '#22B86D',
                boxShadow: '0 0 0 3px rgba(34,184,109,0.18)',
              }} />
              
            </span>
          </div>
        </div>

        {/* section heading */}
        <div style={{ marginBottom: 22, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <div className="briefs-title" style={{
            fontFamily: fSerif, fontStyle: 'italic',
            fontSize: 30, color: P.ink, letterSpacing: '-0.02em', lineHeight: 1,
          }}>Today's briefs — ready to ship.</div>
          <Mono size={10}>3 of 14 surfaced · sorted by predicted CAC</Mono>
        </div>

        {/* three brief cards */}
        <div className="briefs-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}>
          {briefs.map((b) => {
            const s = statusStyle(b.winner);
            return (
              <div className="brief-card" key={b.n} style={{
                background: b.winner ? P.peachSoft : P.cream,
                border: `1px solid ${b.winner ? '#C9C5F5' : P.rule}`,
                borderRadius: 16,
                padding: 22,
                display: 'flex', flexDirection: 'column', gap: 16,
                position: 'relative',
                boxShadow: b.winner ? '0 2px 0 rgba(79,70,229,0.08)' : 'none',
              }}>
                {/* status / index */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    padding: '3px 8px', borderRadius: 999,
                    background: s.bg, color: s.fg,
                    fontFamily: fMono, fontSize: 9, fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}>{b.status}</span>
                  <span style={{
                    fontFamily: fMono, fontSize: 10, color: P.muted, letterSpacing: '0.06em',
                  }}>{b.n}</span>
                </div>

                {/* angle title (2-3 words) */}
                <div className="brief-card-title" style={{
                  fontFamily: fSans, fontSize: 32, fontWeight: 600,
                  letterSpacing: '-0.03em', color: P.ink, lineHeight: 1.02,
                }}>{b.title}</div>

                {/* supporting evidence */}
                <div style={{
                  fontFamily: fSerif, fontStyle: 'italic',
                  fontSize: 15, color: P.inkSoft, lineHeight: 1.35,
                  letterSpacing: '-0.005em',
                }}>{b.evidence}</div>

                {/* source meta */}
                <Mono size={9}>{b.sources}</Mono>

                {/* metrics row */}
                <div style={{
                  display: 'flex', gap: 14, alignItems: 'center',
                  paddingTop: 12, borderTop: `1px solid ${b.winner ? '#C9C5F5' : P.rule}`,
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: fMono, fontSize: 9, color: P.muted, letterSpacing: '0.06em', textTransform: 'uppercase' }}>CAC</div>
                    <div style={{ fontFamily: fMono, fontSize: 14, color: P.ink, marginTop: 2 }}>{b.cac}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: fMono, fontSize: 9, color: P.muted, letterSpacing: '0.06em', textTransform: 'uppercase' }}>ROAS</div>
                    <div style={{
                      fontFamily: fMono, fontSize: 14, fontWeight: 600,
                      color: b.winner ? P.peach : P.ink, marginTop: 2,
                    }}>{b.roas}</div>
                  </div>
                </div>

                {/* CTAs — generate scripts / statics */}
                <div style={{ display: 'flex', gap: 8 }}>
                  <button type="button" style={{
                    flex: 1, padding: '10px 12px', borderRadius: 9,
                    background: b.winner ? P.peach : P.ink, color: P.cream,
                    border: 0, cursor: 'pointer',
                    fontFamily: fSans, fontSize: 13, fontWeight: 500,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  }}>
                    <ScriptGlyph color={P.cream} /> Scripts
                  </button>
                  <button type="button" style={{
                    flex: 1, padding: '10px 12px', borderRadius: 9,
                    background: '#fff', color: P.ink,
                    border: `1px solid ${b.winner ? '#C9C5F5' : P.rule}`,
                    cursor: 'pointer',
                    fontFamily: fSans, fontSize: 13, fontWeight: 500,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  }}>
                    <StaticGlyph color={P.ink} /> Statics
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* panel footer */}
        <div className="panel-footer" style={{
          marginTop: 20, paddingTop: 18, borderTop: `1px solid ${P.rule}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10,
        }}>
          <Mono size={10}>Median predicted CAC across briefs: <strong style={{ color: P.ink, fontWeight: 600 }}>$18.20</strong> · refreshes hourly</Mono>
          <a href="#" style={{
            fontFamily: fSans, fontSize: 13, fontWeight: 500, color: P.peach,
            textDecoration: 'none',
          }}>View 11 more angles →</a>
        </div>
      </div>
    </section>
  );
}

// ─── Tiny glyphs for the Scripts / Statics buttons ──────────────────
function ScriptGlyph({ color = '#fff' }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2.5" y="2.5" width="11" height="11" rx="1.8" fill="none" stroke={color} strokeWidth="1.5" />
      <line x1="5" y1="6" x2="11" y2="6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="5" y1="8.5" x2="11" y2="8.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="5" y1="11" x2="8.5" y2="11" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function StaticGlyph({ color = '#0F0F0E' }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2.5" y="2.5" width="11" height="11" rx="1.8" fill="none" stroke={color} strokeWidth="1.5" />
      <circle cx="6" cy="6.5" r="1.2" fill={color} />
      <path d="M3.5 12 L7 8 L9.5 10.5 L12 7.5 L12.5 8 L12.5 12.5 L3.5 12.5 Z" fill={color} />
    </svg>
  );
}

// ─── Step icon (tiny inline glyph for "how it works") ───────────────
function StepIcon({ kind, color = P.ink, accent = P.peach }) {
  const size = 56;
  if (kind === 'listen') {
    // concentric arcs — listening / signal in
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="6" fill={accent} />
        <circle cx="50" cy="50" r="18" fill="none" stroke={color} strokeWidth="4"
                strokeLinecap="round" strokeDasharray="60 60" transform="rotate(-30 50 50)" />
        <circle cx="50" cy="50" r="32" fill="none" stroke={color} strokeWidth="4"
                strokeOpacity="0.5"
                strokeLinecap="round" strokeDasharray="100 120" transform="rotate(-20 50 50)" />
      </svg>
    );
  }
  if (kind === 'angle') {
    // the stacked chevron itself — find the angle
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <polyline points="62,18 18,50 62,82" fill="none" stroke={color} strokeOpacity="0.32"
                  strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="86,18 42,50 86,82" fill="none" stroke={color}
                  strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === 'run') {
    // arrow up-right — run the angle
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <polyline points="22,78 78,22" fill="none" stroke={color} strokeWidth="11"
                  strokeLinecap="round" />
        <polyline points="46,22 78,22 78,54" fill="none" stroke={color} strokeWidth="11"
                  strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="22" cy="78" r="4" fill={accent} />
      </svg>
    );
  }
  return null;
}

// ─── How it works ────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      kind: 'listen', n: '01', t: 'Listen, everywhere.',
      d: 'Custra pulls reviews, ad comments, DMs, support tickets and survey replies into one rolling corpus of customer voice — no manual tagging.',
      meta: 'Connects to Shopify · Meta · TikTok · Gorgias',
    },
    {
      kind: 'angle', n: '02', t: 'Find the angle.',
      d: 'We cluster the language customers actually use, score each cluster against your performance data, and surface the angles already lowering CAC for you — and the ones competitors are using that you aren\'t.',
      meta: 'Updates daily · sortable by CAC, ROAS, lift',
    },
    {
      kind: 'run', n: '03', t: 'Run the angle.',
      d: 'Tap an angle to generate static, video script, and email copy variants. Push to Meta and TikTok in one click. Custra watches what wins and feeds it back into the loop.',
      meta: 'Native Meta &amp; TikTok push · script + static',
    },
  ];
  return (
    <section id="how" className="page-section" style={{
      maxWidth: 1240, margin: '160px auto 0', padding: '0 40px',
    }}>
      <div style={{ marginBottom: 56 }}>
        <Mono>How it works</Mono>
        <h2 className="section-title" style={{
          fontFamily: fSans, fontSize: 56, fontWeight: 600,
          letterSpacing: '-0.03em', lineHeight: 1, margin: '14px 0 0', maxWidth: 820,
          color: P.ink,
        }}>
          One loop. Voice in,{' '}
          <em style={{ fontFamily: fSerif, fontStyle: 'italic', fontWeight: 400 }}>angles</em> out,
          ROAS up.
        </h2>
      </div>

      <div className="steps-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28,
      }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            background: '#fff', border: `1px solid ${P.rule}`, borderRadius: 20,
            padding: '32px 28px',
            display: 'flex', flexDirection: 'column', gap: 18,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <StepIcon kind={s.kind} color={P.ink} accent={i === 1 ? P.peach : P.peach} />
              <Mono>{s.n}</Mono>
            </div>
            <div>
              <div style={{
                fontFamily: fSans, fontSize: 24, fontWeight: 600,
                letterSpacing: '-0.02em', color: P.ink, lineHeight: 1.15,
              }}>{s.t}</div>
              <p style={{
                margin: '10px 0 0',
                fontFamily: fSans, fontSize: 15, lineHeight: 1.55,
                color: P.inkSoft, textWrap: 'pretty',
              }}>{s.d}</p>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: `1px solid ${P.rule}` }}>
              <span style={{ fontFamily: fMono, fontSize: 11, color: P.muted, letterSpacing: '0.04em' }}
                    dangerouslySetInnerHTML={{ __html: s.meta }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Case studies / proof ────────────────────────────────────────────
function Cases() {
  const cases = [
    { cat: 'Sleep & travel',  quote: '"You can sleep through it on a plane."',         cacBefore: '$24.60', cacAfter: '$8.20', roas: '4.8×', delta: -42 },
    { cat: 'Direct coffee',   quote: '"It survives my dishwasher."',                    cacBefore: '$18.10', cacAfter: '$11.40', roas: '3.6×', delta: -37 },
    { cat: 'Skincare',        quote: '"It doesn\'t make my eyes water like the others."', cacBefore: '$31.20', cacAfter: '$19.80', roas: '3.1×', delta: -36 },
    { cat: 'Pet food',        quote: '"My picky dog actually finished the bowl."',     cacBefore: '$22.50', cacAfter: '$11.20', roas: '2.9×', delta: -32 },
  ];
  return (
    <section id="cases" className="page-section" style={{
      maxWidth: 1240, margin: '160px auto 0', padding: '0 40px',
    }}>
      <div className="cases-heading" style={{ marginBottom: 48, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <div>
          <Mono>Angles that landed</Mono>
          <h2 className="section-title" style={{
            fontFamily: fSans, fontSize: 56, fontWeight: 600,
            letterSpacing: '-0.03em', lineHeight: 1, margin: '14px 0 0', maxWidth: 760,
            color: P.ink,
          }}>
            Real things customers <em style={{ fontFamily: fSerif, fontStyle: 'italic', fontWeight: 400 }}>actually</em> said. Real lift.
          </h2>
        </div>
        <p className="case-intro" style={{
          margin: 0, maxWidth: 340,
          fontFamily: fSans, fontSize: 15, lineHeight: 1.55, color: P.inkSoft,
        }}>
          Sample of angles pulled from beta brands. Across the cohort, median CAC fell <strong style={{ color: P.peach }}>34%</strong> in the first 6 weeks.
        </p>
      </div>

      <div className="cases-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18,
      }}>
        {cases.map((c, i) => (
          <div key={i} style={{
            background: '#fff', border: `1px solid ${P.rule}`, borderRadius: 16,
            padding: 22,
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <div style={{
              alignSelf: 'flex-start',
              padding: '4px 10px', borderRadius: 99,
              background: P.paper, color: P.inkSoft,
              fontFamily: fMono, fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>{c.cat}</div>

            <div style={{
              fontFamily: fSerif, fontStyle: 'italic', fontSize: 21,
              color: P.ink, lineHeight: 1.25, letterSpacing: '-0.01em',
              flex: 1,
            }}>{c.quote}</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 14, borderTop: `1px solid ${P.rule}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: fMono, fontSize: 10, color: P.muted, letterSpacing: '0.04em' }}>CAC</span>
                <span style={{ fontFamily: fMono, fontSize: 13, color: P.inkSoft }}>
                  <span style={{ textDecoration: 'line-through', color: P.muted, marginRight: 6 }}>{c.cacBefore}</span>
                  {c.cacAfter}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: fMono, fontSize: 10, color: P.muted, letterSpacing: '0.04em' }}>ROAS</span>
                <span style={{ fontFamily: fMono, fontSize: 13, fontWeight: 600, color: P.ink }}>{c.roas}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: fMono, fontSize: 10, color: P.muted, letterSpacing: '0.04em' }}>LIFT</span>
                <span style={{
                  fontFamily: fMono, fontSize: 13, fontWeight: 600,
                  color: P.peach,
                }}>{c.delta}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Editorial moment / manifesto ────────────────────────────────────
function Manifesto() {
  return (
    <section className="page-section" style={{
      maxWidth: 1000, margin: '160px auto 0', padding: '0 40px',
      textAlign: 'center',
    }}>
      <Mono>From the team</Mono>
      <p className="manifesto-text" style={{
        fontFamily: fSerif, fontStyle: 'italic',
        fontSize: 56, fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.025em',
        margin: '24px 0 0', color: P.ink,
        textWrap: 'pretty',
      }}>
        “Most brands guess. The good ones split-test. The best ones listen — to the actual words your customers use, before any of them turn into a creative brief.”
      </p>
      <div className="founder-line" style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%', background: P.peach,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: P.cream, fontFamily: fSans, fontWeight: 600, fontSize: 14,
        }}>R</div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontFamily: fSans, fontSize: 14, fontWeight: 500, color: P.ink }}>Founder, Custra</div>
          <div className="founder-meta" style={{ fontFamily: fMono, fontSize: 11, color: P.muted, letterSpacing: '0.04em', textTransform: 'uppercase' }}>previously Creative Stratergiest at Teabox</div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────
function FAQ() {
  const qs = [
    { q: 'When does Custra open up?',
      a: 'We are currently building and allowing only a few brands to test Custra, the brands that sign up now will get priority access to the beta phase rolling out soon. We only onboard brands spening $250k+ on Meta' },
    { q: 'What does it connect to?',
      a: 'Meta Ads, TikTok Ads, Google Ads, Klaviyo, Gorgias, Trustpilot. If you need something we don\'t have, just ask.' },
    { q: 'Does Custra write the ads, or just suggest angles?',
      a: 'Both. The angles are the core thing — they\'re what changes CAC. From any angle you can generate static ad copy, video scripts. We don\'t replace your designer or editor; we replace the blank page.' },
    { q: 'What about my customers\' data?',
      a: 'Your data stays in your account. We never share it with other brands, never train shared models on your reviews or customers, and we\'re SOC 2 Type II in progress. Reviews are processed; customer PII never leaves your systems.' },
    { q: 'How much will it cost?',
      a: 'Pricing is per-brand and scales with monthly ad spend, Brands who register now for the Beta phase will get exclusive discount' },
  ];
  return (
    <section id="faq" className="page-section" style={{
      maxWidth: 880, margin: '160px auto 0', padding: '0 40px',
    }}>
      <div style={{ marginBottom: 40, textAlign: 'center' }}>
        <Mono>FAQ</Mono>
        <h2 className="faq-title" style={{
          fontFamily: fSans, fontSize: 48, fontWeight: 600,
          letterSpacing: '-0.03em', lineHeight: 1.05, margin: '14px 0 0',
          color: P.ink,
        }}>
          Common questions, answered straight.
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {qs.map((item, i) => (
          <details key={i} open={i === 0} style={{
            borderTop: `1px solid ${P.rule}`,
            borderBottom: i === qs.length - 1 ? `1px solid ${P.rule}` : 'none',
            padding: '20px 4px',
          }}>
            <summary className="faq-summary" style={{
              cursor: 'pointer', listStyle: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              fontFamily: fSans, fontSize: 19, fontWeight: 600,
              letterSpacing: '-0.015em', color: P.ink,
            }}>
              <span>{item.q}</span>
              <span style={{
                fontFamily: fMono, fontSize: 12, color: P.muted,
                marginLeft: 12, flexShrink: 0,
              }}>+ / −</span>
            </summary>
            <p style={{
              margin: '12px 0 0',
              fontFamily: fSans, fontSize: 15.5, lineHeight: 1.6,
              color: P.inkSoft, textWrap: 'pretty', maxWidth: 720,
            }}>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

// ─── Final CTA ───────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="final-cta" style={{
      position: 'relative',
      marginTop: 160, padding: '120px 40px 140px',
      background: P.ink, color: P.cream, overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', left: -100, top: -120, color: P.cream,
        opacity: 0.06, pointerEvents: 'none',
      }}>
        <CustraMark size={560} color={P.cream} opacity={1} />
      </div>
      <div aria-hidden style={{
        position: 'absolute', right: -120, bottom: -160, color: P.cream,
        opacity: 0.05, pointerEvents: 'none',
      }}>
        <CustraMark size={620} color={P.cream} opacity={1} />
      </div>

      <div style={{ position: 'relative', maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        <Mono color={P.mutedDk}>One more thing</Mono>
        <h2 className="final-title" style={{
          fontFamily: fSans, fontSize: 84, fontWeight: 600,
          letterSpacing: '-0.035em', lineHeight: 1, margin: '20px 0 0',
          color: P.cream,
        }}>
          Don't guess.{' '}
          <em style={{ fontFamily: fSerif, fontStyle: 'italic', fontWeight: 400 }}>Listen.</em>
        </h2>
        <p style={{
          margin: '24px auto 0', maxWidth: 520,
          fontFamily: fSans, fontSize: 17, lineHeight: 1.55, color: P.cream2,
        }}>
          Join 487 D2C founders waiting on the next batch. We open 30 new brands a month.
        </p>

        <form
          className="waitlist-form"
          onSubmit={(e) => submitWaitlist(e, "You're on the list.")}
          style={{
            margin: '36px auto 0', display: 'flex', gap: 10, maxWidth: 520,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: 14, padding: 6,
          }}
        >
          <input
            className="waitlist-input"
            type="email"
            name="email"
            required
            placeholder="name@yourbrand.com"
            style={{
              flex: 1, background: 'transparent', border: 0, outline: 'none',
              fontFamily: fSans, fontSize: 16, color: P.cream,
              padding: '10px 14px',
            }}
          />
          <button className="waitlist-button" type="submit" style={{
            fontFamily: fSans, fontWeight: 500, fontSize: 15,
            background: P.peach, color: P.cream,
            border: 0, borderRadius: 9, padding: '10px 18px',
            cursor: 'pointer',
          }}>Join the waitlist →</button>
        </form>

        <div style={{ marginTop: 22, fontFamily: fMono, fontSize: 11, color: P.mutedDk, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          · no spam · unsubscribe one click
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="site-footer" style={{
      maxWidth: 1240, margin: '0 auto', padding: '40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: 16,
    }}>
      <Lockup size={18} />
      <span style={{ fontFamily: fSans, fontSize: 13, color: P.muted }}>
        © 2026 Custra. Made for D2C fbrands who'd rather listen than guess.
      </span>
      <div className="footer-links" style={{ display: 'flex', gap: 20 }}>
        <a href="#" style={{ fontFamily: fSans, fontSize: 13, color: P.muted, textDecoration: 'none' }}>X / Twitter</a>
        <a href="#" style={{ fontFamily: fSans, fontSize: 13, color: P.muted, textDecoration: 'none' }}>Docs</a>
        <a href="#" style={{ fontFamily: fSans, fontSize: 13, color: P.muted, textDecoration: 'none' }}>Privacy</a>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────
function LandingApp() {
  return (
    <main>
      <ResponsiveStyles />
      <Nav />
      <Hero />
      <Showcase />
      <HowItWorks />
      <Cases />
      <Manifesto />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LandingApp />);
