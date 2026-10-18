"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";
import { sendMessage } from "./send-message";

const projectTypes = ["Cocina", "Clóset / Walk-in", "Mueble de baño", "Rack / Living", "Quincho", "Remodelación", "Otro"];
const field = "w-full rounded-md border border-[#817a70] bg-[#faf9f7] px-4 py-3 text-base text-[#1b1b1a] outline-none transition-colors placeholder:text-[#595856] focus-visible:border-[#71583e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71583e] motion-reduce:transition-none";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot anti-spam
    setStatus("sending");
    const ok = await sendMessage({
      name: String(data.get("name")),
      phone: String(data.get("phone")),
      email: String(data.get("email") ?? ""),
      projectType: String(data.get("projectType")),
      message: String(data.get("message")),
    });
    setStatus(ok ? "ok" : "error");
    if (ok) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs uppercase tracking-[0.12em] text-[#595856]">Nombre<input name="name" required className={field} autoComplete="name" /></label>
        <label className="grid gap-1.5 text-xs uppercase tracking-[0.12em] text-[#595856]">Teléfono<input name="phone" required type="tel" className={field} autoComplete="tel" /></label>
      </div>
      <label className="grid gap-1.5 text-xs uppercase tracking-[0.12em] text-[#595856]">Correo (opcional)<input name="email" type="email" className={field} autoComplete="email" /></label>
      <label className="grid gap-1.5 text-xs uppercase tracking-[0.12em] text-[#595856]">Tipo de proyecto
        <select name="projectType" className={field}>{projectTypes.map((t) => <option key={t}>{t}</option>)}</select>
      </label>
      <label className="grid gap-1.5 text-xs uppercase tracking-[0.12em] text-[#595856]">Cuéntanos tu proyecto<textarea name="message" required rows={4} className={field} /></label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-3 rounded-full border border-[#1b1b1a] bg-[#1b1b1a] px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#f5f1e9] transition-all duration-200 ease-out hover:border-[#2d2d2b] hover:bg-[#2d2d2b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6f4d] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar solicitud"}
      </button>
      <p role="status" className="text-sm">
        {status === "ok" && "¡Gracias! Recibimos tu solicitud y te contactaremos pronto."}
        {status === "error" && (
          <>No pudimos enviar el formulario. Escríbenos por <a className="underline" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a>.</>
        )}
      </p>
    </form>
  );
}
