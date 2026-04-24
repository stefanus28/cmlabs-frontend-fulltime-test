"use client";

import { useState, useMemo } from "react";
import { MealThumb } from "@/types";
import MealCard from "@/components/molecules/MealCard";
import SearchBar from "@/components/molecules/SearchBar";
import EmptyState from "@/components/atoms/EmptyState";

interface MealListProps {
  meals: MealThumb[];
  ingredientName: string;
}

export default function MealList({ meals, ingredientName }: MealListProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return meals;
    const q = query.toLowerCase();
    return meals.filter((m) => m.strMeal.toLowerCase().includes(q));
  }, [meals, query]);

  return (
    <div className="space-y-6">
      {/* Search */}
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder={`Search meals with ${ingredientName}…`}
        totalCount={meals.length}
        filteredCount={filtered.length}
      />

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      ) : (
        <EmptyState
          title={`No meals match "${query}"`}
          description={`No meals containing "${ingredientName}" match your search.`}
        />
      )}
    </div>
  );
}
