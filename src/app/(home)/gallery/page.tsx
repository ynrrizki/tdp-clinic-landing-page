"use client";

import { useState } from "react";
import { galleryItems } from "@/app/data/galleryDataDummy";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-navy mb-6">Galeri Kegiatan</h1>

      {galleryItems.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          😶‍🌫️ Belum ada dokumentasi nih bestie...
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item.src)}
              className="group relative overflow-hidden rounded-lg border focus:outline-none"
            >
              <ImageWithFallback
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                className="aspect-square w-full object-cover group-hover:brightness-75 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-semibold text-sm bg-black/60 rounded px-2 py-1">
                  Klik untuk lihat
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-3xl p-2">
          <DialogTitle className="hidden"></DialogTitle>
          {selectedImage && (
            <ImageWithFallback
              width={1000}
              height={1000}
              src={selectedImage}
              alt="Zoomed preview"
              className="w-full h-auto object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
