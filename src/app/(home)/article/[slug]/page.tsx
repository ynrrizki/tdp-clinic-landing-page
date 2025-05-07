"use client";

import { useParams } from "next/navigation";
import { articleList } from "@/app/data/articleDataDummy";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Link from "next/link";

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const article = articleList.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-semibold text-gray-600">
          🥲 Artikel tidak ditemukan, coba cek lagi ya bestie!
        </h1>
        <Link
          href="/article"
          className="text-blue-600 underline mt-4 inline-block"
        >
          Kembali ke daftar artikel
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-20 max-w-3xl">
      <ImageWithFallback
        src={article.coverImage}
        alt={article.title}
        width={1200}
        height={600}
        className="w-full h-auto rounded mb-8"
      />
      <h1 className="text-3xl font-bold text-navy mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{article.date}</p>
      <p className="text-base text-gray-700 leading-relaxed">
        {article.excerpt} <br />
        <br />
        (Konten lengkap artikel bisa ditambahkan di sini nanti sesuai kebutuhan
        CMS / backend.)
      </p>
    </article>
  );
}
