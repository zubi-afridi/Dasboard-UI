import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics | Lumina",
};

export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <article className="neo-card rounded-[22px] px-4 py-6 sm:rounded-[26px] sm:px-6 md:px-5 xl:rounded-[30px] xl:px-6">
        <h2 className="text-lg font-bold text-[#2E78FF]">
          Acquisition overview
        </h2>
        <p className="mt-1 text-sm font-medium text-[#8B9BB4]">
          Demo view — connect your data source to populate live metrics.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Sessions", value: "48.2k", delta: "+6.1%" },
            { label: "Bounce rate", value: "32%", delta: "-2.4%" },
            { label: "Avg. duration", value: "3m 12s", delta: "+0.8%" },
          ].map((m) => (
            <div key={m.label} className="neo-card-inset rounded-2xl px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#A3B2C7]">
                {m.label}
              </p>
              <p className="mt-1 text-xl font-bold text-[#2E78FF]">{m.value}</p>
              <p className="mt-0.5 text-xs font-semibold text-[#16C784]">
                {m.delta}
              </p>
            </div>
          ))}
        </div>
      </article>
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="neo-card rounded-[22px] px-4 py-6 sm:rounded-[26px] sm:px-6 md:px-5 xl:rounded-[30px] xl:px-6">
          <h2 className="text-lg font-bold text-[#2E78FF]">Top channels</h2>
          <ul className="mt-4 space-y-3 text-sm font-medium text-[#435B7A]">
            <li className="flex justify-between border-b border-[#F0F4FA] pb-2 text-sm">
              <span>Organic search</span>
              <span className="font-bold text-[#2E78FF]">42%</span>
            </li>
            <li className="flex justify-between border-b border-[#F0F4FA] pb-2 text-sm">
              <span>Direct</span>
              <span className="font-bold text-[#2E78FF]">28%</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Referral</span>
              <span className="font-bold text-[#2E78FF]">18%</span>
            </li>
          </ul>
        </article>
        <article className="neo-card rounded-[22px] px-4 py-6 sm:rounded-[26px] sm:px-6 md:px-5 xl:rounded-[30px] xl:px-6">
          <h2 className="text-lg font-bold text-[#2E78FF]">Devices</h2>
          <div className="mt-4 flex flex-col justify-center space-y-5">
            {[
              { label: "Desktop", percentage: 65, color: "#2D7CFF" },
              { label: "Mobile", percentage: 28, color: "#FF4BA2" },
              { label: "Tablet", percentage: 7, color: "#FFB532" },
            ].map((d) => (
              <div key={d.label}>
                <div className="flex justify-between text-sm font-bold text-[#2E78FF]">
                  <span>{d.label}</span>
                  <span>{d.percentage}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-[#F0F4FA]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${d.percentage}%`,
                      backgroundColor: d.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
      <article className="neo-card rounded-[22px] px-4 py-6 sm:rounded-[26px] sm:px-6 md:px-5 xl:rounded-[30px] xl:px-6">
        <h2 className="text-lg font-bold text-[#2E78FF]">User behavior</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { page: "/dashboard", views: "12,402", time: "2m 15s" },
            { page: "/projects", views: "8,291", time: "1m 45s" },
            { page: "/analytics", views: "5,102", time: "4m 10s" },
            { page: "/settings", views: "2,310", time: "0m 55s" },
          ].map((p) => (
            <div
              key={p.page}
              className="neo-card-inset flex flex-col justify-between rounded-2xl p-4"
            >
              <p className="text-sm font-bold text-[#2E78FF]">{p.page}</p>
              <div className="mt-3 flex items-end justify-between">
                <p className="text-xs font-medium text-[#A3B2C7]">
                  {p.views} views
                </p>
                <span className="text-xs font-bold text-[#2D7CFF]">
                  {p.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
