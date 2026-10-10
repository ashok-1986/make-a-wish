import Image from "next/image";
import Link from "next/link";

/* Portfolio items with categories */
const portfolioItems = [
  {
    id: 1,
    title: "Corporate Conference 2024",
    category: "Public Events",
    image: "/portfolio1.jpg",
    client: "TechCorp India",
    value: "₹8.5L",
  },
  {
    id: 2,
    title: "Mandap Elegance",
    category: "Mandap Decor",
    image: "/portfolio2.jpg",
    client: "Royal Weddings",
    value: "₹15L",
  },
  {
    id: 3,
    title: "Festival Lights",
    category: "Festivals",
    image: "/portfolio3.jpg",
    client: "Navi Mumbai Festival",
    value: "₹12L",
  },
  {
    id: 4,
    title: "Balloon Extravaganza",
    category: "Balloons Supplies",
    image: "/portfolio4.jpg",
    client: "Celebrations Inc.",
    value: "₹3.5L",
  },
  {
    id: 5,
    title: "Floral Cascade",
    category: "Real Flowers Decor",
    image: "/portfolio5.jpg",
    client: "Luxury Weddings",
    value: "₹6L",
  },
  {
    id: 6,
    title: "Paper Flower Arch",
    category: "Paper Flowers",
    image: "/portfolio6.jpg",
    client: "Event Planners",
    value: "₹2.5L",
  },
  {
    id: 7,
    title: "Exhibition Setup",
    category: "Exhibitions",
    image: "/portfolio7.jpg",
    client: "Art Gallery",
    value: "₹4L",
  },
  {
    id: 8,
    title: "Corporate Gala",
    category: "Party Organizers",
    image: "/portfolio8.jpg",
    client: "Business Association",
    value: "₹20L",
  },
];

const categories = [
  { id: 1, name: "Collection", filter: "collection" },
  { id: 2, name: "Paper Flowers", filter: "paper-flowers" },
  { id: 3, name: "Festivals", filter: "festivals" },
  { id: 4, name: "Exhibitions", filter: "exhibitions" },
  { id: 5, name: "Public Events", filter: "public-events" },
  { id: 6, name: "Party Organizers", filter: "party-organizers" },
  { id: 7, name: "Craftizner", filter: "craftizner" },
  { id: 8, name: "Real Flowers Decor", filter: "real-flowers" },
  { id: 9, name: "Wedding Decor", filter: "wedding-decor" },
  { id: 10, name: "Mandap Decor", filter: "mandap-decor" },
  { id: 11, name: "Event Supplies", filter: "event-supplies" },
  { id: 12, name: "Balloons Supplies", filter: "balloons-supplies" },
  { id: 13, name: "Artificial Flowers", filter: "artificial-flowers" },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  const filteredItems = React.useMemo(() => {
    return portfolioItems.filter(
      (item) => item.category.toLowerCase().replace(/\s/g, "-") === categories[selectedCategory].filter
    );
  }, [selectedCategory]);

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <div className="max-w-7xl mx-auto px-4">
        {/* Filter Navigation */}
        <section className="mb-16">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Link
                key={category.id}
                href="#"
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-accent-primary text-white"
                    : "text-text-primary border border-border-color"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                width={500}
                height={300}
                loading="lazy"
                style={{
                  srcSet: item.image.replace(/\.[^.]+$/, '') + '@2x.jpg 2x, ' + item.image.replace(/\.[^.]+$(), '') + '@3x.jpg 3x'},
                }}
              />
              <div className="p-5">
                <h3 className="text-xl font-medium text-text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {item.category}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-accent-primary font-medium">{item.value}</span>
                  <span className="text-text-secondary text-xs">| {item.client}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}