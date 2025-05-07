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
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6">
        <div className="flex-1 max-w-xl">
          <h1
            ref={headingRef}
            className="text-2xl md:text-5xl font-bold text-primary mb-6"
          >
            {"Layanan Medis Tanpa Antre, Tanpa Repot. Kami Datang Untuk Anda!"
              .split(" ")
              .map((word, i) => (
                <span key={i} className="hero-word inline-block mr-2">
                  {word}
                </span>
              ))}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Pemeriksaan lansia, anak, konsultasi dokter, hingga fisioterapi.{" "}
            <br />
            Semua bisa dilakukan langsung di rumah Anda.
          </p>

          <div className="flex gap-4">
            <Link href="/contact">
              <Button className="text-base">Kontak Kami</Button>
            </Link>
            <Button
              onClick={handleScrollToWhy}
              variant="outline"
              className="text-base"
            >
              Mengapa Memilih Kami?
            </Button>
          </div>
        </div>

        <div ref={imageRef} className="flex-1 w-screen md:max-w-3xl hero-img">
          <Image
            src="/assets/placeholder.png"
            alt="Hero Ilustrasi Klinik"
            width={400}
            height={400}
            className="w-full h-auto rounded shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
