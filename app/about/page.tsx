export default function AboutPage() {

  const skills = [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "mplsoccer",
    "SwiftUI",
    "OpenCV",
    "Computer Vision",
    "Data Visualization",
    "Football Analytics"
  ];

  const journey = [
    {
      title: "Mobile Development",
      text: "Developing iOS applications using SwiftUI and UIKit, focusing on product-oriented app development and user experience."
    },
    {
      title: "Data Science & Sports Analytics",
      text: "Building football analytics projects using Python, Pandas, Matplotlib and mplsoccer to analyze match data and create visual insights."
    },
    {
      title: "Computer Vision",
      text: "Developing real-world detection systems using Python and OpenCV, focusing on camera-based analysis and automation."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
          About Me
        </p>

        <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
          A portfolio built around software, analytics and real-world projects.
        </h1>

        <p className="mt-4 text-base leading-8 text-slate-300">
          I am Melih Siskular, a Computer Engineering student passionate about
          software development, sports analytics, data science and computer
          vision.
        </p>

        <p className="mt-4 text-base leading-8 text-slate-300">
          I enjoy building projects that combine technical problem solving with
          real-world applications. My work focuses on creating mobile
          applications, analyzing football data and developing computer vision
          systems using Python and modern software tools.
        </p>
      </div>


      <div className="mb-16">

        <h2 className="text-2xl font-semibold mb-6">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap gap-3">

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


      <div>

        <h2 className="text-2xl font-semibold mb-8">
          Journey
        </h2>

        <div className="space-y-8">

          {journey.map((item, index) => (
            <div key={item.title} className="flex gap-4">

              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-sm font-semibold text-emerald-300">
                  {index + 1}
                </div>

                {index !== journey.length - 1 && (
                  <div className="mt-2 h-full w-px bg-white/10" />
                )}

              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}