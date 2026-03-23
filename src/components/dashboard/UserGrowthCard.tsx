"use client";

import { useMemo, useState } from "react";

import { CHART_MONTHS, CHART_WEEKS } from "./data";

type Period = "weekly" | "monthly";

export function UserGrowthCard() {
  const [period, setPeriod] = useState<Period>("monthly");

  const { subtitle, labels, chart } = useMemo(() => {
    if (period === "monthly") {
      return {
        subtitle: "Monthly trend overview",
        labels: CHART_MONTHS,
        chart: (
          <svg viewBox="0 0 780 300" className="h-full w-full" aria-hidden>
            <defs>
              <linearGradient id="userGrowthLineColor" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#1E5DFF" />
                <stop offset="100%" stopColor="#0DE8FF" />
              </linearGradient>
              <linearGradient
                id="userGrowthFillColor"
                x1="0%"
                x2="0%"
                y1="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#A9EAFF" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M20,252 C86,251 100,246 145,228 C195,208 235,204 286,184 C338,163 360,166 404,144 C461,114 497,118 541,97 C594,71 622,76 664,93 C696,107 727,118 760,106 L760,285 L20,285 Z"
              fill="url(#userGrowthFillColor)"
            />
            <path
              d="M20,252 C86,251 100,246 145,228 C195,208 235,204 286,184 C338,163 360,166 404,144 C461,114 497,118 541,97 C594,71 622,76 664,93 C696,107 727,118 760,106"
              fill="none"
              stroke="url(#userGrowthLineColor)"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        ),
      };
    }
    return {
      subtitle: "Last 7 days snapshot",
      labels: CHART_WEEKS,
      chart: (
        <svg viewBox="0 0 780 300" className="h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="userGrowthLineColorW" x1="0%" x2="100%">
              <stop offset="0%" stopColor="#1E5DFF" />
              <stop offset="100%" stopColor="#0DE8FF" />
            </linearGradient>
            <linearGradient
              id="userGrowthFillColorW"
              x1="0%"
              x2="0%"
              y1="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#A9EAFF" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path
            d="M20,268 C120,255 160,248 220,230 C280,210 340,218 400,195 C460,172 500,185 560,165 C620,145 680,158 760,142 L760,285 L20,285 Z"
            fill="url(#userGrowthFillColorW)"
          />
          <path
            d="M20,268 C120,255 160,248 220,230 C280,210 340,218 400,195 C460,172 500,185 560,165 C620,145 680,158 760,142"
            fill="none"
            stroke="url(#userGrowthLineColorW)"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      ),
    };
  }, [period]);

  return (
    <article className="neo-card w-full rounded-[22px] px-4 py-5 sm:rounded-[26px] sm:px-6 sm:py-6 md:rounded-[26px] md:px-5 md:py-5 xl:rounded-[30px] xl:px-6 xl:py-6">
      <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h2 className="text-lg font-bold leading-tight text-[#2E78FF] sm:text-[1.125rem] xl:text-[1.125rem]">
            User Growth
          </h2>
          <p className="mt-0.5 text-xs font-medium text-[#A3B2C7] xl:text-[13px]">
            {subtitle}
          </p>
        </div>
        <div
          className="neo-segment-wrap flex w-full shrink-0 rounded-full p-0.5 sm:w-auto"
          role="group"
          aria-label="Chart period"
        >
          <button
            type="button"
            onClick={() => setPeriod("weekly")}
            className={`neo-segment flex-1 rounded-full px-3 py-1.5 text-xs font-semibold sm:flex-initial sm:px-4 ${
              period === "weekly"
                ? "neo-segment-active text-white"
                : "text-[#1A3157]"
            }`}
          >
            Weekly
          </button>
          <button
            type="button"
            onClick={() => setPeriod("monthly")}
            className={`neo-segment flex-1 rounded-full px-3 py-1.5 text-xs font-semibold sm:flex-initial sm:px-4 ${
              period === "monthly"
                ? "neo-segment-active text-white"
                : "text-[#1A3157]"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>
      <div className="neo-chart-well h-[200px] w-full rounded-[18px] p-3 sm:h-[240px] sm:rounded-[22px] sm:p-3.5 md:h-[260px] xl:h-[280px] xl:rounded-[24px]">
        {chart}
      </div>
      <div
        className={`mt-2.5 grid gap-0.5 text-center text-[10px] font-semibold tracking-wide text-[#AFBCCE] xl:text-[11px] ${
          period === "weekly" ? "grid-cols-7" : "grid-cols-6"
        }`}
      >
        {labels.map((label) => (
          <span key={label} className="min-w-0 truncate">
            {label}
          </span>
        ))}
      </div>
    </article>
  );
}
