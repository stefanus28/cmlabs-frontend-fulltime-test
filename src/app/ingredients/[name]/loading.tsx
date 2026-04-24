export default function IngredientDetailLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 animate-pulse">
      {/* Back button skeleton */}
      <div className="mb-6 h-9 w-40 rounded-xl bg-zinc-200" />

      {/* Hero banner skeleton */}
      <div className="mb-8 flex gap-6 rounded-2xl border border-zinc-100 bg-zinc-100 p-6">
        <div className="h-28 w-28 shrink-0 rounded-2xl bg-zinc-200" />
        <div className="flex-1 space-y-3 py-2">
          <div className="h-4 w-24 rounded bg-zinc-200" />
          <div className="h-9 w-56 rounded-xl bg-zinc-200" />
          <div className="h-4 w-40 rounded bg-zinc-200" />
        </div>
      </div>

      {/* Search skeleton */}
      <div className="mb-6 h-12 w-full max-w-sm rounded-xl bg-zinc-200" />

      {/* Meal cards skeleton */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-zinc-100 bg-zinc-100 overflow-hidden">
            <div className="aspect-video bg-zinc-200" />
            <div className="p-4 space-y-2">
              <div className="h-4 w-3/4 rounded bg-zinc-200" />
              <div className="h-3 w-1/3 rounded bg-zinc-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
