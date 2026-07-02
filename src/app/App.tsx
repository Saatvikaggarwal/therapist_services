import { useState } from "react";
import { ArrowRight, Hand, Gem, Globe, Sparkles, ChevronDown, Phone, Mail, MapPin, Star, Menu, X } from "lucide-react";
import practitioner1 from "../assets/images/therapists/practitioner1.jpg";

const services = [
  {
    id: 1,
    category: "In-Person",
    title: "Reiki Healing",
    description: "A traditional hands-on session — the practitioner rests their palms lightly at key points across your head and torso, letting energy flow to calm the mind and ease tension.",
    duration: "50 min",
    format: "In-person",
    icon: Hand,
    color: "bg-[#E8EDE5]",
    accent: "#2D5A3D",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop&auto=format",
    learnMore: "Experience the calming benefits of Reiki Healing, a gentle energy therapy designed to promote deep relaxation, emotional balance, and overall well-being. Our Reiki sessions help release stress, restore inner harmony, and support your body's natural healing process. Reconnect with your mind, body, and spirit in a peaceful, nurturing environment.",
  },
  {
    id: 2,
    category: "In-Person",
    title: "Crystal Healing",
    description: "Semi-precious stones are placed along the body's energy centers, pairing gentle touch with quiet, guided stillness to support relaxation and focus.",
    duration: "50 min",
    format: "In-person",
    icon: Gem,
    color: "bg-[#EDE8E5]",
    accent: "#C4714A",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=400&fit=crop&auto=format",
    learnMore: "Immerse yourself in the serene luxury of Crystal Healing, where the natural energy of carefully chosen crystals creates a deeply restorative experience. Each session is thoughtfully designed to inspire inner harmony, ease everyday stress, and cultivate a profound sense of balance, leaving you feeling refreshed, renewed, and beautifully aligned in a tranquil, nurturing space.",
  },
  {
    id: 3,
    category: "Remote",
    title: "Distance Healing",
    description: "Using the Reiki distance symbol to bridge space and time, energy is sent to you wherever you are — no physical presence required, just a quiet space to receive it.",
    duration: "30 min",
    format: "Online",
    icon: Globe,
    color: "bg-[#E5EDE8]",
    accent: "#2D5A3D",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&h=400&fit=crop&auto=format",
    learnMore: "Experience healing beyond boundaries with our Distance Healing sessions. Wherever you are, take time to pause, recharge, and reconnect with yourself. Through focused energy work, each session is designed to promote a sense of calm, emotional clarity, and inner balance, helping you feel more centered, refreshed, and aligned from the comfort of your own space.",
  },
];

const categories = ["All", "In-Person", "Remote"];


