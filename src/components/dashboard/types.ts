import type { IconType } from "react-icons";

export type StatCardItem = {
  title: string;
  value: string;
  delta: string;
  color: string;
  positive: boolean;
  icon: IconType;
};

export type TrafficSourceItem = {
  name: string;
  color: string;
  pct: string;
};

export type ActivityRow = {
  initials: string;
  name: string;
  activity: string;
  status: "completed" | "pending";
  date: string;
};

export type NotificationItem = {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "info" | "success" | "warning";
  read: boolean;
};
