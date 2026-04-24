import Link from "next/link";
import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { MealThumb } from "@/types";

interface MealCardProps {
  meal: MealThumb;
}

export default function MealCard({ meal }: MealCardProps) {
  return (
    <Link
      href={`/meals/${meal.idMeal}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm card-hover"
      aria-label={`View details for ${meal.strMeal}`}
    >
      {/* Meal image */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {/* Play icon hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <PlayCircleIcon className="h-12 w-12 text-white drop-shadow" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-zinc-800 transition-colors group-hover:text-brand-600">
          {meal.strMeal}
        </h3>
        <p className="mt-1 text-xs text-zinc-400">Tap to see full recipe →</p>
      </div>
    </Link>
  );
}
