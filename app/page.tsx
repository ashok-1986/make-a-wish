import Image from "next/image";
import Link from "next/link";

/* Portfolio categories from the PRD */
const categories = [
  { id: 1, name: "Collection", icon: "📦", color: "bg-primary/10 text-primary" },
  { id: 2, name: "Paper Flowers", icon: "📄", color: "bg-accent-primary/10 text-accent-primary" },
  { id: 3, name: "Festivals", icon: "🎉", color: "bg-secondary text-text-secondary" },
  { id: 4, name: "Exhibitions", icon: "🖼️", color: "bg-accent-secondary/10 text-accent-secondary" },
  { id: 5, name: "Public Events", icon: "🏛️", color: "bg-primary/10 text-primary" },
  { id: 6, name: "Party Organizers", icon: "🎊", color: "bg-accent-primary/10 text-accent-primary" },
  { id: 7, name: "Craftizner", icon: "🛠️", color: "bg-secondary text-text-secondary" },
  { id: 8, name: "Real Flowers Decor", icon: "🌸", color: "bg-accent-primary/10 text-accent-primary" },
  { id: 9, name: "Wedding Decor", icon: "💒", color: "bg-secondary text-text-secondary" },
  { id: 10, name: "Mandap Decor", icon: "🏺", color: "bg-accent-secondary/10 text-accent-secondary" },
  { id: 11, name: "Event Supplies", icon: "🎈", color: "bg-primary/10 text-primary" },
  { id: 12, name: "Balloons Supplies", icon: "🎈", color: "bg-accent-primary/10 text-accent-primary" },
  { id: 13, name: "Artificial Flowers", icon: "🌺", color: "bg-secondary text-text-secondary" },
];

/* Navigation links */
const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "Portfolio", href: "/portfolio", active: false },
  { name: "About", href: "/about", active: false },
  { name: "Services", href: "/services", active: false },
  { name: "Contact", href: "/contact", active: false },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      {/* Header Navigation */}
      <header className="py-4 border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-display font-bold text-accent-primary">
              Make a Wish
            </span>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-xl hover:bg-bg-secondary transition-colors">
            <svg className="w-6 h-6 text-text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 12l2-2m6 2l2-2m6 2l2-2m-6 2l2 2m2-6l2 2m2-6l2 2m2-6l2 2M7 7h10m4-10v10" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute bottom-left -left-44 -bottom-44 w-96 h-96 bg-accent-secondary/10 rounded-full blur-2xl opacity-50"></div>

            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary leading-tight mb-6">
                Celebrate Every Moment<br />
                <span className="text-accent-primary">with Make a Wish</span>
              </h1>

              <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Bespoke event experiences across 12 curated categories. From mandap decorations to corporate conferences, we create memorable moments with creativity and responsibility.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/portfolio" className="inline-block bg-accent-primary text-white px-8 py-4 rounded-full font-medium transition-colors hover:opacity-90">
                  Explore Our Portfolio
                </Link>
                <Link href="/contact" className="inline-block border-2 border-text-primary text-text-primary px-8 py-4 rounded-full font-medium transition-colors hover:bg-bg-primary hover:text-accent-primary">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section id="portfolio" className="py-16 md:py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
              Our Curated Categories
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We specialize in 12 event categories, each designed to create unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`p-6 rounded-xl hover:shadow-lg transition-shadow ${category.color}`}
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl ${category.color.replace(
                  "bg-",
                  "bg-"
                )} ${category.color.replace(
                  "text-",
                  "text-"
                )}">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium text-text-primary mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2">
                  {getCategoryDescription(category.id)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
              Our 12 Service Offerings
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Comprehensive event solutions tailored to your vision and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
              Our 12 Service Offerings
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Comprehensive event solutions tailored to your vision and requirements
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
              Client Testimonials
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Discover what our clients say about their event experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ArticleTestimonial
              name="Corporate HR Director"
              company="TechCorp India"
              quote="Make a Wish transformed our annual conference into an extraordinary experience. The attention to detail was impeccable!"
            />
            <ArticleTestimonial
              name="Wedding Planner"
              company="Royal Weddings"
              quote="The mandap decoration exceeded our expectations. Fresh blooms and seamless execution made our client's day special."
            />
            <ArticleTestimonial
              name="Festival Organizer"
              company="Navi Mumbai Festival Committee"
              quote="Professional, creative, and responsible. They delivered thematic installations that captured the spirit of our festival perfectly."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-accent-primary">
        <div className="absolute top-0 right-0 w-64 h-64 bg-bg-primary/20 rounded-full blur-xl opacity-80"></div>
        <div className="absolute bottom-left -bottom-20 -right-20 w-96 h-96 bg-bg-primary/20 rounded-full blur-xl opacity-80"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Plan Your Next Event?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Share your vision and we'll bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-white text-accent-primary px-8 py-4 rounded-full font-medium transition-colors hover:shadow-lg">
              Get Started
            </a>
            <a href="https://calendly.com/prabhav-pratishthan" className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-medium transition-colors hover:bg-white hover:text-accent-primary">
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Helper function for category descriptions */
function getCategoryDescription(categoryId: number): string {
  const descriptions: Record<number, string> = {
    1: "Curated event collections and themed showcases",
    2: "Artificial flower arrangements and decorative installations",
    3: "Thematic installations and cultural celebration designs",
    4: "Art displays and gallery exhibition setups",
    5: "Conference and public gathering event management",
    6: "Full-service party planning and organization",
    7: "Custom craft and handmade decorative items",
    8: "Fresh-water blooms and natural floral arrangements",
    9: "Mandap and wedding venue decoration",
    10: "Traditional mandap setups and structural decoration",
    11: "Complete event equipment and supplies",
    12: "Balloon displays and arch installations",
    13: "Premium artificial floral decorations",
  };
  return descriptions[categoryId] || "";
}

/* Testimonial component */
function ArticleTestimonial({
  name,
  company,
  quote,
}: {
  name: string;
  company: string;
  quote: string;
}) {
  return (
    <article className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
      <blockquote className="text-lg font-serif quote-yellow relative pl-8 pb-6">
        <p>{quote}</p>
        <span className="absolute top-0 left-0 w-10 h-10 rounded-full bg-accent-primary/10 text-accent-primary flex items-center justify-center">‌</span>
      </blockquote>
      <div className="mt-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
          {/* Avatar placeholder */}
        </div>
        <div>
          <p className="font-medium text-text-primary">{name}</p>
          <p className="text-sm text-text-secondary">{company}</p>
        </div>
      </div>
    </article>
  );
}