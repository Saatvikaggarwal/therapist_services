export interface Therapist {
  id: number;
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  bio: string;
  image: string;
}

export const therapists: Therapist[] = [
  {
    id: 1,
    name: "Dr. Layla Osei",
    title: "Clinical Psychologist",
    experience: "14 years experience",
    specialties: ["Trauma", "EMDR", "Grief", "Anxiety", "CBT"],
    bio: "Dr. Osei completed her doctoral training at UCSF and has spent the last decade working with individuals navigating trauma, loss, and the quieter forms of suffering that don't always have a name. She brings warmth, rigor, and a genuine belief that people can change.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=640&h=800&fit=crop&auto=format",
  },
];
