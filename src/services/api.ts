import {
  IngredientsListResponse,
  FilterByIngredientResponse,
  MealDetailResponse,
  Ingredient,
  MealThumb,
  MealDetail,
  RecipeIngredient,
} from "@/types";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// ─── Fetch Helpers ────────────────────────────────────────────────────────

async function fetchApi<T>(url: string): Promise<T> {
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`);
  return res.json() as Promise<T>;
}

// ─── Ingredients ──────────────────────────────────────────────────────────

export async function getIngredients(): Promise<Ingredient[]> {
  const data = await fetchApi<IngredientsListResponse>(
    `${BASE_URL}/list.php?i=list`
  );
  return data.meals ?? [];
}

// ─── Filter by Ingredient ─────────────────────────────────────────────────

export async function getMealsByIngredient(
  ingredientName: string
): Promise<MealThumb[]> {
  const data = await fetchApi<FilterByIngredientResponse>(
    `${BASE_URL}/filter.php?i=${encodeURIComponent(ingredientName)}`
  );
  return data.meals ?? [];
}

// ─── Meal Detail ──────────────────────────────────────────────────────────

export async function getMealDetail(mealId: string): Promise<MealDetail | null> {
  const data = await fetchApi<MealDetailResponse>(
    `${BASE_URL}/lookup.php?i=${encodeURIComponent(mealId)}`
  );
  return data.meals?.[0] ?? null;
}

// ─── Parse Ingredients from Meal Detail ───────────────────────────────────

export function parseRecipeIngredients(meal: MealDetail): RecipeIngredient[] {
  const result: RecipeIngredient[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}` as keyof MealDetail] as
      | string
      | null;
    const measure = meal[`strMeasure${i}` as keyof MealDetail] as
      | string
      | null;
    if (ingredient && ingredient.trim()) {
      result.push({
        ingredient: ingredient.trim(),
        measure: measure?.trim() ?? "",
      });
    }
  }
  return result;
}

// ─── Extract YouTube Video ID ─────────────────────────────────────────────

export function extractYoutubeId(url: string | null): string | null {
  if (!url) return null;
  const match = url.match(/[?&]v=([^&]+)/);
  return match?.[1] ?? null;
}
