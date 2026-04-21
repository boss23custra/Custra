import React from "react";

export function Card({ children, className = "" }: any) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: any) {
  return <div className={className}>{children}</div>;
}