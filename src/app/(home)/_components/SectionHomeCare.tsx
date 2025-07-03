"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Users, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const homeAdvantages = [
  {
    icon: MapPin,
    title: "Hadir di rumah sesuai lokasi pilihan",
    description: "Layanan kesehatan langsung ke rumah, kantor, atau lokasi yang Anda tentukan"
  },
  {
    icon: Users,
    title: "Tenaga medis yang berpengalaman dan terverifikasi",
    description: "Tim dokter dan perawat profesional dengan sertifikasi resmi"
  },
  {
    icon: Clock,
    title: "Hasil cepat dan digital",
    description: "Laporan kesehatan digital dalam 24 jam dengan akses mudah"
  },
  {
    icon: Star,
    title: "Harga yang kompetitif",
    description: "Tarif transparan dengan kualitas layanan premium"
  },
  {
    icon: Clock,
    title: "Layanan eksklusif",
    description: "Pelayanan personal dengan perhatian khusus untuk setiap pasien"
  }
];

const homeCareProcess = [
  {
    step: "1",
    title: "Booking",
    description: "Hubungi kami via WhatsApp atau website untuk booking layanan"
  },
  {
    step: "2", 
    title: "Datang",
    description: "Tim medis datang ke lokasi sesuai jadwal yang disepakati"
  },
  {
    step: "3",
    title: "Pengecekan",
    description: "Pemeriksaan kesehatan lengkap dengan peralatan medis modern"
  },
  {
    step: "4",
    title: "Hasil Digital",
    description: "Laporan hasil digital dikirim dalam 24 jam ke email/WhatsApp"
  }
];

export default function SectionHomeCare() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".homecare-item").forEach((el, i) => {
        gsap.from(el as HTMLElement, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el as HTMLElement,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray(".process-item").forEach((el, i) => {
        gsap.from(el as HTMLElement, {
          opacity: 0,
          x: i % 2 === 0 ? -40 : 40,
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
      ref={sectionRef}
      className="relative py-20 px-6 bg-gradient-to-br from-blue-50/50 to-green-50/50"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Home Care Premium
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Layanan kesehatan eksklusif langsung di rumah Anda. Tidak perlu antre, 
            tidak perlu keluar rumah, cukup hubungi kami dan tim medis profesional akan datang.
          </p>
        </div>

        {/* Keunggulan Home Care */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-primary mb-12">
            Keunggulan Home Care Klinik Sehat
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeAdvantages.slice(0, 5).map((advantage, i) => (
              <div
                key={i}
                className="homecare-item bg-white rounded-xl p-6 shadow-lg border transition-all hover:shadow-xl hover:scale-105"
              >
                <advantage.icon className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {advantage.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Proses Home Care */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-12">
            Proses Home Care
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeCareProcess.map((process, i) => (
              <div
                key={i}
                className="process-item text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  {i < homeCareProcess.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-6 -right-12 w-8 h-8 text-primary/30" />
                  )}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {process.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary text-white rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Siap Merasakan Layanan Home Care Premium?
          </h3>
          <p className="mb-6 opacity-90">
            Hubungi kami sekarang dan rasakan kemudahan layanan kesehatan di rumah Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Booking Home Care
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
