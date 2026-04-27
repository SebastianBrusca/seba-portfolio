"use client";

import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-neutral-100 relative z-10">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8">
        {children}
      </main>
    </div>
  );
}
