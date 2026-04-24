"use client";

import { useEffect } from "react";
import { ExclamationTriangleIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center py-28 px-4 text-center">
      <div className="mb-4 rounded-full bg-red-100 p-5">
        <ExclamationTriangleIcon className="h-10 w-10 text-red-500" />
      </div>
      <h2 className="text-2xl font-bold text-zinc-900">Something went wrong</h2>
      <p className="mt-2 text-sm text-zinc-500">
        An unexpected error occurred while loading this page.
      </p>
      <button
        onClick={reset}
        className="btn-primary mt-6"
      >
        <ArrowPathIcon className="h-4 w-4" />
        Try again
      </button>
    </div>
  );
}
