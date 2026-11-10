/* Make a Wish — corporate gifting catalogue.
   Source: the 2026 hamper catalogue and the pure brass and copper collections.
   The catalogue is deliberately price-free: quantities, editions and packaging are
   published here, while rate cards and proposals are shared by the sales desk. */

/* ---------- Shared types ---------- */

export type CategoryFilterId =
  | "all"
  | "festive"
  | "year-round"
  | "precious"
  | "gourmet"
  | "wellness";

export type CategoryIconName =
  | "leaf"
  | "briefcase"
  | "cup"
  | "bowl"
  | "diya"
  | "bottle"
  | "flame"
  | "spray"
  | "lantern"
  | "soap"
  | "cookie"
  | "coin"
  | "chocolate"
  | "bread";

export type GiftingCategory = {
  id: string;
  number: string;
  name: string;
  seasonLabel: string;
  filters: CategoryFilterId[];
  description: string;
  highlights: string[];
  useCase: string;
  image?: string;
  imageAlt?: string;
  icon: CategoryIconName;
  plateFrom: string;
  plateTo: string;
  plateAccent: string;
};

export type CategoryFilter = {
  id: CategoryFilterId;
  label: string;
};

export type SeriesId = "classic" | "jars" | "heritage" | "eco";

export type HamperSeries = {
  id: SeriesId;
  name: string;
  shortName: string;
  description: string;
};

export type HamperEdition = {
  id: string;
  name: string;
  netWeightG: number;
  contents: string[];
  note?: string;
};

export type Hamper = {
  id: string;
  name: string;
  series: SeriesId;
  packaging: string;
  description: string;
  image: string;
  imageAlt: string;
  editions: HamperEdition[];
};

export type WeightBandId = "all" | "compact" | "executive" | "grand";

export type WeightBand = {
  id: WeightBandId;
  label: string;
  min?: number;
  max?: number;
};

export type ShortlistKind = "category" | "hamper" | "turnkey" | "product";

export type ShortlistItem = {
  key: string;
  kind: ShortlistKind;
  name: string;
  detail?: string;
};

/* ---------- Category filters ---------- */

export const categoryFilters: CategoryFilter[] = [
  { id: "all", label: "All 14 categories" },
  { id: "festive", label: "Diwali 2026 & festive" },
  { id: "year-round", label: "Year-round & non-festive" },
  { id: "precious", label: "Precious metals & heritage" },
  { id: "gourmet", label: "Gourmet edibles & bakery" },
  { id: "wellness", label: "Wellness, scents & artisanal" },
];

/* ---------- The 14 categories ---------- */

