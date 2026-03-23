"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiDashboardLine,
  RiDashboardFill,
  RiBarChart2Line,
  RiBarChart2Fill,
  RiFileTextLine,
  RiFileTextFill,
  RiFolder6Line,
  RiFolder6Fill,
  RiSettings5Line,
  RiSettings5Fill,
} from "react-icons/ri";

import Image from "next/image";
import { IconLogoMark } from "@/components/icons/reference-nav-icons";

const NAV_ITEMS = [
  {
    href: "/",
    key: "dashboard",
    activeIcon: RiDashboardFill,
    inactiveIcon: RiDashboardLine,
    label: "Dashboard",
  },
  {
    href: "/analytics",
    key: "analytics",
    activeIcon: RiBarChart2Fill,
    inactiveIcon: RiBarChart2Line,
    label: "Analytics",
  },
  {
    href: "/reports",
    key: "reports",
    activeIcon: RiFileTextFill,
    inactiveIcon: RiFileTextLine,
    label: "Reports",
  },
  {
    href: "/projects",
    key: "projects",
    activeIcon: RiFolder6Fill,
    inactiveIcon: RiFolder6Line,
    label: "Projects",
  },
] as const;

type SidebarContentProps = {
  /** Close mobile drawer after a nav action */
  onNavigate?: () => void;
  className?: string;
};

function isActive(pathname: string | null, href: string): boolean {
  if (!pathname) return href === "/";
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SidebarContent({
  onNavigate,
  className = "",
}: SidebarContentProps) {
  const pathname = usePathname();

  return (
    <div className={`flex h-full flex-col ${className}`}>
      <Link
        href="/"
        onClick={onNavigate}
        className="mb-6 flex items-center gap-2.5 md:mb-7 xl:mb-8"
      >
        <div className="relative size-9 overflow-hidden rounded-full border-2 border-[#2E78FF] shadow-[0_4px_12px_rgba(46,120,255,0.3)] xl:h-10 xl:w-10">
          <Image
            src="/images/logo.png"
            alt="Lumina Logo"
            fill
            sizes="(max-width: 1280px) 36px, 40px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="text-lg font-bold leading-tight tracking-tight text-[#2E78FF] xl:text-xl">
            Lumina
          </p>
          <p className="text-[9px] font-semibold tracking-[0.2em] text-[#9AA8BF] xl:text-[10px]">
            INSIGHTS PLATFORM
          </p>
        </div>
      </Link>

      <nav className="flex flex-col gap-2" aria-label="Main">
        {NAV_ITEMS.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = active ? item.activeIcon : item.inactiveIcon;
          return (
            <Link
              key={item.key}
              href={item.href}
              onClick={onNavigate}
              className={`neo-nav-item flex h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold xl:h-11 xl:px-3.5 xl:text-[15px] ${
                active ? "neo-nav-item-active text-[#2E78FF]" : "text-[#6A7D9A]"
              }`}
            >
              <span className="flex h-5 w-5 items-center justify-center xl:h-5.5 xl:w-5.5">
                <Icon className="h-full w-full" />
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/settings"
        onClick={onNavigate}
        className={`neo-nav-item mt-auto flex items-center gap-2 rounded-full px-2 py-2.5 text-sm font-semibold xl:py-3 xl:text-[15px] ${
          isActive(pathname, "/settings")
            ? "neo-nav-item-active text-[#2E78FF]"
            : "text-[#6A7D9A]"
        }`}
      >
        <span className="flex h-5 w-5 items-center justify-center xl:h-[22px] xl:w-[22px]">
          {isActive(pathname, "/settings") ? (
            <RiSettings5Fill className="h-full w-full" />
          ) : (
            <RiSettings5Line className="h-full w-full" />
          )}
        </span>
        Settings
      </Link>
    </div>
  );
}
