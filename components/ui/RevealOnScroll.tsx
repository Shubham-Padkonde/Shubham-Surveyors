import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

// Essential content stays visible in the initial HTML, with or without JavaScript.
// The static wrapper also respects reduced-motion preferences.
export default function RevealOnScroll({
  children,
  className,
}: RevealOnScrollProps) {
  return <div className={className}>{children}</div>;
}
