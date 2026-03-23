import { RecentActivities } from "./RecentActivities";
import { StatCardsRow } from "./StatCardsRow";
import { TrafficSourcesCard } from "./TrafficSourcesCard";
import { UserGrowthCard } from "./UserGrowthCard";

export function DashboardMain() {
  return (
    <>
      <StatCardsRow />
      <div className="mb-4 grid grid-cols-1 gap-4 md:mb-5 md:gap-4 xl:mb-6 xl:grid-cols-[2.2fr_1fr] xl:gap-5">
        <UserGrowthCard />
        <TrafficSourcesCard />
      </div>
      <RecentActivities />
    </>
  );
}
