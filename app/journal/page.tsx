import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JournalGrid from "@/components/JournalGrid";
import CTA from "@/components/CTA";
import { PAGE_HERO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "The EM Studios journal — essays on photography, fashion, branding, storytelling, and creative inspiration.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes On Light & Story"
        highlight={["Story"]}
        subtitle="Essays on photography, fashion, branding, and the craft of preserving moments — from behind the lens at EM Studios."
        image={PAGE_HERO.journal}
      />
      <div className="bg-ink">
        <JournalGrid />
      </div>
      <CTA title="Inspired To Tell Your Own Story?" highlight={["Story?"]} buttonLabel="Book A Session" />
    </>
  );
}
