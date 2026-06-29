import { Heart, Users, Brain, Sparkles, Leaf, Moon, type LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  category: "Individual" | "Couples & Family" | "Group" | "Specialized";
  title: string;
  description: string;
  duration: string;
  format: string;
  icon: LucideIcon;
  color: string;
  accent: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    category: "Individual",
    title: "Individual Therapy",
    description:
      "One-on-one sessions to explore personal challenges, develop coping strategies, and foster lasting emotional resilience.",
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
    description:
      "Targeted treatment for anxiety disorders and depression using evidence-based approaches including CBT and mindfulness-based interventions.",
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
    description:
      "Specialized trauma-informed care using Eye Movement Desensitization and Reprocessing to help you process and move beyond painful memories.",
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
    description:
      "Compassionate support for those navigating loss — whether the death of a loved one, a relationship ending, or any major life transition.",
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
    description:
      "Age-appropriate therapy for teenagers aged 13–17 navigating identity, school stress, social pressure, and family dynamics.",
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
    description:
      "Rebuild trust, improve communication, and deepen connection with your partner. We work with couples at all stages and orientations.",
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
    description:
      "Strengthen family bonds, resolve conflict, and create healthier patterns of communication across generations.",
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
    description:
      "A facilitated small-group space for sharing strategies, building community, and reducing the isolation that anxiety so often creates.",
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
    description:
      "Weekly guided mindfulness practice to cultivate presence, self-compassion, and equanimity in daily life. No prior experience needed.",
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
    description:
      "Structured, goal-focused sessions that identify and reframe unhelpful thought patterns, helping you build practical skills for lasting change.",
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
    description:
      "Expressive arts-based sessions for those who find words limiting. Creation itself becomes a medium for insight, healing, and joy.",
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
    description:
      "Targeted programs for chronic fatigue, burnout, and sleep disorders — addressing the mind-body loop that keeps you stuck in exhaustion.",
    duration: "50 min",
    format: "In-person or Online",
    icon: Moon,
    color: "bg-[#E8EDE5]",
    accent: "#2D5A3D",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop&auto=format",
  },
];

export const serviceCategories = [
  "All",
  "Individual",
  "Couples & Family",
  "Group",
  "Specialized",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];
