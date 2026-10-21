"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

const SmoothScrollContext = createContext(null);

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }) {
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    // Respect user's preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return; // Fallback to native scrolling if reduced motion is enabled
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Fall back to native scrolling on touch devices
      touchMultiplier: 2,
      infinite: false,
    });

    setLenisInstance(lenis);

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    // Check initial state
    if (body.hasAttribute("data-scroll-locked")) {
      html.classList.add("lenis-stopped");
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-scroll-locked") {
          if (body.hasAttribute("data-scroll-locked")) {
            html.classList.add("lenis-stopped");
          } else {
            html.classList.remove("lenis-stopped");
          }
        }
      });
    });

    observer.observe(body, { attributes: true, attributeFilter: ["data-scroll-locked"] });

    return () => {
      observer.disconnect();
      html.classList.remove("lenis-stopped");
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisInstance}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
