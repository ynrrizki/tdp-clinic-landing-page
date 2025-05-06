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
      className="inline-flex"
    >
      <Button variant="default" className="gap-2">
        <MessageCircle className="w-4 h-4" />
        {label}
      </Button>
    </a>
  );
}
