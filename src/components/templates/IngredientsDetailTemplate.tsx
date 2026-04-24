import { MealThumb } from "@/types";
import MealList from "@/components/organisms/MealList";
import BackButton from "@/components/atoms/BackButton";
import Image from "next/image";

interface IngredientsDetailTemplateProps {
  ingredientName: string;
  meals: MealThumb[];
}

export default function IngredientsDetailTemplate({
  ingredientName,
  meals,
}: IngredientsDetailTemplateProps) {
  const imageUrl = `https://www.themealdb.com/images/ingredients/${encodeURIComponent(
    ingredientName
  )}.png`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back */}
      <div className="mb-6">
        <BackButton label="Back to Ingredients" href="/ingredients" />
      </div>

      {/* Hero banner */}
      <div className="mb-8 flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-gradient-to-br from-brand-50 to-orange-100 p-6 sm:flex-row sm:items-center shadow-sm">
        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-white/70 shadow-sm">
          <Image
            src={imageUrl}
            alt={ingredientName}
            width={90}
            height={90}
            className="object-contain drop-shadow"
            unoptimized
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Ingredient
          </p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            {ingredientName}
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            {meals.length} meal{meals.length !== 1 ? "s" : ""} found — click
            any card to view the full recipe.
          </p>
        </div>
      </div>

      {/* Meals grid */}
      <MealList meals={meals} ingredientName={ingredientName} />
    </div>
  );
}
