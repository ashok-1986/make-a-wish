import { Reveal } from "./Reveal";

const palette = [
  "bg-sun text-ink",
  "bg-sky text-ink",
  "bg-amber text-ink",
  "bg-cream text-ink",
  "bg-plum text-paper",
];

/* Full-width colour bands, one per item, cycling through the brand colours.
   Title and description sit side by side on wide screens and stack on narrow ones. */
export function Bands({
  items,
}: {
  items: { id: string; name: string; text: string }[];
}) {
  return (
    <ul>
      {items.map((item, i) => (
        <li
          key={item.id}
          id={item.id}
          className={`${palette[i % palette.length]} scroll-mt-20 px-5 py-12 md:px-10 md:py-16`}
        >
          <Reveal className="mx-auto grid max-w-6xl items-baseline gap-4 md:grid-cols-[1.1fr_1fr] md:gap-12">
            <h2 className="display-lg">{item.name}</h2>
            <p className="lede">{item.text}</p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
