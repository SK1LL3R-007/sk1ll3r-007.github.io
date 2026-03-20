export default function Certifications({
  locale,
  t,
}: {
  locale: string;
  t: Record<string, any>;
}) {
  const certs = [
    {
      name: t.certifications.ceh,
      icon: "🎓",
      issuer: "Mastermind",
      color: "from-red-500 to-pink-500",
      learned: t.certifications.learned.ceh,
    },
    {
      name: t.certifications.ejpt,
      icon: "🛡️",
      issuer: "INE / eLearnSecurity",
      color: "from-green-500 to-emerald-500",
      learned: t.certifications.learned.ejpt,
    },
    {
      name: t.certifications.icca,
      icon: "☁️",
      issuer: "INE",
      color: "from-cyan-500 to-blue-500",
      learned: t.certifications.learned.icca,
    },
    {
      name: t.certifications.crta,
      icon: "🧠",
      issuer: "Altered Security",
      color: "from-violet-500 to-pink-500",
      learned: t.certifications.learned.crta,
    },
    {
      name: t.certifications.securityPlusInProgress,
      icon: "⏳",
      issuer: "CompTIA",
      color: "from-green-500 to-lime-500",
      learned: t.certifications.learned.securityPlusInProgress,
    },
    {
      name: t.certifications.cptsInProgress,
      icon: "🚀",
      issuer: "Hack The Box",
      color: "from-orange-500 to-amber-500",
      learned: t.certifications.learned.cptsInProgress,
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950/70 border-y border-green-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4"><span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">{t.certifications.title}</span></h2>
          <p className="text-slate-400 text-lg font-mono">$ {t.certifications.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <div key={idx} className="group relative bg-gradient-to-br from-zinc-900/70 to-black border border-green-500/20 rounded-lg p-6 hover:border-green-400/50 transition-all overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity blur-xl`} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">{cert.name}</h3>
                <p className="text-slate-400 text-sm font-mono">{cert.issuer}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {cert.learned.map((item: string, skillIdx: number) => (
                    <span
                      key={skillIdx}
                      className="px-2 py-1 text-xs rounded border border-green-500/25 bg-green-500/10 text-green-200 font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-green-500 to-green-300 rounded opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
