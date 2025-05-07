"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function HeroSection() {
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
  return (
    <section className="relative overflow-hidden md:pt-32 pb-16 min-h-[calc(100vh-90px)]">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6">
        <motion.div
          className="flex-1 max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-2xl md:text-5xl font-bold text-navy mb-6">
            Layanan Medis Tanpa Antre, Tanpa Repot. Kami Datang Untuk Anda!
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8">
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
        </motion.div>

        <motion.div
          //   className="flex-1 max-w-md"
          className="flex-1 w-screen md:max-w-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src="/assets/placeholder.png"
            alt="Hero Ilustrasi Klinik"
            width={400}
            height={400}
            className="w-full h-auto rounded shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
