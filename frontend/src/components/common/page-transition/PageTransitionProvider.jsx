"use client";

import { AnimatePresence } from "framer-motion";

export function PageTransitionProvider({ children }) {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
}
