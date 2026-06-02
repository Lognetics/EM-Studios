import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PortfolioGallery from "@/components/PortfolioGallery";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Stories through the lens — selected fashion, portrait, lifestyle, brand, editorial, and event photography by EM Studios.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Stories Through The Lens"
        subtitle="A curated collection of work — each frame a chapter, each project a complete story preserved in light."
        image="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2000&q=80"
      />
      <div className="bg-ivory">
        <PortfolioGallery />
      </div>
      <CTA title="Imagine Your Story, Told This Way." buttonLabel="Book A Session" />
    </>
  );
}
