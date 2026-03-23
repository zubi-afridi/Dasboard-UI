import type { Metadata } from "next";
import {
  RiBarChartBoxLine,
  RiLineChartLine,
  RiMoneyDollarCircleLine,
  RiArrowLeftDownLine,
} from "react-icons/ri";

export const metadata: Metadata = {
  title: "Reports | Lumina",
};

const DEMO_REPORTS = [
  { name: "Monthly performance summary", date: "Mar 2025", status: "Ready" },
  { name: "Traffic sources breakdown", date: "Mar 2025", status: "Ready" },
  { name: "User cohort analysis", date: "Feb 2025", status: "Scheduled" },
];

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="neo-card lg:col-span-2 rounded-[22px] px-4 py-6 sm:rounded-[26px] sm:px-6 md:px-5 xl:rounded-[30px] xl:px-6">
          <h2 className="text-lg font-bold text-[#2E78FF]">Saved reports</h2>
          <p className="mt-1 text-sm font-medium text-[#8B9BB4]">
            Sample reports — export to PDF or schedule email delivery.
          </p>
          <ul className="mt-5 space-y-2">
            {DEMO_REPORTS.map((r) => (
              <li
                key={r.name}
                className="flex flex-col gap-2 rounded-2xl border border-[#E8EDF6] bg-[#FAFBFD] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-bold text-[#2E78FF]">{r.name}</p>
                  <p className="text-xs font-medium text-[#A3B2C7]">{r.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      r.status === "Ready"
                        ? "bg-[#CBFDE3] text-[#16C784]"
                        : "bg-[#E8EDFF] text-[#2D7CFF]"
                    }`}
                  >
                    {r.status}
                  </span>
                  <button className="text-xs font-bold text-[#2D7CFF] hover:underline">
                    Download
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="neo-card rounded-[22px] px-4 py-6 sm:rounded-[26px] sm:px-6 md:px-5 xl:rounded-[30px] xl:px-6">
          <h2 className="text-lg font-bold text-[#2E78FF]">
            Popular templates
          </h2>
          <div className="mt-4 space-y-3">
            {[
              {
                name: "Executive Summary",
                icon: RiBarChartBoxLine,
                color: "#2D7CFF",
              },
              {
                name: "Marketing ROI",
                icon: RiLineChartLine,
                color: "#FF4BA2",
              },
              {
                name: "Sales Pipeline",
                icon: RiMoneyDollarCircleLine,
                color: "#FFB532",
              },
              {
                name: "Customer Churn",
                icon: RiArrowLeftDownLine,
                color: "#16C784",
              },
            ].map((t) => (
              <button
                key={t.name}
                className="flex w-full items-center gap-3 rounded-xl border border-[#F0F4FA] p-3 text-left transition-colors hover:bg-[#F8FAFD]"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F4F7FB]"
                  style={{ color: t.color }}
                >
                  <t.icon size={20} />
                </div>
                <span className="text-sm font-bold text-[#435B7A]">
                  {t.name}
                </span>
              </button>
            ))}
          </div>
        </article>
      </div>

      <article className="neo-card rounded-[22px] px-4 py-6 sm:rounded-[26px] sm:px-6 md:px-5 xl:rounded-[30px] xl:px-6">
        <h2 className="text-lg font-bold text-[#2E78FF]">Recent downloads</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#F0F4FA] text-[10px] font-bold uppercase tracking-wider text-[#A3B2C7]">
                <th className="pb-3 pr-4">Report Name</th>
                <th className="pb-3 pr-4 text-center">Format</th>
                <th className="pb-3 pr-4">Downloaded By</th>
                <th className="pb-3 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-[#435B7A]">
              {[
                {
                  name: "Q1 Results Final.pdf",
                  format: "PDF",
                  user: "Zubair A.",
                  time: "2h ago",
                },
                {
                  name: "Traffic_Data.csv",
                  format: "CSV",
                  user: "Sarah J.",
                  time: "5h ago",
                },
                {
                  name: "User_List.xlsx",
                  format: "XLSX",
                  user: "Zubair A.",
                  time: "1d ago",
                },
              ].map((d, i) => (
                <tr
                  key={i}
                  className="border-b border-[#F0F4FA] last:border-0 font-bold"
                >
                  <td className="py-3 pr-4 text-[#2E78FF]">{d.name}</td>
                  <td className="py-3 pr-4 text-center">
                    <span className="rounded bg-[#F4F7FB] px-1.5 py-0.5 text-[10px]">
                      {d.format}
                    </span>
                  </td>
                  <td className="py-3 pr-4">{d.user}</td>
                  <td className="py-3 text-right text-[#A3B2C7]">{d.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
}
