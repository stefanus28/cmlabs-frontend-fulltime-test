interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-5 w-5 border-2",
  md: "h-9 w-9 border-[3px]",
  lg: "h-14 w-14 border-4",
};

export default function LoadingSpinner({
  size = "md",
  className = "",
}: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={`animate-spin rounded-full border-brand-500 border-t-transparent ${sizes[size]} ${className}`}
    />
  );
}
