export default function ContactPage() {
  const contacts = [
    {
      title: "LinkedIn",
      value: "linkedin.com/in/melih-siskular",
      link: "https://www.linkedin.com/in/melih-şişkular-109582245",
    },
    {
      title: "Email",
      value: "melihsiskular@gmail.com",
      link: "mailto:melihsiskular@gmail.com",
    },
    {
      title: "Fantasy Football Draft App"
      value: "https://www.instagram.com/fantasyfootballdraftapp/"
      link: "https://www.instagram.com/fantasyfootballdraftapp/"
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-red-300">
          Contact
        </p>

        <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
          Let's connect.
        </h1>

        <p className="mt-4 text-base leading-8 text-slate-300">
          If you are interested in my projects, collaborations or opportunities        
          feel free to reach out through the platforms below.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {contacts.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/40 hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>

            <p className="mt-2 text-sm text-slate-300">{item.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}