"use client";

import { useState, useMemo } from "react";
import { Ingredient } from "@/types";
import IngredientCard from "@/components/molecules/IngredientCard";
import SearchBar from "@/components/molecules/SearchBar";
import EmptyState from "@/components/atoms/EmptyState";

interface IngredientListProps {
  ingredients: Ingredient[];
}

export default function IngredientList({ ingredients }: IngredientListProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return ingredients;
    const q = query.toLowerCase();
    return ingredients.filter((i) =>
      i.strIngredient.toLowerCase().includes(q)
    );
  }, [ingredients, query]);

  return (
    <div className="space-y-6">
      {/* Search */}
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search ingredients by name…"
        totalCount={ingredients.length}
        filteredCount={filtered.length}
      />

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filtered.map((ingredient) => (
            <IngredientCard
              key={ingredient.idIngredient}
              ingredient={ingredient}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title={`No ingredients match "${query}"`}
          description="Try a different keyword like 'chicken', 'garlic', or 'tomato'."
        />
      )}
    </div>
  );
}
