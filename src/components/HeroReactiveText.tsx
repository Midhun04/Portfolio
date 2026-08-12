"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type CSSProperties,
  type ElementType,
} from "react";

type TextPart = {
  text: string;
  className?: string;
};

type HeroReactiveTextProps = {
  text?: string;
  parts?: TextPart[];
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  baseWeight?: number;
};

const MIN_WEIGHT = 350;
const MAX_WEIGHT = 800;
const MAX_SHIFT = 6;
const RADIUS = 120;

export function HeroReactiveText({
  text,
  parts,
  as: Tag = "span",
  className,
  style,
  baseWeight = 700,
}: HeroReactiveTextProps) {
  const rootRef = useRef<HTMLElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const reduceMotionRef = useRef(false);
  const baseWeightRef = useRef(baseWeight);

  const resolvedParts = useMemo<TextPart[]>(
    () => parts ?? [{ text: text ?? "" }],
    [parts, text],
  );

  const label = useMemo(
    () => resolvedParts.map((part) => part.text).join(""),
    [resolvedParts],
  );

  useEffect(() => {
    baseWeightRef.current = baseWeight;
  }, [baseWeight]);

  const resetChars = useCallback(() => {
    const weight = baseWeightRef.current;
    for (const char of charRefs.current) {
      if (!char) continue;
      char.style.transform = "translateX(0)";
      char.style.fontVariationSettings = `"wght" ${weight}`;
      char.style.textShadow = "";
      char.style.fontWeight = "";
    }
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = media.matches;

    const onMotionChange = () => {
      reduceMotionRef.current = media.matches;
      if (media.matches) resetChars();
    };

    media.addEventListener("change", onMotionChange);

    const onMove = (e: MouseEvent) => {
      if (reduceMotionRef.current) return;

      const mx = e.clientX;
      const my = e.clientY;
      const weightBase = baseWeightRef.current;

      for (const char of charRefs.current) {
        if (!char) continue;

        const rect = char.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const distance = Math.hypot(mx - cx, my - cy);
        const t = Math.max(0, 1 - distance / RADIUS);

        const weight =
          weightBase +
          t * (MAX_WEIGHT - weightBase) -
          (1 - t) * (weightBase - MIN_WEIGHT);

        char.style.transform = `translateX(${MAX_SHIFT * t}px)`;
        char.style.fontVariationSettings = `"wght" ${weight}`;
        char.style.fontWeight = String(Math.round(weight));
        char.style.textShadow =
          t > 0.02
            ? `0 0 ${12 * t}px color-mix(in srgb, var(--primary-color) ${Math.round(55 * t)}%, transparent)`
            : "";
      }
    };

    const onLeave = () => resetChars();

    root.addEventListener("mousemove", onMove);
    root.addEventListener("mouseleave", onLeave);

    return () => {
      media.removeEventListener("change", onMotionChange);
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseleave", onLeave);
    };
  }, [resetChars, label]);

  let charIndex = 0;

  return (
    <Tag ref={rootRef} className={className} style={style} aria-label={label}>
      {resolvedParts.map((part, partIndex) => (
        <span key={`${part.text}-${partIndex}`} className={part.className}>
          {[...part.text].map((letter) => {
            const index = charIndex++;
            return (
              <span
                key={`${letter}-${index}`}
                ref={(el) => {
                  charRefs.current[index] = el;
                }}
                className={
                  letter === " " ? "hero-char hero-char--space" : "hero-char"
                }
                aria-hidden="true"
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
