import { ThunderboltFilled } from "@ant-design/icons";

import type { StatCardItem } from "./types";

type StatCardProps = {
  card: StatCardItem;
};

export function StatCard({ card }: StatCardProps) {
  const { icon: StatIcon } = card;

  return (
    <article className="neo-card rounded-[22px] px-4 py-4 sm:rounded-[26px] sm:px-5 sm:py-5 md:rounded-3xl md:px-4 md:py-4 xl:rounded-[30px] xl:px-5 xl:py-5">
      <div
        className="neo-icon-surface mb-2.5 grid h-8 w-8 place-items-center rounded-lg sm:mb-3 sm:h-9 sm:w-9 md:h-9 md:w-9"
        style={{ backgroundColor: `${card.color}26`, color: card.color }}
      >
        <StatIcon className="text-base" />
      </div>
      <p className="text-xs font-medium text-[#7D8FAA] xl:text-[13px]">
        {card.title}
      </p>
      <p className="mt-0.5 text-2xl font-bold leading-tight tracking-tight text-[#2E78FF] sm:text-[1.625rem] xl:text-[1.75rem]">
        {card.value}
      </p>
      <p
        className={`mt-1 text-[10px] font-semibold xl:text-[11px] ${
          card.positive ? "text-[#16C784]" : "text-[#F5647B]"
        }`}
      >
        {card.positive ? "↗ " : "↘ "}
        {card.delta}
      </p>
    </article>
  );
}
