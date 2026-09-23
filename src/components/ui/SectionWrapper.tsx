import type { ReactNode } from "react";

/**
 * Standard section shell: consistent vertical rhythm + max-width container.
 * Server component — animation is opted-in per child via <Reveal />.
 */
export function SectionWrapper({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`section-pad scroll-mt-20 ${className}`}
    >
      <div className="container-px">{children}</div>
    </section>
  );
}
