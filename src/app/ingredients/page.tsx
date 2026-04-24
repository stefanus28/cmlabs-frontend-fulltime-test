import { getIngredients } from "@/services/api";
import IngredientsTemplate from "@/components/templates/IngredientsTemplate";
import ErrorAlert from "@/components/atoms/ErrorAlert";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ingredients|MealExplorer",
  description:
    "Browse all available ingredients and discover the meals you can cook with them.",
};

export default async function IngredientsPage() {
  let ingredients;

  try {
    ingredients = await getIngredients();
  } catch {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <ErrorAlert message="Failed to load ingredients. Please refresh the page." />
      </div>
    );
  }

  return <IngredientsTemplate ingredients={ingredients} />;
}
