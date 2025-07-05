"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { articleCategories } from "@/app/data/articleDataDummy";

export default function Navbar() {
  // Gunakan gambar yang mungkin tidak valid untuk testing fallback
  const galleryItems = [
    "/assets/invalid-gallery-1.jpg",
    "/assets/invalid-gallery-2.jpg", 
    "/assets/invalid-gallery-3.jpg",
    "/assets/invalid-gallery-4.jpg",
  ];

  // Placeholder SVG yang berbeda untuk setiap item galeri
  const galleryPlaceholders = [
    "/assets/gallery-placeholder-1.svg", // Ruang Konsultasi
    "/assets/gallery-placeholder-2.svg", // Ruang Farmasi
    "/assets/gallery-placeholder-3.svg", // Ruang Rawat
    "/assets/gallery-placeholder-4.svg", // Laboratorium
  ];

  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current) {
        gsap.to(navbarRef.current, { y: "-100%", duration: 0.3 });
      } else {
        gsap.to(navbarRef.current, { y: "0%", duration: 0.3 });
      }

      setIsAtTop(currentScroll <= 0);
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Beranda", href: "/" },
    {
      title: "Layanan",
      href: "/service",
      subItems: [
        { title: "Premium Home Care", href: "/service#home-care" },
        { title: "Medical Check Up", href: "/service#mcu" },
        { title: "Corporate Medical", href: "/service#corporate" },
        { title: "Konsultasi Dokter", href: "/service#konsultasi" },
        { title: "Fisioterapi", href: "/service#fisioterapi" },
      ],
    },
    {
      title: "Artikel",
      href: "/article",
      subItems: articleCategories.slice(0, 4).map((cat) => ({
        title: cat.name,
        href: `/article?category=${cat.id}`,
      })),
    },
    {
      title: "Galeri",
      href: "/gallery",
    },
    { title: "Tentang Kami", href: "/about-us" },
    { title: "Kontak Kami", href: "/contact" },
  ];

  const easeOutExpo = [0.16, 1, 0.3, 1];

  return (
    <header
      ref={navbarRef}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isAtTop 
          ? "bg-white/95 backdrop-blur-sm" 
          : "bg-white/98 backdrop-blur-md border-b border-primary/10 shadow-xl shadow-primary/5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-primary rounded-xl p-2.5 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-white font-bold text-lg">🏥</div>
              </div>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent group-hover:from-primary/90 group-hover:to-primary transition-all duration-300">
              Klinik Sehat
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center space-x-2">
            <NavigationMenuItem>
              <Link 
                href="/" 
                className="px-4 py-2 text-primary hover:text-primary/80 font-medium transition-all duration-300 hover:bg-primary/5 rounded-lg"
              >
                Beranda
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-primary hover:text-primary/80 font-medium transition-all duration-300 hover:bg-primary/5 rounded-lg">
                Layanan
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[280px] bg-white/95 backdrop-blur-md border border-primary/10 shadow-2xl shadow-primary/10">
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary/70 uppercase tracking-wider">Layanan Kami</h4>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/service#home-care"
                        className="group flex items-center gap-3 px-3 py-2 hover:bg-primary/5 rounded-lg transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">Premium Home Care</div>
                          <div className="text-xs text-muted-foreground">Layanan medis ke rumah</div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service#mcu"
                        className="group flex items-center gap-3 px-3 py-2 hover:bg-primary/5 rounded-lg transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">Medical Check Up</div>
                          <div className="text-xs text-muted-foreground">Pemeriksaan kesehatan menyeluruh</div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service#corporate"
                        className="group flex items-center gap-3 px-3 py-2 hover:bg-primary/5 rounded-lg transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">Corporate Medical</div>
                          <div className="text-xs text-muted-foreground">Layanan kesehatan perusahaan</div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service#konsultasi"
                        className="group flex items-center gap-3 px-3 py-2 hover:bg-primary/5 rounded-lg transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">Konsultasi Dokter</div>
                          <div className="text-xs text-muted-foreground">Konsultasi dengan dokter spesialis</div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service#fisioterapi"
                        className="group flex items-center gap-3 px-3 py-2 hover:bg-primary/5 rounded-lg transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">Fisioterapi</div>
                          <div className="text-xs text-muted-foreground">Terapi rehabilitasi medis</div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-primary/10">
                    <Link href="/service">
                      <Button variant="default" className="w-full group">
                        Lihat Semua Layanan
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-primary hover:text-primary/80 font-medium transition-all duration-300 hover:bg-primary/5 rounded-lg">
                Artikel
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[260px] bg-white/95 backdrop-blur-md border border-primary/10 shadow-2xl shadow-primary/10">
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary/70 uppercase tracking-wider">Kategori Artikel</h4>
                  </div>
                  <ul className="space-y-2">
                    {articleCategories.slice(0, 4).map((cat) => (
                      <li key={cat.id}>
                        <Link
                          href={`/article?category=${cat.id}`}
                          className="group flex items-center gap-3 px-3 py-2 hover:bg-primary/5 rounded-lg transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{cat.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-primary/10">
                    <Link href="/article">
                      <Button variant="outline" className="w-full group">
                        Lihat Semua Artikel
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-primary hover:text-primary/80 font-medium transition-all duration-300 hover:bg-primary/5 rounded-lg">
                Galeri
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[320px] bg-white/95 backdrop-blur-md border border-primary/10 shadow-2xl shadow-primary/10">
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary/70 uppercase tracking-wider">Galeri Foto</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {galleryItems.map((src, i) => (
                      <div
                        key={i}
                        className="group relative aspect-square overflow-hidden rounded-lg border border-primary/10"
                      >
                        <ImageWithFallback
                          src={src}
                          alt={`Gallery ${i + 1}`}
                          width={120}
                          height={120}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                          fallbackSrc={galleryPlaceholders[i]}
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                  <Link href="/gallery">
                    <Button variant="outline" className="w-full group">
                      Lihat Semua Galeri
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Button>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                href="/about-us" 
                className="px-4 py-2 text-primary hover:text-primary/80 font-medium transition-all duration-300 hover:bg-primary/5 rounded-lg"
              >
                Tentang Kami
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="group border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
            asChild
          >
            <Link href="/contact">
              <span>Kontak Kami</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </Button>
          
          <Button
            size="sm"
            className="group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/service">
              <span>Booking Sekarang</span>
              <span className="ml-2 group-hover:scale-110 transition-transform duration-300">📅</span>
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 relative z-10 text-primary" />
            ) : (
              <Menu className="h-6 w-6 relative z-10 text-primary" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-primary/10 bg-white/95 backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
          >
            <div className="px-6 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.title} className="space-y-2">
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium hover:bg-primary/5 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-primary group-hover:text-primary/80">{item.title}</span>
                    <span className="text-primary/40 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>

                  {item.subItems && (
                    <div className="pl-4 space-y-1 border-l-2 border-primary/10">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="group flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary group-hover:scale-125 transition-all duration-300"></div>
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA buttons */}
              <div className="pt-4 mt-6 border-t border-primary/10 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-center"
                  asChild
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Kontak Kami
                  </Link>
                </Button>
                <Button 
                  className="w-full justify-center bg-primary"
                  asChild
                >
                  <Link href="/service" onClick={() => setMobileMenuOpen(false)}>
                    Booking Sekarang
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
