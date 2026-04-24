import { getMealDetail, parseRecipeIngredients } from "@/services/api";
import MealDetailTemplate from "@/components/templates/MealDetailTemplate";
import ErrorAlert from "@/components/atoms/ErrorAlert";
import EmptyState from "@/components/atoms/EmptyState";
import type { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const meal = await getMealDetail(params.id);
    if (!meal) return { title: "Meal Not Found — MealExplorer" };
    return {
      title: `${meal.strMeal} | MealExplorer`,
      description: `Full recipe, ingredients, and video tutorial for ${meal.strMeal}.`,
      openGraph: {
        title: meal.strMeal,
        description: `${meal.strArea} cuisine · ${meal.strCategory}`,
        images: [{ url: meal.strMealThumb }],
      },
    };
  } catch {
    return { title: "Meal — MealExplorer" };
  }
}

export default async function MealDetailPage({ params }: Props) {
  let meal;

  try {
    meal = await getMealDetail(params.id);
  } catch {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <ErrorAlert message="Failed to load meal details. Please go back and try again." />
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <EmptyState
          title="Meal not found"
          description="The meal you're looking for doesn't exist in our database."
        />
      </div>
    );
  }

  const ingredients = parseRecipeIngredients(meal);

  return <MealDetailTemplate meal={meal} ingredients={ingredients} />;
}