export const giftingCategories: GiftingCategory[] = [
  {
    id: "dry-fruit",
    number: "01",
    name: "Dry Fruit",
    seasonLabel: "Diwali 2026 & year-round",
    filters: ["festive", "gourmet"],
    description:
      "Graded cashews, almonds, pistachios, walnuts, raisins, anjeer, apricots and roasted makhana in glass jars, heritage boxes, cavity boxes and jute bags.",
    highlights: ["Cashews & almonds", "Pistachios & walnuts", "Anjeer & apricots", "Roasted makhana"],
    useCase: "Bulk employee Diwali hampers and client festive distributions.",
    image: "/images/categories/dry-fruit.jpg",
    imageAlt: "An open green Diwali box with six compartments of cashews, almonds, pistachios, walnuts, raisins and dates",
    icon: "leaf",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#f8e23a",
  },
  {
    id: "leather",
    number: "02",
    name: "Leather Products & Accessories",
    seasonLabel: "Year-round",
    filters: ["year-round"],
    description:
      "Executive laptop bags, desk organisers, portfolio folders, wallets, passport covers, travel kits and cardholders in genuine and vegan leather.",
    highlights: ["Laptop bags", "Desk organisers", "Wallets & cardholders", "Travel kits"],
    useCase: "Joining kits, conferences, leadership offsites and year-round milestones.",
    icon: "briefcase",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#f8e23a",
  },
  {
    id: "crockery",
    number: "03",
    name: "Crockery / Utensils",
    seasonLabel: "Year-round & festive",
    filters: ["year-round", "festive"],
    description:
      "Ceramic and bone-china tea and coffee sets, executive drinkware, artisanal platters, serveware and stainless utility ware.",
    highlights: ["Tea & coffee sets", "Serveware", "Drinkware", "Utility ware"],
    useCase: "Employee appreciation, housewarmings and festive family hampers.",
    image: "/images/categories/crockery.jpg",
    imageAlt: "A gold-toned brass coffee dabara set on a warm cream background",
    icon: "cup",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#f8e23a",
  },
  {
    id: "german-silver",
    number: "04",
    name: "German Silver Products",
    seasonLabel: "Diwali 2026 & weddings",
    filters: ["festive", "precious"],
    description:
      "Ornate German silver dry-fruit bowls, carved puja thalis, floral urlis, goblets and heritage tray sets in velvet presentation boxes.",
    highlights: ["Dry-fruit bowls", "Puja thalis", "Urlis & goblets", "Tray sets"],
    useCase: "CXO and VIP client gifting, leadership hampers and commemorative awards.",
    icon: "bowl",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#7ed2ea",
  },
  {
    id: "brassware",
    number: "05",
    name: "Brassware",
    seasonLabel: "Diwali 2026 & cultural",
    filters: ["festive", "precious"],
    description:
      "Handcrafted brass diyas, table urlis, traditional incense holders, carved bells and heirloom festive centrepieces.",
    highlights: ["Diyas", "Urlis", "Incense holders", "Bells & centrepieces"],
    useCase: "Traditional Diwali hampers, campus inauguration gifts and heritage themes.",
    image: "/images/categories/brassware.jpg",
    imageAlt: "A handcrafted brass ghee pot with a floral lid and a small brass spoon",
    icon: "diya",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#f8e23a",
  },
  {
    id: "copperware",
    number: "06",
    name: "Copperware",
    seasonLabel: "Year-round & festive",
    filters: ["year-round", "festive", "precious"],
    description:
      "Pure hammered copper water bottles, bedside carafe sets, Moscow mule mugs and Ayurvedic wellness drinkware sets.",
    highlights: ["Water bottles", "Carafe sets", "Mugs", "Wellness drinkware"],
    useCase: "Corporate wellness drives, World Health Day and sustainable year-round gifting.",
    image: "/images/categories/copperware.jpg",
    imageAlt: "A hammered copper water bottle with a leaf shadow on a warm background",
    icon: "bottle",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#f8e23a",
  },
  {
    id: "scented-candles",
    number: "07",
    name: "Scented Candles",
    seasonLabel: "Diwali 2026 & year-round",
    filters: ["festive", "wellness"],
    description:
      "Hand-poured soy wax glass jar candles, brass and frost votive sets, and festive floral and woody aroma collections.",
    highlights: ["Soy wax jars", "Votive sets", "Floral aromas", "Woody aromas"],
    useCase: "Festive hamper pairings, Women's Day and employee wellness kits.",
    icon: "flame",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#f8e23a",
  },
  {
    id: "perfumes",
    number: "08",
    name: "Perfumes",
    seasonLabel: "Year-round",
    filters: ["year-round"],
    description:
      "Curated Eau de Parfum gift boxes, artisanal alcohol-free attars and travel fragrance discovery sets for executive gifting.",
    highlights: ["EDP gift boxes", "Alcohol-free attars", "Travel sets", "Discovery sets"],
    useCase: "Leadership recognition, client appreciation and VIP conference giveaways.",
    icon: "spray",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#7ed2ea",
  },
  {
    id: "lantern-ubtan",
    number: "09",
    name: "Lantern & Ubtan",
    seasonLabel: "Diwali 2026 specialty",
    filters: ["festive"],
    description:
      "Decorative metallic and ethnic hanging Diwali lanterns paired with authentic aromatic herbal Abhyanga Snan ubtan kits.",
    highlights: ["Hanging lanterns", "Herbal ubtan", "Festive kits", "Traditional pairings"],
    useCase: "Culturally rooted Diwali hampers and regional festive distributions.",
    image: "/images/categories/lantern-ubtan.jpg",
    imageAlt: "Two ornate brass lanterns with lit candles on a warm Diwali table",
    icon: "lantern",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#f8e23a",
  },
  {
    id: "homemade-soaps",
    number: "10",
    name: "Homemade Soaps",
    seasonLabel: "Year-round & festive",
    filters: ["year-round", "festive", "wellness"],
    description:
      "Cold-pressed artisanal bath bars crafted with natural essential oils, saffron, sandalwood, rose and botanical extracts.",
    highlights: ["Saffron", "Sandalwood", "Rose", "Botanical bars"],
    useCase: "Eco-conscious corporate hampers, spa boxes and Women's Day kits.",
    icon: "soap",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#7ed2ea",
  },
  {
    id: "millet-cookies",
    number: "11",
    name: "Millet Cookies",
    seasonLabel: "Year-round & festive",
    filters: ["year-round", "festive", "gourmet"],
    description:
      "Wholesome ragi, jowar, bajra and oats artisanal cookies in air-tight festive and corporate gift tins.",
    highlights: ["Ragi", "Jowar", "Bajra", "Oats"],
    useCase: "Health-forward corporate hampers, conference snack boxes and festive gifting.",
    icon: "cookie",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#f8e23a",
  },
  {
    id: "999-silver",
    number: "12",
    name: "999 Silver Products",
    seasonLabel: "Diwali 2026 & landmark gifts",
    filters: ["festive", "precious"],
    description:
      "Hallmarked 999 pure silver Laxmi-Ganesh coins, silver bars, embossed silver frames and heirloom silver keepsakes.",
    highlights: ["Laxmi-Ganesh coins", "Silver bars", "Embossed frames", "Keepsakes"],
    useCase: "Board members, marquee clients, service awards and Dhanteras.",
    icon: "coin",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#7ed2ea",
  },
  {
    id: "chocolates",
    number: "13",
    name: "Chocolates",
    seasonLabel: "Diwali 2026 & year-round",
    filters: ["festive", "year-round", "gourmet"],
    description:
      "Artisanal dark and milk chocolate bars, roasted nut pralines, truffle assortments and festive celebration boxes.",
    highlights: ["Dark & milk bars", "Nut pralines", "Truffles", "Celebration boxes"],
    useCase: "Universal employee gifting, product launches, New Year and Diwali.",
    icon: "chocolate",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#f8e23a",
  },
  {
    id: "bakery",
    number: "14",
    name: "Bakery Products",
    seasonLabel: "Year-round & festive",
    filters: ["year-round", "festive", "gourmet"],
    description:
      "Gourmet dry tea cakes, spiced festive loaves, artisanal lavash, cheese straws, biscotti and savoury bake assortments.",
    highlights: ["Tea cakes", "Festive loaves", "Lavash", "Biscotti"],
    useCase: "Town hall celebrations, Christmas and New Year hampers, festive gourmet baskets.",
    icon: "bread",
    plateFrom: "#2b1442",
    plateTo: "#5c2f7f",
    plateAccent: "#f8e23a",
  },
];

