export default function SportsAnalyticsPage() {
  const projects = [
    {
      title: "xT (Expected Threat) & Progressive Values",
      description:
        "A football analytics project focused on how teams create danger through passes and carries. The analysis highlights expected threat and progressive actions using Python-based data workflows and clear visual storytelling.",
      tags: ["Python", "Pandas", "xT", "Data Visualization"],
    },
    {
      title: "Süper Lig Penalty Analysis",
      description:
        "A comparative analysis of penalty takers using penalty data, player tendencies and visual summaries. The project is designed to present player-level insights in a clean and readable analytical format.",
      tags: ["Football Data", "Analytics", "Visualization"],
    },
    {
      title: "Player Shot Map Analysis",
      description:
        "A shot map project that analyzes player shooting locations, goal patterns and attacking output. Built with Python, Matplotlib and mplsoccer to transform raw event data into meaningful visuals.",
      tags: ["Python", "Matplotlib", "mplsoccer", "Shot Maps"],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
          Sports Analytics
        </p>

        <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
          Football reports, visual analysis and data storytelling
        </h1>

        <p className="mt-4 text-base leading-8 text-slate-300">
          This section presents my sports analytics projects focused on football
          data, visual storytelling and performance analysis. I mainly work
          with Python, Pandas, Matplotlib and mplsoccer to turn raw event data
          into clear and insightful reports.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-[28px] border border-white/10 bg-[#0b141d] p-6"
          >
            <div className="mb-5 rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4">
              <div className="flex h-36 items-center justify-center rounded-[16px] border border-dashed border-white/10 text-sm text-slate-400">
                Football analytics project preview
              </div>
            </div>

            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}