export default function MealDetailLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 animate-pulse">
      {/* Back button */}
      <div className="mb-6 h-9 w-24 rounded-xl bg-zinc-200" />

      {/* Hero grid */}
      <div className="grid gap-8 lg:grid-cols-2 mb-8">
        <div className="aspect-video lg:aspect-square rounded-2xl bg-zinc-200" />
        <div className="space-y-4 py-2">
          <div className="h-10 w-3/4 rounded-xl bg-zinc-200" />
          <div className="flex gap-2">
            <div className="h-6 w-20 rounded-full bg-zinc-200" />
            <div className="h-6 w-24 rounded-full bg-zinc-200" />
          </div>
          <div className="grid grid-cols-2 gap-3 pt-4">
            <div className="h-24 rounded-xl bg-zinc-200" />
            <div className="h-24 rounded-xl bg-zinc-200" />
          </div>
          <div className="h-10 w-40 rounded-xl bg-zinc-200" />
        </div>
      </div>

      {/* Ingredients + instructions */}
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2 rounded-2xl border border-zinc-100 p-6 space-y-3">
          <div className="h-6 w-32 rounded bg-zinc-200" />
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-10 rounded-xl bg-zinc-100" />
          ))}
        </div>
        <div className="lg:col-span-3 rounded-2xl border border-zinc-100 p-6 space-y-3">
          <div className="h-6 w-32 rounded bg-zinc-200" />
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-5 rounded bg-zinc-100" />
          ))}
        </div>
      </div>
    </div>
  );
}
