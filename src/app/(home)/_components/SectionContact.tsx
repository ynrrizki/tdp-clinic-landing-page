"use client";

import { Mail, MapPin, Phone, Clock4, Instagram, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    icon: MapPin,
    label: "Alamat Klinik",
    value: "Jl. Kesehatan No. 10, Jakarta Selatan",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kontak@kliniksehat.id",
  },
  {
    icon: Phone,
    label: "Nomor Telepon",
    value: "+62 812 3456 7890",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@kliniksehat.id",
    href: "https://instagram.com/kliniksehat.id",
  },
  {
    icon: Clock4,
    label: "Jam Operasional",
    value: "Senin - Sabtu, 08:00 - 20:00",
  },
];

const facilities = [
  "Ruang pemeriksaan umum",
  "Laboratorium lengkap", 
  "Fasilitas radiologi",
  "Ruang konsultasi dokter",
  "Area parkir luas",
  "Akses untuk disabilitas"
];

export default function SectionContact() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Hubungi Kami
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-6">
              Informasi Kontak
            </h3>
            {contactItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-white rounded-md shadow-sm border"
              >
                <item.icon className="text-primary w-5 h-5 mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-primary">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map & Facilities */}
          <div className="space-y-6">
            {/* Interactive Map Placeholder */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Lokasi Klinik
              </h3>
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Peta Interaktif</p>
                  <p className="text-sm">Jl. Kesehatan No. 10, Jakarta Selatan</p>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                Buka di Google Maps
              </Button>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Building className="w-5 h-5" />
                Fasilitas Tersedia
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {facilities.map((facility, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Siap Melayani Anda 24/7</h3>
            <p className="mb-6 opacity-90">
              Tim medis kami siap memberikan pelayanan terbaik untuk kesehatan Anda dan keluarga
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Booking Sekarang
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
