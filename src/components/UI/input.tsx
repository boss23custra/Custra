import React from "react";

export function Input({ className = "", ...props }: any) {
  return (
    <input
      className={`px-4 py-2 rounded-xl bg-white/10 text-white border border-white/10 ${className}`}
      {...props}
    />
  );
}