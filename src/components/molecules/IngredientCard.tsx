import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Ingredient } from "@/types";

interface IngredientCardProps {
  ingredient: Ingredient;
}

export default function IngredientCard({ ingredient }: IngredientCardProps) {
  const imageUrl = `https://www.themealdb.com/images/ingredients/${encodeURIComponent(
    ingredient.strIngredient
  )}.png`;

  return (
    <Link
      href={`/ingredients/${encodeURIComponent(ingredient.strIngredient)}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm card-hover"
      aria-label={`View meals with ${ingredient.strIngredient}`}
    >
      {/* Image area */}
      <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-brand-50 to-orange-100 px-4">
        <Image
          src={imageUrl}
          alt={ingredient.strIngredient}
          width={100}
          height={100}
          className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center justify-between gap-2 px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-zinc-800">
            {ingredient.strIngredient}
          </p>
          {ingredient.strType && (
            <p className="truncate text-xs text-zinc-400">{ingredient.strType}</p>
          )}
        </div>
        <ChevronRightIcon className="h-4 w-4 shrink-0 text-zinc-300 transition-colors group-hover:text-brand-500" />
      </div>
    </Link>
  );
}
