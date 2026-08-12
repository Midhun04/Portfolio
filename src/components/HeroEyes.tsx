"use client";

import { useEffect, useRef } from "react";

type EyeTarget = {
  eye: HTMLElement;
  pupil: HTMLElement;
};

export function HeroEyes() {
  const leftEyeRef = useRef<HTMLSpanElement>(null);
  const rightEyeRef = useRef<HTMLSpanElement>(null);
  const leftPupilRef = useRef<HTMLSpanElement>(null);
  const rightPupilRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const leftEye = leftEyeRef.current;
    const rightEye = rightEyeRef.current;
    const leftPupil = leftPupilRef.current;
    const rightPupil = rightPupilRef.current;
    if (!leftEye || !rightEye || !leftPupil || !rightPupil) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const targets: EyeTarget[] = [
      { eye: leftEye, pupil: leftPupil },
      { eye: rightEye, pupil: rightPupil },
    ];

    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;
    let rafId = 0;
    let blinkTimer = 0;
    let running = true;

    const onPointerMove = (e: PointerEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    };

    const updatePupils = () => {
      if (!running) return;

      for (const { eye, pupil } of targets) {
        const rect = eye.getBoundingClientRect();
        if (!rect.width) continue;

        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(cursorY - eyeY, cursorX - eyeX);
        const maxDist = Math.min(rect.width, rect.height) * 0.22;
        const dist = Math.min(
          maxDist,
          Math.hypot(cursorX - eyeX, cursorY - eyeY) * 0.12,
        );

        pupil.style.transform = `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px))`;
      }

      rafId = requestAnimationFrame(updatePupils);
    };

    const blink = () => {
      for (const { eye } of targets) eye.classList.add("is-blinking");
      window.setTimeout(() => {
        for (const { eye } of targets) eye.classList.remove("is-blinking");
      }, 160);
    };

    const scheduleBlink = () => {
      blinkTimer = window.setTimeout(
        () => {
          blink();
          scheduleBlink();
        },
        2200 + Math.random() * 3800,
      );
    };

    if (!reduceMotion) {
      document.addEventListener("pointermove", onPointerMove, { passive: true });
      rafId = requestAnimationFrame(updatePupils);
      scheduleBlink();
    }

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.clearTimeout(blinkTimer);
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <span className="nav-eyes" aria-hidden="true">
      <span ref={leftEyeRef} className="nav-eye">
        <span ref={leftPupilRef} className="nav-eye__pupil" />
      </span>
      <span ref={rightEyeRef} className="nav-eye">
        <span ref={rightPupilRef} className="nav-eye__pupil" />
      </span>
    </span>
  );
}
