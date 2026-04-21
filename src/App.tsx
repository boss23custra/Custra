import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
          Request Demo
        </button>
      </header>

      {/* HERO */}
      <section>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: "42px", fontWeight: "bold" }}
        >
          Turn customer noise into{" "}
          <span style={{ color: "#22d3ee" }}>winning creative</span>
        </motion.h1>

        <p style={{ marginTop: "16px", opacity: 0.7, maxWidth: "600px" }}>
          Custra helps you turn customer feedback and ad data into high-performing
          marketing angles and sharper messaging.
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

          <button
            style={{
              padding: "12px 20px",
              background: "transparent",
              border: "1px solid #444",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>
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
          {[
            "AI Insight Engine",
            "Performance Signal Mapping",
            "Creative Angle Generation",
            "Cleaner Decisions",
          ].map((feature, i) => (
            <div
              key={i}
              style={{
                padding: "20px",
                border: "1px solid #222",
                borderRadius: "12px",
                background: "#0b0f2a",
              }}
            >
              <h3>{feature}</h3>
              <p style={{ opacity: 0.6, marginTop: "8px" }}>
                Built to help you move faster with better creative decisions.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ marginTop: "80px" }}>
        <h2>Get Early Access</h2>

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <input
            placeholder="Enter your email"
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
            style={{
              padding: "12px 20px",
              background: "#6366f1",
              border: "none",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Join
          </button>
        </div>

        <p style={{ marginTop: "12px", opacity: 0.6 }}>
          Or reach us at: hello@getcustra.com
        </p>
      </section>
    </div>
  );
}