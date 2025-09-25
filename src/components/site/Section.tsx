export default function Section({
  title,
  children
}: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}
