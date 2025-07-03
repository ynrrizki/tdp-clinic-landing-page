"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "USER VIRTUS FACILITY SERVICES",
    company: "Virtus Facility Services",
    text: "Kami merasa puas dengan layanan home care yang cepat dan efisien.",
    avatar: "/assets/testimonials/user1.jpg",
    isCompany: true
  },
  {
    name: "USER G4S INDONESIA",
    company: "G4S Indonesia",
    text: "Tenaga medis profesional dan proses pemesanan sangat mudah.",
    avatar: "/assets/testimonials/user2.jpg",
    isCompany: true
  },
  {
    name: "USER MNP",
    company: "MNP",
    text: "Tim medis datang tepat waktu dan memberikan pelayanan terbaik.",
    avatar: "/assets/testimonials/user3.jpg",
    isCompany: true
  },
  {
    name: "Jhonyjohannis",
    company: "Individual",
    text: "Sangat nyaman, tidak perlu keluar rumah untuk pemeriksaan.",
    avatar: "/assets/testimonials/user4.jpg",
    isCompany: false
  },
  {
    name: "Irjen (Purn) Suedi Husein",
    company: "Individual",
    text: "Dokternya sangat ramah dan komunikatif. Recommended!",
    avatar: "/assets/testimonials/user5.jpg",
    isCompany: false
  },
  {
    name: "Brigjen (Purn) Achmadi",
    company: "Individual",
    text: "Pelayanan sangat membantu dan profesional.",
    avatar: "/assets/testimonials/user6.jpg",
    isCompany: false
  },
  {
    name: "Ajeng Suseno",
    company: "Individual",
    text: "Layanan yang sangat memudahkan dan responsif.",
    avatar: "/assets/testimonials/user7.jpg",
    isCompany: false
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
    <section ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-200/30 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200/30 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            💬 Kata Mereka
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimoni nyata dari klien yang telah merasakan layanan terbaik kami
          </p>
        </div>

        <div className="testimonial-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`testimonial-item group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white ${
                i % 3 === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Quote decoration */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold opacity-80">
                &quot;
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                      <span className="text-white text-sm font-bold">
                        {item.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>
                    {item.isCompany && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-primary text-sm group-hover:text-gray-800 transition-colors duration-300">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.company}</p>
                    {item.isCompany && (
                      <div className="inline-flex items-center gap-1 mt-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-blue-600 font-medium">Corporate Client</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-700 italic leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  &quot;{item.text}&quot;
                </p>
                
                {/* Rating stars */}
                <div className="flex items-center gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-sm">⭐</span>
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Bergabunglah dengan 500+ Klien Puas</h3>
            <p className="mb-6 opacity-90">Rasakan pengalaman layanan kesehatan terbaik bersama kami</p>
            <Button variant="secondary" size="lg" className="group">
              Mulai Sekarang
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
