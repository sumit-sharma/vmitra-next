import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container section grid gap-8 md:grid-cols-3">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://vyavasaymitra.com/images/logo/VM-logo.png" alt="VyavasayMitra" className="h-10 w-auto" />
          <p className="mt-4 text-sm text-gray-600">
            India’s trusted platform for registrations, compliance, taxation, accounting and growth advisory.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Phone: <a href="tel:+919873794257" className="hover:underline">+91 9873794257</a></li>
            <li>Email: <a href="mailto:info@vyavasaymitra.com" className="hover:underline">info@vyavasaymitra.com</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Policies</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/refund" className="hover:underline">Refund Policy</Link></li>
            <li><Link href="/confidentiality" className="hover:underline">Confidentiality Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:underline">Disclaimer Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-gray-600">
        © 2025 C&Y Expert Solutions Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
