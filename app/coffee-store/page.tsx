import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 w-full min-h-screen px-6 py-6">
      <Link
        href="/"
        className="
      inline-flex items-center gap-2
      px-5 py-3
      rounded-xl
      bg-white/20
      backdrop-blur-md
      text-white
      font-medium
      shadow-lg
      hover:bg-white/30
      hover:scale-105
      transition-all duration-300
    "
      >
        ← Back to Home
      </Link>
    </div>
  );
}
