export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-muted flex flex-col md:flex-row gap-3 justify-between">
        <span>© {new Date().getFullYear()} Open Lluna. All rights reserved.</span>
        <span>Built with Next.js • Tailwind • shadcn</span>
      </div>
    </footer>
  );
}
