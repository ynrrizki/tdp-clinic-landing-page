"use client";

import { Stethoscope, Building2, UserPlus, ActivitySquare, Star, CheckCircle, Phone, Calendar, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    id: "home-care",
    icon: Stethoscope,
    color: "text-blue-500",
    title: "Premium Home Care",
    price: "Rp 435.000",
    description: "Layanan medis premium langsung di rumah Anda dengan tim medis berpengalaman",
    features: [
      "Pemeriksaan umum dan vital sign lengkap",
      "Konsultasi dokter umum berpengalaman",
      "Pengambilan sampel darah untuk laboratorium",
      "Laporan hasil digital dan terintegrasi",
      "Follow up konsultasi via WhatsApp",
      "Sertifikat kesehatan resmi"
    ],
    process: [
      "Booking via WhatsApp atau website",
      "Konfirmasi jadwal dan lokasi",
      "Tim medis datang ke lokasi Anda",
      "Pemeriksaan dan konsultasi",
      "Laporan digital dikirim dalam 24 jam"
    ],
    isPopular: false
  },
  {
    id: "mcu",
    icon: Building2,
    color: "text-emerald-500", 
    title: "Medical Check Up",
    price: "Rp 195.000",
    description: "Paket pemeriksaan kesehatan komprehensif untuk deteksi dini penyakit",
    features: [
      "Pemeriksaan fisik lengkap dari head to toe",
      "Cek tekanan darah dan detak jantung",
      "Pemeriksaan mata, telinga, hidung, tenggorokan",
      "Konsultasi hasil dengan dokter",
      "Sertifikat kesehatan untuk keperluan kerja",
      "Rekomendasi pola hidup sehat"
    ],
    process: [
      "Registrasi dan booking appointment",
      "Persiapan pemeriksaan (puasa jika diperlukan)",
      "Pemeriksaan di klinik atau di rumah",
      "Analisis hasil oleh dokter",
      "Konsultasi dan pemberian sertifikat"
    ],
    isPopular: true
  },
  {
    id: "corporate",
    icon: UserPlus,
    color: "text-orange-500",
    title: "Corporate Medical",
    price: "Rp 595.000",
    description: "Solusi kesehatan karyawan untuk perusahaan dengan paket lengkap dan hemat",
    features: [
      "MCU lengkap untuk seluruh karyawan",
      "Pemeriksaan laboratorium komprehensif",
      "Konsultasi dengan dokter spesialis",
      "Laporan kesehatan digital terintegrasi",
      "Database kesehatan karyawan",
      "Program wellness dan health talk"
    ],
    process: [
      "Konsultasi kebutuhan perusahaan",
      "Penawaran paket sesuai budget",
      "Penjadwalan MCU karyawan",
      "Pelaksanaan MCU di kantor atau klinik",
      "Laporan kesehatan dan rekomendasi"
    ],
    isPopular: false
  },
  {
    id: "konsultasi",
    icon: Phone,
    color: "text-purple-500",
    title: "Konsultasi Dokter",
    price: "Rp 150.000",
    description: "Konsultasi langsung dengan dokter umum tanpa antre, kapan saja Anda butuhkan",
    features: [
      "Konsultasi dokter umum berpengalaman",
      "Tersedia 24/7 untuk emergency",
      "Konsultasi via video call atau datang langsung",
      "Resep obat dan rujukan spesialis",
      "Follow up konsultasi gratis",
      "Rekam medis digital"
    ],
    process: [
      "Booking konsultasi via WhatsApp",
      "Pilih metode: video call atau kunjungan",
      "Konsultasi dengan dokter",
      "Mendapat resep dan saran medis",
      "Follow up sesuai kebutuhan"
    ],
    isPopular: false
  },
  {
    id: "fisioterapi",
    icon: ActivitySquare,
    color: "text-pink-500",
    title: "Fisioterapi & Rehabilitasi",
    price: "Rp 250.000",
    description: "Layanan terapi fisik profesional untuk pemulihan cedera dan menjaga kebugaran",
    features: [
      "Fisioterapi untuk pemulihan cedera",
      "Terapi untuk lansia dan disabilitas",
      "Program latihan rehabilitasi",
      "Alat terapi modern dan steril",
      "Fisioterapis bersertifikat",
      "Program home exercise"
    ],
    process: [
      "Assessment kondisi pasien",
      "Rencana terapi sesuai kebutuhan",
      "Sesi terapi di rumah atau klinik",
      "Monitoring progress secara berkala",
      "Program latihan mandiri"
    ],
    isPopular: false
  }
];

const faqs = [
  {
    question: "Berapa lama hasil medical check up keluar?",
    answer: "Hasil MCU akan keluar dalam 24-48 jam setelah pemeriksaan, tergantung jenis pemeriksaan yang dilakukan."
  },
  {
    question: "Apa itu medical check up?",
    answer: "Medical check up adalah pemeriksaan kesehatan komprehensif untuk mendeteksi dini berbagai penyakit dan memantau kondisi kesehatan secara keseluruhan."
  },
  {
    question: "Apa saja yang di tes saat medical check up?",
    answer: "Pemeriksaan meliputi vital sign, pemeriksaan fisik, tes darah, tes urine, EKG, rontgen dada, dan konsultasi dokter."
  }
];

export default function ServicePage() {
  return (
    <section className="container mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Layanan Medis Tanpa Antre, Tanpa Repot
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Pemeriksaan lansia, anak, konsultasi dokter, hingga fisioterapi. 
          Semua bisa dilakukan langsung di rumah Anda dengan tim medis profesional.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {services.map((service, i) => (
          <div
            key={i}
            id={service.id}
            className={`relative bg-white rounded-xl p-8 shadow-lg border-2 transition-all hover:shadow-xl ${
              service.isPopular ? 'border-primary scale-105' : 'border-gray-200'
            }`}
          >
            {service.isPopular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Terpopuler
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-4 mb-6">
              <service.icon className={`w-12 h-12 ${service.color}`} />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {service.title}
                </h3>
                <div className="text-3xl font-bold text-primary">
                  {service.price}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              {service.description}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Yang Anda Dapatkan:
                </h4>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Proses Layanan:
                </h4>
                <div className="space-y-2">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Button className="flex-1" variant={service.isPopular ? "default" : "outline"}>
                <Calendar className="w-4 h-4 mr-2" />
                Booking Sekarang
              </Button>
              <Button variant="outline" size="icon">
                <Phone className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">
          FAQ Medical Check Up
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-primary mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-primary text-white rounded-xl p-12">
        <Users className="w-16 h-16 mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl font-bold mb-4">Siap Melayani Anda 24/7</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Tim medis profesional kami siap memberikan pelayanan terbaik untuk kesehatan Anda dan keluarga. 
          Hubungi kami sekarang untuk konsultasi gratis!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" className="text-lg px-8">
            <Phone className="w-5 h-5 mr-2" />
            Hubungi Sekarang
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary text-lg px-8">
            <Calendar className="w-5 h-5 mr-2" />
            Booking Online
          </Button>
        </div>
      </div>
    </section>
  );
}
