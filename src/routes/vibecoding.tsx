import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/vibecoding/Hero";
import { VideoOffer } from "@/components/vibecoding/VideoOffer";
import { Cases } from "@/components/vibecoding/Cases";
import { Testimonials } from "@/components/vibecoding/Testimonials";

export const Route = createFileRoute("/vibecoding")({
  head: () => ({
    meta: [
      { title: "Вайбкодинг — курс по созданию сайтов" },
      {
        name: "description",
        content:
          "Вайбкодинг помогает строить реально дорогой весомый продукт. Видео-урок, оффер, кейсы и отзывы учеников.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700;800;900&display=swap",
      },
    ],
  }),
  component: VibecodingPage,
});

function VibecodingPage() {
  return (
    <div
      className="min-h-screen text-black"
      style={{ fontFamily: "'Unbounded', 'Inter', sans-serif" }}
    >
      <Hero />
      <VideoOffer />
      <Cases />
      <Testimonials />
    </div>
  );
}
