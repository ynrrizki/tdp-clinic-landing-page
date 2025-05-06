import ScrollWrapper from "@/components/gsap/ScrollWrapper";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10 w-full h-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,rgba(0,123,255,0.2)_100%)]" />
      <ScrollWrapper>
        <main className="relative mt-16 min-h-screen">{children}</main>
        <Footer /> {/* ✅ tambahkan di sini */}
      </ScrollWrapper>

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <WhatsAppButton
          phone="6281234567890"
          message="Halo Klinik Sehat, saya ingin bertanya tentang layanan."
          label="Hubungi dr. Fera"
        />
      </div>
    </>
  );
}
