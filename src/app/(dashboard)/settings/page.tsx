import type { Metadata } from "next";
import {
  RiSlackFill,
  RiGithubFill,
  RiDiscordFill,
  RiShape2Fill,
} from "react-icons/ri";

export const metadata: Metadata = {
  title: "Settings | Lumina",
};

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <article className="neo-card rounded-[22px] px-4 py-6 sm:rounded-[26px] sm:px-6 md:px-5 xl:rounded-[30px] xl:px-6">
        <h2 className="text-lg font-bold text-[#2E78FF]">Account</h2>
        <p className="mt-1 text-sm font-medium text-[#8B9BB4]">
          Zubair Afridi — Admin Account
        </p>
        <div className="mt-4 space-y-3 text-sm font-medium text-[#435B7A]">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <span>Email</span>
            <span className="font-semibold text-[#2E78FF]">
              zubairafridi2312@gmail.com
            </span>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <span>Time zone</span>
            <span className="font-semibold text-[#2E78FF]">
              UTC−5 (Eastern)
            </span>
          </div>
        </div>
      </article>
      <article className="neo-card rounded-[22px] px-4 py-6 sm:rounded-[26px] sm:px-6 md:px-5 xl:rounded-[30px] xl:px-6">
        <h2 className="text-lg font-bold text-[#2E78FF]">Notifications</h2>
        <p className="mt-1 text-sm font-medium text-[#8B9BB4]">
          Choose how you want to be notified about updates.
        </p>
        <div className="mt-6 space-y-4">
          {[
            {
              label: "Email notifications",
              desc: "Receive weekly summaries and alerts.",
              active: true,
            },
            {
              label: "Push notifications",
              desc: "Get real-time updates in your browser.",
              active: false,
            },
            {
              label: "Desktop alerts",
              desc: "Show desktop windows for critical errors.",
              active: true,
            },
          ].map((n) => (
            <div
              key={n.label}
              className="flex items-center justify-between border-b border-[#F0F4FA] pb-4 last:border-0 last:pb-0"
            >
              <div className="pr-4">
                <p className="text-sm font-bold text-[#2E78FF]">{n.label}</p>
                <p className="text-xs font-medium text-[#A3B2C7]">{n.desc}</p>
              </div>
              <div
                className={`h-5 w-9 rounded-full px-1 py-1 transition-colors ${n.active ? "bg-[#2D7CFF]" : "bg-[#E8EDF6]"}`}
              >
                <div
                  className={`h-3 w-3 rounded-full bg-white transition-transform ${n.active ? "translate-x-4" : "translate-x-0"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="neo-card rounded-[22px] px-4 py-6 sm:rounded-[26px] sm:px-6 md:px-5 xl:rounded-[30px] xl:px-6">
        <h2 className="text-lg font-bold text-[#2E78FF]">Security</h2>
        <div className="mt-4 space-y-3">
          <button className="flex w-full items-center justify-between rounded-xl border border-[#F0F4FA] p-4 text-left font-bold text-[#435B7A] transition-colors hover:bg-[#F8FAFD]">
            <span className="text-sm">Change password</span>
            <span className="text-[#A3B2C7]">→</span>
          </button>
          <button className="flex w-full items-center justify-between rounded-xl border border-[#F0F4FA] p-4 text-left font-bold text-[#435B7A] transition-colors hover:bg-[#F8FAFD]">
            <span className="text-sm">Two-factor authentication</span>
            <span className="text-xs font-bold text-[#16C784]">ENABLED</span>
          </button>
        </div>
      </article>

      <article className="neo-card rounded-[22px] px-4 py-6 sm:rounded-[26px] sm:px-6 md:px-5 xl:rounded-[30px] xl:px-6">
        <h2 className="text-lg font-bold text-[#2E78FF]">Integrations</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            {
              name: "Slack",
              status: "Connected",
              color: "#4A154B",
              icon: RiSlackFill,
            },
            {
              name: "GitHub",
              status: "Not connected",
              color: "#181717",
              icon: RiGithubFill,
            },
            {
              name: "Discord",
              status: "Connected",
              color: "#5865F2",
              icon: RiDiscordFill,
            },
            {
              name: "Linear",
              status: "Not connected",
              color: "#5E6AD2",
              icon: RiShape2Fill,
            },
          ].map((i) => (
            <div
              key={i.name}
              className="flex items-center justify-between rounded-2xl border border-[#E8EDF6] bg-[#FAFBFD] p-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm"
                  style={{ color: i.color }}
                >
                  <i.icon size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#2E78FF]">{i.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-tight text-[#A3B2C7]">
                    {i.status}
                  </p>
                </div>
              </div>
              <button className="text-xs font-bold text-[#2D7CFF] hover:underline">
                {i.status === "Connected" ? "Manage" : "Connect"}
              </button>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
