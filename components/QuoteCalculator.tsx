import { useState } from "react";

export interface QuoteCalculation {
  basePrice: number;
  selectedServices: string[];
  totalEstimate: number;
  breakdown: Record<string, number>;
}

export function QuoteCalculator({
  initialServices,
}: {
  initialServices?: string[];
}) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialServices || []
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [eventType, setEventType] = useState("");
  const [budgetRange, setBudgetRange] = useState("");

  /* Pricing tiers for each service */
  const servicePricing: Record<string, number> = {
    "collection": 50000,
    "paper-flowers": 25000,
    "festivals": 100000,
    "exhibitions": 75000,
    "public-events": 80000,
    "party-organizers": 120000,
    "craftizner": 30000,
    "real-flowers-decor": 60000,
    "wedding-decor": 150000,
    "mandap-decor": 100000,
    "event-supplies": 40000,
    "balloons-supplies": 20000,
    "artificial-flowers": 35000,
  };

  const calculateTotal = (): QuoteCalculation => {
    const selectedValues = selectedServices
      .map((s) => servicePricing[s] || 0)
      .reduce((acc, val) => acc + val, 0);

    const breakdown: Record<string, number> = {};
    selectedServices.forEach((s) => {
      breakdown[s] = servicePricing[s] || 0;
    });

    return {
      basePrice: selectedValues,
      selectedServices: [...selectedServices],
      totalEstimate: selectedValues,
      breakdown,
    };
  };

  const handleCalculate = (): QuoteCalculation => {
    return calculateTotal();
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <div className="space-y-6">
        {/* Client Information */}
        <div>
          <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
            Request a Quote
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
                className="w-full px-4 py-3 rounded-xl bg-white border border-border-color focus:border-accent-primary focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-white border border-border-color focus:border-accent-primary focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Company/Organization
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your company name"
                className="w-full px-4 py-3 rounded-xl bg-white border border-border-color focus:border-accent-primary focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Event Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
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
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-border-color focus:border-accent-primary focus:outline-none transition-colors"
              >
                <option value="">Select budget range</option>
                <option value="under-50k">Under ₹50,000</option>
                <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
                <option value="1lakh-3lakh">₹1,00,000 - ₹3,00,000</option>
                <option value="over-3lakh">Over ₹3,00,000</option>
              </select>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-4">
                Select Services
              </label>
              <div className="grid grid-cols-2 gap-3">
                {Object.keys(servicePricing).map((service) => {
                  const displayName = service
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                  const isSelected = selectedServices.includes(service);
                  return (
                    <label
                      key={service}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border ${
                        isSelected
                          ? "border-accent-primary bg-accent-primary/10"
                          : "border-border-color hover:border-accent-primary transition-colors"
                      }">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() =>
                            setSelectedServices(
                              selectedServices.includes(service)
                                ? selectedServices.filter((s) => s !== service)
                                : [...selectedServices, service]
                            )
                          }
                          className="w-4 h-4 rounded border-accent-primary focus:ring-accent-primary"
                        />
                        <span>{displayName}</span>
                        <span className="ml-auto text-right text-sm font-medium">
                          {`₹${servicePricing[service] / 1000}k`}
                        </span>
                      </label>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              onClick={() => handleCalculate()}
              className="w-full bg-accent-primary text-white py-4 rounded-full font-medium transition-colors hover:shadow-lg"
            >
              Calculate Quote
            </button>
          </form>
        </div>

        {/* Result Display */}
        {name && (
          <div className="pt-8 border-t border-border-color">
            <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
              Your Quote Estimate
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-accent-primary/10">
                <p className="text-sm text-text-secondary">Base Price</p>
                <p className="text-3xl font-bold text-accent-primary">{`₹${calculateTotal().basePrice / 1000}k`}</p>
              </div>
              <div className="p-4 rounded-xl bg-bg-primary">
                <p className="text-sm text-text-secondary">Total Estimate</p>
                <p className="text-3xl font-display font-bold text-text-primary">
                  {`₹${calculateTotal().totalEstimate / 1000}k`}
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-bg-secondary">
              <h3 className="text-sm font-medium text-text-secondary mb-2">Breakdown</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                {Object.entries(calculateTotal().breakdown).map(([service, price]) => {
                  const displayName = service
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                  return (
                    <li key={service}>
                      {displayName}: {`₹${price / 1000}k`}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-8">
              <button
                className="inline-block bg-text-primary text-accent-primary px-6 py-3 rounded-full font-medium transition-colors hover:opacity-90"
              >
                Send Inquiry
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}