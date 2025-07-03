"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Home, UserCheck, Zap, Diamond } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    emoji: "🏠",
    text: "Hadir di rumah, kantor, atau lokasi pilihan Anda",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50"
  },
  {
    emoji: "🧑🏻‍⚕️",
    text: "Tenaga medis berpengalaman dan terverifikasi", 
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    emoji: "🚀",
    text: "Hasil pemeriksaan cepat dan digital",
    color: "from-purple-500 to-pink-500", 
    bgColor: "bg-purple-50"
  },
  {
    emoji: "💎",
    text: "Harga kompetitif, layanan eksklusif",
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50"
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
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⭐ Mengapa Kami Berbeda
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami memberikan layanan kesehatan terbaik dengan pendekatan yang berbeda dari yang lain
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`reason-item group relative overflow-hidden ${reason.bgColor} rounded-2xl p-8 border border-white/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Decorative circle */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <div className="relative bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                        <div className="text-4xl">{reason.emoji}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-bold text-primary mb-2 group-hover:text-gray-800 transition-colors duration-300">
                      {reason.text}
                    </div>
                    <div className={`h-1 w-0 bg-gradient-to-r ${reason.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <span>Siap merasakan layanan terbaik kami?</span>
            <span className="animate-bounce">👇</span>
          </div>
        </div>
      </div>
    </section>
  );
}
