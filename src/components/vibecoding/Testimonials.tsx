import { useCallback, useEffect, useState } from "react";

import { BigLetter } from "@/components/vibecoding/BigLetter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  text: string;
  initial: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Айгерим",
    text: "Окупила курс за неделю! Рекомендую.",
    initial: "А",
    color: "#e2141c",
  },
  {
    name: "Дамир",
    text: "Окупил курс комиссией от первого же оформленного заказа.",
    initial: "Д",
    color: "#1f2937",
  },
  {
    name: "Асем",
    text: "Окупила курс за месяц, несмотря на скромный старт и хромой сайт с первого раза.",
    initial: "А",
    color: "#166534",
  },
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="relative overflow-hidden bg-[#d8d5cf] px-6 py-14 sm:px-10 lg:px-16">
      <BigLetter className="-left-14 bottom-0 -rotate-6 text-[#c4c1ba]">O</BigLetter>

      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-black uppercase sm:text-3xl">Отзывы</h2>

        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="mt-8">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="basis-full sm:basis-1/3">
                <div className="flex h-full flex-col items-center rounded-lg bg-white p-5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initial}
                  </span>
                  <p className="mt-3 text-sm text-black/70">{t.text}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-black/40">
                    {t.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-5 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Отзыв ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === selected ? "bg-[#e2141c]" : "bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
