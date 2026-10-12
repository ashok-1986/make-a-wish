import { Reveal } from "./Reveal";
import { whatsappLink } from "../lib/site";

const palette = [
  { tone: "bg-sun text-ink", link: "text-plum" },
  { tone: "bg-sky text-ink", link: "text-plum" },
  { tone: "bg-amber text-ink", link: "text-plum" },
  { tone: "bg-cream text-ink", link: "text-plum" },
  { tone: "bg-plum text-paper on-dark", link: "text-sun" },
];

/* Full-width colour bands, one per item, cycling through the brand colours.
   Title and description sit side by side on wide screens and stack on narrow ones.
   `level` sets the heading element so the page outline stays correct (h2 by default, h3 under a section heading).
   `enquire` adds a WhatsApp link per band with that service named in the message. */
export function Bands({
  items,
  level = 2,
  enquire = false,
}: {
  items: { id: string; name: string; text: string }[];
  level?: 2 | 3;
  enquire?: boolean;
}) {
  const Heading = level === 3 ? "h3" : "h2";
  return (
    <ul>
      {items.map((item, i) => {
        const p = palette[i % palette.length];
        return (
          <li
            key={item.id}
            id={item.id}
            className={`${p.tone} scroll-mt-36 px-5 py-12 md:px-10 md:py-16`}
          >
            <Reveal className="mx-auto grid max-w-6xl items-baseline gap-4 md:grid-cols-[1.1fr_1fr] md:gap-12">
              <Heading className="display-lg">{item.name}</Heading>
              <div>
                <p className="lede">{item.text}</p>
                {enquire && (
                  <p className="mt-4">
                    <a
                      href={whatsappLink(
                        `Hello Make a Wish, I would like to enquire about ${item.name}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link-underline inline-block py-2.5 font-bold ${p.link}`}
                    >
                      Enquire about {item.name} <span aria-hidden="true">&rarr;</span>
                    </a>
                  </p>
                )}
              </div>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
