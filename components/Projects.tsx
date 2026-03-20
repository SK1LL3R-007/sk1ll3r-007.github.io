export default function Projects({
  locale,
  t,
}: {
  locale: string;
  t: Record<string, any>;
}) {
  const projects: Array<{
    title: string;
    description: string;
    tags: string[];
    icon: string;
    url: string;
  }> = t.projects.items;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950/70 border-y border-green-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4"><span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">{t.projects.title}</span></h2>
          <p className="text-slate-400 text-lg font-mono">$ {t.projects.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative bg-gradient-to-br from-zinc-900/70 to-black border border-green-500/20 hover:border-green-400/50 rounded-lg p-6 transition-all hover:shadow-lg hover:shadow-green-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-4xl mb-3">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-3 py-1 text-xs bg-green-500/10 text-green-300 rounded border border-green-400/25 font-mono">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-300 hover:text-green-200"
                >
                  {t.projects.viewSource}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={t.projects.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-green-400/45 rounded-lg text-green-300 hover:bg-green-500/10 transition-colors font-mono text-sm"
          >
            {t.projects.viewAll}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
