"use client";

import { useMemo } from "react";

import { ALL_ACTIVITIES } from "./data";
import { useDashboardSearch } from "./DashboardSearchContext";

import type { ActivityRow } from "./types";

const statusStyles = {
  completed: "bg-[#CBFDE3] text-[#16C784]",
  pending: "bg-[#E0EDFF] text-[#2D7CFF]",
} as const;

const statusLabel = {
  completed: "COMPLETED",
  pending: "PENDING",
} as const;

function filterRows(rows: ActivityRow[], q: string): ActivityRow[] {
  const s = q.trim().toLowerCase();
  if (!s) return rows;
  return rows.filter(
    (r) =>
      r.name.toLowerCase().includes(s) ||
      r.activity.toLowerCase().includes(s) ||
      r.initials.toLowerCase().includes(s),
  );
}

export function ActivitiesFullList() {
  const { search } = useDashboardSearch();

  const rows = useMemo(() => filterRows(ALL_ACTIVITIES, search), [search]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "Total tasks",
            value: ALL_ACTIVITIES.length,
            color: "#2D7CFF",
          },
          {
            label: "Completed",
            value: ALL_ACTIVITIES.filter((a) => a.status === "completed")
              .length,
            color: "#16C784",
          },
          {
            label: "Pending",
            value: ALL_ACTIVITIES.filter((a) => a.status === "pending").length,
            color: "#FFB532",
          },
        ].map((s) => (
          <div key={s.label} className="neo-card rounded-2xl px-5 py-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#A3B2C7]">
              {s.label}
            </p>
            <p className="mt-1 text-2xl font-bold text-[#2E78FF]">{s.value}</p>
          </div>
        ))}
      </div>

      <article className="neo-card rounded-[22px] px-4 py-5 sm:rounded-[26px] sm:px-6 sm:py-6 md:rounded-[26px] md:px-5 md:py-5 xl:rounded-[30px] xl:px-6 xl:py-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-medium text-[#8B9BB4]">
            Showing {rows.length} of {ALL_ACTIVITIES.length} activities
            {search.trim() ? ` matching "${search.trim()}"` : ""}.
          </p>
          <button className="text-xs font-bold text-[#2D7CFF] hover:underline">
            Clear all
          </button>
        </div>

        {rows.length === 0 ? (
          <p className="rounded-[18px] bg-[#F4F7FB] px-4 py-10 text-center text-sm font-medium text-[#8B9BB4]">
            No activities match your search.
          </p>
        ) : (
          <>
            <div className="hidden overflow-x-auto md:block">
              <div className="min-w-120 xl:min-w-140">
                <div className="grid grid-cols-[2fr_2fr_1fr_1fr] border-b border-[#EEF3F9] pb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#B4C0D1] xl:text-[11px]">
                  <span>USER</span>
                  <span>ACTIVITY</span>
                  <span>STATUS</span>
                  <span className="text-right">DATE</span>
                </div>
                {rows.map((row) => (
                  <div
                    key={`${row.name}-${row.date}-full`}
                    className="grid grid-cols-[2fr_2fr_1fr_1fr] items-center gap-2 border-b border-[#F4F7FB] py-2.5 last:border-b-0 xl:py-3"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#EFF5FF] text-[10px] font-bold text-[#2D7CFF] xl:h-9 xl:w-9 xl:text-[11px]">
                        {row.initials}
                      </div>
                      <span className="truncate text-sm font-bold text-[#2E78FF] xl:text-[15px]">
                        {row.name}
                      </span>
                    </div>
                    <span className="min-w-0 truncate text-sm font-normal text-[#435B7A] xl:text-[14px]">
                      {row.activity}
                    </span>
                    <span
                      className={`w-fit rounded-full px-2 py-0.5 text-[9px] font-bold uppercase xl:text-[10px] ${statusStyles[row.status]}`}
                    >
                      {statusLabel[row.status]}
                    </span>
                    <span className="text-right text-sm font-normal text-[#9CABBF] xl:text-[14px]">
                      {row.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ul
              className="flex flex-col gap-3 md:hidden"
              aria-label="All activities"
            >
              {rows.map((row) => (
                <li key={`${row.name}-${row.date}-full-m`}>
                  <div className="neo-card-inset rounded-[18px] p-3.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-2.5">
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#EFF5FF] text-[11px] font-bold text-[#2D7CFF]">
                          {row.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-[#2E78FF]">
                            {row.name}
                          </p>
                          <p className="mt-0.5 text-sm font-normal text-[#435B7A]">
                            {row.activity}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold ${statusStyles[row.status]}`}
                      >
                        {statusLabel[row.status]}
                      </span>
                    </div>
                    <p className="mt-2.5 text-sm text-[#9CABBF]">{row.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </article>
    </div>
  );
}
