import { site } from "@/config/site";

export type ContactPayload = { name: string; phone: string; email?: string; projectType: string; message: string };

// Proveedor actual: FormSubmit (sin API key). La primera vez que se envía un mensaje,
// FormSubmit manda un correo de activación a la casilla destino: hay que confirmarlo.
// Para cambiar de proveedor (Resend, etc.) basta con reemplazar esta función.
export async function sendMessage(payload: ContactPayload): Promise<boolean> {
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `Nueva cotización web: ${payload.projectType}`,
        _template: "table",
        _captcha: "false",
        Nombre: payload.name,
        Teléfono: payload.phone,
        Correo: payload.email || "(no indicó)",
        "Tipo de proyecto": payload.projectType,
        Mensaje: payload.message,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
