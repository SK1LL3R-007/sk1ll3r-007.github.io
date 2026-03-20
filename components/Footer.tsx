export default function Footer({
  t,
}: {
  t: Record<string, any>;
}) {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-green-500/20 bg-black/70">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400 text-sm font-mono">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
