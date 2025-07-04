"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users, Star } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: "🏠",
    title: "Layanan ke Rumah",
    description:
      "Kami datang ke lokasi Anda - rumah, kantor, atau tempat yang Anda inginkan dengan peralatan medis lengkap.",
    features: [
      "Peralatan medis portable",
      "Tenaga medis berpengalaman",
      "Jadwal fleksibel",
    ],
    gradient: "from-primary to-primary/80",
    bgPattern: "bg-primary/5",
  },
  {
    icon: "🧑🏻‍⚕️",
    title: "Dokter Berpengalaman",
    description:
      "Tim medis kami terdiri dari dokter spesialis dan perawat yang telah tersertifikasi dengan pengalaman puluhan tahun.",
    features: [
      "Dokter spesialis tersertifikasi",
      "Konsultasi mendalam",
      "Follow-up berkelanjutan",
    ],
    gradient: "from-primary/90 to-primary/70",
    bgPattern: "bg-primary/5",
  },
  {
    icon: "⚡",
    title: "Teknologi Terdepan",
    description:
      "Menggunakan teknologi medis terkini dengan hasil pemeriksaan digital yang akurat dan dapat diakses kapan saja.",
    features: [
      "Hasil digital real-time",
      "Terintegrasi dengan aplikasi",
      "Riwayat kesehatan lengkap",
    ],
    gradient: "from-primary/80 to-primary/60",
    bgPattern: "bg-primary/5",
  },
  {
    icon: "💎",
    title: "Harga Transparan",
    description:
      "Tidak ada biaya tersembunyi. Paket layanan jelas dengan kualitas premium yang terjangkau untuk semua kalangan.",
    features: ["Harga all-in", "Paket fleksibel", "Garansi kepuasan"],
    gradient: "from-primary/70 to-primary/90",
    bgPattern: "bg-primary/5",
  },
];

const stats = [
  { number: "10K+", label: "Pasien Dilayani", icon: Users },
  { number: "98%", label: "Tingkat Kepuasan", icon: Star },
  { number: "24/7", label: "Layanan Darurat", icon: Clock },
  { number: "100%", label: "Terpercaya", icon: Shield },
];

export default function SectionWhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Stats animation
      gsap.from(".stat-item", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Reason cards animation
      gsap.utils.toArray(".reason-card").forEach((el, i) => {
        gsap.from(el as HTMLElement, {
          opacity: 0,
          y: 60,
          rotation: i % 2 === 0 ? -5 : 5,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el as HTMLElement,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Floating animation for icons
      gsap.utils.toArray(".floating-icon").forEach((el) => {
        gsap.to(el as HTMLElement, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="mengapa-kami"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute inset-0 opacity-40">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23current' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Star className="w-4 h-4" />
            Keunggulan Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Mengapa Ribuan Keluarga
            <br />
            <span className="text-primary/80">Mempercayai Kami?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lebih dari sekadar layanan kesehatan. Kami menghadirkan pengalaman
            medis yang personal, profesional, dan terpercaya langsung ke rumah
            Anda.
          </p>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`reason-card group relative overflow-hidden ${reason.bgPattern} rounded-3xl p-8 border border-white/60 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                      ></div>
                      <div className="floating-icon relative bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                        <div className="text-4xl">{reason.icon}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <div
                      className={`h-1 w-0 bg-gradient-to-r ${reason.gradient} rounded-full group-hover:w-full transition-all duration-700`}
                    ></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors duration-300">
                  {reason.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {reason.features.map((feature, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${reason.gradient} rounded-full`}
                      ></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Siap Merasakan Pelayanan Terbaik?
            </h3>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Bergabung dengan ribuan keluarga yang telah mempercayai layanan
              kesehatan kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/service">
                <Button size="lg" variant="secondary" className="group">
                  Lihat Layanan Kami
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-primary hover:bg-white"
                >
                  Konsultasi Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
