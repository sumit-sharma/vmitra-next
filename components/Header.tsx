import Link from "next/link";
import { Megamenu } from "./Megamenu";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 font-bold">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://vyavasaymitra.com/images/logo/VM-logo.png" alt="VyavasayMitra" className="h-8 w-auto" />
          <span>VyavasayMitra</span>
        </Link>
        {/*<nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <div key={n.name} className="relative group">
              <button className="text-sm font-medium hover:text-[hsl(var(--color-primary))]">{n.name}</button>
              <div className="invisible absolute left-0 top-full mt-2 w-80 rounded-xl border bg-white p-4 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                <ul className="grid gap-2 text-sm">
                  {n.items.map((i) => (
                    <li key={i}><Link href="#services" className="block rounded px-2 py-1 hover:bg-gray-100">{i}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <Link href="#consultation" className="btn-primary">Get Free Consultation</Link>
        </nav>*/}

      </div>
        <div className="flex items-center gap-6 md:flex ">
        <Megamenu  />
        </div>
    </header>
  );
}