export function categoryMatchesFilter(category: GiftingCategory, filterId: CategoryFilterId): boolean {
  return filterId === "all" || category.filters.includes(filterId);
}

/* ---------- Hampers ---------- */

export const hamperSeries: HamperSeries[] = [
  {
    id: "classic",
    name: "Classic Cavity Boxes",
    shortName: "Classic Cavity",
    description:
      "Structured cavity boxes in brocade, chevron, stripe and window-lid finishes, with five, six, four or three compartments.",
  },
  {
    id: "jars",
    name: "Luxury Glass Jar Series",
    shortName: "Glass Jars",
    description:
      "Dry fruits layered in glass jars, presented in copper-bronze, emerald and royal-purple boxes.",
  },
  {
    id: "heritage",
    name: "Heritage & Minakari Keepsakes",
    shortName: "Heritage Keepsakes",
    description:
      "Minakari, ivory palace and peacock keepsake boxes, two of them with a matching carry bag.",
  },
  {
    id: "eco",
    name: "Eco-Artisanal Jute Hamper Bag",
    shortName: "Eco Jute",
    description:
      "A reusable jute bag with four potlis and a complete festive assortment.",
  },
];

export const hampers: Hamper[] = [
  {
    id: "5-cavity-gold-floral",
    name: "5 Cavities Premium Box",
    series: "classic",
    packaging: "Gold floral brocade",
    description:
      "Five deep cavities in a gold floral brocade box, filled with graded dry fruits for a classic festive presentation.",
    image: "/images/hampers/5-cavity-gold-floral.jpg",
    imageAlt: "Open gold floral brocade box with five compartments of dry fruits",
    editions: [
      {
        id: "edition-1",
        name: "Edition 1",
        netWeightG: 500,
        contents: ["Cashew 100 g", "Almond 100 g", "Raisins 100 g", "Pista 100 g", "Walnut 100 g"],
      },
      {
        id: "edition-2",
        name: "Edition 2",
        netWeightG: 1000,
        contents: ["Cashew 200 g", "Almond 200 g", "Raisins 200 g", "Walnut 200 g", "Apricot 200 g"],
      },
    ],
  },
  {
    id: "6-cavity-festive-chevron",
    name: "6 Cavities Premium Box",
    series: "classic",
    packaging: "Festive chevron",
    description:
      "A six-cavity chevron box with two curated mixes, one built around anjeer and walnut and one around apricot and roasted makhana.",
    image: "/images/hampers/6-cavity-festive-chevron.jpg",
    imageAlt: "Open chevron-patterned gift box with six compartments of dry fruits",
    editions: [
      {
        id: "edition-1",
        name: "Edition 1",
        netWeightG: 600,
        contents: ["Cashew 100 g", "Almond 100 g", "Raisins 100 g", "Pista 100 g", "Anjeer 100 g", "Walnut 100 g"],
        note: "Exotic mix with anjeer and walnut.",
      },
      {
        id: "edition-2",
        name: "Edition 2",
        netWeightG: 900,
        contents: ["Cashew 150 g", "Almond 150 g", "Raisins 150 g", "Pista 150 g", "Apricot 150 g", "Roasted makhana 150 g"],
        note: "Festive mix with apricot and roasted makhana.",
      },
    ],
  },
  {
    id: "3-cavity-gold-window",
    name: "3 Cavities Premium Box",
    series: "classic",
    packaging: "Gold window lid",
    description:
      "A three-cavity box with a gold window lid, filled with the classic trio of cashew, almond and pista.",
    image: "/images/hampers/3-cavity-gold-window.jpg",
    imageAlt: "Gold window-lid gift box with three compartments of cashew, almond and pista",
    editions: [
      {
        id: "edition-1",
        name: "Edition 1",
        netWeightG: 450,
        contents: ["Cashew 150 g", "Almond 150 g", "Pista 150 g"],
      },
      {
        id: "edition-2",
        name: "Edition 2",
        netWeightG: 600,
        contents: ["Cashew 200 g", "Almond 200 g", "Pista 200 g"],
      },
    ],
  },
  {
    id: "5-cavity-mandala",
    name: "5 Cavities Premium Mandala Box",
    series: "classic",
    packaging: "Mandala motif with keepsake compartment",
    description:
      "A mandala-print box with five dry-fruit cavities and a pre-curated festive keepsake compartment, presented ready to order.",
    image: "/images/hampers/5-cavity-mandala.jpg",
    imageAlt: "Open mandala-print gift box with five gold cavities and a keepsake section",
    editions: [
      {
        id: "edition-1",
        name: "Edition 1",
        netWeightG: 400,
        contents: ["Cashew 80 g", "Almond 80 g", "Raisins 80 g", "Pista 80 g", "Walnut 80 g", "Festive keepsake compartment"],
        note: "The keepsake compartment comes pre-curated with the box.",
      },
      {
        id: "edition-2",
        name: "Edition 2",
        netWeightG: 800,
        contents: ["Cashew 160 g", "Almond 160 g", "Raisins 160 g", "Pista 160 g", "Walnut 160 g", "Festive keepsake compartment"],
        note: "The keepsake compartment comes pre-curated with the box.",
      },
    ],
  },
  {
    id: "4-cavity-traditional-stripe",
    name: "4 Cavities Premium Box",
    series: "classic",
    packaging: "Traditional stripe",
    description:
      "A four-cavity box in a traditional stripe print, filled with cashew, almond, pista and raisin.",
    image: "/images/hampers/4-cavity-traditional-stripe.jpg",
    imageAlt: "Open striped gift box with four compartments of cashew, almond, pista and raisins",
    editions: [
      {
        id: "edition-1",
        name: "Edition 1",
        netWeightG: 600,
        contents: ["Cashew 150 g", "Almond 150 g", "Pista 150 g", "Raisins 150 g"],
      },
      {
        id: "edition-2",
        name: "Edition 2",
        netWeightG: 800,
        contents: ["Cashew 200 g", "Almond 200 g", "Pista 200 g", "Raisins 200 g"],
      },
    ],
  },
  {
    id: "4-cavity-sky-blue",
    name: "4 Cavities Premium Box",
    series: "classic",
    packaging: "Sky blue and gold floral",
    description:
      "A sky blue and gold floral box with four cavities, a lighter festive presentation for teams and clients.",
    image: "/images/hampers/4-cavity-sky-blue.jpg",
    imageAlt: "Open sky blue and gold floral gift box with four compartments of dry fruits",
    editions: [
      {
        id: "standard",
        name: "Standard edition",
        netWeightG: 400,
        contents: ["Cashew 100 g", "Almond 100 g", "Pista 100 g", "Raisins 100 g"],
      },
    ],
  },
  {
    id: "3-glass-jars-copper-bronze",
    name: "3 Glass Jars Luxury Box",
    series: "jars",
    packaging: "Copper-bronze",
    description:
      "Three glass jars of dry fruits in a copper-bronze luxury box, a compact format for desks and individual gifting.",
    image: "/images/hampers/3-glass-jars-copper-bronze.jpg",
    imageAlt: "Open copper-bronze box with three glass jars of cashew, almond and raisins",
    editions: [
      {
        id: "edition-1",
        name: "Edition 1",
        netWeightG: 300,
        contents: ["Cashew 100 g", "Almond 100 g", "Raisins 100 g"],
      },
      {
        id: "edition-2",
        name: "Edition 2",
        netWeightG: 450,
        contents: ["Cashew 150 g", "Almond 150 g", "Raisins 150 g"],
      },
    ],
  },
  {
    id: "6-jars-emerald-jaali",
    name: "6 Jars Luxury Box",
    series: "jars",
    packaging: "Emerald and gold jaali",
    description:
      "Six glass jars in an emerald and gold jaali box, with a choice of exotic dry fruits or gourmet cashew varieties.",
    image: "/images/hampers/6-jars-emerald-jaali.jpg",
    imageAlt: "Open emerald and gold box with six glass jars of dry fruits",
    editions: [
      {
        id: "edition-1",
        name: "Edition 1",
        netWeightG: 480,
        contents: ["Cashew 80 g", "Almond 80 g", "Raisins 80 g", "Pista 80 g", "Walnut 80 g", "Apricot 80 g"],
        note: "Six exotic dry fruits, 80 g per jar.",
      },
      {
        id: "edition-2",
        name: "Edition 2",
        netWeightG: 480,
        contents: ["Six gourmet cashew varieties, 80 g per jar"],
        note: "A cashew-led assortment across six jars.",
      },
    ],
  },
  {
    id: "4-glass-jar-royal-purple",
    name: "4 Glass Jar Premium Box",
    series: "jars",
    packaging: "Royal purple window",
    description:
      "Four glass jars in a royal purple window box, with a pista-led or apricot-led assortment.",
    image: "/images/hampers/4-glass-jar-royal-purple.jpg",
    imageAlt: "Open royal purple window box with four glass jars of dry fruits",
    editions: [
      {
        id: "pista",
        name: "Pista edition",
        netWeightG: 400,
        contents: ["Cashew 100 g", "Almond 100 g", "Raisins 100 g", "Pista 100 g"],
      },
      {
        id: "apricot",
        name: "Apricot edition",
        netWeightG: 400,
        contents: ["Cashew 100 g", "Almond 100 g", "Raisins 100 g", "Apricot 100 g"],
      },
    ],
  },
  {
    id: "4-glass-jars-minakari",
    name: "4 Glass Jars Luxury Minakari Box",
    series: "heritage",
    packaging: "Minakari",
    description:
      "Four glass jars in a Minakari keepsake box, with cashew, almond, raisin and pista.",
    image: "/images/hampers/4-glass-jars-minakari.jpg",
    imageAlt: "Open Minakari keepsake box with four glass jars of dry fruits",
    editions: [
      {
        id: "standard",
        name: "Standard edition",
        netWeightG: 400,
        contents: ["Cashew 100 g", "Almond 100 g", "Raisins 100 g", "Pista 100 g"],
      },
    ],
  },
  {
    id: "4-glass-jars-ivory-palace",
    name: "4 Glass Jar Heritage Ivory Palace Box",
    series: "heritage",
    packaging: "Ivory palace with matching carry bag",
    description:
      "An ivory palace keepsake box with four glass jars and a matching carry bag, in 400 g and 600 g editions.",
    image: "/images/hampers/4-glass-jars-ivory-palace.jpg",
    imageAlt: "Open ivory palace keepsake box with four glass jars of dry fruits",
    editions: [
      {
        id: "edition-1",
        name: "Edition 1",
        netWeightG: 400,
        contents: ["Cashew 100 g", "Almond 100 g", "Raisins 100 g", "Pista 100 g"],
      },
      {
        id: "edition-2",
        name: "Edition 2",
        netWeightG: 600,
        contents: ["Cashew 150 g", "Almond 150 g", "Raisins 150 g", "Pista 150 g"],
      },
    ],
  },
  {
    id: "4-glass-jars-peacock",
    name: "4 Glass Jar Heritage Peacock Box",
    series: "heritage",
    packaging: "Peacock with matching carry bag",
    description:
      "A peacock-motif heritage box with four glass jars and a matching carry bag, in 400 g and 600 g editions.",
    image: "/images/hampers/4-glass-jars-peacock.jpg",
    imageAlt: "Open peacock-motif heritage box with four glass jars of dry fruits",
    editions: [
      {
        id: "edition-1",
        name: "Edition 1",
        netWeightG: 400,
        contents: ["Cashew 100 g", "Almond 100 g", "Raisins 100 g", "Pista 100 g"],
      },
      {
        id: "edition-2",
        name: "Edition 2",
        netWeightG: 600,
        contents: ["Cashew 150 g", "Almond 150 g", "Raisins 150 g", "Pista 150 g"],
      },
    ],
  },
  {
    id: "eco-jute-hamper",
    name: "Eco-Artisanal Jute Hamper Bag",
    series: "eco",
    packaging: "Jute bag with four potlis",
    description:
      "A reusable jute hamper bag with four potlis of dry fruits, chocolates, a festive diya or candle and traditional ubtan.",
    image: "/images/hampers/eco-jute-hamper.jpg",
    imageAlt: "Jute hamper bag with four embroidered potlis and a leather handle",
    editions: [
      {
        id: "complete",
        name: "Complete festive edition",
        netWeightG: 650,
        contents: ["Cashew 200 g", "Almond 150 g", "Salted pista 150 g", "Raisin 150 g", "15 chocolates", "Festive diya or candle", "Traditional ubtan"],
        note: "650 g of dry fruits across four potlis, plus the festive assortment.",
      },
    ],
  },
];

