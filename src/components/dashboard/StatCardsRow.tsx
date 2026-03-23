"use client";

import { useMemo } from "react";

import { STAT_CARDS } from "./data";
import { useDashboardSearch } from "./DashboardSearchContext";
import { StatCard } from "./StatCard";

export function StatCardsRow() {
  const { search } = useDashboardSearch();

  const cards = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return STAT_CARDS;
    const filtered = STAT_CARDS.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.value.toLowerCase().includes(q) ||
        c.delta.toLowerCase().includes(q)
    );
    return filtered.length > 0 ? filtered : STAT_CARDS;
  }, [search]);

  return (
    <div className="mb-4 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:mb-5 md:grid-cols-2 md:gap-4 xl:mb-6 xl:grid-cols-4 xl:gap-5">
      {cards.map((card) => (
        <StatCard key={card.title} card={card} />
      ))}
    </div>
  );
}
