import Image from "next/image";
import Badge from "@/components/atoms/Badge";
import RecipeIngredientRow from "@/components/molecules/RecipeIngredientRow";
import { MealDetail, RecipeIngredient } from "@/types";
import { extractYoutubeId } from "@/services/api";
import {
  TagIcon,
  GlobeAltIcon,
  BookOpenIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

interface MealDetailCardProps {
  meal: MealDetail;
  ingredients: RecipeIngredient[];
}

export default function MealDetailCard({
  meal,
  ingredients,
}: MealDetailCardProps) {
  const youtubeId = extractYoutubeId(meal.strYoutube);
  const tags = meal.strTags
    ? meal.strTags.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  return (
    <article className="space-y-8">
      {/* Hero Section */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg lg:aspect-square">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Meta */}
        <div className="flex flex-col justify-center space-y-5">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl leading-tight">
              {meal.strMeal}
            </h1>
            <div className="mt-3 flex flex-wrap gap-2">
              {meal.strCategory && (
                <Badge variant="orange">{meal.strCategory}</Badge>
              )}
              {meal.strArea && (
                <Badge variant="blue">{meal.strArea} Cuisine</Badge>
              )}
              {tags.map((tag) => (
                <Badge key={tag} variant="zinc">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-brand-50 p-4">
              <div className="flex items-center gap-2 text-brand-600 mb-1">
                <BeakerIcon className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Ingredients
                </span>
              </div>
              <p className="text-2xl font-bold text-brand-700">
                {ingredients.length}
              </p>
            </div>
            <div className="rounded-xl bg-emerald-50 p-4">
              <div className="flex items-center gap-2 text-emerald-600 mb-1">
                <GlobeAltIcon className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Origin
                </span>
              </div>
              <p className="text-2xl font-bold text-emerald-700">
                {meal.strArea || "—"}
              </p>
            </div>
          </div>

          {/* Source link */}
          {meal.strSource && (
            <a
              href={meal.strSource}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary self-start"
            >
              <BookOpenIcon className="h-4 w-4" />
              View Original Recipe
            </a>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex items-start gap-2">
              <TagIcon className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Two-column layout: Ingredients + Instructions */}
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Ingredients list */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-zinc-900">
              <BeakerIcon className="h-5 w-5 text-brand-500" />
              Ingredients
            </h2>
            <ul className="divide-y divide-zinc-100">
              {ingredients.map((item, idx) => (
                <RecipeIngredientRow key={item.ingredient} item={item} index={idx} />
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm h-full">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-zinc-900">
              <BookOpenIcon className="h-5 w-5 text-brand-500" />
              Instructions
            </h2>
            <div className="space-y-3">
              {meal.strInstructions
                .split(/\r?\n/)
                .filter((s) => s.trim())
                .map((step, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-600">
                      {idx + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-zinc-700">
                      {step.trim()}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Embed */}
      {youtubeId && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-zinc-900">
            🎬 Video Tutorial
          </h2>
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={`${meal.strMeal} — Video Tutorial`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </article>
  );
}
