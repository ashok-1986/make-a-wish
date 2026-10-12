import { contact, whatsappLink } from "../lib/site";

/* Primary conversion: WhatsApp and a call, both as real buttons.
   `message` pre-fills the WhatsApp chat; `label` names the action for the audience. */
export function ContactLinks({
  tone = "plum",
  label = "WhatsApp us",
  message,
}: {
  tone?: "plum" | "sun";
  label?: string;
  message?: string;
}) {
  const primary = tone === "sun" ? "btn btn-sun" : "btn";
  const secondary = tone === "sun" ? "btn btn-ghost" : "btn btn-ghost text-plum";
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href={message ? whatsappLink(message) : contact.whatsapp}
        className={primary}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label} <span className="btn-arrow" aria-hidden="true">&rarr;</span>
      </a>
      <a href={contact.phone} className={secondary}>
        Call {contact.display}
      </a>
    </div>
  );
}
