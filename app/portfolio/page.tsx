import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PortfolioGallery from "@/components/PortfolioGallery";
import CTA from "@/components/CTA";
import { PAGE_HERO } from "@/lib/content";

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
        highlight={["Stories"]}
        subtitle="A curated collection of work — each frame a chapter, each project a complete story preserved in light."
        image={PAGE_HERO.portfolio}
      />
      <div className="bg-ink">
        <PortfolioGallery />
      </div>
      <CTA title="Imagine Your Story, Told This Way." highlight={["Story,"]} buttonLabel="Book A Session" />
    </>
  );
}
