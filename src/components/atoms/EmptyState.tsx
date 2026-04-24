import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function EmptyState({
  title = "No results found",
  description = "Try adjusting your search or filter to find what you're looking for.",
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-4 rounded-full bg-zinc-100 p-5 text-zinc-400">
        {icon ?? <MagnifyingGlassIcon className="h-8 w-8" />}
      </div>
      <h3 className="text-lg font-semibold text-zinc-700">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-zinc-400">{description}</p>
    </div>
  );
}
