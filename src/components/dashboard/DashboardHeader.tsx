"use client";

import React, { useEffect, useState } from "react";
import {
  BellFilled,
  MenuOutlined,
  SearchOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import { Popover, Badge } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useDashboardSearch } from "./DashboardSearchContext";
import { useTheme } from "./ThemeContext";
import { NOTIFICATIONS } from "./data";

const NotificationContent = () => (
  <div className="w-80 space-y-3 py-1">
    <div className="flex items-center justify-between border-b border-[#F0F4FA] pb-2">
      <h3 className="text-sm font-bold text-[#2E78FF]">Notifications</h3>
      <button className="text-[10px] font-bold text-[#2D7CFF] hover:underline">
        Mark all as read
      </button>
    </div>
    <div className="max-h-72 overflow-y-auto pr-1">
      {NOTIFICATIONS.map((n) => (
        <div
          key={n.id}
          className={`mb-2 rounded-xl border border-[#F0F4FA] p-3 transition-colors hover:bg-[#F8FAFD] ${!n.read ? "bg-[#F0F7FF]" : ""}`}
        >
          <div className="flex justify-between gap-2">
            <p className="text-xs font-bold text-[#2E78FF]">{n.title}</p>
            <span className="shrink-0 text-[10px] font-normal text-[#A3B2C7]">
              {n.time}
            </span>
          </div>
          <p className="mt-1 text-[11px] font-medium leading-relaxed text-[#435B7A]">
            {n.message}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const PAGE_TITLES: { prefix: string; title: string }[] = [
  { prefix: "/activities", title: "Recent Activities" },
  { prefix: "/analytics", title: "Analytics" },
  { prefix: "/reports", title: "Reports" },
  { prefix: "/projects", title: "Projects" },
  { prefix: "/settings", title: "Settings" },
];

function titleForPath(pathname: string | null): string {
  if (!pathname || pathname === "/") return "Data Overview";
  const hit = PAGE_TITLES.find(
    (p) => pathname === p.prefix || pathname.startsWith(`${p.prefix}/`),
  );
  return hit?.title ?? "Data Overview";
}

type DashboardHeaderProps = {
  onOpenMobileNav?: () => void;
};

export function DashboardHeader({ onOpenMobileNav }: DashboardHeaderProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { search, setSearch } = useDashboardSearch();
  const title = titleForPath(pathname);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="mb-4 flex flex-col gap-3 md:mb-5 xl:mb-6 xl:flex-row xl:items-center xl:justify-between xl:gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileNav}
          className="neo-icon-btn neo-interactive flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#1B3158] md:hidden"
          aria-label="Open navigation menu"
        >
          <MenuOutlined className="text-base" />
        </button>
        <h1 className="min-w-0 truncate text-xl font-bold tracking-tight text-[#2E78FF] sm:text-[1.35rem] xl:text-[1.375rem]">
          {title}
        </h1>
      </div>

      <div className="flex min-w-0 w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center xl:w-auto xl:flex-nowrap xl:justify-end">
        <label className="neo-search flex h-10 min-h-[40px] w-full min-w-0 cursor-text items-center rounded-full px-3.5 text-[#A9B8CC] sm:flex-1 md:px-4 xl:h-11 xl:max-w-[380px] xl:flex-initial">
          <SearchOutlined className="mr-2 shrink-0 text-sm" aria-hidden />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search data..."
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#435B7A] outline-none placeholder:text-[#A9B8CC]"
            aria-label="Search data"
          />
        </label>

        <div className="flex items-center justify-between gap-3 sm:justify-end sm:gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="neo-icon-btn neo-interactive grid h-10 w-10 shrink-0 place-items-center rounded-full text-[#1B3158]"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {mounted &&
              (theme === "light" ? (
                <MoonOutlined className="text-sm" />
              ) : (
                <SunOutlined className="text-sm" />
              ))}
          </button>
          <Popover
            content={<NotificationContent />}
            trigger="click"
            placement="bottomRight"
            arrow={false}
            overlayClassName="neo-popover"
          >
            <button
              type="button"
              className="neo-icon-btn neo-interactive relative grid h-10 w-10 shrink-0 place-items-center rounded-full text-[#1B3158] xl:h-10 xl:w-10"
              aria-label="Notifications"
            >
              <Badge dot={NOTIFICATIONS.some((n) => !n.read)} offset={[-2, 2]}>
                <BellFilled className="text-sm" />
              </Badge>
            </button>
          </Popover>
          <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">
            <div className="min-w-0 text-right">
              <p className="truncate text-sm font-bold leading-tight text-[#2E78FF]">
                <Link href="/settings" className="hover:text-[#2D7CFF]">
                  Zubair Afridi
                </Link>
              </p>
              <p className="truncate text-xs font-medium text-[#9BAAC0]">
                Admin Account
              </p>
            </div>
            <Link
              href="/settings"
              className="neo-avatar-ring grid h-9 w-9 shrink-0 place-items-center rounded-full p-0.5 xl:h-10 xl:w-10"
              aria-label="Account settings"
            >
              <div className="grid h-full w-full place-items-center rounded-full bg-[#9ABEFF] text-[11px] font-bold text-white">
                AF
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
