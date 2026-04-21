import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  BarChart3,
  Sparkles,
  Mail,
  ShieldCheck,
  Layers,
  Zap,
  CheckCircle2,
} from "lucide-react";

import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

const features = [
  {
    icon: Brain,
    title: "AI Insight Engine",
    desc: "Turn customer feedback into clear strategic direction.",
  },
  {
    icon: BarChart3,
    title: "Performance Signal Mapping",
    desc: "Spot winning angles and weak messaging instantly.",
  },
  {
    icon: Sparkles,
    title: "Creative Angle Generation",
    desc: "Generate high-converting ad ideas from real data.",
  },
  {
    icon: ShieldCheck,
    title: "Cleaner Decisions",
    desc: "Reduce guesswork and move faster with confidence.",
  },
];

export default function CustraHomepage() {
  return (
    <div style={{ background: "#050816", color: "white", minHeight: "100vh", padding: "40px" }}>
      
      {/* NAV */}
      <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Layers />
          <strong>Custra</strong>
        </div>
        <Button>Request Demo</Button>
      </header>

      {/* HERO */}
      <section>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Turn customer noise into{" "}
          <span style={{ color: "#22d3ee" }}>winning creative</span>
        </motion.h1>

        <p style={{ marginTop: "10px", opacity: 0.7 }}>
          Custra analyzes customer feedback and ad data to surface better messaging.
        </p>

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <Button>
            Get Early Access <ArrowRight size={16} />
          </Button>
          <Button>See Overview</Button>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ marginTop: "60px" }}>
        <h2>Features</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "20px", marginTop: "20px" }}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Card key={i}>
                <CardContent className="p-4">
                  <Icon />
                  <h3>{f.title}</h3>
                  <p style={{ opacity: 0.7 }}>{f.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ marginTop: "60px" }}>
        <h2>Get Early Access</h2>

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <Input placeholder="Enter your email" />
          <Button>Join</Button>
        </div>

        <p style={{ marginTop: "10px", opacity: 0.6 }}>
          Or reach us at: hello@getcustra.com
        </p>
      </section>

    </div>
  );
}