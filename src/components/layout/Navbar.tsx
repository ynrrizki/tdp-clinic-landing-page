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

export default function Navbar() {
  const articleCategories = ["Kesehatan", "Gaya Hidup", "Anak", "Lansia"];
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
      title: "Artikel",
      href: "/article",
      subItems: articleCategories.map((cat) => ({
        title: cat,
        href: `/article?category=${cat.toLowerCase()}`,
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
        isAtTop ? "" : "border-b border-gray-300"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold text-navy">Klinik Sehat</div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href={`/`} className="px-4 py-2">
                Beranda
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Artikel</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px]">
                <ul className="grid gap-2 p-4">
                  {articleCategories.map((cat) => (
                    <li key={cat}>
                      <NavigationMenuLink
                        href={`/article?category=${cat.toLowerCase()}`}
                        className="block px-2 py-1 hover:underline"
                      >
                        {cat}
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
              <NavigationMenuTrigger>Galeri</NavigationMenuTrigger>
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
              <NavigationMenuLink href="/about-us" className="px-4 py-2">
                Tentang Kami
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          className="ml-4 hidden md:inline-block"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          Kontak Kami
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
