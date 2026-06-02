// Central content + data source for EM Studios.
// Placeholder photography is sourced from Unsplash (curated, tasteful).
// Swap `img` / `src` values for real EM Studios photography later.

export const SITE = {
  name: "EM Studios",
  tagline: "Where Stories Are Preserved, Emotions Are Celebrated, and Time Becomes Timeless.",
  email: "hello@emstudios.com",
  phone: "+1 (555) 014-2200",
  address: "Studio 9, The Atelier, 14 Maison Lane, New York, NY",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Journal", href: "/journal" },
  { label: "Stories", href: "/client-stories" },
  { label: "Contact", href: "/contact" },
];

// Unsplash helper — tasteful, editorial photography placeholders.
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_IMAGES = [
  u("1469334031218-e382a71b716b", 2000),
  u("1492707892479-7bc8d5a4ee93", 2000),
  u("1483985988355-763728e1935b", 2000),
];

export type Category =
  | "Fashion"
  | "Portrait"
  | "Lifestyle"
  | "Brands"
  | "Editorial"
  | "Events"
  | "Creative Concepts";

export const PORTFOLIO_CATEGORIES: Category[] = [
  "Fashion",
  "Portrait",
  "Lifestyle",
  "Brands",
  "Editorial",
  "Events",
  "Creative Concepts",
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  location: string;
  category: Category;
  img: string;
  story: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "noir-atelier",
    title: "Noir Atelier",
    client: "Maison Vesper",
    year: "2025",
    location: "Paris, FR",
    category: "Fashion",
    img: u("1483985988355-763728e1935b"),
    story:
      "An editorial campaign exploring the architecture of couture — light sculpted against shadow to reveal the silhouette as a story of its own.",
  },
  {
    slug: "quiet-light",
    title: "Quiet Light",
    client: "Private Commission",
    year: "2025",
    location: "New York, US",
    category: "Portrait",
    img: u("1494790108377-be9c29b29330"),
    story:
      "A portrait series built on stillness — where a single unguarded glance carries the full weight of a person's character.",
  },
  {
    slug: "golden-hours",
    title: "Golden Hours",
    client: "The Hartley Family",
    year: "2024",
    location: "Tuscany, IT",
    category: "Lifestyle",
    img: u("1519741497674-611481863552"),
    story:
      "A day documented honestly — laughter, slowness, and the ordinary intimacy that becomes extraordinary once it is preserved.",
  },
  {
    slug: "forma-brand",
    title: "Forma",
    client: "Forma Skincare",
    year: "2025",
    location: "London, UK",
    category: "Brands",
    img: u("1556228720-195a672e8a03"),
    story:
      "A complete brand visual identity — product, texture, and human warmth unified into one consistent, trust-building language.",
  },
  {
    slug: "the-editorial",
    title: "Issue No.7",
    client: "Lumen Magazine",
    year: "2024",
    location: "Milan, IT",
    category: "Editorial",
    img: u("1509631179647-0177331693ae"),
    story:
      "A twelve-page editorial story for print — concept, styling, and photography crafted as a single cinematic narrative.",
  },
  {
    slug: "vows",
    title: "Vows",
    client: "Amara & Elias",
    year: "2025",
    location: "Santorini, GR",
    category: "Events",
    img: u("1519225421980-715cb0215aed"),
    story:
      "A wedding remembered the way it felt — every glance, every tear, every quiet moment between the celebrations.",
  },
  {
    slug: "chromatic",
    title: "Chromatic",
    client: "Self-Initiated",
    year: "2024",
    location: "Studio",
    category: "Creative Concepts",
    img: u("1513151233558-d860c5398176"),
    story:
      "An experimental study of color as emotion — a personal exploration of how light and pigment shape feeling.",
  },
  {
    slug: "tailored",
    title: "Tailored",
    client: "Bishop & Co.",
    year: "2025",
    location: "New York, US",
    category: "Fashion",
    img: u("1490578474895-699cd4e2cf59"),
    story:
      "A menswear lookbook honoring craft — fabric, structure, and confidence captured with editorial precision.",
  },
  {
    slug: "founder",
    title: "The Founder",
    client: "Aria Technologies",
    year: "2024",
    location: "San Francisco, US",
    category: "Portrait",
    img: u("1500648767791-00dcc994a43e"),
    story:
      "Executive personal branding — authoritative yet human portraits designed to build immediate trust.",
  },
  {
    slug: "morning-ritual",
    title: "Morning Ritual",
    client: "Còs Coffee",
    year: "2025",
    location: "Copenhagen, DK",
    category: "Brands",
    img: u("1495474472287-4d71bcdd2085"),
    story:
      "Lifestyle brand imagery capturing the slow, sensory ritual of a morning — warmth, steam, and quiet intention.",
  },
  {
    slug: "runway",
    title: "Runway",
    client: "Atelier Noor",
    year: "2024",
    location: "Dubai, AE",
    category: "Events",
    img: u("1469334031218-e382a71b716b"),
    story:
      "Backstage and runway coverage of a couture show — energy, motion, and the artistry behind every garment.",
  },
  {
    slug: "soft-power",
    title: "Soft Power",
    client: "Lumen Magazine",
    year: "2025",
    location: "Paris, FR",
    category: "Editorial",
    img: u("1492707892479-7bc8d5a4ee93"),
    story:
      "A fashion editorial on strength and softness — testing how tenderness and authority can occupy the same frame.",
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  img: string;
};