export function hamperById(id: string): Hamper | undefined {
  return hampers.find((hamper) => hamper.id === id);
}

export function hamperSeriesById(id: SeriesId): HamperSeries {
  return hamperSeries.find((series) => series.id === id) ?? hamperSeries[0];
}

export function hamperSeriesCount(id: SeriesId): number {
  return hampers.filter((hamper) => hamper.series === id).length;
}

/* ---------- Weights ---------- */

export const weightBands: WeightBand[] = [
  { id: "all", label: "All weights" },
  { id: "compact", label: "300–450 g compact", min: 300, max: 450 },
  { id: "executive", label: "480–600 g executive", min: 480, max: 600 },
  { id: "grand", label: "650–1,000 g grand", min: 650, max: 1000 },
];

export function weightBandById(id: WeightBandId): WeightBand {
  return weightBands.find((band) => band.id === id) ?? weightBands[0];
}

export function editionMatchesBand(edition: HamperEdition, bandId: WeightBandId): boolean {
  if (bandId === "all") return true;
  const band = weightBandById(bandId);
  return edition.netWeightG >= (band.min ?? 0) && edition.netWeightG <= (band.max ?? Number.POSITIVE_INFINITY);
}

export function hamperMatchesBand(hamper: Hamper, bandId: WeightBandId): boolean {
  return bandId === "all" || hamper.editions.some((edition) => editionMatchesBand(edition, bandId));
}

