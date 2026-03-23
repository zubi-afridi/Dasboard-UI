import { TRAFFIC_SOURCES } from "./data";

/* Clockwise from 12 o’clock: Referral 35%, Organic 45%, Direct 20% */
const DONUT_GRADIENT =
  "conic-gradient(from 0deg, #FF4BA2 0deg 126deg, #2D7CFF 126deg 288deg, #FFB532 288deg 360deg)";

export function TrafficSourcesCard() {
  return (
    <article className="neo-card w-full rounded-[22px] px-4 py-5 sm:rounded-[26px] sm:px-6 sm:py-6 md:rounded-[26px] md:px-5 md:py-6 xl:rounded-[30px] xl:px-6 xl:py-6">
      <h2 className="text-lg font-bold leading-tight text-[#2E78FF] md:text-center sm:text-[1.125rem] xl:text-left">
        Traffic Sources
      </h2>
      <div className="my-4 flex justify-center sm:my-5 md:my-5 xl:my-6">
        <div
          className="grid h-[170px] w-[170px] place-items-center rounded-full sm:h-[180px] sm:w-[180px] md:h-[190px] md:w-[190px] xl:h-[200px] xl:w-[200px]"
          style={{ background: DONUT_GRADIENT }}
        >
          <div className="neo-donut-center flex h-[140px] w-[140px] flex-col items-center justify-center gap-0.5 rounded-full text-center sm:h-[148px] sm:w-[148px] md:h-[156px] md:w-[156px] xl:h-[164px] xl:w-[164px]">
            <p className="text-2xl font-bold leading-none tracking-tight text-[#2E78FF] sm:text-[1.625rem] xl:text-[1.75rem]">
              1.2M
            </p>
            <p className="text-[10px] font-normal uppercase tracking-[0.12em] text-[#8B9BB4] xl:text-[11px]">
              VISITORS
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[300px] space-y-2.5 sm:space-y-3 md:max-w-[320px] xl:mx-0 xl:max-w-none">
        {TRAFFIC_SOURCES.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex min-w-0 flex-1 items-center gap-2 text-sm font-semibold text-[#526887] sm:gap-2.5 xl:text-[14px]">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full sm:h-3 sm:w-3"
                style={{ backgroundColor: item.color }}
              />
              <span className="truncate">{item.name}</span>
            </div>
            <span className="shrink-0 text-sm font-bold text-[#2E78FF] xl:text-base">
              {item.pct}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
