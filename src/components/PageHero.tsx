import type { ReactNode } from "react";

export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  intro,
  children,
  priority = false,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  priority?: boolean;
}) {
  return (
    <section className="relative isolate">
      <img
        src={image}
        alt={imageAlt}
        width={1600}
        height={1067}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24">
        <div className="fade-up max-w-2xl">
          {eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.18em] text-primary-foreground/80 uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance-title mt-3 font-display text-3xl font-semibold text-primary-foreground md:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/90 md:text-lg">
              {intro}
            </p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
