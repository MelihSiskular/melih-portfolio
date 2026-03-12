export default function ComputerVisionPage() {

  const projects = [
    {
      title: "Parking Space Detection System",
      description:
        "A computer vision system designed to detect available parking spaces using camera footage. The project uses image processing techniques and detection logic to determine whether a parking spot is occupied or empty.",
      tags: ["Python", "OpenCV","Yolo","Numpy", "Computer Vision"],
      image:"/previews/park_yeri.png"
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-purple-300">
          Computer Vision
        </p>

        <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
          Visual detection systems and real-world applications
        </h1>

        <p className="mt-4 text-base leading-8 text-slate-300">
          This section includes my computer vision projects focused on solving
          real-world problems using image processing and machine learning
          techniques. I mainly work with Python, Yolo and OpenCV to analyze camera
          input and build practical detection systems.
        </p>
      </div>


      <div className="grid gap-6 md:grid-cols-2">

        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-[28px] border border-white/10 bg-[#0b141d] p-6"
          >

            <div className="mb-5 rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4">
                      <img
  src={project.image}
  alt={project.title}
  className="h-36 w-full rounded-[16px] object-cover transition duration-300 hover:scale-105"
/>
            </div>

            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

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