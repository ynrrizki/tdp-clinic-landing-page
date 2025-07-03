"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phone?: string; // default if not provided
  message?: string;
  label?: string;
}

export default function WhatsAppButton({
  phone = "6281318635670",
  message = "Halo, saya ingin bertanya tentang layanan klinik.",
  label = "Chat via WhatsApp",
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex relative group"
    >
      {/* Small notification dot with pulse */}
      <div className="absolute -top-1 -right-1 z-20">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 w-3 h-3 bg-red-400 rounded-full animate-ping opacity-75"></div>
      </div>
      
      <Button 
        variant="default" 
        className="gap-2 bg-green-500 hover:bg-green-600 text-white relative z-10 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
      >
        <MessageCircle className="w-4 h-4 group-hover:animate-bounce" />
        {label}
      </Button>
    </a>
  );
}
