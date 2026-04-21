import React from "react";

export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={`px-5 py-2 rounded-xl bg-white text-black font-medium hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}