export function formatWeight(grams: number): string {
  if (grams >= 1000) {
    const kg = grams / 1000;
    return `${kg.toLocaleString("en-IN", { maximumFractionDigits: 1 })} kg`;
  }
  return `${grams.toLocaleString("en-IN")} g`;
}

export function editionWeightLabel(edition: HamperEdition): string {
  return `${edition.name} · ${formatWeight(edition.netWeightG)}`;
}

/* ---------- Shortlist messages ---------- */

export const shortlistKindLabels: Record<ShortlistKind, string> = {
  category: "Category",
  hamper: "Hamper",
  turnkey: "Turnkey",
  product: "Product",
};

export function shortlistWhatsAppMessage(items: ShortlistItem[]): string {
  const lines = [
    "Hello Make a Wish, I would like to request the corporate gifting catalogue and a proposal.",
    "",
    "My shortlist:",
    ...items.map((item, index) => {
      const detail = item.detail ? ` — ${item.detail}` : "";
      return `${index + 1}. ${item.name} (${shortlistKindLabels[item.kind]})${detail}`;
    }),
    "",
    "Please share the next steps.",
  ];
  return lines.join("\n");
}

export function shortlistNotes(items: ShortlistItem[]): string {
  if (items.length === 0) return "";
  return [
    "Shortlist:",
    ...items.map((item) => {
      const detail = item.detail ? ` — ${item.detail}` : "";
      return `- ${item.name} (${shortlistKindLabels[item.kind]})${detail}`;
    }),
  ].join("\n");
}

