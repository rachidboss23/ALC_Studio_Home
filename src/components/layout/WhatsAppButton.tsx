import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-[#1fa855] px-5 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.7-3-1.3-4.9-4.3-5-4.5-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.7 1.2 1.5 1.9 1 .9 1.900 1.200 2.200 1.300.3.1.5.1.6-.1l.9-1.100c.2-.3.4-.2.6-.1l1.900.9c.3.1.5.2.5.3.1.2.1.8-.1 1.500Z" />
      </svg>
      WhatsApp
    </a>
  );
}
