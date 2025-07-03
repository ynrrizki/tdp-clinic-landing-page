"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { articleCategories } from "@/app/data/articleDataDummy";

export default function Navbar() {
  const galleryItems = [
    "/assets/placeholder.png",
    "/assets/placeholder.png",
    "/assets/placeholder.png",
    "/assets/placeholder.png",
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
      className={`fixed top-0 z-50 w-full bg-white transition-all duration-300 ${
        isAtTop ? "" : "border-b border-gray-300 shadow-lg"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold text-primary">Klinik Sehat</div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center">
            <NavigationMenuItem>
              <NavigationMenuLink href={`/`} className="px-4 py-2 text-primary hover:text-primary/80">
                Beranda
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-primary hover:text-primary/80">Layanan</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px]">
                <ul className="grid gap-2 p-4">
                  <li>
                    <NavigationMenuLink
                      href="/service#home-care"
                      className="block px-2 py-1 hover:underline"
                    >
                      Premium Home Care
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/service#mcu"
                      className="block px-2 py-1 hover:underline"
                    >
                      Medical Check Up
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/service#corporate"
                      className="block px-2 py-1 hover:underline"
                    >
                      Corporate Medical
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/service#konsultasi"
                      className="block px-2 py-1 hover:underline"
                    >
                      Konsultasi Dokter
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/service#fisioterapi"
                      className="block px-2 py-1 hover:underline"
                    >
                      Fisioterapi
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/service">
                      <Button variant="outline" className="w-full mt-2 text-sm">
                        Lihat Semua Layanan
                      </Button>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-primary hover:text-primary/80">Artikel</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px]">
                <ul className="grid gap-2 p-4">
                  {articleCategories.slice(0, 4).map((cat) => (
                    <li key={cat.id}>
                      <NavigationMenuLink
                        href={`/article?category=${cat.id}`}
                        className="block px-2 py-1 hover:underline"
                      >
                        {cat.name}
                      </NavigationMenuLink>
                    </li>
                  ))}
                  <li>
                    <Link href="/article">
                      <Button variant="outline" className="w-full mt-2 text-sm">
                        Lihat Semua Artikel
                      </Button>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-primary hover:text-primary/80">Galeri</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[300px]">
                <div className="grid grid-cols-2 gap-2 p-4">
                  {galleryItems.map((src, i) => (
                    <div
                      key={i}
                      className="w-full aspect-square overflow-hidden rounded"
                    >
                      <ImageWithFallback
                        src={src}
                        alt={`Gallery ${i + 1}`}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                  <Link href="/gallery" className="col-span-2">
                    <Button variant="outline" className="w-full text-sm mt-2">
                      Lihat Semua Galeri
                    </Button>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/about-us" className="px-4 py-2 text-primary hover:text-primary/80">
                Tentang Kami
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          className="ml-4 hidden md:inline-block"
          asChild
        >
          <Link href="/contact">Kontak Kami</Link>
        </Button>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden overflow-scroll border-t"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "50vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              {navItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>

                  {item.subItems && (
                    <div className="pl-6 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-accent hover:text-accent-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
