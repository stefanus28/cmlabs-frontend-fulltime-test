import { RecipeIngredient } from "@/types";

interface RecipeIngredientRowProps {
  item: RecipeIngredient;
  index: number;
}

export default function RecipeIngredientRow({
  item,
  index,
}: RecipeIngredientRowProps) {
  const imageUrl = `https://www.themealdb.com/images/ingredients/${encodeURIComponent(
    item.ingredient
  )}-Small.png`;

  return (
    <li className="flex items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-zinc-50">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-600">
        {index + 1}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={item.ingredient}
        width={36}
        height={36}
        className="h-9 w-9 rounded-lg object-contain"
        loading="lazy"
      />
      <div className="flex flex-1 items-center justify-between gap-2">
        <span className="text-sm font-medium text-zinc-800">
          {item.ingredient}
        </span>
        {item.measure && (
          <span className="rounded-lg bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-600">
            {item.measure}
          </span>
        )}
      </div>
    </li>
  );
}
