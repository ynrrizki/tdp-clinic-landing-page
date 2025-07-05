"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollToPlugin);

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleScrollToWhy = () => {
    const target = document.getElementById("mengapa-kami");
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 80 },
        duration: 1,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger text animation
      gsap.from(".hero-word", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Floating image loop
      gsap.to(imageRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section relative overflow-hidden md:pt-32 pb-16 min-h-[calc(100vh-90px)]"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-16 w-32 h-32 bg-green-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6 relative z-10">
        <div className="flex-1 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Layanan 24/7 Tersedia
          </div>
          
          <h1
            ref={headingRef}
            className="text-2xl md:text-5xl font-bold text-primary mb-6 leading-tight"
          >
            {"Layanan Medis Tanpa Antre, Tanpa Repot. Kami Datang Untuk Anda!"
              .split(" ")
              .map((word, i) => (
                <span key={i} className="hero-word inline-block mr-2">
                  {word}
                </span>
              ))}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
            Pemeriksaan lansia, anak, konsultasi dokter, hingga fisioterapi.{" "}
            <br />
            Semua bisa dilakukan langsung di rumah Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/contact">
              <Button className="text-base px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Kontak Kami
              </Button>
            </Link>
            <Button
              onClick={handleScrollToWhy}
              variant="outline"
              className="text-base px-8 py-3 border-2 hover:bg-primary hover:text-white transition-all duration-300"
            >
              Mengapa Memilih Kami?
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Pasien Dilayani</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Layanan Tersedia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Kepuasan Klien</div>
            </div>
          </div>
        </div>

        <div ref={imageRef} className="flex-1 w-screen md:max-w-3xl hero-img relative">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl"></div>
            <Image
              src="/assets/placeholder.png"
              alt="Hero Ilustrasi Klinik"
              width={400}
              height={400}
              className="w-full h-auto rounded-2xl shadow-2xl relative z-10 border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
