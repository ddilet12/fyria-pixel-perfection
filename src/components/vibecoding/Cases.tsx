import { BigLetter } from "@/components/vibecoding/BigLetter";

interface CaseItem {
  title: string;
  amount: string;
  days: number;
  from: string;
  to: string;
}

const cases: CaseItem[] = [
  { title: "E-commerce и portfolio", amount: "350 000 ₸", days: 30, from: "#3b3b3b", to: "#111" },
  { title: "E-commerce", amount: "350 000 ₸", days: 20, from: "#6b21a8", to: "#1e1b2e" },
  { title: "Portfolio", amount: "250 000 ₸", days: 20, from: "#1f2937", to: "#0b0f14" },
  {
    title: "Разработка юридической страницы",
    amount: "260 000 ₸",
    days: 42,
    from: "#334155",
    to: "#0f172a",
  },
  {
    title: "E-commerce и аналитика",
    amount: "350 000 ₸",
    days: 45,
    from: "#166534",
    to: "#052e16",
  },
  { title: "Юридические услуги", amount: "200 800 ₸", days: 48, from: "#1e293b", to: "#020617" },
];

function CaseCard({ item }: { item: CaseItem }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
      <div
        className="flex h-28 flex-col justify-between p-3"
        style={{ background: `linear-gradient(135deg, ${item.from}, ${item.to})` }}
      >
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
        <div className="h-2 w-2/3 rounded bg-white/25" />
      </div>
      <div className="p-3">
        <p className="truncate text-sm font-bold">{item.title}</p>
        <div className="mt-2 flex items-center justify-between text-xs text-black/55">
          <span>
            Сделано за: <span className="font-semibold text-black">{item.days} дня</span>
          </span>
        </div>
        <div className="mt-1 text-xs text-black/55">
          Заработано: <span className="font-semibold text-[#e2141c]">{item.amount}</span>
        </div>
      </div>
    </div>
  );
}

export function Cases() {
  return (
    <section className="relative overflow-hidden bg-[#d8d5cf] px-6 py-14 sm:px-10 lg:px-16">
      <BigLetter className="-right-16 top-0 rotate-6 text-[#c4c1ba]">K</BigLetter>

      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-black uppercase sm:text-3xl">Кейсы</h2>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {cases.map((item) => (
            <CaseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
