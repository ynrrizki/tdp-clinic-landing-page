"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Stethoscope, Building2, UserPlus, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Stethoscope,
    color: "text-blue-500",
    title: "Premium Home Care",
    price: "Rp 435.000",
    description: "Layanan medis langsung di rumah Anda dengan kualitas premium.",
    features: [
      "Pemeriksaan umum dan vital sign",
      "Konsultasi dokter umum",
      "Pengambilan sampel darah",
      "Laporan hasil digital",
      "Follow up konsultasi"
    ],
    isPopular: false
  },
  {
    icon: Building2,
    color: "text-emerald-500", 
    title: "Medical Check Up",
    price: "Rp 195.000",
    description: "Paket pemeriksaan kesehatan lengkap untuk individu.",
    features: [
      "Pemeriksaan fisik lengkap",
      "Cek tekanan darah",
      "Pemeriksaan mata dan telinga",
      "Konsultasi hasil",
      "Sertifikat kesehatan"
    ],
    isPopular: true
  },
  {
    icon: UserPlus,
    color: "text-orange-500",
    title: "Corporate Medical",
    price: "Rp 595.000",
    description: "Paket pemeriksaan kesehatan untuk perusahaan dan instansi.",
    features: [
      "MCU lengkap karyawan",
      "Pemeriksaan laboratorium",
      "Konsultasi dokter spesialis",
      "Laporan kesehatan digital",
      "Database karyawan"
    ],
    isPopular: false
  }
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
      className="relative py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50/30"
    >
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            🩺 Layanan Unggulan
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Layanan Unggulan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pilih paket layanan kesehatan yang sesuai dengan kebutuhan Anda. Semua paket sudah termasuk konsultasi dokter dan laporan digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service-item group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                service.isPopular ? 'border-primary shadow-lg shadow-primary/20 scale-105' : 'border-gray-200/50 hover:border-primary/50'
              }`}
            >
              {service.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    Terpopuler
                  </div>
                </div>
              )}
              
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 ${service.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <div className="relative bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                      <service.icon className={`w-12 h-12 mx-auto ${service.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                    {service.price}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                  <div className="text-xs text-muted-foreground italic">
                    +{service.features.length - 3} fitur lainnya
                  </div>
                </div>

                <Button 
                  className={`w-full group-hover:shadow-lg transition-all duration-300 ${
                    service.isPopular 
                      ? "bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary" 
                      : ""
                  }`}
                  variant={service.isPopular ? "default" : "outline"}
                >
                  Pilih Paket
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
            <p className="text-muted-foreground mb-6 text-lg">
              Butuh layanan khusus atau konsultasi lebih lanjut?
            </p>
            <Button variant="outline" size="lg" className="group border-2 hover:bg-primary hover:text-white transition-all duration-300">
              Hubungi Tim Kami
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
