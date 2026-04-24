import { MealDetail, RecipeIngredient } from "@/types";
import MealDetailCard from "@/components/organisms/MealDetailCard";
import BackButton from "@/components/atoms/BackButton";

interface MealDetailTemplateProps {
  meal: MealDetail;
  ingredients: RecipeIngredient[];
}

export default function MealDetailTemplate({
  meal,
  ingredients,
}: MealDetailTemplateProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back */}
      <div className="mb-6">
        <BackButton label="Back" />
      </div>

      <MealDetailCard meal={meal} ingredients={ingredients} />
    </div>
  );
}
