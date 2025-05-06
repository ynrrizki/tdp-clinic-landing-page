"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Stethoscope, Building2, UserPlus, ActivitySquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Stethoscope,
    color: "text-blue-500",
    title: "Premium Home Care",
    description:
      "Layanan medis langsung di rumah Anda dengan kualitas premium.",
  },
  {
    icon: Building2,
    color: "text-emerald-500",
    title: "Corporate Medical",
    description: "Paket pemeriksaan kesehatan untuk perusahaan dan instansi.",
  },
  {
    icon: UserPlus,
    color: "text-orange-500",
    title: "Konsultasi Dokter",
    description: "Bicara langsung dengan dokter profesional tanpa perlu antre.",
  },
  {
    icon: ActivitySquare,
    color: "text-pink-500",
    title: "Fisioterapi",
    description: "Layanan terapi fisik untuk rehabilitasi di rumah Anda.",
  },
];

export default function SectionServices() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".service-item").forEach((el, i) => {
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
    <section
      id="layanan"
      ref={sectionRef}
      className="relative py-20 px-4 min-h-screen"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-navy mb-12">
          Layanan Unggulan Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-item bg-white rounded-lg p-6 shadow-sm border flex gap-4 items-start"
            >
              <service.icon className={`w-6 h-6 mt-1 ${service.color}`} />
              <div>
                <h3 className="text-xl font-semibold text-navy mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