/* ---------- Enquiry content ---------- */

export const corporateGiftingPurposes = [
  "Employee Joining Kits & Onboarding",
  "Annual Town Hall & Conference Giveaways",
  "Client Appreciation & Executive Keepsakes",
  "New Year 2027 Diaries, Calendars & Desk Tech",
  "Pure Copper & Artisanal Brassware Sourcing",
  "Turnkey Event Decor + Bulk Gifting Bundle (5%–10% Off)",
  "Other Corporate Requirement",
] as const;

export type CorporateGiftingPurpose = (typeof corporateGiftingPurposes)[number];

export const inquiryTypes = [
  "Corporate gifting (Diwali 2026 & year-round)",
  "Diwali 2026 corporate gifting catalogue",
  "Year-round corporate gifting",
  "Multi-category corporate gifting (14 categories)",
  "Turnkey decor + corporate gifting",
  "Corporate events, exhibitions & festive campus decor",
  "Weddings, mandap decor & social celebrations",
];

export type CatalogueRequestDetails = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
};

export function catalogueRequestMessage(details: CatalogueRequestDetails): string {
  return [
    "Hello Make a Wish, please share the 2026 corporate gifting catalogue.",
    "",
    `Name: ${details.name}`,
    `Company: ${details.company}`,
    `Email: ${details.email}`,
    `WhatsApp: ${details.phone}`,
    `Interest: ${details.interest}`,
    "",
    "Please also let me know the next steps for a corporate proposal.",
  ].join("\n");
}

