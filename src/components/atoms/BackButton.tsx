"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface BackButtonProps {
  label?: string;
  href?: string;
}

export default function BackButton({ label = "Back", href }: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) router.push(href);
    else router.back();
  };

  return (
    <button
      onClick={handleClick}
      className="btn-secondary group flex items-center gap-2 text-sm"
      aria-label="Go back"
    >
      <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
      {label}
    </button>
  );
}
