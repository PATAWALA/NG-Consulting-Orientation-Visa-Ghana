"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const openWhatsApp = () => window.open("https://wa.me/24100000000", "_blank");

  return (
    <section className="px-4 text-center">
      <button
        onClick={openWhatsApp}
        className="inline-flex items-center gap-2 bg-[#25D366] text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-green-600 transition shadow-lg"
      >
        <MessageCircle size={24} /> Discuter directement sur WhatsApp
      </button>
    </section>
  );
}