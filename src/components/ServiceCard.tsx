"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import type { Service, ServiceSuit } from "@/data/portfolio";

const SUIT_SRC: Record<ServiceSuit, string> = {
  diamond: "/suits/suit-diamonds.svg",
  spade: "/suits/suit-spades.svg",
  club: "/suits/suit-clubs.svg",
};

type ServiceCardProps = {
  service: Service;
  index: number;
  playEntryAnimation: boolean;
};

function canUseTilt() {
  return window.matchMedia(
    "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
  ).matches;
}

export function ServiceCard({
  service,
  index,
  playEntryAnimation,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);
  const [entryComplete, setEntryComplete] = useState(!playEntryAnimation);

  useLayoutEffect(() => {
    if (!playEntryAnimation) {
      setEntryComplete(true);
      return;
    }
    setEntryComplete(false);
  }, [playEntryAnimation]);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setEntryComplete(true);
      return;
    }

    function onMove(event: MouseEvent) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = el!.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        el!.style.setProperty("--rx", `${(0.5 - y) * 16}deg`);
        el!.style.setProperty("--ry", `${(x - 0.5) * 16}deg`);
        el!.style.setProperty("--mx", `${x * 100}%`);
        el!.style.setProperty("--my", `${y * 100}%`);
        el!.style.setProperty("--shine-opacity", "1");
      });
    }

    function onLeave() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      el!.style.setProperty("--rx", "0deg");
      el!.style.setProperty("--ry", "0deg");
      el!.style.setProperty("--shine-opacity", "0");
    }

    function attachTilt() {
      if (!canUseTilt()) return;
      el!.addEventListener("mousemove", onMove);
      el!.addEventListener("mouseleave", onLeave);
    }

    if (!playEntryAnimation) {
      attachTilt();
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }

    const delay = 150 + 90 * index + 450;
    const timer = window.setTimeout(() => {
      setEntryComplete(true);
      attachTilt();
    }, delay);

    return () => {
      window.clearTimeout(timer);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [index, playEntryAnimation]);

  return (
    <article
      ref={cardRef}
      className={[
        "service-card",
        playEntryAnimation ? "service-card--animate" : "",
        entryComplete ? "service-card--ready" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--card-index": index } as CSSProperties}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="service-card__image"
        src={service.image}
        alt={service.imageAlt}
        loading={index < 2 ? "eager" : "lazy"}
        decoding="async"
      />
      <div className="service-card__rank">
        <span className="service-card__rank-letter">{service.rank ?? "A"}</span>
        <span
          aria-hidden
          className="service-card__suit"
          style={{ backgroundImage: `url("${SUIT_SRC[service.suit]}")` }}
        />
      </div>
      <div className="service-card__overlay">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__subtitle">{service.subtitle}</p>
        <p className="service-card__body">{service.description}</p>
      </div>
      <div className="service-card__shine" aria-hidden />
      <div className="service-card__holo" aria-hidden />
    </article>
  );
}
