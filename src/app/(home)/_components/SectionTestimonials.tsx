"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "USER VIRTUS FACILITY SERVICES",
    text: "Kami merasa puas dengan layanan home care yang cepat dan efisien.",
  },
  {
    name: "USER G4S INDONESIA",
    text: "Tenaga medis profesional dan proses pemesanan sangat mudah.",
  },
  {
    name: "USER MNP",
    text: "Tim medis datang tepat waktu dan memberikan pelayanan terbaik.",
  },
  {
    name: "Jhonyjohannis",
    text: "Sangat nyaman, tidak perlu keluar rumah untuk pemeriksaan.",
  },
  {
    name: "Irjen (Purn) Suedi Husein",
    text: "Dokternya sangat ramah dan komunikatif. Recommended!",
  },
  {
    name: "Brigjen (Purn) Achmadi",
    text: "Pelayanan sangat membantu dan profesional.",
  },
  {
    name: "Ajeng Suseno",
    text: "Layanan yang sangat memudahkan dan responsif.",
  },
];

export default function SectionTestimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".testimonial-item").forEach((el, i) => {
        gsap.from(el as HTMLElement, {
          opacity: 0,
          y: i % 2 === 0 ? 50 : -50,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el as HTMLElement,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-navy mb-12">
          Apa Kata Mereka?
        </h2>

        <div className="testimonial-grid grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`testimonial-item bg-gray-50 p-6 rounded-lg shadow-md border ${
                i % 2 === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <p className="text-gray-700 italic mb-4">&quot;{item.text}&quot;</p>
              <p className="text-sm text-navy font-semibold text-right">
                - {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
