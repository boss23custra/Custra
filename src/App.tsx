import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    title: "AI Insight Engine",
    description:
      "Turn raw customer feedback into clear, actionable insights for your ads.",
  },
  {
    title: "Performance Signal Mapping",
    description:
      "Identify what messaging actually drives clicks, conversions, and revenue.",
  },
  {
    title: "Creative Angle Generation",
    description:
      "Generate ad angles based on real customer behavior - not guesswork.",
  },
  {
    title: "Cleaner Decisions",
    description:
      "Stop testing blindly. Make faster, data-backed creative decisions.",
  },
];

const steps = [
  "Connect your feedback and ad data",
  "Analyze what customers actually respond to",
  "Generate angles you can turn into ads instantly",
];

export default function App() {
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => {
      emailInputRef.current?.focus();
    }, 400);
  };

  return (
    <div className="landing-shell">
      <div className="landing-page">
        {/* NAV */}
        <header className="landing-header">
          <h2 className="brand">Custra</h2>
          <button className="nav-button" onClick={scrollToWaitlist}>
            Get Early Access
          </button>
        </header>

        {/* HERO */}
        <section className="hero-section">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Turn customer feedback into{" "}
            <span className="hero-highlight">high-converting ad angles</span>
          </motion.h1>

          <p className="hero-copy">
            Custra analyzes reviews, feedback, and ad data to help you find
            what actually drives conversions - so you can create ads that
            perform, not guess.
          </p>

          <div className="hero-actions">
            <button className="primary-button" onClick={scrollToWaitlist}>
              <span>Get Early Access</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <p className="hero-support">
            Built for performance marketers and D2C teams chasing better ROAS
          </p>
        </section>

        {/* PROBLEM */}
        <section className="problem-section">
          <p className="problem-copy">
            Most ad creatives fail because they ignore what customers are
            actually saying.
            <br />
            <br />
            You don't need more ideas.
            <br />
            You need better signals.
          </p>
        </section>

        {/* FEATURES */}
        <section className="content-section">
          <h2 className="section-title">Features</h2>

          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-copy">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="content-section">
          <h2 className="section-title">How It Works</h2>
          <p className="section-copy">From noise to winning ads in 3 steps:</p>
          <div className="steps-list">
            {steps.map((step, index) => (
              <p key={step} className="step-item">
                {index + 1}. {step}
              </p>
            ))}
          </div>
        </section>

        {/* EMAIL CAPTURE */}
        <section id="waitlist" className="content-section">
          <h2 className="section-title">Join the exclusive waitlist</h2>
          <p className="section-copy">
            Limited early access for performance marketers building
            high-converting ads
          </p>
          <form
            className="waitlist-form"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const email = (
                form.elements.namedItem("email") as HTMLInputElement
              ).value;

              await fetch(
                "https://script.google.com/macros/s/AKfycbzMOP44XCmAv8By8yzMj68IYtoCpgci6eEdlQk-z7M50DSwccveRWLLcMASxHzghhAt/exec",
                {
                  method: "POST",
                  body: JSON.stringify({ email }),
                }
              );

              alert("You're on the list");
              form.reset();
            }}
          >
            <input
              ref={emailInputRef}
              className="email-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <button className="submit-button" type="submit">
              Get Early Access
            </button>
          </form>

          <p className="trust-copy">No spam. Just early access.</p>
        </section>

        {/* FOOTER */}
        <footer className="landing-footer">
          <div>
            <h3 className="footer-brand">Custra</h3>
            <p className="footer-copy">Built for marketers obsessed with ROAS</p>
          </div>

          <div className="footer-meta">
            <p className="footer-email">hello@getcustra.com</p>
            <p className="footer-copy">(c) 2026 Custra</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
