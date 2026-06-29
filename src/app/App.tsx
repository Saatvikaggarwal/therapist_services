import { useState } from "react";
import { ArrowRight, Heart, Users, Brain, Sparkles, Leaf, Moon, ChevronDown, Phone, Mail, MapPin, Star, Menu, X } from "lucide-react";

const services = [
  {
    id: 1,
    category: "Individual",
    title: "Individual Therapy",
    description: "One-on-one sessions to explore personal challenges, develop coping strategies, and foster lasting emotional resilience.",
    duration: "50 min",
    format: "In-person or Online",
    icon: Heart,
    color: "bg-[#E8EDE5]",
    accent: "#2D5A3D",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 2,
    category: "Individual",
    title: "Anxiety & Depression",
    description: "Targeted treatment for anxiety disorders and depression using evidence-based approaches including CBT and mindfulness-based interventions.",
    duration: "50 min",
    format: "In-person or Online",
    icon: Brain,
    color: "bg-[#EDE8E5]",
    accent: "#C4714A",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 3,
    category: "Individual",
    title: "Trauma & EMDR",
    description: "Specialized trauma-informed care using Eye Movement Desensitization and Reprocessing to help you process and move beyond painful memories.",
    duration: "60–90 min",
    format: "In-person",
    icon: Sparkles,
    color: "bg-[#E5EDE8]",
    accent: "#2D5A3D",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 4,
    category: "Individual",
    title: "Grief Counseling",
    description: "Compassionate support for those navigating loss — whether the death of a loved one, a relationship ending, or any major life transition.",
    duration: "50 min",
    format: "In-person or Online",
    icon: Leaf,
    color: "bg-[#EDE5E8]",
    accent: "#A0556A",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 5,
    category: "Individual",
    title: "Teen & Adolescent",
    description: "Age-appropriate therapy for teenagers aged 13–17 navigating identity, school stress, social pressure, and family dynamics.",
    duration: "45 min",
    format: "In-person or Online",
    icon: Moon,
    color: "bg-[#E5E8ED]",
    accent: "#3A5E7A",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 6,
    category: "Couples & Family",
    title: "Couples Counseling",
    description: "Rebuild trust, improve communication, and deepen connection with your partner. We work with couples at all stages and orientations.",
    duration: "75 min",
    format: "In-person or Online",
    icon: Users,
    color: "bg-[#EDE5E5]",
    accent: "#C4714A",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 7,
    category: "Couples & Family",
    title: "Family Therapy",
    description: "Strengthen family bonds, resolve conflict, and create healthier patterns of communication across generations.",
    duration: "75 min",
    format: "In-person",
    icon: Heart,
    color: "bg-[#E8EDE5]",
    accent: "#2D5A3D",
    image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 8,
    category: "Group",
    title: "Anxiety Support Group",
    description: "A facilitated small-group space for sharing strategies, building community, and reducing the isolation that anxiety so often creates.",
    duration: "90 min",
    format: "In-person",
    icon: Users,
    color: "bg-[#E5EDE8]",
    accent: "#2D5A3D",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 9,
    category: "Group",
    title: "Mindfulness & Meditation",
    description: "Weekly guided mindfulness practice to cultivate presence, self-compassion, and equanimity in daily life. No prior experience needed.",
    duration: "60 min",
    format: "In-person or Online",
    icon: Sparkles,
    color: "bg-[#EDE8E5]",
    accent: "#C4714A",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 10,
    category: "Specialized",
    title: "Cognitive Behavioral Therapy",
    description: "Structured, goal-focused sessions that identify and reframe unhelpful thought patterns, helping you build practical skills for lasting change.",
    duration: "50 min",
    format: "In-person or Online",
    icon: Brain,
    color: "bg-[#E5E8ED]",
    accent: "#3A5E7A",
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 11,
    category: "Specialized",
    title: "Art Therapy",
    description: "Expressive arts-based sessions for those who find words limiting. Creation itself becomes a medium for insight, healing, and joy.",
    duration: "60 min",
    format: "In-person",
    icon: Leaf,
    color: "bg-[#EDE5E8]",
    accent: "#A0556A",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 12,
    category: "Specialized",
    title: "Sleep & Burnout Recovery",
    description: "Targeted programs for chronic fatigue, burnout, and sleep disorders — addressing the mind-body loop that keeps you stuck in exhaustion.",
    duration: "50 min",
    format: "In-person or Online",
    icon: Moon,
    color: "bg-[#E8EDE5]",
    accent: "#2D5A3D",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop&auto=format",
  },
];

const categories = ["All", "Individual", "Couples & Family", "Group", "Specialized"];


