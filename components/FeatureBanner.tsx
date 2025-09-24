import Link from "next/link";

export default function FeatureBanner() {
  return (
    <section id="feature-banner" className="section bg-[hsl(var(--color-primary))] text-white">
      <div className="container grid items-center gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Scale Your Business with Confidence</h2>
          <p className="mt-2 text-white/90">
            Get expert guidance on compliance, taxation, accounting and growth strategy from our CA-led team.
          </p>
        </div>
        <div className="md:justify-self-end">
          <Link href="#consultation" className="btn-outline border-white text-white hover:bg-white hover:text-[hsl(var(--color-primary))]">Talk to Us</Link>
        </div>
      </div>
    </section>
  );
}
