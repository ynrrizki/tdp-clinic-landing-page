"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { articleList, articleCategories } from "@/app/data/articleDataDummy";
import { Calendar, ArrowRight, BookOpen, Tag } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SectionArticles() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Ambil 6 artikel terbaru
  const latestArticles = articleList
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  const getCategoryName = (categoryId: string) => {
    return articleCategories.find(cat => cat.id === categoryId)?.name || "Artikel";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi title
      gsap.fromTo(
        titleRef.current,
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animasi cards dengan stagger
      gsap.fromTo(
        cardsRef.current?.children || [],
        { 
          opacity: 0, 
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="60" height="60" viewBox="0 0 60 60" className="absolute top-20 left-10">
          <path d="M30 5L35 20L50 20L38.5 30L43.5 45L30 35L16.5 45L21.5 30L10 20L25 20Z" fill="currentColor" className="text-primary"/>
        </svg>
        <svg width="40" height="40" viewBox="0 0 60 60" className="absolute top-40 right-20">
          <path d="M30 5L35 20L50 20L38.5 30L43.5 45L30 35L16.5 45L21.5 30L10 20L25 20Z" fill="currentColor" className="text-primary"/>
        </svg>
        <svg width="80" height="80" viewBox="0 0 60 60" className="absolute bottom-20 left-1/4">
          <path d="M30 5L35 20L50 20L38.5 30L43.5 45L30 35L16.5 45L21.5 30L10 20L25 20Z" fill="currentColor" className="text-primary"/>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Artikel & Tips Kesehatan</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Informasi
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Kesehatan Terbaru
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dapatkan tips kesehatan, informasi medis terkini, dan panduan perawatan 
            dari tim ahli kesehatan Klinik Sehat untuk keluarga Anda.
          </p>
        </div>

        {/* Articles Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {latestArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Article Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={article.coverImage}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  fallbackSrc="/assets/article-placeholder.svg"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    <Tag className="w-3 h-3" />
                    {getCategoryName(article.categoryId)}
                  </span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.date)}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/article/${article.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-all duration-300 group-hover:gap-3"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/article">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>Lihat Semua Artikel</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/20 text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-xl transition-all duration-300"
              asChild
            >
              <Link href="/article?category=tips">
                <span>Tips Kesehatan</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
          
          <p className="text-muted-foreground text-sm mt-6 max-w-md mx-auto">
            Berlangganan newsletter kami untuk mendapatkan tips kesehatan terbaru langsung di email Anda
          </p>
        </div>
      </div>
    </section>
  );
}