export type RFQDetails = {
  name: string;
  company: string;
  email: string;
  phone: string;
  giftingPurpose?: string;
  inquiryType?: string;
  quantityTier?: string;
  quantity?: string;
  target?: string;
  location?: string;
  requirements?: string;
  items?: ShortlistItem[];
};

export function rfqMessage(details: RFQDetails): string {
  const purpose = details.giftingPurpose || details.inquiryType || "Corporate Gifting Requirement";
  const qty = details.quantityTier || details.quantity;

  const lines = [
    "Hello Make A Wish, I would like to request a B2B corporate volume quote & presentation.",
    "",
    `• Name: ${details.name.trim()}`,
    `• Company: ${details.company.trim()}`,
    `• Work Email: ${details.email.trim()}`,
    `• WhatsApp / Phone: ${details.phone.trim()}`,
    `• Gifting Purpose: ${purpose}`,
    qty ? `• Estimated Quantity Tier: ${qty}` : "",
    details.location?.trim() ? `• Delivery Location: ${details.location.trim()}` : "",
    details.target?.trim() ? `• Target Date: ${details.target.trim()}` : "",
  ].filter(Boolean);

  if (details.items && details.items.length > 0) {
    lines.push("");
    lines.push(`• Shortlisted Items / SKUs (${details.items.length}):`);
    details.items.forEach((item, index) => {
      const detail = item.detail ? ` — ${item.detail}` : "";
      lines.push(`  ${index + 1}. ${item.name} (${shortlistKindLabels[item.kind] || item.kind})${detail}`);
    });
  }

  if (details.requirements?.trim()) {
    lines.push("");
    lines.push(`• Specifications & Requirements:`);
    lines.push(`  ${details.requirements.trim()}`);
  }

  lines.push("");
  lines.push("Please share the rate card, sample dispatch options, and logo mockup details.");

  return lines.join("\n");
}

