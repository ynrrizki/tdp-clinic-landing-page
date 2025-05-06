"use client";

import { Mail, MapPin, Phone, Clock4, Instagram } from "lucide-react";

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

export default function SectionContact() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-navy mb-12">
          Hubungi Kami
        </h2>

        <div className="space-y-6">
          {contactItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 bg-white rounded-md shadow-sm border"
            >
              <item.icon className="text-navy w-5 h-5 mt-1" />
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-800">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
