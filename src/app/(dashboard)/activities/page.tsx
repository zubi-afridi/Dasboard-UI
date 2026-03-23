import type { Metadata } from "next";

import { ActivitiesFullList } from "@/components/dashboard/ActivitiesFullList";

export const metadata: Metadata = {
  title: "Recent Activities | Lumina",
};

export default function ActivitiesPage() {
  return <ActivitiesFullList />;
}
