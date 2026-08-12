"use client";

import { useState, type FormEvent } from "react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  accept: boolean;
};

const initial: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  accept: false,
};

function ContactCard({
  title,
  value,
  href,
  icon,
}: {
  title: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative mb-10 pl-[5.5rem]">
      <div className="icon-circle absolute left-0 top-0 text-primary">{icon}</div>
      <h3 className="font-script text-[1.75rem] leading-tight text-title">
        {title}
      </h3>
      {href ? (
        <a href={href} className="mt-1 block text-text hover:text-primary">
          {value}
        </a>
      ) : (
        <p className="mt-1 text-text">{value}</p>
      )}
    </div>
  );
}

export function Contact() {
  const { contact } = portfolio;
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [sent, setSent] = useState(false);

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Enter a valid email";
    if (!values.subject.trim()) next.subject = "Subject is required";
    if (!values.message.trim()) next.message = "Message is required";
    if (!values.accept) next.accept = "Please accept the terms";
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(initial);
  }

  const inputClass =
    "w-full rounded-none border-2 border-board bg-container px-5 py-4 text-sm text-title outline-none transition-colors placeholder:text-board focus:border-primary";

  return (
    <section id="contact" className="section scroll-mt-8">
      <div className="section__inner">
        <Reveal>
          <SectionHeading
            eyebrow="Contact Me"
            title={contact.heading}
            watermark="Contact Me"
          />
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal>
            <div>
              <ContactCard
                title="Address"
                value={contact.address}
                icon={
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                }
              />
              <ContactCard
                title="Freelance"
                value={contact.freelance}
                icon={
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M8 7V6a4 4 0 0 1 8 0v1" />
                    <rect x="4" y="7" width="16" height="13" rx="2" />
                  </svg>
                }
              />
              <ContactCard
                title="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
                icon={
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 7 9-7" />
                  </svg>
                }
              />
              <ContactCard
                title="Phone"
                value={contact.phone}
                href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                icon={
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M6.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 13.5l4 1.5v3A2 2 0 0 1 18 20 14 14 0 0 1 4 6a2 2 0 0 1 2.5-2Z" />
                  </svg>
                }
              />
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            {sent ? (
              <div className="card card--padded">
                <p className="font-script text-3xl text-title">Message ready</p>
                <p className="mt-3 text-sm text-text">
                  Thanks for reaching out. You can also email me directly at{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-primary hover:underline"
                  >
                    {contact.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  className="btn mt-6"
                  onClick={() => setSent(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="grid gap-7 md:grid-cols-2 md:gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 ml-6 block text-[var(--smaller-font-size)] font-bold text-title"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      className={inputClass}
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 ml-6 block text-[var(--smaller-font-size)] font-bold text-title"
                    >
                      Your Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="mt-7">
                  <label
                    htmlFor="subject"
                    className="mb-2 ml-6 block text-[var(--smaller-font-size)] font-bold text-title"
                  >
                    Your Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className={inputClass}
                    value={form.subject}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, subject: e.target.value }))
                    }
                  />
                  {errors.subject && (
                    <p className="mt-2 text-xs text-red-400">{errors.subject}</p>
                  )}
                </div>

                <div className="mt-7">
                  <label
                    htmlFor="message"
                    className="mb-2 ml-6 block text-[var(--smaller-font-size)] font-bold text-title"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`${inputClass} resize-y`}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                <div className="mt-6">
                  <label className="flex items-start gap-3 text-sm text-text">
                    <input
                      type="checkbox"
                      className="mt-1 accent-[var(--primary-color)]"
                      checked={form.accept}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, accept: e.target.checked }))
                      }
                    />
                    <span>* Accept the terms and conditions.</span>
                  </label>
                  {errors.accept && (
                    <p className="mt-2 text-xs text-red-400">{errors.accept}</p>
                  )}
                </div>

                <button type="submit" className="btn btn--primary mt-8">
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
