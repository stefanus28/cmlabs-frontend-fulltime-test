import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center py-28 px-4 text-center">
      <div className="mb-4 text-6xl">🍽️</div>
      <h1 className="text-4xl font-extrabold text-zinc-900">404</h1>
      <h2 className="mt-2 text-xl font-bold text-zinc-700">Page not found</h2>
      <p className="mt-2 text-sm text-zinc-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/ingredients" className="btn-primary mt-6">
        ← Back to Ingredients
      </Link>
    </div>
  );
}
