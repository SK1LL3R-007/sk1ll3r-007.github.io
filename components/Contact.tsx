export default function Contact({
  locale,
  t,
}: {
  locale: string;
  t: Record<string, any>;
}) {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sk1ll3r/",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      ),
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/SK1LL3R-007",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.93 3.633 17.6 3.633 17.6c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.175 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.175.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.375.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      color: "hover:text-white",
    },
    {
      name: "TryHackMe",
      href: "https://tryhackme.com/p/SK1LL3Rv1",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h10M4 17h7" />
          <circle cx="17" cy="16" r="3" strokeWidth={2} />
        </svg>
      ),
      color: "hover:text-red-400",
    },
    {
      name: "Email",
      href: "mailto:kilanimohammedaziz@gmail.com",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
      color: "hover:text-green-400",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-green-500/25">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
            {t.contact.title}
          </span>
        </h2>
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">{t.contact.subtitle}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className={`group bg-gradient-to-br from-zinc-900/70 to-black border border-green-500/20 rounded-lg p-6 hover:border-green-400/50 transition-all ${link.color}`}
              aria-label={link.name}
            >
              <div className="text-green-400 group-hover:scale-110 transition-transform mb-3 flex justify-center">{link.icon}</div>
              <p className="text-slate-300 font-medium font-mono">{link.name}</p>
            </a>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-green-500/20 bg-green-500/5 text-green-300 font-mono text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {t.contact.availability}
        </div>
      </div>
    </section>
  );
}
