import Image from "next/image";
import Link from "next/link";

const serviceDetails = [
  {
    id: 1,
    name: "Collection",
    image: "/services/collection.jpg",
    // Alt text for accessibility
    altText: "Curated event collection showcase with thematic decorations and lighting",
    description:
      "Curated event collections and themed showcases that tell your story. We create cohesive visual narratives across all event elements, from decor to lighting.",
    features: [
      "Custom theme development",
      "Visual consistency across elements",
      "Narrative-driven design",
      "Comprehensive collection planning",
    ],
  },
  {
    id: 2,
    name: "Paper Flowers",
    image: "/services/paper-flowers.jpg",
    description:
      "Artificial flower arrangements and decorative installations that offer lasting beauty. Premium quality blooms that maintain their elegance throughout your event.",
    features: [
      "Premium artificial blooms",
      "Custom color matching",
      "Long-lasting installations",
      "Eco-friendly materials",
    ],
  },
  {
    id: 3,
    name: "Festivals",
    image: "/services/festivals.jpg",
    // Alt text for accessibility
    altText: "Thematic festival installations with cultural decorations and lighting",
    description:
      "Thematic installations and cultural celebration designs that capture the spirit of your festival. We blend tradition with contemporary design for memorable celebrations.",
    features: [
      "Thematic concept development",
      "Cultural authenticity",
      "Large-scale installations",
      "Interactive elements",
    ],
  },
  {
    id: 4,
    name: "Exhibitions",
    image: "/services/exhibitions.jpg",
    // Alt text for accessibility
    altText: "Art gallery exhibition setup with professional lighting and display arrangements",
    description:
      "Art displays and gallery installations that showcase your brand or art collection. Professional setup with attention to sightlines and visitor flow.",
    features: [
      "Gallery layout design",
      "Lighting expertise",
      "Visitor flow optimization",
      "Professional mounting",
    ],
  },
  {
    id: 5,
    name: "Public Events",
    image: "/services/public-events.jpg",
    // Alt text for accessibility
    altText: "Conference and public event setup with seating, stages, and technical production",
    description:
      "Conferences, seminars, and community gatherings executed with precision. We handle all aspects from logistics to creative design for successful public gatherings.",
    features: [
      "Venue selection and management",
      "Logistics and coordination",
      "Audience engagement",
      "Technical production",
    ],
  },
  {
    id: 6,
    name: "Party Organizers",
    image: "/services/party-organizers.jpg",
    // Alt text for accessibility
    altText: "Full-service party planning with decorations, catering setup, and entertainment",
    description:
      "Full-service party planning and organization from concept to execution. Themed parties, corporate events, and celebrations tailored to your vision.",
    features: [
      "End-to-end planning",
      "Theme development",
      "Vendor management",
      "Day-of coordination",
    ],
  },
  {
    id: 7,
    name: "Craftizner",
    image: "/services/craftizner.jpg",
    // Alt text for accessibility
    altText: "Handcrafted custom decorative items and artisan crafts for events",
    description:
      "Custom craft and handmade decorative items that add a personal touch to your event. Unique, artisan-crafted pieces that stand out.",
    features: [
      "Handcrafted items",
      "Custom designs",
      "Artisan collaborations",
      "Unique signatures",
    ],
  },
  {
    id: 8,
    name: "Real Flowers Decor",
    image: "/services/real-flowers.jpg",
    // Alt text for accessibility
    altText: "Fresh-water floral arrangements and seasonal blooms for event decoration",
    description:
      "Fresh-water blooms and natural floral arrangements for authentic, living beauty. Seasonal flowers sourced sustainably for your special occasion.",
    features: [
      "Seasonal sourcing",
      "Sustainable practices",
      "Fresh arrangements",
      "Eco-conscious designs",
    ],
  },
  {
    id: 9,
    name: "Wedding Decor",
    image: "/services/wedding-decor.jpg",
    // Alt text for accessibility
    altText: "Mandap and wedding venue decoration with floral arrangements and lighting",
    description:
      "Mandap and wedding venue decoration that creates magical moments. Traditional and contemporary styles tailored to your love story.",
    features: [
      "Mandap centerpiece",
    ],
  },
  {
    id: 10,
    name: "Mandap Decor",
    image: "/services/mandap-decor.jpg",
    // Alt text for accessibility
    altText: "Traditional mandap structure with floral decorations and sacred geometry",
    description:
      "Traditional mandap setups and structures that create the sacred space for wedding ceremonies. Authentic designs with modern touches.",
    features: [
      "Traditional structures",
      "Modern aesthetics",
      "Authentic materials",
      "Full setup service",
    ],
  },
  {
    id: 11,
    name: "Event Supplies",
    image: "/services/event-supplies.jpg",
    // Alt text for accessibility
    altText: "Wide variety of event equipment and materials for all types of gatherings",
    description:
      "Complete event equipment and materials for all types of gatherings. From basic essentials to premium accessories.",
    features: [
      "Wide selection",
      "Quality guaranteed",
      "Delivery and setup",
      "Competitive pricing",
    ],
  },
  {
    id: 12,
    name: "Balloons Supplies",
    image: "/services/balloons.jpg",
    // Alt text for accessibility
    altText: "Colorful balloon displays and arch installations for celebrations",
    description:
      "Balloon displays and arch installations that add color and joy to any celebration. Creative designs for weddings, parties, and corporate events.",
    features: [
      "Creative designs",
      "Color customization",
      "Arch installations",
      "Balloon drops",
    ],
  },
  {
    id: 13,
    name: "Artificial Flowers",
    image: "/services/artificial-flowers.jpg",
    // Alt text for accessibility
    altText: "Premium artificial floral decorations that offer lasting beauty without wilting",
    description:
      "Premium artificial floral decorations that offer lasting beauty without compromising on elegance. Perfect for long-term events and photo sessions.",
    features: [
      "Premium quality",
      "Long-lasting",
      "Low maintenance",
      "Versatile arrangements",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="prose lg:prose-2xl max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-text-primary mb-6">
            Our 12 Service Offerings
          </h1>

          <p className="text-text-secondary mb-10 leading-relaxed">
            We specialize in 12 event categories, each designed to create unforgettable experiences. Explore our offerings below to find the perfect solution for your event.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDetails.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-border-color"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-accent-primary/10">
                  {/* Service icon would go here */}
                </div>
                <h3 className="text-xl font-medium text-text-primary mb-3">
                  {service.name}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-3">
                  {service.description}
                </p>

                <h4 className="text-lg font-medium text-accent-primary mb-3">Features:</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="w-3 h-3 rounded-full bg-accent-primary flex-shrink-0 mt-0.5">
                        {/* icon */}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </main>
  );
}