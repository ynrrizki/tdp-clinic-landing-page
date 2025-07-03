import ScrollWrapper from "@/components/gsap/ScrollWrapper";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {/* Background dengan pattern yang menarik namun tetap clean */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-green-50/40" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <ScrollWrapper>
        <main className="relative mt-16 min-h-screen">{children}</main>
        <Footer />
      </ScrollWrapper>

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <WhatsAppButton
          phone="6281234567890"
          message="Halo Klinik Sehat, saya ingin bertanya tentang layanan home care."
          label="Hubungi dr. Fera"
        />
      </div>
    </>
  );
}
