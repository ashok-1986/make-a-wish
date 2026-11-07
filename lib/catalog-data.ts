import type { CatalogProduct, CatalogPillarId } from "./catalog-types.ts";
import { PILLARS } from "./catalog-types.ts";

export { PILLARS };
export type { CatalogProduct, CatalogPillarId };

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  /* ==========================================================================
     PILLAR A: Corporate Joining Kits & Multi-Item Combo Sets (12 Items)
     Source: Make A Wish Corporate Utility & Joining Kit Brochure (Pages 2–10)
     ========================================================================== */
  {
    sku: "H989",
    name: "5 in 1 Premium Corporate Joining Kit",
    pillarId: "joining-kits",
    categoryName: "5-in-1 Employee Joining Kits",
    inclusions: [
      "Office Laptop Bag with Padded Sleeve",
      "A5 PU Leather Diary",
      "900ml Stainless Steel Bottle",
      "Executive Metal Pen",
      "Foldable Mobile Stand",
    ],
    dimensions: "38 x 28 x 10 cm Presentation Box",
    colors: ["Classic Black", "Navy Blue", "Charcoal Grey"],
    finishes: ["Matte Leatherette", "Powder Coated Steel"],
    capacities: ["900ml Bottle", "Fits up to 15.6 inch Laptops"],
    occasionTags: [
      "Employee Onboarding",
      "New Hire Welcome",
      "Corporate Milestone",
      "Year-Round Corporate",
    ],
    image: "/images/catalog/h989-joining-kit.webp",
    imageAlt: "5 in 1 Premium Corporate Joining Kit with Laptop Bag and Accessories",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "All-in-one corporate welcome hamper presented in a premium rigid presentation box with individual branding slots.",
  },
  {
    sku: "H930",
    name: "6 in 1 Executive Gift Set",
    pillarId: "joining-kits",
    categoryName: "6-in-1 Executive Combo Sets",
    inclusions: [
      "A5 Executive Planner Diary",
      "Double-Wall Vacuum Flask (500ml)",
      "Executive Roller Pen",
      "Metal Keychain",
      "Stainless Steel Card Holder",
      "Corporate Metal Lapel Pin",
    ],
    dimensions: "34 x 26 x 7 cm",
    colors: ["Matte Black", "Executive Blue", "Gunmetal Grey"],
    finishes: ["Soft-Touch PU", "Brushed Metal"],
    capacities: ["500ml Vacuum Flask"],
    occasionTags: [
      "Leadership Gifting",
      "Town Hall Recognition",
      "Annual Day",
      "Client Appreciation",
    ],
    image: "/images/catalog/h930-executive-set.webp",
    imageAlt: "6 in 1 Executive Gift Set with Planner and Vacuum Flask",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Sophisticated 6-item suite ideal for management inductions and VIP client delegations.",
  },
  {
    sku: "H934",
    name: "6 in 1 Premium Tech Combo Set",
    pillarId: "joining-kits",
    categoryName: "6-in-1 Executive Combo Sets",
    inclusions: [
      "A5 Office Diary with Elastic Band",
      "32GB High-Speed USB Pendrive",
      "Double-Wall Stainless Steel Bottle (600ml)",
      "Heavy Metal Ball Pen",
      "Leatherette Metal Keychain",
      "Dual-Side Visiting Card Holder",
    ],
    dimensions: "35 x 27 x 8 cm",
    colors: ["Jet Black", "Royal Navy", "Space Grey"],
    finishes: ["Textured PU", "Metallic Satin"],
    capacities: ["600ml Bottle", "32GB USB 3.0"],
    occasionTags: [
      "Tech Inductions",
      "Annual Conferences",
      "New Hire Welcome",
      "Corporate Milestones",
    ],
    image: "/images/catalog/h934-tech-combo.webp",
    imageAlt: "6 in 1 Premium Tech Combo with 32GB Pendrive and Diary",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "High-utility tech and stationery combo packed inside a customized magnetic closure box.",
  },
  {
    sku: "H935",
    name: "6 in 1 Elite Executive Hamper Box",
    pillarId: "joining-kits",
    categoryName: "6-in-1 Executive Combo Sets",
    inclusions: [
      "A5 Hardbound Organizer Diary",
      "Thermal Temperature Display Vacuum Flask (500ml)",
      "Swiss Refill Roller Pen",
      "360° Rotating Keychain",
      "RFID Blocking Card Case",
      "Foldable Desktop Mobile Stand",
    ],
    dimensions: "36 x 29 x 8 cm",
    colors: ["Midnight Black & Gold", "Silver & Navy", "Gunmetal"],
    finishes: ["Cross-Grain Leatherette", "Anodized Aluminum"],
    capacities: ["500ml Smart Flask"],
    occasionTags: [
      "Executive Leadership",
      "Boardroom Meetings",
      "Annual Town Halls",
      "Client Onboarding",
    ],
    image: "/images/catalog/h935-elite-hamper.webp",
    imageAlt: "6 in 1 Elite Executive Hamper Box with Smart Flask and Desk Stand",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Luxury corporate hamper featuring smart temperature flask and premium desk accessories.",
  },
  {
    sku: "H903",
    name: "4 in 1 Executive Corporate Set",
    pillarId: "joining-kits",
    categoryName: "4-in-1 Combo Gift Sets",
    inclusions: [
      "A5 Notebook Diary",
      "Stainless Steel Vacuum Water Bottle (500ml)",
      "Matte Metal Pen",
      "Polished Metal Hook Keychain",
    ],
    dimensions: "30 x 24 x 6 cm",
    colors: ["Matte Black", "Burgundy", "Corporate Blue"],
    finishes: ["Smooth Leatherette", "Matte Powder Coating"],
    capacities: ["500ml Bottle"],
    occasionTags: [
      "Employee Onboarding",
      "Annual Day Giveaways",
      "Vendor Appreciation",
    ],
    image: "/images/catalog/h903-executive-set.webp",
    imageAlt: "4 in 1 Executive Corporate Set with Diary, Bottle, Pen, Keychain",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Our most popular dependable 4-in-1 corporate induction package for volume rollouts.",
  },
  {
    sku: "H927",
    name: "4 in 1 Classic Desk Combo",
    pillarId: "joining-kits",
    categoryName: "4-in-1 Combo Gift Sets",
    inclusions: [
      "A5 Corporate Planner Diary",
      "Dual-Side Stainless Business Card Holder",
      "Executive Metal Pen",
      "Vegan Leather Keychain",
    ],
    dimensions: "28 x 22 x 5 cm",
    colors: ["Tan Brown", "Classic Black", "Deep Navy"],
    finishes: ["Vintage Leatherette", "Brushed Chrome"],
    occasionTags: [
      "Desk Setup",
      "Quarterly R&R",
      "Sales Conferences",
      "New Year Desk Rollouts",
    ],
    image: "/images/catalog/h927-desk-combo.webp",
    imageAlt: "4 in 1 Classic Desk Combo with Planner, Card Holder, Pen, Keychain",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Compact desk ensemble tailored for conference kits, seminars, and quarterly rewards.",
  },
  {
    sku: "H979",
    name: "4 in 1 Travel & Corporate Combo",
    pillarId: "joining-kits",
    categoryName: "4-in-1 Combo Gift Sets",
    inclusions: [
      "RFID Blocking Travel Passport Holder",
      "Dual Business Card Holder",
      "Stylus Roller Metal Pen",
      "Sturdy Metal Carabiner Keychain",
    ],
    dimensions: "26 x 20 x 4.5 cm",
    colors: ["Charcoal Black", "Espresso Brown", "Titanium Grey"],
    finishes: ["RFID Shielded Leatherette", "Gunmetal Plating"],
    occasionTags: [
      "Corporate Travel",
      "Offsite Summits",
      "Sales Incentives",
      "Leadership Retreats",
    ],
    image: "/images/catalog/h979-travel-combo.webp",
    imageAlt: "4 in 1 Travel and Corporate Combo with Passport Holder and Card Case",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Engineered for frequent corporate travelers and global delegates with certified RFID protection.",
  },
  {
    sku: "H971",
    name: "3 in 1 Vacuum Kettle & 2 Insulated Mugs Set",
    pillarId: "joining-kits",
    categoryName: "3-in-1 Combo Gift Sets",
    inclusions: [
      "Double-Wall Stainless Steel Vacuum Kettle (800ml)",
      "Two Double-Wall Insulated Steel Mugs (220ml each)",
      "Presentation Gift Box with Handle",
    ],
    dimensions: "32 x 25 x 11 cm",
    colors: ["Matte Black", "Silver Steel", "Forest Green"],
    finishes: ["Electropolished SUS304", "Matte Enamel"],
    capacities: ["800ml Kettle", "2x 220ml Mugs"],
    occasionTags: [
      "Corporate Hospitality",
      "Workplace Milestones",
      "Executive Gifting",
      "Festival Hampers",
    ],
    image: "/images/catalog/h971-kettle-mugs-set.webp",
    imageAlt: "3 in 1 Vacuum Kettle and 2 Insulated Mugs Set in Gift Box",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Keeps hot beverages hot for 12 hours; ideal companion for corporate cabins and home offices.",
  },
  {
    sku: "H975",
    name: "3 in 1 360° Rotating Mobile Stand + Pen + Keychain Set",
    pillarId: "joining-kits",
    categoryName: "3-in-1 Combo Gift Sets",
    inclusions: [
      "360° Rotating Aluminum Alloy Mobile Stand",
      "Executive Heavy Ball Pen",
      "Dual-Tone Leatherette Metal Keychain",
    ],
    dimensions: "24 x 18 x 5 cm",
    colors: ["Metallic Silver", "Matte Black", "Space Grey"],
    finishes: ["CNC Anodized Aluminum", "Brushed Chrome"],
    occasionTags: [
      "Workstation Onboarding",
      "Virtual Meetings Setup",
      "Corporate Events",
      "Tech Giveaways",
    ],
    image: "/images/catalog/h975-stand-pen-keychain.webp",
    imageAlt: "3 in 1 360 Degree Rotating Mobile Stand with Pen and Keychain",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Ergonomic desktop companion set for seamless video conferencing and everyday desk utility.",
  },
  {
    sku: "H926",
    name: "3 in 1 Diary, Pen & Hot/Cold Mug Set",
    pillarId: "joining-kits",
    categoryName: "3-in-1 Combo Gift Sets",
    inclusions: [
      "A5 Hardbound Executive Diary",
      "Matte Finish Metal Ball Pen",
      "Double-Wall Insulated Coffee Mug with Spill-Proof Lid (380ml)",
    ],
    dimensions: "29 x 23 x 9 cm",
    colors: ["Olive Green", "Charcoal Black", "Deep Navy"],
    finishes: ["Saffiano PU", "Powder Coated Ceramic Feel"],
    capacities: ["380ml Mug"],
    occasionTags: [
      "Employee Inductions",
      "Work-from-Home Hampers",
      "Annual Celebrations",
    ],
    image: "/images/catalog/h926-diary-pen-mug.webp",
    imageAlt: "3 in 1 Diary, Pen and Hot Cold Coffee Mug Gift Set",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "A morning coffee and planning ritual in one sophisticated corporate unboxing experience.",
  },
  {
    sku: "H913",
    name: "2 in 1 PU Leather A5 Diary & Metal Pen Set",
    pillarId: "joining-kits",
    categoryName: "2-in-1 Executive Gift Sets",
    inclusions: [
      "A5 Premium PU Leather Diary with Pen Loop",
      "Precision Metal Twist Ball Pen",
      "Rigid Slide-Out Gift Box",
    ],
    dimensions: "25 x 18 x 3 cm",
    colors: ["Tan Brown", "Classic Black", "Royal Navy", "Grey"],
    finishes: ["Textured Faux Leather", "Brushed Gold / Chrome Trim"],
    occasionTags: [
      "Conference Kits",
      "Training Sessions",
      "Town Hall Giveaways",
      "Joining Essentials",
    ],
    image: "/images/catalog/h913-diary-pen-set.webp",
    imageAlt: "2 in 1 PU Leather A5 Diary and Metal Pen Set",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Cost-effective high-volume corporate classic with extensive debossing and screen printing space.",
  },
  {
    sku: "H931",
    name: "2 in 1 Stainless Steel Lunch Box & Water Bottle Set",
    pillarId: "joining-kits",
    categoryName: "2-in-1 Executive Gift Sets",
    inclusions: [
      "Double-Deck SUS304 Insulated Lunch Box with Cutlery",
      "Single-Wall Ergonomic Steel Sipper Bottle (750ml)",
      "Thermal Insulated Carrier Bag",
    ],
    dimensions: "24 x 16 x 20 cm",
    colors: ["Steel Silver & Black", "Pastel Teal", "Nordic Blue"],
    finishes: ["Food-Grade SUS304", "Matte Exterior"],
    capacities: ["1000ml Lunch Box", "750ml Bottle"],
    occasionTags: [
      "Employee Wellness",
      "Eco-Friendly Initiatives",
      "Workplace Essentials",
      "Annual Day",
    ],
    image: "/images/catalog/h931-lunch-bottle-set.webp",
    imageAlt: "2 in 1 Stainless Steel Lunch Box and Water Bottle Set",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Promotes healthy workplace habits with 100% BPA-free food-grade stainless steel.",
  },

  /* ==========================================================================
     PILLAR B: Office Diaries, Stationery, Desk Tech & New Year Essentials (12 Items)
     Source: Make A Wish Brochure (Pages 11–35, 46–54)
     ========================================================================== */
  {
    sku: "H1024",
    name: "8000mAh Wireless & Wired Power Bank Notebook Diary",
    pillarId: "diaries-tech",
    categoryName: "Power Bank & Smart Tech Diaries",
    inclusions: [
      "8000mAh Integrated Lithium-Polymer Power Bank",
      "Built-in 3-in-1 Charging Cables (Type-C, Lightning, Micro-USB)",
      "Qi 10W Wireless Charging Front Cover",
      "Refillable 192-Page 100 GSM Lined Notebook",
      "16GB USB Flash Drive In Clasp",
    ],
    dimensions: "24 x 18 x 3.5 cm",
    colors: ["Executive Black", "Slate Grey", "Midnight Blue"],
    finishes: ["Thermal PU Leather", "Brushed Metal Magnetic Clasp"],
    capacities: ["8000mAh Battery", "16GB Flash Drive"],
    occasionTags: [
      "CXO & Director Gifting",
      "Tech Summits",
      "Sales Kickoff",
      "VIP Corporate Welcome",
    ],
    image: "/images/catalog/h1024-powerbank-diary.webp",
    imageAlt: "8000mAh Wireless Power Bank Notebook Diary with Built-in Cables",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Charge phones wirelessly simply by placing them on the cover; 3-in-1 cables power all tablets and devices.",
  },
  {
    sku: "H1021",
    name: "Executive Planner Diary with Document & Card Slots",
    pillarId: "diaries-tech",
    categoryName: "Office Planner & Executive Diaries",
    inclusions: [
      "Undated Executive 12-Month Organizer (240 Pages)",
      "Card & Ticket Organizer Pockets",
      "Zipper Security Pocket for Bills",
      "Magnetic Flap Closure with Pen Holder",
    ],
    dimensions: "A5 (22 x 15.5 x 2.2 cm)",
    colors: ["Deep Navy", "Saddle Brown", "Jet Black"],
    finishes: ["Grain Leatherette", "Edge Stitching"],
    occasionTags: [
      "New Year 2027 Rollouts",
      "Management Onboarding",
      "Annual Review Meetings",
    ],
    image: "/images/catalog/h1021-planner-diary.webp",
    imageAlt: "Executive Planner Diary with Document and Card Slots",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Comprehensive desk organizer diary designed for project tracking and schedule discipline.",
  },
  {
    sku: "H1049",
    name: "A5 Multifunctional Office Diary with Integrated Mobile Stand",
    pillarId: "diaries-tech",
    categoryName: "Office Planner & Executive Diaries",
    inclusions: [
      "A5 Premium Hardcover Notebook",
      "Built-in Foldable Mobile Phone Stand in Cover",
      "Ribbon Bookmark & Elastic Pen Loop",
      "Color Coded Sticky Notepads & Index Flags",
    ],
    dimensions: "A5 (21 x 14.8 x 1.8 cm)",
    colors: ["Forest Green", "Charcoal", "Burgundy"],
    finishes: ["Soft-Touch PU", "Debossed Pattern"],
    occasionTags: [
      "Desk Setup",
      "Hybrid Work Gifting",
      "Training Workshops",
      "Corporate Stationery",
    ],
    image: "/images/catalog/h1049-stand-diary.webp",
    imageAlt: "A5 Multifunctional Office Diary with Integrated Mobile Stand",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Dual-function cover flips into an angled desk stand for hands-free video calls while note-taking.",
  },
  {
    sku: "H124",
    name: "Steel Desktop Lifetime Calendar with Integrated Clock",
    pillarId: "diaries-tech",
    categoryName: "Desktop Accessories & Lifetime Calendars",
    inclusions: [
      "Stainless Steel Perpetual Lifetime Slider Mechanism",
      "Quartz Analog Mini Clock with Battery",
      "Heavy Metal Non-Slip Base",
    ],
    dimensions: "16 x 11 x 4 cm",
    colors: ["Brushed Stainless Steel", "Matte Gunmetal"],
    finishes: ["Brushed Metallic", "Electroplated Rim"],
    occasionTags: [
      "New Year Corporate Desk Gift",
      "Milestone Service Awards",
      "Client Executive Gifts",
    ],
    image: "/images/catalog/h124-steel-calendar-clock.webp",
    imageAlt: "Steel Desktop Lifetime Calendar with Integrated Analog Clock",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Never expires: easily adjust month and date sliders every month. Stays on client desks for years.",
  },
  {
    sku: "H1301",
    name: "Rotating Month Plate Steel Lifetime Calendar",
    pillarId: "diaries-tech",
    categoryName: "Desktop Accessories & Lifetime Calendars",
    inclusions: [
      "360° Rotating Steel Month Disc",
      "Magnetic Indicator Ring",
      "Weighted Solid Metal Base",
    ],
    dimensions: "14 x 10 x 3.5 cm",
    colors: ["Silver Chrome", "Rose Gold Accent", "Graphite"],
    finishes: ["Laser-Etched Numeral Dial", "Mirror Polish Edge"],
    occasionTags: [
      "Corporate Desk Decor",
      "New Year Rollouts",
      "Architect & Consultant Gifting",
    ],
    image: "/images/catalog/h1301-rotating-calendar.webp",
    imageAlt: "Rotating Month Plate Steel Lifetime Calendar",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Sleek tactile rotary mechanism offering decade-long brand recall without paper waste.",
  },
  {
    sku: "H246",
    name: "Executive Metal Roller Pen with Swiss Ink Refill",
    pillarId: "diaries-tech",
    categoryName: "Corporate Writing Instruments",
    inclusions: [
      "Heavy-Weight Brass Barrel Roller Pen",
      "0.7mm Swiss Roller Refill (German Blue Ink)",
      "Hinged Velvet Presentation Box",
    ],
    dimensions: "13.8 cm Length x 1.2 cm Diameter (38g)",
    colors: ["Lustrous Piano Black with Gold Clip", "Gunmetal with Chrome Accent"],
    finishes: ["Multi-Layer Lacquer Coating", "Hand-Polished Chrome"],
    occasionTags: [
      "Contract Signing",
      "Executive Welcomes",
      "Board Meetings",
      "Milestone Commemorations",
    ],
    image: "/images/catalog/h246-roller-pen.webp",
    imageAlt: "Executive Metal Roller Pen with Swiss Ink Refill in Velvet Box",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Balanced weight distribution and fluid micro-ceramic tip engineered for effortless signature signing.",
  },
  {
    sku: "H280",
    name: "Dual Stylus Touch & Roller Metal Pen",
    pillarId: "diaries-tech",
    categoryName: "Corporate Writing Instruments",
    inclusions: [
      "Dual-Ended Metal Pen",
      "High-Sensitivity Soft Rubber Tablet Stylus",
      "0.7mm Smooth German Ink Roller Refill",
    ],
    dimensions: "14.2 cm Length x 1.0 cm Diameter",
    colors: ["Matte Black", "Metallic Silver", "Deep Blue"],
    finishes: ["Satin Touch Aluminum Barrel"],
    occasionTags: [
      "Paperless Office Giveaways",
      "Digital Tablet Rollouts",
      "Conference Delegates",
    ],
    image: "/images/catalog/h280-stylus-pen.webp",
    imageAlt: "Dual Stylus Touch and Roller Metal Pen",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Seamlessly transition between signing paper contracts and navigating touchscreens or tablets.",
  },
  {
    sku: "H010",
    name: "4 in 1 Multi-Function Screwdriver, Ruler, Spirit-Level & Stylus Pen",
    pillarId: "diaries-tech",
    categoryName: "Corporate Writing Instruments",
    inclusions: [
      "Heavy Duty Metal Hex Barrel Pen",
      "Phillips & Flathead Screwdriver Bits",
      "Built-in Bubble Spirit Level",
      "Metric & Inch Engraved Rulers",
      "Conductive Screen Stylus",
    ],
    dimensions: "15 cm Length x 1.1 cm Diameter",
    colors: ["Industrial Yellow", "Matte Black", "Silver"],
    finishes: ["Knurled Grip Metal Alloy"],
    occasionTags: [
      "Engineering & Tech Giveaways",
      "Field Team Gifts",
      "Construction & Real Estate Summits",
    ],
    image: "/images/catalog/h010-multitool-pen.webp",
    imageAlt: "4 in 1 Multi-Function Screwdriver Ruler Spirit Level and Stylus Pen",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "The ultimate practical engineer desk gadget that combines precision writing with quick tool fixes.",
  },
  {
    sku: "H1407",
    name: "360° Rotating Aluminum Alloy Mobile & Tablet Desk Stand",
    pillarId: "diaries-tech",
    categoryName: "Desktop Accessories & Tech",
    inclusions: [
      "Dual-Hinge Fully Foldable CNC Aluminum Stand",
      "360° Smooth Ratchet Turntable Base",
      "Anti-Scratch Silicone Grip Cushions",
      "Device Heat Dissipation Vents",
    ],
    dimensions: "12 x 10 x 14 cm (Adjustable)",
    colors: ["Space Grey", "Silver Metallic"],
    finishes: ["Bead-Blasted Anodized Aluminum"],
    occasionTags: [
      "Hybrid Workstation Setup",
      "Tech Gifting",
      "Town Hall Giveaways",
      "Client Welcome Kits",
    ],
    image: "/images/catalog/h1407-rotating-stand.webp",
    imageAlt: "360 Degree Rotating Aluminum Alloy Mobile and Tablet Desk Stand",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Rotates smoothly with mechanical clicking feedback; accommodates phones and tablets up to 11 inches.",
  },
  {
    sku: "H1081",
    name: "Swivel Metal USB 3.0 Pendrive 32GB/64GB",
    pillarId: "diaries-tech",
    categoryName: "Desktop Accessories & Tech",
    inclusions: [
      "High-Speed USB 3.0 Chipset",
      "360° Protective Swivel Metal Cap",
      "Keyring Loop Attachment",
      "Transparent Gift Box",
    ],
    dimensions: "5.5 x 1.8 x 0.9 cm",
    colors: ["Brushed Silver", "Gunmetal", "Matte Black"],
    finishes: ["Anti-Scratch Zinc Alloy"],
    capacities: ["32GB", "64GB"],
    occasionTags: [
      "Corporate Data Storage",
      "Conference Proceedings",
      "Software & Media Kits",
    ],
    image: "/images/catalog/h1081-swivel-pendrive.webp",
    imageAlt: "Swivel Metal USB 3.0 Pendrive 32GB 64GB",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Durable zinc-alloy swivel cap prevents cap loss and allows large dual-side laser engraving.",
  },
  {
    sku: "H1709",
    name: "7 in 1 Tech & Earbuds Keyboard Cleaning Kit",
    pillarId: "diaries-tech",
    categoryName: "Desktop Accessories & Tech",
    inclusions: [
      "High-Density Retractable Keyboard Brush",
      "Silicone Precision Earbud Cleaning Pen",
      "Microfiber Screen Wipe Sponge",
      "Keycap Puller Tool",
      "Refillable Screen Mist Spray Bottle",
    ],
    dimensions: "12.5 x 4.5 x 3 cm",
    colors: ["Clean White", "Pastel Blue", "Charcoal Pink"],
    finishes: ["Durable Matte ABS"],
    occasionTags: [
      "Tech Team Gifting",
      "Workstation Hygiene",
      "Joining Kits Add-on",
      "Event Merchandise",
    ],
    image: "/images/catalog/h1709-tech-cleaner.webp",
    imageAlt: "7 in 1 Tech Earbuds and Keyboard Cleaning Kit",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Compact all-in-one hygiene tool for mechanical keyboards, laptops, earphones, and mobile screens.",
  },
  {
    sku: "H501",
    name: "Heavy-Duty Chrome Metal Corporate Keychain",
    pillarId: "diaries-tech",
    categoryName: "Desktop Accessories & Tech",
    inclusions: [
      "Spring-Loaded Carabiner Clip Hook",
      "Solid Zinc Alloy Double Ring",
      "Etched Branding Plate Area",
      "Velvet Gift Pouch",
    ],
    dimensions: "9.5 x 3.2 x 0.8 cm",
    colors: ["Chrome Silver", "Smoked Gunmetal", "Rose Gold Trim"],
    finishes: ["Mirror Polish & Matte Accent"],
    occasionTags: [
      "Mass Corporate Giveaways",
      "Automotive & Fleet Milestone",
      "Work Anniversary",
      "Annual Day",
    ],
    image: "/images/catalog/h501-metal-keychain.webp",
    imageAlt: "Heavy-Duty Chrome Metal Corporate Keychain",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Sturdy dual-ring design with a heavy tactile hand-feel and high-precision laser marking.",
  },

  /* ==========================================================================
     PILLAR C: Corporate Bags, Travel Organizers, Drinkware & Lunchware (9 Items)
     Source: Make A Wish Brochure (Pages 36–45, 55)
     ========================================================================== */
  {
    sku: "H1543",
    name: "Anti-Theft Office Laptop Backpack with External USB Charging Port",
    pillarId: "bags-drinkware",
    categoryName: "Laptop Backpacks & Office Bags",
    inclusions: [
      "Padded Laptop Compartment (Fits up to 15.6 Inch)",
      "External USB Passthrough Port with Internal Cable",
      "Hidden Anti-Theft Back Zipper Pocket",
      "Water-Repellent Oxford Polyester Shell",
      "Ergonomic Honeycomb Breathable Shoulder Straps",
      "Luggage Trolley Pass-Through Strap",
    ],
    dimensions: "45 x 31 x 14 cm",
    colors: ["Executive Charcoal Grey", "Onyx Black", "Navy Blue"],
    finishes: ["Water-Repellent Dobby Weave"],
    capacities: ["24 Liters", "Fits up to 15.6 inch Laptop"],
    occasionTags: [
      "Employee Welcome Kits",
      "Annual Conferences",
      "IT & Field Staff Onboarding",
      "Milestone Gifting",
    ],
    image: "/images/catalog/h1543-anti-theft-backpack.webp",
    imageAlt: "Anti-Theft Office Laptop Backpack with External USB Charging Port",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Equipped with hidden zippers, integrated USB charging socket, and luggage trolley strap for commuters.",
  },
  {
    sku: "H1508",
    name: "Large-Capacity Air-Vacuum Compression Travel Backpack",
    pillarId: "bags-drinkware",
    categoryName: "Laptop Backpacks & Office Bags",
    inclusions: [
      "Airtight Vacuum Compression Valve System",
      "Independent Dry/Wet Separation Pockets",
      "TSA-Friendly 180° Flat Opening",
      "Dedicated 17-Inch Padded Tech Sleeve",
      "Waterproof Coated Exterior",
    ],
    dimensions: "49 x 32 x 20 cm (Expandable to 30 cm)",
    colors: ["Matte Stealth Black", "Slate Grey"],
    finishes: ["High-Density TPU Waterproof Coated Fabric"],
    capacities: ["35–45 Liters Expandable"],
    occasionTags: [
      "Sales Leadership Rewards",
      "Corporate Retreats",
      "Offsite Conventions",
      "Long-Service Awards",
    ],
    image: "/images/catalog/h1508-vacuum-travel-backpack.webp",
    imageAlt: "Large-Capacity Air-Vacuum Compression Travel Backpack",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Vacuums down bulky clothing to double packing space; fits airline overhead cabins effortlessly.",
  },
  {
    sku: "H1549",
    name: "Slim Executive Padded Laptop Briefcase",
    pillarId: "bags-drinkware",
    categoryName: "Laptop Backpacks & Office Bags",
    inclusions: [
      "Cushioned Bubble-Foam Laptop Sleeve (up to 15.6 inch)",
      "Reinforced Vegan Leather Handles",
      "Detachable Adjustable Shoulder Strap",
      "Front Quick-Access Organizer Pockets for Charger & Mouse",
    ],
    dimensions: "40 x 30 x 6 cm",
    colors: ["Classic Black", "Charcoal Grey", "Navy"],
    finishes: ["Scratch-Resistant Melange Fabric", "Faux Leather Accents"],
    capacities: ["Fits up to 15.6 inch Laptop"],
    occasionTags: [
      "Consultant Kits",
      "Executive Inductions",
      "Client Delegations",
    ],
    image: "/images/catalog/h1549-laptop-briefcase.webp",
    imageAlt: "Slim Executive Padded Laptop Briefcase with Detachable Strap",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Minimalist professional profile offering complete drop protection without bulky excess volume.",
  },
  {
    sku: "H1502",
    name: "Double-Layer Electronics & Cable Travel Organizer Bag",
    pillarId: "bags-drinkware",
    categoryName: "Travel Gadget & Organizer Bags",
    inclusions: [
      "Two Zippered Expandable Compartments",
      "Elastic Cable Management Loops",
      "Mesh Pockets for Power Banks & Mice",
      "Dedicated SD Card & Pendrive Slots",
      "Water-Resistant Outer Shell with Carry Strap",
    ],
    dimensions: "25 x 19 x 6 cm",
    colors: ["Charcoal Black", "Heather Grey", "Navy Blue"],
    finishes: ["Water-Repellent Cationic Fabric"],
    occasionTags: [
      "Tech Team Onboarding",
      "Business Travel Kits",
      "Conference Hampers",
    ],
    image: "/images/catalog/h1502-cable-organizer.webp",
    imageAlt: "Double-Layer Electronics and Cable Travel Organizer Bag",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Tangle-free storage for chargers, cables, earbuds, hard drives, and travel adapters in one sleek pouch.",
  },
  {
    sku: "H1510",
    name: "RFID Blocking Travel Passport & Card Wallet",
    pillarId: "bags-drinkware",
    categoryName: "Travel Gadget & Organizer Bags",
    inclusions: [
      "Certified RFID Protection Shielding Lining",
      "Passport Holder Sleeve",
      "8 Card Slots & Boarding Pass Pocket",
      "Zippered Currency & Coin Pouch",
      "Detachable Wrist Strap",
    ],
    dimensions: "22 x 12 x 2.5 cm",
    colors: ["Midnight Black", "Cognac Brown", "Deep Ocean"],
    finishes: ["Textured Cross-Grain PU"],
    occasionTags: [
      "International Business Travel",
      "Executive Incentives",
      "Corporate Travel Kits",
    ],
    image: "/images/catalog/h1510-rfid-wallet.webp",
    imageAlt: "RFID Blocking Travel Passport and Card Wallet",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Protects sensitive chip cards and passports against unauthorized contactless electronic theft.",
  },
  {
    sku: "H055",
    name: "Stainless Steel 900ml Ergonomic Sports Sipper Bottle",
    pillarId: "bags-drinkware",
    categoryName: "Stainless Steel Drinkware",
    inclusions: [
      "Single-Wall Food Grade SUS304 Stainless Steel Bottle",
      "Ergonomic Carry Handle & Flip Cap",
      "Leak-Proof Food-Safe Silicone Gasket",
    ],
    dimensions: "27 cm Height x 7.8 cm Diameter",
    colors: ["Matte Black", "Cobalt Blue", "Steel Silver", "Forest Green"],
    finishes: ["Durable Powder Coated Matte Exterior"],
    capacities: ["900ml"],
    occasionTags: [
      "Employee Wellness",
      "Sports Day Celebrations",
      "Gym & Fitness Campaigns",
      "Joining Kits",
    ],
    image: "/images/catalog/h055-sipper-bottle.webp",
    imageAlt: "Stainless Steel 900ml Ergonomic Sports Sipper Bottle",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Lightweight and rugged large-capacity steel sipper designed for all-day desk hydration.",
  },
  {
    sku: "H047",
    name: "Double-Wall Vacuum Insulated Hot & Cold Flask 750ml",
    pillarId: "bags-drinkware",
    categoryName: "Stainless Steel Drinkware",
    inclusions: [
      "Double-Wall SUS304 Vacuum Core with Copper Coating",
      "Push-Button Leak-Proof Pouring Stopper",
      "Double-Duty Lid Functions as Insulated Cup",
    ],
    dimensions: "29 cm Height x 8.2 cm Diameter",
    colors: ["Matte Black", "Gunmetal Grey", "Brushed Silver"],
    finishes: ["Electrostatic Powder Coat"],
    capacities: ["750ml"],
    occasionTags: [
      "Corporate Cabin Use",
      "Travel Gifting",
      "Winter & Summer Campaigns",
      "Festive Combos",
    ],
    image: "/images/catalog/h047-vacuum-flask.webp",
    imageAlt: "Double-Wall Vacuum Insulated Hot and Cold Flask 750ml",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Retains liquids hot for 18 hours or ice-cold for 24 hours with sweat-free outer walls.",
  },
  {
    sku: "H701",
    name: "SUS304 Stainless Steel Desk Coffee Mug with Splash-Proof Lid",
    pillarId: "bags-drinkware",
    categoryName: "Stainless Steel Drinkware",
    inclusions: [
      "Food-Grade SUS304 Double-Wall Stainless Steel Mug",
      "Clear Tritan Splash-Proof Sliding Lid",
      "Ergonomic Comfort Grip Handle",
    ],
    dimensions: "11.5 cm Height x 8.8 cm Diameter",
    colors: ["Matte White", "Piano Black", "Navy Blue", "Olive Green"],
    finishes: ["Matte Powder Coated Finish"],
    capacities: ["380ml"],
    occasionTags: [
      "Desk Refreshers",
      "Welcome Onboarding",
      "Work-from-Home Perks",
      "Corporate Anniversaries",
    ],
    image: "/images/catalog/h701-coffee-mug.webp",
    imageAlt: "SUS304 Stainless Steel Desk Coffee Mug with Splash-Proof Lid",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Double-wall insulation keeps tea and espresso at optimal temperature without scalding hands.",
  },
  {
    sku: "H2601",
    name: "SUS304 3-Compartment Insulated Lunch Box with Stainless Steel Cutlery",
    pillarId: "bags-drinkware",
    categoryName: "Lunchware & Tiffin Boxes",
    inclusions: [
      "Removable 3-Compartment SUS304 Food Tray",
      "Hot Water Infusion Warming Outer Base",
      "Leak-Proof Snap-Lock Lid with Silicone Seal",
      "Stainless Steel Spoon & Fork Set in Cover Compartment",
    ],
    dimensions: "26 x 19 x 7.5 cm",
    colors: ["Pastel Teal & Grey", "Deep Navy & Orange", "Mint Green"],
    finishes: ["Electropolished SUS304 & BPA-Free Polypropylene"],
    capacities: ["1100ml Total Food Capacity"],
    occasionTags: [
      "Workplace Wellness",
      "Employee Appreciation",
      "Green Office Initiatives",
    ],
    image: "/images/catalog/h2601-insulated-lunchbox.webp",
    imageAlt: "SUS304 3 Compartment Insulated Lunch Box with Stainless Steel Cutlery",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Pour boiling water into the outer tray beneath the steel plate to naturally reheat meals at desks.",
  },

  /* ==========================================================================
     PILLAR D: Pure Copperware & Heritage Brassware (10 Items)
     Source: Make a Wish Heritage Metalcraft Collection
     ========================================================================== */
  {
    sku: "PT-C-FTH",
    name: "Feather Pure Copper Water Bottle 1000ml",
    pillarId: "patra-heritage",
    categoryName: "Pure Copper Water Bottles",
    inclusions: [
      "Handcrafted 99% Pure Tested Copper Bottle (1000ml)",
      "Leak-Proof Copper Screw Cap with Silicone O-Ring",
      "Protective Cotton Drawstring Bag",
      "Ayurvedic Care & Cleansing Guide",
    ],
    dimensions: "28 cm Height x 7.5 cm Diameter (Approx 310g)",
    colors: ["Natural Copper"],
    finishes: ["Matt Polish Finish", "Hand-Hammered Finish"],
    capacities: ["1000ml"],
    occasionTags: [
      "Ayurvedic Wellness Gifting",
      "Client VIP Hampers",
      "Leadership Onboarding",
      "Heritage Festivals",
    ],
    image: "/images/categories/copperware.jpg",
    imageAlt: "Feather Pure Copper Water Bottle 1000ml Matt and Hammered",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Natural oligodynamic properties infuse drinking water with essential copper ions overnight.",
  },
  {
    sku: "PT-C-PARI",
    name: "Pari Pure Copper Water Bottle with Hammer Finish 950ml",
    pillarId: "patra-heritage",
    categoryName: "Pure Copper Water Bottles",
    inclusions: [
      "Pure Copper Hand-Dimpled Water Bottle (950ml)",
      "Precision Machined Leak-Proof Thread Cap",
      "Artisanal Presentation Gift Box",
    ],
    dimensions: "27 cm Height x 7.2 cm Diameter (Approx 290g)",
    colors: ["Natural Copper Rose"],
    finishes: ["Artisanal Hammer Finish", "Gloss Lacquer Outer Coating"],
    capacities: ["950ml"],
    occasionTags: [
      "VIP Client Appreciation",
      "Festival Hampers",
      "Milestone Celebrations",
    ],
    image: "/images/categories/copperware.jpg",
    imageAlt: "Pari Pure Copper Water Bottle with Hammer Finish 950ml",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Dense hammer indentations increase surface beauty while providing exceptional ergonomic grip.",
  },
  {
    sku: "PT-C-MEGH",
    name: "Megh Pure Copper Water Bottle with Integrated Glass Tumbler Cap",
    pillarId: "patra-heritage",
    categoryName: "Pure Copper Water Bottles",
    inclusions: [
      "Pure Copper Water Bottle (900ml)",
      "Integrated Copper Drinking Glass (250ml) Serving as Top Lid",
      "Silk Lined Luxury Packaging",
    ],
    dimensions: "28.5 cm Height x 7.6 cm Diameter (Approx 350g)",
    colors: ["Warm Copper"],
    finishes: ["Brushed Satin", "Mirror Rim Accent"],
    capacities: ["900ml Bottle", "250ml Cap Tumbler"],
    occasionTags: [
      "Executive Desk Hydration",
      "Boardroom Cabin Gifting",
      "Wellness Welcome",
    ],
    image: "/images/categories/copperware.jpg",
    imageAlt: "Megh Pure Copper Water Bottle with Integrated Glass Tumbler Cap",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "The top lid unscrews into an authentic copper tumbler for dignified executive desk drinking.",
  },
  {
    sku: "PT-C-ZR",
    name: "Zarna Designer Printed Pure Copper Bottle",
    pillarId: "patra-heritage",
    categoryName: "Pure Copper Water Bottles",
    inclusions: [
      "Pure Copper Bottle with Food-Grade Enamel Print (1000ml)",
      "Leak-Proof Seal Cap",
      "Customizable Branding Zone",
    ],
    dimensions: "28 cm Height x 7.5 cm Diameter",
    colors: ["Royal Mughal Paisley", "Kashmir Vine", "Vasant Floral Print"],
    finishes: ["High-Definition Baked Enamel Print over Pure Copper"],
    capacities: ["1000ml"],
    occasionTags: [
      "Women in Leadership",
      "Festive Employee Hampers",
      "Client Festive Suites",
    ],
    image: "/images/categories/copperware.jpg",
    imageAlt: "Zarna Designer Printed Pure Copper Bottle",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Combines ancient Ayurvedic wellness benefits with stunning contemporary botanical prints.",
  },
  {
    sku: "PT-C-RJW-POT",
    name: "Rajwadi Pure Copper Table Pot 1500ml for Executive Lounges",
    pillarId: "patra-heritage",
    categoryName: "Pure Copper Tableware & Pots",
    inclusions: [
      "Royal Heritage Pure Copper Water Pot (1500ml)",
      "Hand-Fitted Matching Copper Lid with Brass Finial Knob",
      "Artisan Hallmark Certificate",
    ],
    dimensions: "21 cm Height x 16 cm Belly Diameter (Approx 480g)",
    colors: ["Polished Copper & Brass"],
    finishes: ["Royal Hammered Belly", "High Gloss Mirror Collar"],
    capacities: ["1500ml"],
    occasionTags: [
      "Director & Executive Cabins",
      "Boardroom Centerpieces",
      "Luxury Client Keepsakes",
    ],
    image: "/images/categories/copperware.jpg",
    imageAlt: "Rajwadi Pure Copper Table Pot 1500ml for Executive Lounges",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Stately centerpiece for boardroom tables and executive suites honoring Indian metalcraft traditions.",
  },
  {
    sku: "PT-C-MTK-08",
    name: "Heritage Pure Copper Matka Water Dispenser 8L with Brass Tap",
    pillarId: "patra-heritage",
    categoryName: "Pure Copper Tableware & Pots",
    inclusions: [
      "Heavy-Gauge Pure Copper Matka Tank (8 Liters)",
      "Pure Brass Quarter-Turn Drip-Free Water Dispenser Tap",
      "Handcrafted Copper Lid with Top Handle",
      "Heavy Wrought Iron Elevation Stand",
    ],
    dimensions: "38 cm Height x 26 cm Diameter (Approx 1.85 kg Copper)",
    colors: ["Traditional Copper"],
    finishes: ["Traditional Hammered Texture", "Protective Outer Coat"],
    capacities: ["8000ml (8 Liters)"],
    occasionTags: [
      "Corporate Cafeteria & Wellness Corner",
      "Office Opening & Muhurat Gifting",
      "Milestone Anniversaries",
    ],
    image: "/images/categories/copperware.jpg",
    imageAlt: "Heritage Pure Copper Matka Water Dispenser 8L with Brass Tap",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Serves 25–40 staff members in corporate lounges; naturally cools and detoxifies workplace drinking water.",
  },
  {
    sku: "PT-B-CFF-SET",
    name: "Authentic South Indian Brass Coffee Dabara & Traditional Filter Set",
    pillarId: "patra-heritage",
    categoryName: "Artisanal Brass Drinkware & Sets",
    inclusions: [
      "Heavy-Gauge Traditional Brass Coffee Dabara (Cup & Wide Saucer)",
      "2-Cup Traditional Brass Drip Filter Assembly",
      "Artisanal Brass Measuring Spoon",
      "Custom Hardbound Gift Box",
    ],
    dimensions: "Filter: 15 cm Height x 7 cm Diameter; Dabara: 8 cm Cup, 12 cm Saucer",
    colors: ["Golden Brass"],
    finishes: ["Traditional Glossy Polish", "Hand-Hammered Finish"],
    capacities: ["Dabara 180ml", "Filter 2-Cup Capacity"],
    occasionTags: [
      "Artisan Appreciation Gifting",
      "South India Regional Celebrations",
      "Coffee Connoisseurs",
      "Corporate VIPs",
    ],
    image: "/images/categories/brassware.jpg",
    imageAlt: "Authentic South Indian Brass Coffee Dabara and Traditional Filter Set",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Authentic traditional Kumbakonam-style brass brewing set for brewing legendary degree filter coffee.",
  },
  {
    sku: "PT-B-TMB-04",
    name: "Mandala Royal Hand-Carved Brass Tumblers Set of 4",
    pillarId: "patra-heritage",
    categoryName: "Artisanal Brass Drinkware & Sets",
    inclusions: [
      "Four Heavy-Gauge Brass Tumblers (300ml each)",
      "Intricate Mandala Laser/Hand-Carved Exterior Motif",
      "Satin-Lined Velvet Presentation Box",
    ],
    dimensions: "10.5 cm Height x 7.5 cm Rim Diameter (Each Approx 170g)",
    colors: ["Imperial Gold Brass"],
    finishes: ["Deep Mandala Etching", "Dual-Tone Antique Polish"],
    capacities: ["4x 300ml Tumblers"],
    occasionTags: [
      "Executive Dinner Sets",
      "Festive Celebrations",
      "Client Milestone Keepsakes",
      "Board Member Gifting",
    ],
    image: "/images/categories/brassware.jpg",
    imageAlt: "Mandala Royal Hand-Carved Brass Tumblers Set of 4 in Gift Box",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Heavy-walled brass drinkware carved with timeless mandala patterns that radiate prestige.",
  },
  {
    sku: "PT-B-KL-POT",
    name: "Traditional A2 Ghee Pot with Pure Kalai Tin Coating",
    pillarId: "patra-heritage",
    categoryName: "Kalai Cookware & Heritage Sets",
    inclusions: [
      "Heavy Hand-Beaten Solid Brass Pot (600ml)",
      "Traditional Pure Food-Grade Kalai (Tin) Inner Lining",
      "Handmade Brass Spoon & Form-Fitting Brass Lid",
    ],
    dimensions: "13 cm Height x 11 cm Belly Diameter",
    colors: ["Burnished Golden Brass with Silver Kalai Interior"],
    finishes: ["Authentic Hand-Hammered", "Certified Pure Food-Grade Kalai Lining"],
    capacities: ["600ml"],
    occasionTags: [
      "Culinary Heritage Gifting",
      "Family Day Corporate Hampers",
      "Ayurvedic Kitchen Upgrades",
    ],
    image: "/images/categories/brassware.jpg",
    imageAlt: "Traditional A2 Ghee Pot with Pure Kalai Tin Coating",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Lined with genuine kalai (tin) according to Vedic cooking traditions to preserve aroma and medicinal properties.",
  },
  {
    sku: "PT-B-SM-12",
    name: "Kerala Heritage Samai Brass Diya Lamp 12 Inch",
    pillarId: "patra-heritage",
    categoryName: "Kalai Cookware & Heritage Sets",
    inclusions: [
      "Solid Cast Brass 12-Inch Samai Diya with Annapakshi Peacock Finial",
      "Threaded Modular Assembly (Base, Pillar, 5-Wick Oil Plate, Top Crown)",
      "Polishing Care Kit",
    ],
    dimensions: "30 cm Height x 12 cm Base (Weight Approx 1.2 kg)",
    colors: ["Temple Brass Gold"],
    finishes: ["Hand-Turned Lathe Mirror Polish"],
    occasionTags: [
      "Office Inaugurations",
      "Diwali & New Year Auspicious Ceremonies",
      "Annual Town Hall Lighting",
    ],
    image: "/images/categories/brassware.jpg",
    imageAlt: "Kerala Heritage Samai Brass Diya Lamp 12 Inch",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Auspicious 5-wick traditional standing oil lamp symbolizing wisdom and prosperity for enterprise milestones.",
  },

  /* ==========================================================================
     PILLAR E: Gourmet Edibles, Precious Metals & Lifestyle Gifting (6 Items)
     Source: Hampers Catalogue + Extended Portfolio
     ========================================================================== */
  {
    sku: "HMP-6J-EMR",
    name: "Emerald Jaali 6 Luxury Airtight Glass Jars Gourmet Dry-Fruit Hamper",
    pillarId: "gourmet-lifestyle",
    categoryName: "Gourmet Edible & Dry-Fruit Hampers",
    inclusions: [
      "Six Hexagonal Airtight Heavy Glass Jars with Gold Lids (120g each)",
      "Jumbo California Almonds",
      "Roasted Salted Cashews",
      "Afghan Green Raisins",
      "Turkish Dried Apricots",
      "Premium Kashmiri Walnuts",
      "Salted Pistachios",
      "Handcrafted Emerald Green Floral Jaali Hard Hamper Box with Gold Foil Latches",
      "Personalized Corporate Greeting Note Card",
    ],
    dimensions: "38 x 26 x 9 cm (Net Edible Weight: 720g)",
    colors: ["Emerald Green & Gold Foil", "Sapphire Blue", "Rich Maroon"],
    finishes: ["Intricate Jaali Die-Cut Texture", "Metallic Gold Foil Stamping"],
    occasionTags: [
      "Client Festive Suites",
      "Annual Town Hall Gifting",
      "Executive Milestones",
      "Diwali & New Year",
    ],
    image: "/images/hampers/6-jars-emerald-jaali.jpg",
    imageAlt: "Emerald Jaali 6 Luxury Airtight Glass Jars Gourmet Dry-Fruit Hamper",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Our flagship luxury food hamper featuring six distinct superfood dry-fruits sealed for peak freshness.",
  },
  {
    sku: "HMP-4C-GLD",
    name: "Gold Palace 4-Cavity Gourmet Roasted Nuts & Branded Chocolates Box",
    pillarId: "gourmet-lifestyle",
    categoryName: "Gourmet Edible & Dry-Fruit Hampers",
    inclusions: [
      "Four Food-Grade Inner Sealed Partition Cavities (100g each)",
      "Smoked Barbeque Almonds",
      "Slow-Roasted Pepper Cashews",
      "Artisanal Belgian Dark Chocolate Pralines",
      "Cranberry Medley",
      "Embossed Gold Palace Hardbound Box with Ribbon Bow",
    ],
    dimensions: "28 x 22 x 6 cm (Net Edible Weight: 400g)",
    colors: ["Imperial Gold & Cream", "Midnight Navy"],
    finishes: ["Embossed Brocade Texture", "Silk Satin Ribbon"],
    occasionTags: [
      "Employee Inductions",
      "Quarterly R&R Awards",
      "Partner Appreciation",
      "Festival Hampers",
    ],
    image: "/images/hampers/4-cavity-sky-blue.jpg",
    imageAlt: "Gold Palace 4-Cavity Gourmet Roasted Nuts and Branded Chocolates Box",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "A balanced fusion of spicy savory gourmet nuts and decadent chocolates in an opulent presentation box.",
  },
  {
    sku: "HMP-ECO-JUTE",
    name: "Artisanal Eco-Jute Corporate Milestone Hamper Bag",
    pillarId: "gourmet-lifestyle",
    categoryName: "Gourmet Edible & Dry-Fruit Hampers",
    inclusions: [
      "Natural Laminated Eco-Friendly Jute Tote with Padded Cotton Handles",
      "Organic Honey Glass Jar with Wooden Dipper (250g)",
      "Organic Mountain Green Tea Tin (100g)",
      "Spiced Cinnamon Coated Almonds in Cotton Potli (150g)",
      "Two Hand-Rolled Soy Wax Votive Candles",
    ],
    dimensions: "30 x 24 x 12 cm",
    colors: ["Natural Jute Beige with Forest Green Accent", "Earth Brown"],
    finishes: ["Handwoven Natural Plant Fiber", "Silk-Screen Corporate Branding Front Area"],
    occasionTags: [
      "ESG & Sustainability Summits",
      "Earth Day & Eco Initiatives",
      "Annual Day",
      "Corporate Wellness",
    ],
    image: "/images/hampers/eco-jute-hamper.jpg",
    imageAlt: "Artisanal Eco-Jute Corporate Milestone Hamper Bag",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "100% biodegradable and reusable packaging showcasing your company's dedication to sustainability.",
  },
  {
    sku: "SLV-999-COIN",
    name: "999 Purity Certified Silver Corporate Coin in Presentation Velvet Case",
    pillarId: "gourmet-lifestyle",
    categoryName: "Precious Metals & Keepsakes",
    inclusions: [
      "999 Fineness Hallmarked Pure Silver Coin (Available in 10g, 20g, 50g, 100g)",
      "Tamper-Evident Assay Certificate of Purity",
      "Transparent Airtight Acrylic Capsule",
      "Royal Blue Hinged Velvet Jewel Presentation Case",
    ],
    dimensions: "Coin: 32mm Diameter; Case: 9 x 9 x 3.5 cm",
    colors: ["Silver with Royal Blue Velvet", "Silver with Crimson Red Velvet"],
    finishes: ["Mirror Proof High-Relief Embossing", "Diamond-Cut Edge"],
    capacities: ["10g", "20g", "50g", "100g Purity Hallmarked"],
    occasionTags: [
      "Long Service Awards (5/10/25 Years)",
      "Retirement Gifting",
      "Company Foundation Day",
      "Board Member Honours",
    ],
    image: "/images/categories/crockery.jpg",
    imageAlt: "999 Purity Certified Silver Corporate Coin in Presentation Velvet Case",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "The ultimate tangible token of appreciation backed by government-approved purity certification.",
  },
  {
    sku: "LFS-SCNT-CND",
    name: "Hand-Poured Soy Wax Scented Aromatherapy Candles Duo in Gift Box",
    pillarId: "gourmet-lifestyle",
    categoryName: "Lifestyle, Fragrances & Wellness",
    inclusions: [
      "Two Frosted Glass Tumbler Aromatherapy Candles (180g each, 45 Hours Burn Time Each)",
      "Fragrances: French Lavender & White Jasmine + Oud Wood & Bergamot",
      "Smokeless 100% Pure Braided Cotton Wicks",
      "Natural Clean-Burning Soy Wax",
      "Foil-Stamped Matte Gift Box with Matches",
    ],
    dimensions: "22 x 12 x 9 cm",
    colors: ["Frosted Amber & Matte White Tumblers", "Black Presentation Box"],
    finishes: ["Frosted Glass Jar", "Gold Hot-Stamped Lettering"],
    occasionTags: [
      "Executive Wellness",
      "Home-Office Comfort",
      "Festive Celebrations",
      "Client Milestone",
    ],
    image: "/images/categories/lantern-ubtan.jpg",
    imageAlt: "Hand-Poured Soy Wax Scented Aromatherapy Candles Duo in Gift Box",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Therapeutic essential oil blends hand-poured in sustainable soy wax for stress relief and cabin ambiance.",
  },
  {
    sku: "TRN-EVT-BNDL",
    name: "Turnkey Corporate Event Decor + 100 Hamper B2B Bundle Package",
    pillarId: "gourmet-lifestyle",
    categoryName: "Turnkey Event & Bulk Bundles",
    inclusions: [
      "Full Corporate Venue / Stage Styling (Floral Archway, Registration Backdrop, Stage Podium Decor)",
      "100 Customized Corporate Gift Hampers or Joining Kits of your Choice",
      "Dedicated Event Manager & Logistics Handling",
      "Bundled Package Privilege: 5%–10% Package Discount or Complimentary Welcome Entrance Floral Ring",
    ],
    dimensions: "Turnkey Event Deployment (Panvel, Kharghar, Vashi, Thane & Greater Mumbai)",
    colors: ["Customized to Corporate Brand Identity Palette"],
    finishes: ["Professional Live Floral Artistry & Branded Collateral"],
    capacities: ["100+ Attendees (Scalable to 1,000+)"],
    occasionTags: [
      "Annual Town Halls",
      "Product Launch Conferences",
      "Corporate Gala Dinners",
      "Award Nights",
      "Founder's Day",
    ],
    image: "/images/hampers/CTA.png",
    imageAlt: "Turnkey Corporate Event Decor and 100 Hamper B2B Bundle Package",
    statusBadge: "B2B Bulk Ready",
    highlights:
      "Single-window vendor convenience: bundle venue floral production and employee gift hampers together for maximum cost efficiency.",
  },
];

