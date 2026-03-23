import type { Metadata } from "next";

import { DashboardMain } from "@/components/dashboard";

export const metadata: Metadata = {
  title: "Data Overview | Lumina",
};

export default function Home() {
  return <DashboardMain />;
}
