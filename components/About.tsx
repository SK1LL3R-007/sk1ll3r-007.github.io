export default function About({
  locale,
  t,
}: {
  locale: string;
  t: Record<string, any>;
}) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6"><span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">{t.about.title}</span></h2>
            <div className="space-y-4 text-slate-300">
              <p className="leading-relaxed">{t.about.bio1}</p>
              <p className="leading-relaxed">{t.about.bio2}</p>
              <p className="leading-relaxed">{t.about.bio3}</p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-green-500/25">
              <div className="text-center"><div className="text-3xl font-bold bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">1</div><p className="text-slate-400 text-sm font-mono mt-2">{t.about.yearsExp}</p></div>
              <div className="text-center"><div className="text-3xl font-bold bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">4</div><p className="text-slate-400 text-sm font-mono mt-2">{t.about.projectsCompleted}</p></div>
              <div className="text-center"><div className="text-3xl font-bold bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">Active</div><p className="text-slate-400 text-sm font-mono mt-2">{t.about.vulnerabilitiesFound}</p></div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded border border-green-500/30 bg-green-500/10 text-green-300 font-mono text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t.about.tryhackmeRank}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-zinc-900/70 to-black border border-green-500/20 rounded-lg p-6 hover:border-green-400/45 transition-all">
              <h3 className="font-semibold text-green-400 mb-4 font-mono"># {t.about.certLabel}</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-center gap-3"><span className="text-green-400 font-mono">→</span> {t.certifications.ceh}</li>
                <li className="flex items-center gap-3"><span className="text-green-400 font-mono">→</span> {t.certifications.ejpt}</li>
                <li className="flex items-center gap-3"><span className="text-green-400 font-mono">→</span> {t.certifications.icca}</li>
                <li className="flex items-center gap-3"><span className="text-green-400 font-mono">→</span> {t.certifications.crta}</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-900/70 to-black border border-green-500/20 rounded-lg p-6 hover:border-green-400/45 transition-all">
              <h3 className="font-semibold text-green-400 mb-4 font-mono"># {t.about.industryLabel}</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-center gap-3"><span className="text-green-400 font-mono">→</span> {t.about.financial}</li>
                <li className="flex items-center gap-3"><span className="text-green-400 font-mono">→</span> {t.about.healthcare}</li>
                <li className="flex items-center gap-3"><span className="text-green-400 font-mono">→</span> {t.about.government}</li>
                <li className="flex items-center gap-3"><span className="text-green-400 font-mono">→</span> {t.about.technology}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
