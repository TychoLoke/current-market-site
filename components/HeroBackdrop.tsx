"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HeroBackdrop({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none"
      >
        <div className="absolute inset-0 blur-3xl">
          <div className="hero-gradient" />
          <div className="hero-gradient hero-gradient-secondary" />
        </div>
      </motion.div>
      {!prefersReducedMotion && (
        <motion.div
          className="absolute -inset-24 opacity-40"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(123,74,226,0.2),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(239,77,91,0.18),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(123,74,226,0.14),transparent_60%)]" />
        </motion.div>
      )}
    </div>
  );
}
