import Image from "next/image";

const SERVICES = [
  { title: "Pvt Ltd Registration", img: "https://vyavasaymitra.com/images/services/s1.webp" },
  { title: "LLP Registration", img: "https://vyavasaymitra.com/images/services/s2.webp" },
  { title: "FSSAI Food License", img: "https://vyavasaymitra.com/images/services/s3.webp" },
  { title: "GST Return Filing", img: "https://vyavasaymitra.com/images/services/s4.webp" },
  { title: "TDS Return Filing", img: "https://vyavasaymitra.com/images/services/s5.webp" },
  { title: "Tax Audit", img: "https://vyavasaymitra.com/images/services/s6.webp" },
  { title: "Annual Compliance", img: "https://vyavasaymitra.com/images/services/s7.webp" },
  { title: "Accounting & Bookkeeping", img: "https://vyavasaymitra.com/images/services/s8.webp" },
  { title: "Trademark Registration", img: "https://vyavasaymitra.com/images/services/s9.webp" },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="mt-2 text-gray-600">End‑to‑end services from registration to growth.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="group rounded-2xl border p-4 shadow-sm transition hover:shadow">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <Image src={s.img} alt={s.title} fill className="object-cover transition-transform group-hover:scale-105" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
