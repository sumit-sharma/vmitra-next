export default function Consultation() {
  return (
    <section id="consultation" className="section bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-bold">Get Free Expert Consultation</h2>
        <p className="mt-2 text-gray-600">Our CA-led team will get back to you within 24 hours.</p>
        <form action="mailto:info@vyavasaymitra.com" method="post" className="mt-6 grid gap-4 sm:grid-cols-2">
          <input required name="name" placeholder="Full name" className="rounded-lg border px-4 py-3" />
          <input required name="email" type="email" placeholder="Email" className="rounded-lg border px-4 py-3" />
          <input name="phone" placeholder="Phone" className="rounded-lg border px-4 py-3 sm:col-span-2" />
          <textarea name="message" placeholder="Tell us what you need" rows={4} className="rounded-lg border px-4 py-3 sm:col-span-2" />
          <button className="btn-primary sm:col-span-2" type="submit">Request Consultation</button>
        </form>
      </div>
    </section>
  );
}
