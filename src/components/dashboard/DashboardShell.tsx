"use client";

import { Drawer } from "antd";
import { useCallback, useEffect, useState } from "react";

import { DashboardSearchProvider } from "./DashboardSearchContext";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";
import { SidebarContent } from "./SidebarContent";

type DashboardShellProps = {
  children: React.ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeDrawer = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", onChange);
    onChange();
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <DashboardSearchProvider>
      <main className="neo-page min-h-screen w-full text-[#0E2344]">
        <div className="flex w-full flex-col gap-4 p-3 sm:p-4 md:flex-row md:gap-4 md:p-4 xl:gap-6 xl:p-5">
          <DashboardSidebar />

          <Drawer
            title={null}
            placement="left"
            onClose={closeDrawer}
            open={mobileOpen}
            width={280}
            classNames={{
              body: "!p-0",
              header: "!hidden",
            }}
            styles={{
              body: { padding: 0, background: "var(--background)" },
              wrapper: { maxWidth: "100vw" },
            }}
            className="md:hidden"
          >
            <div className="neo-surface-inset m-3 rounded-[24px] p-5">
              <SidebarContent onNavigate={closeDrawer} />
            </div>
          </Drawer>

          <section className="neo-surface min-w-0 flex-1 rounded-[20px] px-4 py-5 sm:rounded-[24px] sm:px-6 sm:py-6 md:rounded-[26px] md:px-5 md:py-6 xl:rounded-[30px] xl:px-8 xl:py-7">
            <DashboardHeader onOpenMobileNav={() => setMobileOpen(true)} />
            {children}
          </section>
        </div>
      </main>
    </DashboardSearchProvider>
  );
}
