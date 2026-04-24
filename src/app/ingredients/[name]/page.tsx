import { getMealsByIngredient } from "@/services/api";
import IngredientsDetailTemplate from "@/components/templates/IngredientsDetailTemplate";
import ErrorAlert from "@/components/atoms/ErrorAlert";
import EmptyState from "@/components/atoms/EmptyState";
import type { Metadata } from "next";

interface Props {
  params: { name: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = decodeURIComponent(params.name);
  return {
    title: `${name} Meals|MealExplorer`,
    description: `Discover all meals you can cook using ${name} as an ingredient.`,
  };
}

export default async function IngredientDetailPage({ params }: Props) {
  const ingredientName = decodeURIComponent(params.name);
  let meals;

  try {
    meals = await getMealsByIngredient(ingredientName);
  } catch {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <ErrorAlert message={`Failed to load meals for "${ingredientName}". Please go back and try again.`} />
      </div>
    );
  }

  if (!meals || meals.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <EmptyState
          title={`No meals found for "${ingredientName}"`}
          description="This ingredient has no associated meals in the database. Try another one."
        />
      </div>
    );
  }

  return (
    <IngredientsDetailTemplate
      ingredientName={ingredientName}
      meals={meals}
    />
  );
}