export const SERVICES: Service[] = [
  {
    slug: "fashion",
    title: "Fashion Photography",
    short: "Elevating brands, designers, and creatives through editorial-quality imagery.",
    description:
      "Editorial-grade fashion photography that elevates brands, designers, and creatives. From concept to final frame, every image is built to feel like a magazine spread — confident, cinematic, and unmistakably yours.",
    bullets: ["Editorial", "Campaigns", "Lookbooks", "Designer Collections"],
    img: u("1483985988355-763728e1935b"),
  },
  {
    slug: "portrait",
    title: "Portrait Photography",
    short: "Authentic portraits that reveal confidence, personality, and identity.",
    description:
      "Authentic portraiture that reveals the person behind the pose — confidence, character, vulnerability, and presence. Perfect for those who want imagery that genuinely looks and feels like them.",
    bullets: ["Professionals", "Creatives", "Personal Branding", "Executives"],
    img: u("1494790108377-be9c29b29330"),
  },
  {
    slug: "lifestyle",
    title: "Lifestyle Photography",
    short: "Capturing genuine moments and meaningful experiences.",
    description:
      "Honest, unforced lifestyle photography that preserves the texture of real life — the candid, the in-between, and the meaningful moments that deserve to be remembered exactly as they felt.",
    bullets: ["Daily life", "Personal stories", "Family moments"],
    img: u("1519741497674-611481863552"),
  },
  {
    slug: "brand",
    title: "Brand Photography",
    short: "Visual storytelling designed to help businesses stand out.",
    description:
      "Cohesive visual storytelling that helps businesses build trust, increase visibility, and create consistency across every touchpoint — imagery designed to make your brand impossible to forget.",
    bullets: ["Build trust", "Increase visibility", "Create consistency"],
    img: u("1556228720-195a672e8a03"),
  },
  {
    slug: "event",
    title: "Event Photography",
    short: "Preserving moments worth remembering.",
    description:
      "Documentary-style event coverage that preserves moments worth remembering — corporate gatherings, private celebrations, and the once-in-a-lifetime occasions, captured with intention and discretion.",
    bullets: ["Corporate events", "Private celebrations", "Special occasions"],
    img: u("1519225421980-715cb0215aed"),
  },
  {
    slug: "creative-direction",
    title: "Creative Direction",
    short: "A premium service for fully realized visual stories.",
    description:
      "A premium, end-to-end service for clients who want a fully realized visual story. From the first idea to the final art-directed frame, we shape concept, mood, and styling into one cohesive narrative.",
    bullets: ["Concept Development", "Moodboards", "Styling Direction", "Story Design"],
    img: u("1513151233558-d860c5398176"),
  },
];

