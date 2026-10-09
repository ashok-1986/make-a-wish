import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="relative">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-xl opacity-50"></div>

          <div className="prose lg:prose-2xl max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-text-primary mb-6">
              Get in Touch
            </h1>

            <p className="text-text-secondary mb-10 leading-relaxed">
              Let's create something extraordinary together. Share your vision and we'll bring it to life.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <ContactItem
                icon="📞"
                title="Phone"
                href="tel:+91-22-12345678"
                description="Direct line to our event team"
              />
              <ContactItem
                icon="📧"
                title="Email"
                href="mailto:contact@prabhavpratishthan.com"
                description="Send us your requirements"
              />
              <ContactItem
                icon="📍"
                title="Location"
                description="Navi Mumbai, Maharashtra"
              />
              <ContactItem
                icon="🌐"
                title="Website"
                href="https://prabhavpratishthan.com"
                description="Learn more about our services"
              />
            </div>

            <div className="border-t border-border-color pt-12 mt-12">
              <h2 className="text-3xl font-display font-bold text-text-primary mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border-color focus:border-accent-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border-color focus:border-accent-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91-XXXX-XXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border-color focus:border-accent-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border-color focus:border-accent-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding & Mandap Decor</option>
                    <option value="corporate">Corporate & Public Events</option>
                    <option value="festival">Festival & Exhibition</option>
                    <option value="party">Party & Celebration</option>
                    <option value="workshop">Workshop & Craft</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border-color focus:border-accent-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₹50,000</option>
                    <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
                    <option value="1lakh-3lakh">₹1,00,000 - ₹3,00,000</option>
                    <option value="over-3lakh">Over ₹3,00,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Share your event details and requirements"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border-color focus:border-accent-primary focus:outline-none resize-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-primary text-white py-4 rounded-full font-medium transition-colors hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactItem({ icon, title, href, description }: {
  icon: string;
  title: string;
  href?: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl border border-border-color hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-text-primary mb-1">{title}</h3>
      {href && (
        <a
          href={href}
          className="text-accent-primary hover:underline transition-colors"
        >
          {href}
        </a>
      )}
      <p className="text-sm text-text-secondary">{description}</p>
    </div>
  );
}