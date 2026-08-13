import { BigLetter } from "@/components/vibecoding/BigLetter";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#eae7e1] px-6 pb-10 pt-16 sm:px-10 sm:pt-20 lg:px-16">
      <BigLetter className="-left-10 top-4 -rotate-3 text-[#d3d0c8]">B</BigLetter>
      <BigLetter className="-right-16 top-32 rotate-2 text-[#d3d0c8] sm:top-40">T</BigLetter>

      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="text-[2.2rem] font-black uppercase leading-[1.08] tracking-tight sm:text-6xl">
          Вайбкодинг помогает строить реально{" "}
          <span className="text-[#e2141c]">дорогой</span> весомый продукт.
        </h1>

        <p className="mt-6 max-w-xl text-lg font-semibold sm:text-xl">
          В Казахстане он ценится от 300 000 тенге минимум.
          <br />А на разработку уходит 30 минут вашего времени в кофейне.
        </p>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-black/60">
          Вайбкодинг признан будущим мировой экономики крупными предпринимателями
          как Маргулан Сейсембай и крупными компаниями как АО Казахтелеком (инфа
          в открытом доступе, можете проверить сами)
        </p>

        <button className="mt-8 w-full rounded-lg bg-[#e2141c] px-8 py-5 text-center text-base font-bold uppercase leading-snug text-white shadow-[0_16px_32px_-12px_rgba(226,20,28,0.55)] transition hover:bg-[#c81119] sm:w-auto sm:text-lg">
          Успей первым, пока история с ИИ
          <br className="hidden sm:block" /> видео контентом не повторилась
        </button>
      </div>

      <div className="relative z-10 mt-10 bg-black px-6 py-5 text-center sm:px-10">
        <p className="text-sm font-bold uppercase tracking-wide text-white sm:text-base">
          Не сделаешь сайт с первого урока{" "}
          <span className="text-[#e2141c]">— верну деньги</span>
        </p>
      </div>
    </section>
  );
}