const testimonials = [
  {
    quote: "I came in barely able to get through a week. Eighteen months later, I have language for what I was feeling — and tools that actually work.",
    name: "Sarah K.",
    service: "Individual Therapy",
  },
  {
    quote: "My partner and I were on the verge of ending things. The couples work here didn't just save the relationship — it changed how we understand each other.",
    name: "James & Tomoko R.",
    service: "Couples Counseling",
  },
  {
    quote: "The art therapy sessions were unlike anything I expected. I processed things in two months that I'd been carrying for a decade.",
    name: "Nadia F.",
    service: "Art Therapy",
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
              <Leaf size={14} className="text-primary-foreground" />
            </div>
            <span
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Stillwater
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#approach" className="hover:text-foreground transition-colors">Our Approach</a>
            <a href="#therapists" className="hover:text-foreground transition-colors">Therapist</a>
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
            {["Services", "Our Approach", "Therapist", "Contact"].map((item) => (
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
              Evidence-Based Care
            </div>
            <h1
              className="text-5xl md:text-6xl font-light leading-[1.1] mb-6"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              A place to begin{" "}
              <em className="not-italic" style={{ color: "#2D5A3D" }}>
                finding yourself
              </em>{" "}
              again
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Stillwater offers a thoughtful range of therapeutic services — from individual sessions and couples work to specialized programs and group support.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm hover:bg-primary/90 transition-colors"
              >
                Explore Services <ArrowRight size={14} />
              </a>
              <a
                href="#therapists"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full text-sm hover:bg-secondary transition-colors"
              >
                Meet the Team
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=840&h=1050&fit=crop&auto=format"
                alt="Therapist in a calm, light-filled office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-1">
            {[
              {
                num: "01",
                title: "Whole-person care",
                body: "We treat the context around you — your relationships, history, sleep, and body — not just presenting symptoms.",
              },
              {
                num: "02",
                title: "Evidence and intuition",
                body: "Our clinicians draw on validated frameworks like CBT and ACT, guided by the particular human in front of them.",
              },
              {
                num: "03",
                title: "Unhurried pace",
                body: "Healing isn't a sprint. We build long-term relationships with clients and measure success over months, not sessions.",
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

      {/* Services Catalogue */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-3">
                What we offer
              </p>
              <h2
                className="text-4xl font-light leading-snug"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Our services
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
                        Our {service.title.toLowerCase()} sessions are conducted by licensed clinicians
                        with specialized training. We offer sliding scale fees and will always work with
                        you to find a schedule and rate that fits your life.
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Therapist */}
      <section id="therapists" className="py-24 px-6 bg-[#F0EDE8]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-3">
              The team
            </p>
            <h2
              className="text-4xl font-light"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Meet your therapist
            </h2>
          </div>

          <div className="grid md:grid-cols-[320px_1fr] gap-12 items-center">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=640&h=800&fit=crop&auto=format"
                alt="Dr. Layla Osei"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3
                className="text-3xl font-light mb-1"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Dr. Layla Osei
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Clinical Psychologist · 14 years experience
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Trauma", "EMDR", "Grief", "Anxiety", "CBT"].map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-secondary px-3 py-1 rounded-full text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-lg">
                Dr. Osei completed her doctoral training at UCSF and has spent the last decade working with individuals navigating trauma, loss, and the quieter forms of suffering that don't always have a name. She brings warmth, rigor, and a genuine belief that people can change.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm hover:bg-primary/90 transition-colors"
              >
                Book with Dr. Osei <ArrowRight size={14} />
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

          <div className="grid md:grid-cols-3 gap-6">
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
                Ready when you are
              </h2>
              <p className="opacity-70 leading-relaxed mb-10 text-sm max-w-sm">
                Reaching out is the hardest step. We respond to all inquiries within one business day and offer a free 20-minute introductory call.
              </p>
              <div className="flex flex-col gap-4 text-sm opacity-80">
                {[
                  { icon: Phone, text: "+1 (415) 820-4400" },
                  { icon: Mail, text: "hello@stillwatertherapy.com" },
                  { icon: MapPin, text: "2140 Grove St, San Francisco, CA 94117" },
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
                  Service interested in
                </label>
                <select className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-sm text-primary-foreground focus:outline-none focus:border-primary-foreground/50 transition-colors appearance-none">
                  <option value="" className="text-foreground">Select a service…</option>
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
              <Leaf size={10} className="text-primary-foreground" />
            </div>
            <span style={{ fontFamily: "'Fraunces', serif" }} className="text-foreground font-medium">
              Stillwater
            </span>
          </div>
          <p className="text-xs">© 2025 Stillwater Therapy. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">HIPAA Notice</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
