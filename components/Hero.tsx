import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="section bg-[linear-gradient(180deg,#f7fafc,transparent)]">
      <div className="container grid items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            India’s <span className="text-[hsl(var(--color-primary))]">Trusted Platform</span><br /> for Complete Business Solutions
          </h1>
          <p className="mt-4 text-base text-gray-600">
            Registration, compliance, taxation, accounting and growth services under one roof.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#consultation" className="btn-primary">Talk to Us</Link>
            <a href="tel:+919873794257" className="btn-outline">Call +91 9873794257</a>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "GST Registration" },
              { label: "ITR Filing" },
              { label: "Virtual CFO" },
              { label: "Virtual Accounting" },
            ].map((a) => (
              <div key={a.label} className="rounded-lg border px-3 py-2 text-center text-sm font-medium">
                {a.label}
              </div>
            ))}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://vyavasaymitra.com/images/home/hww.webp"
          alt="Business solutions"
          className="mx-auto w-full max-w-md rounded-xl border shadow-lg"
        />
      </div>
    </section>
  );
}
