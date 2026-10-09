import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="relative">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-xl opacity-50"></div>

          <div className="prose lg:prose-2xl max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-text-primary mb-6">
              About Make a Wish
            </h1>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Make a Wish is Navi Mumbai's premier event management company, combining local creativity with global standards to deliver bespoke event experiences. With over years of expertise, we specialize in transforming visions into memorable realities.
            </p>

            <h2 className="text-3xl font-display font-bold text-text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              To celebrate every moment through creative excellence and responsible event execution, building lasting relationships with our clients and community.
            </p>

            <h2 className="text-3xl font-display font-bold text-text-primary mb-6">
              Our Values
            </h2>
            <ul className="grid grid-cols-3 gap-4 mb-8">
              <li>
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent-primary"></span>
                  Creativity with Responsibility
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent-primary"></span>
                  Local Legacy, Global Standards
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent-primary"></span>
                  Client Collaboration
                </span>
              </li>
            </ul>

            <h2 className="text-3xl font-display font-bold text-text-primary mb-6">
              Our Team
            </p>
            <p className="text-text-secondary mb-6">
              Our multidisciplinary team brings together expertise in design, logistics, creativity, and execution to deliver exceptional events.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <TeamMember name="Rahul Deshmukh" role="Creative Director" />
              <TeamMember name="Priya Sharma" role="Operations Manager" />
              <TeamMember name="Amit Patel" role="Design Lead" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function TeamMember({ name, role }: { name: string; role: string }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-medium text-text-primary">{name}</h4>
      <p className="text-sm text-text-secondary">{role}</p>
    </div>
  );
}