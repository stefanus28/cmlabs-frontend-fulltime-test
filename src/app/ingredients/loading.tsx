export default function IngredientsLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 animate-pulse">
      {/* Header skeleton */}
      <div className="mb-8 space-y-3">
        <div className="h-5 w-32 rounded-full bg-zinc-200" />
        <div className="h-10 w-64 rounded-xl bg-zinc-200" />
        <div className="h-4 w-96 rounded-lg bg-zinc-200" />
      </div>
      {/* Search bar skeleton */}
      <div className="mb-6 h-12 w-full max-w-sm rounded-xl bg-zinc-200" />
      {/* Grid skeleton */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-zinc-100 bg-zinc-100 overflow-hidden">
            <div className="h-36 bg-zinc-200" />
            <div className="p-3 space-y-1.5">
              <div className="h-3.5 w-3/4 rounded bg-zinc-200" />
              <div className="h-3 w-1/2 rounded bg-zinc-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
