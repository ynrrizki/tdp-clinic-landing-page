"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-blue-950 text-white py-10 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Klinik Sehat</h4>
            <p className="text-sm text-white/80">
              Layanan kesehatan tanpa antre, tanpa repot — kami datang untuk
              Anda.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/">Beranda</Link>
              </li>
              <li>
                <Link href="/article">Artikel</Link>
              </li>
              <li>
                <Link href="/gallery">Galeri</Link>
              </li>
              <li>
                <Link href="/about-us">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/contact">Kontak</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Bantuan Cepat</h4>
            <p className="text-sm text-white/80 mb-2">
              Klik tombol di kanan bawah untuk chat langsung.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-white/60">
          &copy; {new Date().getFullYear()} Klinik Sehat. All rights reserved.
        </div>
      </footer>
    </>
  );
}
