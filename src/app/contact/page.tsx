export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Contact us</h1>
      <p className="text-muted mb-6">
        Tell us about your project. We’ll get back within 24–48h.
      </p>
      <form className="grid gap-4 max-w-xl">
        <input name="name" placeholder="Your name" className="border rounded-xl px-4 py-3 bg-card" />
        <input name="email" placeholder="Email" className="border rounded-xl px-4 py-3 bg-card" />
        <textarea name="message" placeholder="Project description" rows={5} className="border rounded-xl px-4 py-3 bg-card" />
        <button className="rounded-2xl px-5 py-3 bg-[var(--fg)] text-[var(--btn-fg)] font-medium w-fit">
          Enquiry us
        </button>
      </form>
    </div>
  );
}
