import { Ingredient } from "@/types";
import IngredientList from "@/components/organisms/IngredientList";
import { SparklesIcon } from "@heroicons/react/24/outline";

interface IngredientsTemplateProps {
  ingredients: Ingredient[];
}

export default function IngredientsTemplate({
  ingredients,
}: IngredientsTemplateProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
          <SparklesIcon className="h-3.5 w-3.5" />
          TheMealDB API
        </div>
        <h1 className="section-title text-3xl sm:text-4xl">
          🧄 All Ingredients
        </h1>
        <p className="mt-2 max-w-xl text-sm text-zinc-500">
          Browse our complete ingredient library. Click any ingredient to
          discover meals you can make with it.
        </p>
      </div>

      {/* List + Search */}
      <IngredientList ingredients={ingredients} />
    </div>
  );
}
