"use client";

export default function Hero({
  locale,
  t,
}: {
  locale: string;
  t: Record<string, any>;
}) {
  const projectsHref = `/${locale}#projects`;

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-green-500/10 border border-green-400/35 rounded-full text-green-300 text-sm font-mono">
              // Welcome to my portfolio
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">{t.hero.title}</span>
              <br />
              <span className="text-slate-200">{t.hero.subtitle}</span>
            </h1>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed max-w-lg">{t.hero.description}</p>

          <div className="flex gap-4 pt-4 flex-wrap">
            <a
              href={projectsHref}
              className="px-8 py-3 bg-gradient-to-r from-green-300 to-green-500 text-black font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg shadow-green-500/30"
            >
              {t.hero.viewWork}
            </a>
            <a
              href="https://github.com/SK1LL3R-007/CyberSecProjects/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-green-400 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-colors"
            >
              {t.hero.githubProjects}
            </a>
          </div>

          <div className="flex gap-6 pt-8">
            <a
              href="https://github.com/SK1LL3R-007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-green-400 transition-colors hover:scale-110 transform"
              title="GitHub"
            ><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
            <a
              href="https://www.linkedin.com/in/sk1ll3r/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-green-400 transition-colors hover:scale-110 transform"
              title="LinkedIn"
            ><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg></a>
            <a
              href="mailto:kilanimohammedaziz@gmail.com"
              className="text-zinc-400 hover:text-green-400 transition-colors hover:scale-110 transform"
              title="Email"
            ><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap={"round" as const} strokeLinejoin={"round" as const} strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-700/20 rounded-3xl blur-3xl" />
            <div className="relative w-full aspect-square bg-gradient-to-br from-green-500/10 to-black rounded-3xl border border-green-400/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,197,94,0.12)_25%,rgba(34,197,94,0.12)_50%,transparent_50%,transparent_75%,rgba(34,197,94,0.12)_75%,rgba(34,197,94,0.12))] bg-[length:40px_40px]" />
              <svg className="absolute w-48 h-48 text-green-400/35" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap={"round" as const} strokeLinejoin={"round" as const} strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <img
                src="/profile-photo.jpeg"
                alt="Mohamed Aziz"
                className="relative z-10 h-[78%] w-[78%] object-cover rounded-2xl border border-green-400/45 shadow-lg shadow-green-500/20"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