const testimonials = [
  {
    quote: "Reiki has transformed my life. I feel more centered, peaceful.",
    name: "Client Testimonial",
    service: "Reiki Session",
  },
  {
    quote: "After years of managing chronic pain on my own, consistent Reiki sessions finally brought me real relief.",
    name: "Client Testimonial",
    service: "Pain Management Session",
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <Sparkles size={14} className="text-primary-foreground" />
            </div>
            <span
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Reiki Dimension
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Sessions</a>
            <a href="#approach" className="hover:text-foreground transition-colors">Benefits</a>
            <a href="#therapists" className="hover:text-foreground transition-colors">Practitioners</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
          >
            Book a Session <ArrowRight size={14} />
          </a>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4 text-sm">
            {["Sessions", "Benefits", "Practitioners", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-muted-foreground hover:text-foreground transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm px-5 py-2.5 rounded-full w-fit"
              onClick={() => setMenuOpen(false)}
            >
              Book a Session <ArrowRight size={14} />
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_420px] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs text-accent font-semibold uppercase tracking-widest mb-6 px-3 py-1.5 bg-accent/10 rounded-full">
              <Sparkles size={12} />
              Energy Healing
            </div>
            <h1
              className="text-5xl md:text-6xl font-light leading-[1.1] mb-6"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Your{" "}
              <em className="not-italic" style={{ color: "#2D5A3D" }}>
                pathway
              </em>{" "}
              to wellness
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Reiki is an energy healing technique that channels vitality through the practitioner's hands to balance your energy system — supporting relaxation, natural healing, and inner balance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm hover:bg-primary/90 transition-colors"
              >
                Explore Sessions <ArrowRight size={14} />
              </a>
              <a
                href="#therapists"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full text-sm hover:bg-secondary transition-colors"
              >
                Meet Our Practitioners
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=840&h=1050&fit=crop&auto=format"
                alt="Reiki practitioner in a calm, light-filled studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="approach" className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-3">
              Why Reiki
            </p>
            <h2
              className="text-4xl font-light leading-snug mb-4"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              The benefits of energy healing
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Beyond these core areas, clients often experience greater emotional balance, stronger relationships, and enhanced creative thinking.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              {
                num: "01",
                title: "Stress Reduction",
                body: "Reiki calms the mind and releases physical and emotional tension, helping you return to a state of ease.",
              },
              {
                num: "02",
                title: "Physical Enhancement",
                body: "By supporting the body's natural healing processes, sessions can help manage pain and restore vitality.",
              },
              {
                num: "03",
                title: "Spiritual Growth",
                body: "Sessions deepen your connection to inner wisdom, helping you cultivate awareness and intuition.",
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="bg-card px-8 py-10 first:rounded-l-2xl last:rounded-r-2xl md:first:rounded-r-none md:last:rounded-l-none rounded-2xl md:rounded-none"
              >
                <div
                  className="text-4xl font-light mb-4 opacity-20"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {pillar.num}
                </div>
                <h3
                  className="text-xl font-medium mb-3"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Certification */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-3">
                Session menu
              </p>
              <h2
                className="text-4xl font-light leading-snug"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Our healing sessions
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm px-4 py-2 rounded-full border transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((service) => {
              const Icon = service.icon;
              const isExpanded = expandedService === service.id;
              return (
                <div
                  key={service.id}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-200 group flex flex-col"
                >
                  <div className={`h-44 overflow-hidden ${service.color} relative`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs bg-white/90 text-foreground px-2 py-1 rounded-full font-medium">
                      {service.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: service.accent + "18", color: service.accent }}
                      >
                        <Icon size={16} />
                      </div>
                      <h3
                        className="text-lg font-medium leading-snug"
                        style={{ fontFamily: "'Fraunces', serif" }}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: service.accent }}
                        />
                        {service.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: service.accent }}
                        />
                        {service.format}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <button
                        className="text-sm font-medium hover:underline transition-colors"
                        style={{ color: service.accent }}
                        onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      >
                        <span className="flex items-center gap-1">
                          Learn more
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </span>
                      </button>
                      <a
                        href="#contact"
                        className="text-sm bg-primary text-primary-foreground px-4 py-1.5 rounded-full hover:bg-primary/90 transition-colors"
                      >
                        Book
                      </a>
                    </div>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground leading-relaxed">
                        {service.learnMore}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practitioners */}
      <section id="therapists" className="py-24 px-6 bg-[#F0EDE8]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-3">
              Our practitioners
            </p>
            <h2
              className="text-4xl font-light"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Meet our practitioner
            </h2>
          </div>

          <div className="grid md:grid-cols-[320px_1fr] gap-12 items-center">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
              <img
                src={practitioner1}
                alt="Certified Reiki practitioner"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3
                className="text-3xl font-light mb-1"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Certified Reiki Practitioners
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Trained through our three-level certification program
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Usui Reiki", "Distance Healing", "Chakra Balancing", "Symbolic Practices", "Intuitive Development"].map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-secondary px-3 py-1 rounded-full text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-lg">
                Our practitioners are certified through our foundational, advanced, and practitioner-level training. Each brings a blend of technical skill and intuitive presence to every session. Browse individual profiles to find the practitioner who feels right for you.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm hover:bg-primary/90 transition-colors"
              >
                Schedule a Consultation <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-3">
              Client stories
            </p>
            <h2
              className="text-4xl font-light"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              What people say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-8">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="#C4714A" color="#C4714A" />
                  ))}
                </div>
                <blockquote
                  className="text-base leading-relaxed mb-6"
                  style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 opacity-60">
                Get in touch
              </p>
              <h2
                className="text-4xl font-light leading-snug mb-6"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Begin your healing journey
              </h2>
              <p className="opacity-70 leading-relaxed mb-10 text-sm max-w-sm">
                Ready to begin your healing journey? Explore our practitioner profiles or schedule a consultation today.
              </p>
              <div className="flex flex-col gap-4 text-sm opacity-80">
                {[
                  { icon: Phone, text: "+1 (415) 820-4400" },
                  { icon: Mail, text: "hello@reikidimension.com" },
                  { icon: MapPin, text: "220 Harmony Lane, Portland, OR 97201" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon size={15} className="flex-shrink-0 opacity-60" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-primary-foreground/10 rounded-2xl p-8 flex flex-col gap-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium opacity-70 uppercase tracking-wide">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Maya"
                    className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:opacity-40 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium opacity-70 uppercase tracking-wide">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Okonkwo"
                    className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:opacity-40 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium opacity-70 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="maya@example.com"
                  className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:opacity-40 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium opacity-70 uppercase tracking-wide">
                  Session or program interested in
                </label>
                <select className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-sm text-primary-foreground focus:outline-none focus:border-primary-foreground/50 transition-colors appearance-none">
                  <option value="" className="text-foreground">Select a session…</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title} className="text-foreground">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium opacity-70 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us a little about what brings you here…"
                  className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:opacity-40 focus:outline-none focus:border-primary-foreground/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 bg-accent text-accent-foreground rounded-xl py-3 text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
              >
                Send message <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <Sparkles size={10} className="text-primary-foreground" />
            </div>
            <span style={{ fontFamily: "'Fraunces', serif" }} className="text-foreground font-medium">
              Reiki Dimension
            </span>
          </div>
          <p className="text-xs">© 2025 Reiki Dimension. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
