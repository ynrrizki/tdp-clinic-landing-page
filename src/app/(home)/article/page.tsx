"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { articleCategories, articleList } from "@/app/data/articleDataDummy";
import Link from "next/link";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { Newspaper } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ArticlePage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const router = useRouter();

  const filteredArticles = categoryParam
    ? articleList.filter((item) => item.categoryId === categoryParam)
    : articleList;

  const latest = filteredArticles[0];
  const rest = filteredArticles.slice(1);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mb-6 space-y-6">
        <h1 className="text-3xl font-bold text-primary">
          Artikel Terbaru Kami
        </h1>
        <Separator />
      </div>

      {filteredArticles.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-96 py-20">
          <Newspaper className="w-16 h-16 text-muted-foreground mb-10" />
          <div className="text-center text-muted-foreground text-2xl max-w-md">
            😅 Artikel belum tersedia nih, sabar ya bestie... tunggu update kece
            dari kami 💅
          </div>
        </div>
      ) : (
        <>
          {latest && (
            <div className="grid md:grid-cols-9 gap-8 mb-12">
              <div className="md:col-span-5">
                <Link href={`/article/${latest.slug}`}>
                  <ImageWithFallback
                    src={latest.coverImage}
                    alt={latest.title}
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-md object-cover mb-4"
                  />
                </Link>
                <Link href={`/article/${latest.slug}`}>
                  <h2 className="text-4xl font-bold text-primary mb-2">
                    {latest.title}
                  </h2>
                  <p className="text-md text-gray-600 line-clamp-3">
                    {latest.excerpt}
                  </p>
                </Link>
              </div>

              <div className="space-y-4 md:col-span-4">
                {rest.slice(0, 4).map((item) => (
                  <Link
                    key={item.id}
                    href={`/article/${item.slug}`}
                    className="flex gap-4 group border-b pb-4"
                  >
                    <ImageWithFallback
                      src={item.coverImage}
                      alt={item.title}
                      width={120}
                      height={80}
                      className="w-24 h-16 object-cover rounded"
                    />
                    <p className="text-xl font-medium text-gray-700 group-hover:text-primary">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <h2 className="text-xl font-semibold text-navy mb-4">
            Semua Artikel
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {articleCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/article?category=${cat.id}`}
                onClick={(e) => {
                  if (cat.id === categoryParam) {
                    e.preventDefault();
                    router.push("/article");
                  }
                }}
                className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                  cat.id === categoryParam
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {rest.length < 1 ? (
            <div className="flex flex-col justify-center items-center h-96 py-20">
              <Newspaper className="w-16 h-16 text-muted-foreground mb-10" />
              <div className="text-center text-muted-foreground text-2xl max-w-md">
                😅 Artikel belum tersedia nih, sabar ya bestie... tunggu update
                kece dari kami 💅
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article) => (
                <Link
                  key={article.id}
                  href={`/article/${article.slug}`}
                  className="bg-white border rounded-md shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <ImageWithFallback
                    src={article.coverImage}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-navy">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <p className="text-xs text-gray-400">{article.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
