import Image from "next/image";

const POSTS = [
  { title: "Understanding GST Return Filing", date: "2025-01-15", img: "https://vyavasaymitra.com/images/blog/b1.webp" },
  { title: "Choosing the Right Business Structure", date: "2025-01-10", img: "https://vyavasaymitra.com/images/blog/b2.webp" },
  { title: "Why Annual Compliance Matters", date: "2025-01-05", img: "https://vyavasaymitra.com/images/blog/b3.webp" },
];

export default function BlogTeaser() {
  return (
    <section id="latest-news" className="section bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-bold">Latest From Our Blog</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-2xl border shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</div>
                <h3 className="mt-1 font-semibold">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
