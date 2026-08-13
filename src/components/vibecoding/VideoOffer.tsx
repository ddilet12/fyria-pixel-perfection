import { Maximize, Play, Settings2, Volume2 } from "lucide-react";

import { BigLetter } from "@/components/vibecoding/BigLetter";

function Stat({
  label,
  value,
  hint,
  accent = false,
}: {
  label: string;
  value: string;
  hint?: string;
  accent?: boolean;
}) {
  return (
    <div className="px-6 py-6 text-center sm:py-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-white/50">{label}</p>
      <p className={`mt-2 text-2xl font-black ${accent ? "text-[#e2141c]" : "text-white"}`}>
        {value}
      </p>
      {hint ? <p className="mt-1 text-xs font-medium uppercase text-white/40">{hint}</p> : null}
    </div>
  );
}

export function VideoOffer() {
  return (
    <section className="relative overflow-hidden bg-[#eae7e1] px-6 py-14 sm:px-10 lg:px-16">
      <BigLetter className="-left-14 top-0 -rotate-6 text-[#d3d0c8]">K</BigLetter>
      <BigLetter className="-right-10 top-1/3 rotate-3 text-[#d3d0c8]">C</BigLetter>

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-black uppercase sm:text-3xl">Видео-урок</h2>
          <h2 className="text-2xl font-black uppercase text-[#e2141c] sm:text-3xl">Оффер</h2>
        </div>

        <div className="overflow-hidden rounded-xl bg-black shadow-2xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e2141c]" />
            <span className="truncate">
              Урок 1: Пишем Промт и Генерируем Дизайн Сайта за 10 Минут
            </span>
          </div>

          <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-neutral-800 via-neutral-900 to-black">
            <button
              type="button"
              aria-label="Смотреть видео-урок"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e2141c] text-white shadow-lg transition hover:scale-105 sm:h-20 sm:w-20"
            >
              <Play className="ml-1 h-7 w-7 fill-white sm:h-8 sm:w-8" />
            </button>
          </div>

          <div className="space-y-2 px-4 py-3">
            <div className="h-1 w-full rounded-full bg-white/15">
              <div className="h-1 w-[8%] rounded-full bg-[#e2141c]" />
            </div>
            <div className="flex items-center justify-between text-xs text-white/50">
              <span>0:06 / 1:05</span>
              <span className="flex items-center gap-3">
                <Volume2 className="h-4 w-4" />
                <Settings2 className="h-4 w-4" />
                <Maximize className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 divide-y divide-white/10 rounded-xl bg-black sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <Stat label="Сайт в Казахстане стоит:" value="300 000 ₸" hint="минимум" />
          <Stat label="Курс стоит:" value="50 000 ₸" />
          <Stat label="Твоя выгода:" value="Первая сделка" hint="закроет курс в 6 раз" accent />
        </div>
      </div>
    </section>
  );
}
