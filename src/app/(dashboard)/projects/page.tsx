import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Lumina",
};

const DEMO_PROJECTS = [
  { name: "Marketing site redesign", progress: 72, color: "#2D7CFF" },
  { name: "Mobile app analytics", progress: 45, color: "#FF4BA2" },
  { name: "API integration sprint", progress: 88, color: "#FFB532" },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#2E78FF]">Active Projects</h1>
          <p className="text-sm font-medium text-[#8B9BB4]">
            You have {DEMO_PROJECTS.length} projects in progress.
          </p>
        </div>
        <button className="rounded-xl bg-[#2D7CFF] px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
          + New Project
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {DEMO_PROJECTS.map((p) => (
          <article
            key={p.name}
            className="neo-card min-w-[280px] flex-1 flex flex-col justify-between rounded-[22px] px-5 py-6 sm:rounded-[26px] xl:rounded-[30px]"
          >
            <div>
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-bold leading-snug text-[#2E78FF]">
                  {p.name}
                </h2>
                <span className="rounded-md bg-[#F4F7FB] p-1 text-xs">⋮</span>
              </div>
              <p className="mt-2 text-sm font-medium text-[#A3B2C7]">
                Managing all assets and campaign materials for the upcoming Q3
                launch.
              </p>

              <div className="mt-6 flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-[#E8EDF6]"
                  />
                ))}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#FAFBFD] text-[10px] font-bold text-[#A3B2C7]">
                  +2
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-[#8B9BB4]">Progress</span>
                <span className="text-[#2E78FF]">{p.progress}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#E8EDF6]">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${p.progress}%`, backgroundColor: p.color }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-[#F0F4FA] pt-4 text-xs font-bold">
                <span className="text-[#A3B2C7]">Deadline: Oct 12</span>
                <span className="text-[#2D7CFF] cursor-pointer">
                  View Details →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <article className="neo-card rounded-[22px] px-6 py-8 sm:rounded-[26px] xl:rounded-[30px]">
        <h2 className="text-xl font-bold text-[#2E78FF]">
          Project health summary
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "On Track", value: "12", color: "#16C784" },
            { label: "At Risk", value: "2", color: "#FFB532" },
            { label: "Delayed", value: "1", color: "#FF4BA2" },
            { label: "Completed", value: "48", color: "#2D7CFF" },
          ].map((s) => (
            <div key={s.label} className="neo-card-inset rounded-2xl p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#A3B2C7]">
                {s.label}
              </p>
              <p className="mt-2 text-3xl font-bold text-[#2E78FF]">
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
