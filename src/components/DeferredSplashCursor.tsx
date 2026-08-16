"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { SplashCursorProps } from "@/components/SplashCursor";

const SplashCursor = dynamic(() => import("@/components/SplashCursor"), {
  ssr: false,
});

export function DeferredSplashCursor(props: SplashCursorProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const smallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (reduceMotion || coarsePointer || smallScreen) {
      return;
    }

    const enable = () => setEnabled(true);

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(enable, { timeout: 1800 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(enable, 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!enabled) return null;

  return <SplashCursor {...props} />;
}
