"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    emoji: "🏠",
    text: "Hadir di rumah, kantor, atau lokasi pilihan Anda",
  },
  {
    emoji: "✅",
    text: "Tenaga medis berpengalaman dan terverifikasi",
  },
  {
    emoji: "🚀",
    text: "Hasil pemeriksaan cepat dan digital",
  },
  {
    emoji: "💎",
    text: "Harga kompetitif, layanan eksklusif",
  },
];

export default function SectionWhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reason-item").forEach((el, i) => {
        gsap.from(el as HTMLElement, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el as HTMLElement,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="mengapa-kami" ref={sectionRef} className="relative py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Mengapa Memilih Kami?
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="reason-item flex items-start gap-4 p-4 bg-gray-50 rounded-md shadow-sm"
            >
              <div className="text-3xl">{reason.emoji}</div>
              <div className="text-lg text-primary font-medium">
                {reason.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
