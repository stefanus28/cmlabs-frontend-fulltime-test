"use client";

import SearchInput from "@/components/atoms/SearchInput";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  totalCount?: number;
  filteredCount?: number;
  label?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search…",
  totalCount,
  filteredCount,
  label,
}: SearchBarProps) {
  const showCount =
    totalCount !== undefined && filteredCount !== undefined;

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      {label && (
        <p className="text-sm font-medium text-zinc-500 shrink-0">{label}</p>
      )}
      <SearchInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full sm:max-w-sm"
      />
      {showCount && (
        <p className="text-sm text-zinc-400 whitespace-nowrap">
          {value ? (
            <>
              <span className="font-semibold text-zinc-700">{filteredCount}</span>{" "}
              of {totalCount} results
            </>
          ) : (
            <>
              <span className="font-semibold text-zinc-700">{totalCount}</span>{" "}
              total
            </>
          )}
        </p>
      )}
    </div>
  );
}
