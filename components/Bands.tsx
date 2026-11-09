import { Reveal } from "./Reveal";
import { whatsappLink } from "../lib/site";

const palette = [
  { tone: "bg-[#0B090E] border-b border-white/10 text-white", link: "text-purple-400 hover:text-purple-300" },
  { tone: "bg-[#0E0C14] border-b border-white/10 text-white", link: "text-purple-400 hover:text-purple-300" },
  { tone: "bg-[#131019] border-b border-white/10 text-white", link: "text-purple-400 hover:text-purple-300" },
  { tone: "bg-[#0E0C14] border-b border-white/10 text-white", link: "text-purple-400 hover:text-purple-300" },
];

/* Full-width dark architectural bands, one per item, with clean borders and high-contrast typography. */
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
            <Reveal className="mx-auto grid max-w-7xl items-baseline gap-4 md:grid-cols-[1.1fr_1fr] md:gap-12">
              <Heading className="font-sans text-2xl sm:text-3xl lg:text-[40px] font-medium tracking-tight text-white">
                {item.name}
              </Heading>
              <div>
                <p className="text-base sm:text-lg leading-relaxed text-zinc-300">{item.text}</p>
                {enquire && (
                  <p className="mt-4">
                    <a
                      href={whatsappLink(
                        `Hello Make a Wish, I would like to enquire about ${item.name}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-medium ${p.link}`}
                    >
                      <span>Enquire about {item.name}</span>
                      <span aria-hidden="true">&rarr;</span>
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
