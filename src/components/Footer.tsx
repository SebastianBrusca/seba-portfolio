export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-8">
      <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-neutral-500 flex justify-between">
        <span>© {new Date().getFullYear()} Sebastián Brusca</span>
        <span>Hosteado en mi propio servidor Linux con Docker</span>
      </div>
    </footer>
  );
}