export const STATS = [
  { value: "500+", label: "Sessions Captured" },
  { value: "100+", label: "Brands Photographed" },
  { value: "10K+", label: "Memories Preserved" },
  { value: "50+", label: "Creative Collaborations" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "EM Studios didn't just photograph our brand — they understood it. Every frame felt like it already knew who we were. The result reshaped how our customers see us.",
    name: "Sofia Bennett",
    role: "Founder, Forma Skincare",
  },
  {
    quote:
      "I have never felt so at ease in front of a camera. The portraits captured a version of me I didn't know existed — confident, calm, completely myself.",
    name: "Marcus Hale",
    role: "CEO, Aria Technologies",
  },
  {
    quote:
      "Looking at our wedding gallery felt like reliving the entire day. Not the staged moments — the real ones. These images are a part of our family now.",
    name: "Amara & Elias",
    role: "Private Clients",
  },
  {
    quote:
      "Working with EM Studios elevated our entire campaign. The artistry, the professionalism, the attention to emotion — it's a different category entirely.",
    name: "Lena Moretti",
    role: "Creative Director, Lumen Magazine",
  },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "why-photography-matters",
    title: "Why Photography Matters",
    category: "Photography",
    excerpt:
      "In a world of infinite images, what makes a single photograph endure? A reflection on memory, meaning, and the quiet power of a frame.",
    date: "May 2026",
    readTime: "5 min",
    img: u("1452587925148-ce544e77e70d"),
  },
  {
    slug: "art-of-visual-storytelling",
    title: "The Art Of Visual Storytelling",
    category: "Storytelling",
    excerpt:
      "Great photography is never about the subject alone. It's about the story the subject is living — and how light chooses to tell it.",
    date: "April 2026",
    readTime: "7 min",
    img: u("1500534314209-a25ddb2bd429"),
  },
  {
    slug: "personal-brand-through-photography",
    title: "Building A Personal Brand Through Photography",
    category: "Branding",
    excerpt:
      "Your image is your introduction. Here is how intentional photography becomes the foundation of a memorable personal brand.",
    date: "March 2026",
    readTime: "6 min",
    img: u("1554080353-a576cf803bda"),
  },
  {
    slug: "behind-the-lens",
    title: "Behind The Lens At EM Studios",
    category: "Behind The Scenes",
    excerpt:
      "A look inside the studio — our process, our philosophy, and the craft of turning a fleeting moment into something timeless.",
    date: "February 2026",
    readTime: "8 min",
    img: u("1542038784456-1ea8e935640e"),
  },
  {
    slug: "fashion-as-feeling",
    title: "Fashion As Feeling, Not Just Form",
    category: "Fashion",
    excerpt:
      "Why the best fashion photography captures emotion before aesthetics — and how to direct a shoot that breathes.",
    date: "January 2026",
    readTime: "5 min",
    img: u("1490481651871-ab68de25d43d"),
  },
  {
    slug: "finding-inspiration",
    title: "Where Creative Inspiration Comes From",
    category: "Creative Inspiration",
    excerpt:
      "Inspiration is not a lightning strike. It's a practice. Notes on building a creative life that keeps the well full.",
    date: "December 2025",
    readTime: "6 min",
    img: u("1502082553048-f009c37129b9"),
  },
];

export const JOURNAL_CATEGORIES = [
  "All",
  "Photography",
  "Fashion",
  "Branding",
  "Storytelling",
  "Behind The Scenes",
  "Creative Inspiration",
];

export type ClientStory = {
  slug: string;
  client: string;
  title: string;
  category: string;
  img: string;
  summary: string;
  testimonial: string;
};

