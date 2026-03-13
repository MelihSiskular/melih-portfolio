export default function MobileProjectsPage() {
  const projects = [
    {
      title: "Fantasy Football Draft",
      description:
        "A football management and draft simulation game developed with SwiftUI. The app allows users to build squads, create tactical lineups and simulate matches through a strategy-based football experience.",
      tags: ["SwiftUI", "iOS", "Mobile Game", "App Store"],
      image: "/previews/ffd.png",
      link: "https://apps.apple.com/tr/app/fantasy-football-draft/id6754261289?l=tr"
    },
    {
      title: "The Oxford 3000",
      description:
        "A mobile language learning application focused on vocabulary training and quiz-based learning. The app is designed with a clean interface and aims to make language practice simple and interactive.",
      tags: ["SwiftUI", "Education", "Mobile App"],
      image: "/previews/oxford3000.png"
    },
    {
      title: "Road Assistance Project",
      description : "A SwiftUI application developed for an Object-Oriented Programming course. Integrated with Firebase, the app allows users to request roadside assistance while service providers can view and accept incoming requests with basic interface.",
      tags: ["SwiftUI","Firebase"],
      image: "/previews/yol_yardim.png"

    }

  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
          Mobile Projects
        </p>

        <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
          iOS applications and product-focused development
        </h1>

        <p className="mt-4 text-base leading-8 text-slate-300">
          This section showcases my latest mobile development projects built mainly
          with SwiftUI. My focus is on creating clean interfaces, practical
          features and product oriented applications that solve real problems.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-[28px] border border-white/10 bg-[#0b141d] p-6"
          >
            <div className="mb-5 rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4">
                  <img
  src={project.image}
  alt={project.title}
  className="h-36 w-full rounded-[16px] object-cover transition duration-300 hover:scale-105"
/>
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

            {project.link && (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-auto mt-6 block rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400"  >
     App Store
  </a>
)}


          </div>
        ))}
      </div>
    </section>
  );
}