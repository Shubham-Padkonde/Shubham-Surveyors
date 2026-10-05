import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
export default function WhatsAppFloat() {
  return (
    <aside className="quick-contact" aria-label="Quick contact">
      <a className="quick-call" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
        <Phone size={18} aria-hidden="true" />
        <span>Call a surveyor</span>
      </a>
      <a
        href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent("Hello Shubham Surveyors, I would like to discuss a survey for my project.")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
