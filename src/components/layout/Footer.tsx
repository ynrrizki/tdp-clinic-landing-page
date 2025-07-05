"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade-in animation
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-emerald-400/30 blur-3xl"></div>
      </div>

      <div className="relative py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">🏥</span>
                </div>
                <div className="text-xl font-bold">Klinik Sehat</div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Layanan kesehatan profesional tanpa antre, tanpa repot.
              </p>

              {/* Mini stats */}
              <div className="flex gap-4 mt-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">1000+</div>
                  <div className="text-xs text-gray-500">Pasien</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-emerald-400">24/7</div>
                  <div className="text-xs text-gray-500">Siaga</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">5★</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Menu</h4>
              <ul className="space-y-2">
                {[
                  { name: "Beranda", href: "/" },
                  { name: "Layanan", href: "/service" },
                  { name: "Artikel", href: "/article" },
                  { name: "Galeri", href: "/gallery" },
                  { name: "Tentang", href: "/about-us" },
                  { name: "Kontak", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-600 transition-all duration-300 hover:translate-x-1 text-sm group flex items-center"
                    >
                      {/* <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                      <div>{link.name}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Layanan</h4>
              <ul className="space-y-2">
                {[
                  "Home Care",
                  "Medical Check Up",
                  "Corporate Medical",
                  "Konsultasi Dokter",
                  "Fisioterapi",
                ].map((service) => (
                  <li key={service}>
                    <div className="text-gray-400 hover:text-yellow-600 transition-all duration-300 hover:translate-x-1 text-sm group flex items-center">
                      {service}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Hubungi</h4>

              {/* Contact info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>info@kliniksehat.id</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span>24 Jam / 7 Hari</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-2">
                {[
                  { icon: Facebook, color: "hover:text-blue-500" },
                  { icon: Instagram, color: "hover:text-pink-500" },
                  { icon: Twitter, color: "hover:text-sky-500" },
                  { icon: Youtube, color: "hover:text-red-500" },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:bg-white/10 transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Klinik Sehat. All rights
              reserved.
            </div>

            <div className="flex items-center gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-primary transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-primary transition-colors duration-300"
              >
                Terms
              </Link>
              <div className="flex items-center gap-1 text-gray-500">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-red-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