export const CLIENT_STORIES: ClientStory[] = [
  {
    slug: "forma-skincare",
    client: "Forma Skincare",
    title: "Rebuilding A Brand's Visual Voice",
    category: "Brand Story",
    img: u("1556228720-195a672e8a03", 1600),
    summary:
      "When Forma was ready to grow beyond a startup, they needed imagery that matched their ambition. Over three sessions, we built a complete visual language — product, texture, and the human warmth behind the brand.",
    testimonial:
      "EM Studios understood us. Every frame felt like it already knew who we were.",
  },
  {
    slug: "the-hartleys",
    client: "The Hartley Family",
    title: "A Day In Tuscany, Preserved",
    category: "Lifestyle Story",
    img: u("1519741497674-611481863552", 1600),
    summary:
      "No posing. No performance. Just a family on holiday — and a quiet documentation of the ordinary intimacy that becomes extraordinary once it lives forever in a photograph.",
    testimonial:
      "Looking at the gallery felt like reliving the entire day — the real moments, not the staged ones.",
  },
  {
    slug: "amara-elias",
    client: "Amara & Elias",
    title: "Vows In Santorini",
    category: "Wedding Story",
    img: u("1519225421980-715cb0215aed", 1600),
    summary:
      "A wedding above the Aegean. We documented it the way it felt — every glance, every tear, every quiet moment between the celebrations — so the day could be relived for generations.",
    testimonial:
      "These images are a part of our family now. They hold the feeling, not just the moment.",
  },
];

export const EXPERIENCE_STEPS = [
  {
    n: "01",
    title: "Discovery Call",
    body:
      "Every project begins with a conversation. We learn about you, your vision, and the story you want to tell — and make sure we are the right fit to tell it together.",
  },
  {
    n: "02",
    title: "Creative Planning",
    body:
      "We shape the concept — mood, location, styling, and direction. You receive a clear creative plan and moodboard so you know exactly how your story will come to life.",
  },
  {
    n: "03",
    title: "Photography Session",
    body:
      "The shoot itself. Relaxed, intentional, and fully directed — designed so you feel at ease while we capture imagery that is authentic, emotional, and timeless.",
  },
  {
    n: "04",
    title: "Image Selection",
    body:
      "Together we review a curated gallery of the strongest frames and select the images that best tell your story, with guidance every step of the way.",
  },
  {
    n: "05",
    title: "Professional Editing",
    body:
      "Each selected image is individually retouched and color-graded with a refined, timeless hand — never over-processed, always true to the moment.",
  },
  {
    n: "06",
    title: "Final Delivery",
    body:
      "Your finished gallery is delivered through a private, secure portal — high-resolution, ready to share, and crafted to last a lifetime.",
  },
];

export const VALUES = [
  { title: "Authenticity", body: "We photograph what is real — true emotion over performance." },
  { title: "Creativity", body: "Every project is approached as a fresh, original visual story." },
  { title: "Excellence", body: "An obsessive standard of craft, from first frame to final delivery." },
  { title: "Storytelling", body: "Images that carry narrative, meaning, and emotion." },
  { title: "Human Connection", body: "We honor the people and relationships behind every photograph." },
];

export const FAQS = [
  {
    q: "How do I book a session?",
    a: "Simply complete the booking form on this page with your details and project vision. We'll respond within 48 hours to schedule a discovery call and confirm availability.",
  },
  {
    q: "What should I wear?",
    a: "Once your session is confirmed, you'll receive a personalized styling guide. As a rule: choose pieces that feel like you, favor timeless tones over trends, and bring options — we'll direct the rest.",
  },
  {
    q: "When will I receive my photos?",
    a: "A curated preview gallery is delivered within one week. Your final, fully retouched gallery is delivered through your private client portal within two to three weeks of the session.",
  },
  {
    q: "Do you travel?",
    a: "Yes. EM Studios works worldwide. Travel is included for many projects and quoted transparently for destination sessions — just let us know your location in the form.",
  },
];

export const SERVICE_OPTIONS = [
  "Fashion Photography",
  "Portrait Photography",
  "Lifestyle Photography",
  "Brand Photography",
  "Event Photography",
  "Creative Direction",
  "Not sure yet",
];

export const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
];
