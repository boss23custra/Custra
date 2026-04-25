import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAV */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "60px",
        }}
      >
        <h2>Custra</h2>
        <button
          style={{
            padding: "10px 16px",
            background: "#6366f1",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Get Early Access
        </button>
      </header>

      {/* HERO */}
      <section>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: "42px", fontWeight: "bold" }}
        >
          Turn customer feedback into{" "}
          <span style={{ color: "#22d3ee" }}>high-converting ad angles</span>
        </motion.h1>

        <p style={{ marginTop: "16px", opacity: 0.7, maxWidth: "600px" }}>
          Custra analyzes reviews, feedback, and ad data to help you find what
          actually drives conversions - so you can create ads that perform, not
          guess.
        </p>

        <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
          <button
            style={{
              padding: "12px 20px",
              background: "#22d3ee",
              border: "none",
              borderRadius: "8px",
              color: "#000",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Get Early Access <ArrowRight size={16} />
          </button>
        </div>

        <p style={{ marginTop: "16px", opacity: 0.6, maxWidth: "600px" }}>
          Built for performance marketers and D2C teams chasing better ROAS
        </p>
      </section>

      {/* PROBLEM */}
      <section style={{ marginTop: "80px" }}>
        <p
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            lineHeight: 1.4,
            maxWidth: "720px",
          }}
        >
          Most ad creatives fail because they ignore what customers are actually
          saying.
          <br />
          <br />
          You don't need more ideas.
          <br />
          You need better signals.
        </p>
      </section>

      {/* FEATURES */}
      <section style={{ marginTop: "80px" }}>
        <h2 style={{ marginBottom: "20px" }}>Features</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                padding: "20px",
                border: "1px solid #222",
                borderRadius: "12px",
                background: "#0b0f2a",
              }}
            >
              <h3>{feature.title}</h3>
              <p style={{ opacity: 0.6, marginTop: "8px" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ marginTop: "80px" }}>
        <h2>How It Works</h2>
        <p style={{ opacity: 0.7, marginTop: "8px", maxWidth: "640px" }}>
          From noise to winning ads in 3 steps:
        </p>
        <div style={{ marginTop: "20px", display: "grid", gap: "12px" }}>
          {steps.map((step, index) => (
            <p key={step} style={{ opacity: 0.8 }}>
              {index + 1}. {step}
            </p>
          ))}
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section id="waitlist" style={{ marginTop: "80px" }}>
        <h2>Join the exclusive waitlist</h2>
        <p style={{ opacity: 0.6, marginTop: "8px" }}>
          Limited early access for performance marketers building
          high-converting ads
        </p>
        <form
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
          style={{ marginTop: "20px", display: "flex", gap: "10px" }}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #333",
              background: "#0f172a",
              color: "white",
              flex: 1,
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px 20px",
              background: "#6366f1",
              border: "none",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Get Early Access
          </button>
        </form>

        <p style={{ marginTop: "12px", opacity: 0.6 }}>
          No spam. Just early access.
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: "80px",
          paddingTop: "24px",
          borderTop: "1px solid #1e293b",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3 style={{ margin: 0 }}>Custra</h3>
          <p style={{ margin: "6px 0 0", opacity: 0.6 }}>
            Built for marketers obsessed with ROAS
          </p>
        </div>

        <div style={{ textAlign: "right", opacity: 0.7 }}>
          <p style={{ margin: 0 }}>hello@getcustra.com</p>
          <p style={{ margin: "4px 0 0" }}>(c) 2026 Custra</p>
        </div>
      </footer>
    </div>
  );
}
