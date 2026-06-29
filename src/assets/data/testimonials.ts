export interface Testimonial {
  quote: string;
  name: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I came in barely able to get through a week. Eighteen months later, I have language for what I was feeling — and tools that actually work.",
    name: "Sarah K.",
    service: "Individual Therapy",
  },
  {
    quote:
      "My partner and I were on the verge of ending things. The couples work here didn't just save the relationship — it changed how we understand each other.",
    name: "James & Tomoko R.",
    service: "Couples Counseling",
  },
  {
    quote:
      "The art therapy sessions were unlike anything I expected. I processed things in two months that I'd been carrying for a decade.",
    name: "Nadia F.",
    service: "Art Therapy",
  },
];
