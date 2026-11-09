import Image from "next/image";
import type { GiftingCategory } from "../../lib/gifting";
import { CategoryIcon } from "./CategoryIcon";

export function CategoryArt({ category }: { category: GiftingCategory }) {
  if (category.image) {
    return (
      <Image
        src={category.image}
        alt={category.imageAlt ?? category.name}
        fill
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative h-full w-full"
      style={{
        background: `linear-gradient(135deg, ${category.plateFrom} 0%, ${category.plateTo} 100%)`,
      }}
    >
      <span className="absolute -right-2 -top-9 select-none text-[8.5rem] font-medium leading-none text-white/10">
        {category.number}
      </span>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.55) 0 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ color: category.plateAccent }}
      >
        <CategoryIcon name={category.icon} className="h-24 w-24" />
      </div>
      <span className="absolute bottom-5 right-5 text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
        Make a Wish
      </span>
    </div>
  );
}