export function rfqEmailBody(details: RFQDetails): string {
  const purpose = details.giftingPurpose || details.inquiryType || "Corporate Gifting Requirement";
  const qty = details.quantityTier || details.quantity;

  const lines = [
    "Hello Make A Wish B2B Sales Desk,",
    "",
    "Please provide a corporate volume quote and custom presentation for our organization:",
    "",
    `- Company: ${details.company.trim()}`,
    `- Contact Name: ${details.name.trim()}`,
    `- Work Email: ${details.email.trim()}`,
    `- WhatsApp / Phone: ${details.phone.trim()}`,
    `- Gifting Purpose: ${purpose}`,
    qty ? `- Estimated Quantity Tier: ${qty}` : "",
    details.location?.trim() ? `- Delivery Location: ${details.location.trim()}` : "",
    details.target?.trim() ? `- Target Date: ${details.target.trim()}` : "",
  ].filter(Boolean);

  if (details.items && details.items.length > 0) {
    lines.push("");
    lines.push(`Shortlisted Items (${details.items.length}):`);
    const maxEmailItems = 6;
    const displayedItems = details.items.slice(0, maxEmailItems);
    displayedItems.forEach((item, index) => {
      const name = item.name.length > 40 ? `${item.name.slice(0, 37)}...` : item.name;
      const detail = item.detail ? ` - ${item.detail}` : "";
      lines.push(`${index + 1}. ${name} (${shortlistKindLabels[item.kind] || item.kind})${detail}`);
    });
    if (details.items.length > maxEmailItems) {
      lines.push(
        `...and ${details.items.length - maxEmailItems} more items (complete shortlist transmitted via server request / WhatsApp).`
      );
    }
  }

  if (details.requirements?.trim()) {
    lines.push("");
    lines.push(`Additional Specifications & Requirements:\n${details.requirements.trim()}`);
  }

  lines.push("");
  lines.push("We look forward to receiving your proposal, sample options, and logo mockup details.");
  lines.push("");
  lines.push("Best regards,");
  lines.push(details.name.trim());
  lines.push(details.company.trim());

  return lines.join("\n");
}
