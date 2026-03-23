import { SidebarContent } from "./SidebarContent";

export function DashboardSidebar() {
  return (
    <aside className="sticky top-3 sm:top-4 md:top-4 xl:top-5 self-start h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] xl:h-[calc(100vh-2.5rem)] neo-surface hidden w-[200px] shrink-0 flex-col rounded-[24px] px-4 py-5 md:flex md:py-6 lg:w-[220px] lg:px-5 xl:w-[240px] xl:rounded-[30px] xl:px-6 xl:py-7">
      <SidebarContent />
    </aside>
  );
}
