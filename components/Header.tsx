"use client"
import Link from "next/link";
import { Megamenu } from "./Megamenu";
import CALL_ICON from "../public/assets/images/phone-call.png";
import EMAIL_ICON from "../public/assets/images/letter.png";
import Image from "next/image";
import { useWindowScrollPercentage } from "app/customHooks/useScrollPercentage";

export default function Header() {
  const scrollPercent = useWindowScrollPercentage();
  console.log(scrollPercent)
  return (
    <header className={`header top-0 z-50 border-b bg-white/80 backdrop-blur ${scrollPercent > 5 && "header_fixed"}`}>
      <div className="container flex h-16 items-center justify-between main_header">
        <Link href="#home" className="flex items-center gap-2 font-bold">
          <img src="https://vyavasaymitra.com/images/logo/VM-logo.png" alt="VyavasayMitra" className="logo" />
          <span>VyavasayMitra</span>
        </Link>
       <div className="multimedia">
        <ul>
          <li>
            <figure>
              <Image src={CALL_ICON} width={40} alt="Call" />
            </figure>
            <span>
              <h3>Phone:</h3>
              <p><a href="tel:+91 9873794257">+91 9873794257</a></p>
            </span>
          </li>
          <li>
            <figure>
              <Image src={EMAIL_ICON} width={40} alt="Call" />
            </figure>
            <span>
              <h3>Mail us:</h3>
              <p><a href="mailto:info@vyavasaymitra.com">info@vyavasaymitra.com</a></p>
            </span>
          </li>
        </ul>
       </div>

      </div>
        <div className={`flex items-center gap-6 md:flex sub_header`}>
        <Megamenu  />

        <div className="socialMenu">
          <ul>
            <li>
              <a href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        </div>
    </header>
  );
}
