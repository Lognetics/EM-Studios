import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-ink px-6 text-center">
      <div>
        <span className="eyebrow">Lost In Time</span>
        <h1 className="mt-4 font-serif text-6xl text-ivory md:text-8xl">404</h1>
        <p className="mx-auto mt-6 max-w-md text-ivory/70">
          This page has faded from the frame. Let's bring you back to a moment worth remembering.
        </p>
        <Link href="/" className="btn-gold mt-10">
          Return Home
        </Link>
      </div>
    </section>
  );
}
