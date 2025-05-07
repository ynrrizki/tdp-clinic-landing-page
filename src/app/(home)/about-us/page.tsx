"use client";

import ImageWithFallback from "@/components/ui/ImageWithFallback";

export default function AboutUsPage() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-navy mb-2">
          Tentang Klinik Sehat
        </h1>
        <p className="text-gray-600">
          Kami hadir untuk memberikan layanan kesehatan yang praktis,
          profesional, dan penuh perhatian — langsung dari rumah Anda.
        </p>
      </div>

      <div className="mb-8">
        <ImageWithFallback
          src="/assets/about/team-photo.jpg"
          alt="Tim Klinik Sehat"
          width={1200}
          height={600}
          className="rounded-md w-full h-auto object-cover"
        />
      </div>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Klinik Sehat didirikan dengan visi untuk memudahkan masyarakat
          Indonesia dalam mendapatkan layanan kesehatan tanpa harus antre, tanpa
          harus keluar rumah, dan tanpa kerepotan.
        </p>
        <p>
          Kami terdiri dari tim medis profesional yang telah berpengalaman di
          berbagai institusi kesehatan terkemuka. Layanan kami meliputi home
          care, konsultasi dokter, fisioterapi, dan pemeriksaan medis untuk
          individu maupun korporat.
        </p>
        <p>
          Dengan pendekatan yang humanis dan teknologi yang mendukung, kami
          percaya bahwa layanan kesehatan seharusnya bisa diakses dengan mudah,
          aman, dan nyaman.
        </p>
      </div>
    </section>
  );
}