/* ==========================================================================
   Helper Functions
   ========================================================================== */

/**
 * Returns an array of all product SKU strings in the catalog repository.
 */
export function getAllSkus(): string[] {
  return CATALOG_PRODUCTS.map((p) => p.sku);
}

/**
 * Finds a single product by its SKU code (case-insensitive, trimmed).
 */
export function getProductBySku(sku: string): CatalogProduct | undefined {
  if (!sku) return undefined;
  const target = sku.trim().toLowerCase();
  return CATALOG_PRODUCTS.find((p) => p.sku.toLowerCase() === target);
}

/**
 * Returns the total count of products in a given pillar, or total catalog size when 'all'.
 */
export function getPillarCount(pillarId: CatalogPillarId): number {
  if (pillarId === "all") {
    return CATALOG_PRODUCTS.length;
  }
  return CATALOG_PRODUCTS.filter((p) => p.pillarId === pillarId).length;
}

/**
 * Searches and filters the product catalog by keyword and optional pillar.
 * Supports direct SKU matches, keyword phrases, and multi-term queries.
 */
export function searchCatalog(
  query: string = "",
  pillarId?: CatalogPillarId
): CatalogProduct[] {
  const normalizedQuery = query.trim().toLowerCase();
  const filterPillar = pillarId && pillarId !== "all" ? pillarId : null;

  return CATALOG_PRODUCTS.filter((product) => {
    if (filterPillar && product.pillarId !== filterPillar) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    // Direct SKU match or prefix/substring match
    if (product.sku.toLowerCase().includes(normalizedQuery)) {
      return true;
    }

    const searchableFields = [
      product.sku,
      product.name,
      product.categoryName,
      product.highlights ?? "",
      product.dimensions ?? "",
      ...(product.inclusions || []),
      ...(product.occasionTags || []),
      ...(product.colors || []),
      ...(product.finishes || []),
      ...(product.capacities || []),
    ]
      .join(" ")
      .toLowerCase();

    // Direct substring match
    if (searchableFields.includes(normalizedQuery)) {
      return true;
    }

    // Multi-term match: all whitespace-separated terms must be present
    const terms = normalizedQuery.split(/\s+/).filter(Boolean);
    return terms.every((term) => searchableFields.includes(term));
  });
}
