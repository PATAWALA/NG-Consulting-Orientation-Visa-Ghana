import WhatsAppButton from "@/components/contact/WhatsAppButton";
import QuoteForm from "@/components/contact/QuoteForm";

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto py-12 space-y-16">
      <WhatsAppButton />
      <QuoteForm />
    </div>
  );
}