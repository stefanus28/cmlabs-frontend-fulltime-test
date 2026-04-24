import { ReactNode } from "react";

type Variant = "orange" | "green" | "blue" | "zinc" | "red";

const variantStyles: Record<Variant, string> = {
  orange: "bg-brand-100 text-brand-700",
  green:  "bg-emerald-100 text-emerald-700",
  blue:   "bg-blue-100 text-blue-700",
  zinc:   "bg-zinc-100 text-zinc-600",
  red:    "bg-red-100 text-red-700",
};

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export default function Badge({
  children,
  variant = "zinc",
  className = "",
}: BadgeProps) {
  return (
    <span className={`badge ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
