import {
  RiMoneyDollarCircleLine,
  RiGroupFill,
  RiSwapFill,
  RiTimeFill,
} from "react-icons/ri";
import type { ActivityRow, StatCardItem, TrafficSourceItem, NotificationItem } from "./types";

// ... (existing constants)

export const NOTIFICATIONS: NotificationItem[] = [
  {
    id: "1",
    title: "Project Milestone Reached",
    message: "Marketing site redesign is now 72% complete.",
    time: "2m ago",
    type: "success",
    read: false,
  },
  {
    id: "2",
    title: "New Integration Connected",
    message: "Slack integration has been successfully set up.",
    time: "1h ago",
    type: "info",
    read: true,
  },
  {
    id: "3",
    title: "Security Alert",
    message: "New login attempt from a new device in New York, USA.",
    time: "3h ago",
    type: "warning",
    read: false,
  },
];

export const STAT_CARDS: StatCardItem[] = [
  {
    title: "Total Revenue",
    value: "$42,850",
    delta: "12.5% VS LW",
    color: "#FF5FB0",
    positive: true,
    icon: RiMoneyDollarCircleLine,
  },
  {
    title: "Active Users",
    value: "12,582",
    delta: "2.4% VS LW",
    color: "#13D6F2",
    positive: false,
    icon: RiGroupFill,
  },
  {
    title: "Conversion",
    value: "3.2%",
    delta: "0.8% VS LW",
    color: "#FFC34D",
    positive: true,
    icon: RiSwapFill,
  },
  {
    title: "Avg Session",
    value: "04m 32s",
    delta: "15% VS LW",
    color: "#20E196",
    positive: true,
    icon: RiTimeFill,
  },
];

/** Reference: Organic 45%, Referral 35%, Direct 20% */
export const TRAFFIC_SOURCES: TrafficSourceItem[] = [
  { name: "Organic", color: "#2D7CFF", pct: "45%" },
  { name: "Referral", color: "#FF4BA2", pct: "35%" },
  { name: "Direct", color: "#FFB532", pct: "20%" },
];

export const CHART_MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"] as const;

export const CHART_WEEKS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;

export const ALL_ACTIVITIES: ActivityRow[] = [
  {
    initials: "JD",
    name: "James Dorian",
    activity: "Upgrade to Pro Plan",
    status: "completed",
    date: "2 mins ago",
  },
  {
    initials: "SM",
    name: "Sarah Miller",
    activity: "New subscription",
    status: "pending",
    date: "1 hour ago",
  },
  {
    initials: "AK",
    name: "Alex Kim",
    activity: "Exported Q4 report",
    status: "completed",
    date: "3 hours ago",
  },
  {
    initials: "LM",
    name: "Lisa Moore",
    activity: "Updated billing address",
    status: "completed",
    date: "Yesterday",
  },
  {
    initials: "TC",
    name: "Tom Chen",
    activity: "Trial extension requested",
    status: "pending",
    date: "Yesterday",
  },
  {
    initials: "ER",
    name: "Emma Ross",
    activity: "Connected Google Analytics",
    status: "completed",
    date: "2 days ago",
  },
  {
    initials: "NP",
    name: "Noah Patel",
    activity: "Workspace invite sent",
    status: "pending",
    date: "3 days ago",
  },
  {
    initials: "VB",
    name: "Vera Brooks",
    activity: "Downloaded invoice PDF",
    status: "completed",
    date: "4 days ago",
  },
];
