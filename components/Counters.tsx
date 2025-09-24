export default function Counters() {
  const items = [
    { label: "Years of CA Expertise", value: "10+" },
    { label: "Services Under One Roof", value: "25+" },
    { label: "Cases Completed", value: "1500+" },
    { label: "Cities Served", value: "50+" },
  ];
  return (
    <section id="counter" className="section">
      <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.label} className="rounded-2xl border p-6 text-center">
            <div className="text-3xl font-extrabold text-[hsl(var(--color-primary))]">{i.value}</div>
            <div className="mt-2 text-sm text-gray-600">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
