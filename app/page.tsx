import Hero from "@/components/Hero";
import FeatureBanner from "@/components/FeatureBanner";
import ServicesGrid from "@/components/ServicesGrid";
import WorkProcess from "@/components/WorkProcess";
import Counters from "@/components/Counters";
import BlogTeaser from "@/components/BlogTeaser";
import Partners from "@/components/Partners";
import Consultation from "@/components/Consultation";

export default function Page() {
  return (
    <>
      <Hero />
      <section id="top-feature" className="section">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Complete Business Solutions", icon: "https://vyavasaymitra.com/images/icon/2.png" },
            { title: "Quick & Hassle-Free Process", icon: "https://vyavasaymitra.com/images/icon/3.png" },
            { title: "Easy Document Access", icon: "https://vyavasaymitra.com/images/icon/4.png" },
            { title: "Expert Chartered Accountants", icon: "https://vyavasaymitra.com/images/icon/1.png" },
          ].map((f) => (
            <div key={f.title} className="flex items-center gap-4 rounded-xl border p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f.icon} alt="" className="h-10 w-10" />
              <p className="font-semibold">{f.title}</p>
            </div>
          ))}
        </div>
      </section>
      <ServicesGrid />
      <FeatureBanner />
      <WorkProcess />
      <Consultation />
      <Counters />
      <BlogTeaser />
      <Partners />
    </>
  );
}
