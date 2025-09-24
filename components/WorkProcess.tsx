export default function WorkProcess() {
  const steps = [
    {
      title: "Choose Your Service",
      desc: "Pick from registrations, licenses, taxation, compliance, accounting, and more.",
    },
    { title: "Quick Sign-Up", desc: "Share basic details and documents securely." },
    { title: "Dedicated Case Manager", desc: "A single point of contact for smooth execution." },
    { title: "Delivery & Easy Access", desc: "Get results timely and access documents anytime." },
  ];
  return (
    <section id="how-we-work" className="section">
      <div className="container">
        <h2 className="text-2xl font-bold">How We Work</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 font-bold">{i + 1}</div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
