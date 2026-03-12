export default function HomePage() {

  const skills = [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "mplsoccer",
    "SQL",
    "Data Analytics",
    "SwiftUI",
    "UIKit",
    "OpenCV",
    "YOLO",
    "Machine Learning"
  ];

  const featuredProjects = [
    {
      title: "Fantasy Football Draft",
      category: "iOS Project",
      year: "App Store",
      description:
        "A football management and draft simulation game built with SwiftUI where users build squads, set tactics and simulate matches.",
      tags: [],
    },
    {
      title: "xT & Progressive Actions Analysis",
      category: "Sports Analytics",
      year: "Report",
      description:
        "A football analytics project analyzing how teams create danger through progressive passes and carries using Python.",
      tags: [],
    },
    {
      title: "Parking Space Detection System",
      category: "Computer Vision",
      year: "CV Project",
      description:
        "A computer vision system that detects available parking spaces from camera footage using OpenCV-based image processing.",
      tags: [],
    },
  ];


  return (
    <>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.16),transparent_26%),radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.14),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />

        <div className="absolute right-[-10%] top-20 hidden h-[480px] w-[480px] rounded-full border border-emerald-400/10 bg-emerald-400/5 blur-3xl lg:block" />


        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">

          <div>

            <div className="mb-6 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-emerald-300">
              Portfolio
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl md:leading-[1.05]">
              Building digital products and turning data into visual insights.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I am Melih Siskular, a Computer Engineering student passionate
              about software development, sports analytics, data science, ML and
              computer vision. This website showcases my apps, reports and
              technical projects.
            </p>


            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>


          {/* right side visual */}
<div className="relative">
  <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur">
    <div className="rounded-[28px] border border-emerald-400/20 bg-[linear-gradient(180deg,#0c1823_0%,#0a141e_100%)] p-6">
      <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
        My First Mobile App 
      </p>

      <h3 className="mt-2 text-2xl font-semibold">
        Fantasy Football Draft
      </h3>

      <div className="mt-6 rounded-3xl border border-white/10 bg-[#081018] p-5">
        <a
          href="/mobile-projects"
          className="block overflow-hidden rounded-2xl border border-white/10"
        >
          <img
            src="/previews/fantasy-football-draft.png"
            alt="Fantasy Football Draft Preview"
            className="h-64 w-full object-cover transition duration-300 hover:scale-105"
          />
        </a>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Countries", value: "25+" },
          { label: "Available On", value: "iOS 18+" },
          { label: "Built With", value: "Swift" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="text-2xl font-semibold">
              {item.value}
            </div>

            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
              {item.label}
            </div>
          </div>
        ))}
      </div>
      {/* App Store Button */}
<div className="mt-8 flex justify-center">
  <a
    href="https://apps.apple.com/app/6754261289"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/appstore/Download_on_the_App_Store_Badge.png"
      alt="Download on the App Store"
      className="h-12 transition hover:scale-105"
    />
  </a>
</div>
    </div>
  </div>
      </div>
  </div>
      </section>



      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
            Pinned Projects
          </p>

          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            Featured Work
          </h2>
        </div>


        <div className="grid gap-6 md:grid-cols-3">

          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6"
            >

              <p className="text-xs uppercase tracking-[0.22em] text-emerald-300">
                {project.category}
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
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

    </>
  );
}
