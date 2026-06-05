// Central content + data source for EM Studios.
// Photography is the studio's own work, optimized into /public/photos/<category>/.

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

// ---------------------------------------------------------------------------
// Real photography library
// ---------------------------------------------------------------------------
const pad = (n: number) => String(n).padStart(2, "0");
const series = (cat: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/photos/${cat}/${cat}-${pad(i + 1)}.jpg`);

export const PHOTOS = {
  fashion: series("fashion", 30),
  portrait: series("portrait", 28),
  events: series("events", 23),
  weddings: series("weddings", 21),
  founder: series("founder", 4),
};

export const FOUNDER_IMAGE = PHOTOS.founder[0];

// Hero montage — a strong cross-section of the studio's range.
export const HERO_IMAGES = [PHOTOS.fashion[2], PHOTOS.weddings[1], PHOTOS.portrait[3]];

// ---------------------------------------------------------------------------
// Portfolio
// ---------------------------------------------------------------------------
export type Category = "Fashion" | "Portrait" | "Events" | "Weddings";

export const PORTFOLIO_CATEGORIES: Category[] = ["Fashion", "Portrait", "Events", "Weddings"];

const catKey: Record<Category, keyof typeof PHOTOS> = {
  Fashion: "fashion",
  Portrait: "portrait",
  Events: "events",
  Weddings: "weddings",
};

export function photosForCategory(category: Category): string[] {
  return PHOTOS[catKey[category]];
}

export type GalleryItem = { id: string; src: string; category: Category };

// Full, interleaved gallery of every photograph — powers the Portfolio page.
export const GALLERY: GalleryItem[] = (() => {
  const buckets: [Category, string[]][] = [
    ["Fashion", PHOTOS.fashion],
    ["Portrait", PHOTOS.portrait],
    ["Weddings", PHOTOS.weddings],
    ["Events", PHOTOS.events],
  ];
  const max = Math.max(...buckets.map(([, a]) => a.length));
  const out: GalleryItem[] = [];
  for (let i = 0; i < max; i++) {
    for (const [category, arr] of buckets) {
      if (arr[i]) out.push({ id: `${category}-${i}`, src: arr[i], category });
    }
  }
  return out;
})();

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

// Curated featured projects (drive the Home grid + project story pages).
export const PROJECTS: Project[] = [
  {
    slug: "noir-atelier",
    title: "Noir Atelier",
    client: "Maison Vesper",
    year: "2025",
    location: "Lagos, NG",
    category: "Fashion",
    img: PHOTOS.fashion[1],
    story:
      "An editorial campaign exploring the architecture of couture — light sculpted against shadow to reveal the silhouette as a story of its own.",
  },
  {
    slug: "quiet-light",
    title: "Quiet Light",
    client: "Private Commission",
    year: "2025",
    location: "Studio",
    category: "Portrait",
    img: PHOTOS.portrait[1],
    story:
      "A portrait series built on stillness — where a single unguarded glance carries the full weight of a person's character.",
  },
  {
    slug: "vows",
    title: "Vows",
    client: "Amara & Elias",
    year: "2025",
    location: "Lagos, NG",
    category: "Weddings",
    img: PHOTOS.weddings[2],
    story:
      "A wedding remembered the way it felt — every glance, every tear, every quiet moment between the celebrations.",
  },
  {
    slug: "the-gathering",
    title: "The Gathering",
    client: "Aurum Events",
    year: "2025",
    location: "Lagos, NG",
    category: "Events",
    img: PHOTOS.events[1],
    story:
      "Documentary coverage of a landmark celebration — energy, motion, and the fleeting moments that make an occasion unforgettable.",
  },
  {
    slug: "tailored",
    title: "Tailored",
    client: "Bishop & Co.",
    year: "2025",
    location: "Studio",
    category: "Fashion",
    img: PHOTOS.fashion[11],
    story:
      "A lookbook honoring craft — fabric, structure, and confidence captured with editorial precision.",
  },
  {
    slug: "the-founder",
    title: "The Founder",
    client: "Aria Group",
    year: "2024",
    location: "Studio",
    category: "Portrait",
    img: PHOTOS.portrait[14],
    story:
      "Executive personal branding — authoritative yet human portraits designed to build immediate trust.",
  },
  {
    slug: "forever",
    title: "Forever",
    client: "Zara & David",
    year: "2024",
    location: "Lagos, NG",
    category: "Weddings",
    img: PHOTOS.weddings[15],
    story:
      "The full arc of a wedding day — preparation, ceremony, and celebration — woven into one timeless visual narrative.",
  },
  {
    slug: "after-dark",
    title: "After Dark",
    client: "Lumen Nights",
    year: "2025",
    location: "Lagos, NG",
    category: "Events",
    img: PHOTOS.events[13],
    story:
      "An evening of light, music, and movement — captured to hold the atmosphere long after the night has ended.",
  },
  {
    slug: "soft-power",
    title: "Soft Power",
    client: "Editorial",
    year: "2025",
    location: "Studio",
    category: "Fashion",
    img: PHOTOS.fashion[27],
    story:
      "A fashion editorial on strength and softness — testing how tenderness and authority can occupy the same frame.",
  },
  {
    slug: "true-self",
    title: "True Self",
    client: "Personal Branding",
    year: "2024",
    location: "Studio",
    category: "Portrait",
    img: PHOTOS.portrait[24],
    story:
      "Authentic portraiture for creatives and professionals — imagery that genuinely looks and feels like the person in front of the lens.",
  },
];

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------
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
    img: PHOTOS.fashion[9],
  },
  {
    slug: "portrait",
    title: "Portrait Photography",
    short: "Authentic portraits that reveal confidence, personality, and identity.",
    description:
      "Authentic portraiture that reveals the person behind the pose — confidence, character, vulnerability, and presence. Perfect for those who want imagery that genuinely looks and feels like them.",
    bullets: ["Professionals", "Creatives", "Personal Branding", "Executives"],
    img: PHOTOS.portrait[7],
  },
  {
    slug: "lifestyle",
    title: "Lifestyle Photography",
    short: "Capturing genuine moments and meaningful experiences.",
    description:
      "Honest, unforced lifestyle photography that preserves the texture of real life — the candid, the in-between, and the meaningful moments that deserve to be remembered exactly as they felt.",
    bullets: ["Daily life", "Personal stories", "Family moments"],
    img: PHOTOS.weddings[11],
  },
  {
    slug: "brand",
    title: "Brand Photography",
    short: "Visual storytelling designed to help businesses stand out.",
    description:
      "Cohesive visual storytelling that helps businesses build trust, increase visibility, and create consistency across every touchpoint — imagery designed to make your brand impossible to forget.",
    bullets: ["Build trust", "Increase visibility", "Create consistency"],
    img: PHOTOS.fashion[17],
  },
  {
    slug: "event",
    title: "Event Photography",
    short: "Preserving moments worth remembering.",
    description:
      "Documentary-style event coverage that preserves moments worth remembering — corporate gatherings, private celebrations, and the once-in-a-lifetime occasions, captured with intention and discretion.",
    bullets: ["Corporate events", "Private celebrations", "Special occasions"],
    img: PHOTOS.events[3],
  },
  {
    slug: "creative-direction",
    title: "Creative Direction",
    short: "A premium service for fully realized visual stories.",
    description:
      "A premium, end-to-end service for clients who want a fully realized visual story. From the first idea to the final art-directed frame, we shape concept, mood, and styling into one cohesive narrative.",
    bullets: ["Concept Development", "Moodboards", "Styling Direction", "Story Design"],
    img: PHOTOS.fashion[24],
  },
];

export const MARQUEE_WORDS = [
  "Fashion",
  "Portrait",
  "Weddings",
  "Events",
  "Editorial",
  "Branding",
  "Storytelling",
  "Creative Direction",
];

export const APPROACH = [
  {
    n: "01",
    title: "Emotion First",
    body:
      "We don't chase the perfect pose — we wait for the true one. Every session is directed to draw out something honest, so the final image carries a feeling, not just a face.",
  },
  {
    n: "02",
    title: "Cinematic Craft",
    body:
      "Light, composition, and color are treated like the language of film. Each frame is built with intention — shadow and highlight composed to feel timeless rather than trend-bound.",
  },
  {
    n: "03",
    title: "A Considered Process",
    body:
      "From the first conversation to final delivery, the experience is calm, clear, and unhurried. You always know what comes next, and you always feel like the subject of a story worth telling.",
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
    role: "Founder, Forma",
  },
  {
    quote:
      "I have never felt so at ease in front of a camera. The portraits captured a version of me I didn't know existed — confident, calm, completely myself.",
    name: "Marcus Hale",
    role: "CEO, Aria Group",
  },
  {
    quote:
      "Looking at our wedding gallery felt like reliving the entire day. Not the staged moments — the real ones. These images are a part of our family now.",
    name: "Amara & Elias",
    role: "Private Clients",
  },
  {
    quote:
      "Working with EM Studios elevated our entire event. The artistry, the professionalism, the attention to emotion — it's a different category entirely.",
    name: "Lena Moretti",
    role: "Director, Aurum Events",
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
    img: PHOTOS.portrait[11],
  },
  {
    slug: "art-of-visual-storytelling",
    title: "The Art Of Visual Storytelling",
    category: "Storytelling",
    excerpt:
      "Great photography is never about the subject alone. It's about the story the subject is living — and how light chooses to tell it.",
    date: "April 2026",
    readTime: "7 min",
    img: PHOTOS.fashion[4],
  },
  {
    slug: "personal-brand-through-photography",
    title: "Building A Personal Brand Through Photography",
    category: "Branding",
    excerpt:
      "Your image is your introduction. Here is how intentional photography becomes the foundation of a memorable personal brand.",
    date: "March 2026",
    readTime: "6 min",
    img: PHOTOS.portrait[19],
  },
  {
    slug: "behind-the-lens",
    title: "Behind The Lens At EM Studios",
    category: "Behind The Scenes",
    excerpt:
      "A look inside the studio — our process, our philosophy, and the craft of turning a fleeting moment into something timeless.",
    date: "February 2026",
    readTime: "8 min",
    img: PHOTOS.events[9],
  },
  {
    slug: "fashion-as-feeling",
    title: "Fashion As Feeling, Not Just Form",
    category: "Fashion",
    excerpt:
      "Why the best fashion photography captures emotion before aesthetics — and how to direct a shoot that breathes.",
    date: "January 2026",
    readTime: "5 min",
    img: PHOTOS.fashion[21],
  },
  {
    slug: "finding-inspiration",
    title: "Where Creative Inspiration Comes From",
    category: "Creative Inspiration",
    excerpt:
      "Inspiration is not a lightning strike. It's a practice. Notes on building a creative life that keeps the well full.",
    date: "December 2025",
    readTime: "6 min",
    img: PHOTOS.weddings[17],
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
    slug: "amara-elias",
    client: "Amara & Elias",
    title: "A Wedding Remembered The Way It Felt",
    category: "Wedding Story",
    img: PHOTOS.weddings[6],
    summary:
      "We documented their day the way it was lived — every glance, every tear, every quiet moment between the celebrations — so it could be relived for generations.",
    testimonial:
      "These images are a part of our family now. They hold the feeling, not just the moment.",
  },
  {
    slug: "the-campaign",
    client: "Maison Vesper",
    title: "Rebuilding A Brand's Visual Voice",
    category: "Fashion Story",
    img: PHOTOS.fashion[13],
    summary:
      "When the house was ready to grow, they needed imagery that matched their ambition. Across three sessions we built a complete visual language — confident, editorial, and unmistakably theirs.",
    testimonial:
      "EM Studios understood us. Every frame felt like it already knew who we were.",
  },
  {
    slug: "the-celebration",
    client: "Aurum Events",
    title: "An Evening Worth Remembering",
    category: "Event Story",
    img: PHOTOS.events[15],
    summary:
      "A landmark celebration documented end to end — the energy, the people, and the once-in-a-lifetime moments, captured with intention and discretion.",
    testimonial:
      "Looking back at the gallery, it felt like being right there again. Nothing staged — all real.",
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

// Page-hero background images (interior pages).
export const PAGE_HERO = {
  about: PHOTOS.fashion[0],
  portfolio: PHOTOS.fashion[3],
  services: PHOTOS.fashion[6],
  experience: PHOTOS.events[5],
  journal: PHOTOS.portrait[9],
  clientStories: PHOTOS.weddings[3],
  booking: PHOTOS.portrait[13],
  contact: PHOTOS.events[11],
  philosophy: PHOTOS.weddings[8],
  aboutPreview: PHOTOS.portrait[5],
  cta: PHOTOS.weddings[4],
  beforeAfter: PHOTOS.fashion[15],
};
