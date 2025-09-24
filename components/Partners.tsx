export default function Partners() {
  const logos = [1, 2, 3, 4, 5, 6].map((n) => `https://vyavasaymitra.com/images/logo/p-${n}.webp`);
  return (
    <section id="partners" className="section">
      <div className="container">
        <h2 className="text-2xl font-bold">Our Partners</h2>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((src) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt="Partner logo" className="mx-auto h-12 w-auto opacity-80" />
          ))}
        </div>
      </div>
    </section>
  );
}
