import { Link } from "react-router-dom";

function Card({ p, tall = false }) {
  return (
    <Link
      to="/projects"
      className="group relative block overflow-hidden bg-[#07131F]"
      aria-label={p.name}
    >
      <img
        src={p.image}
        alt={p.name}
        loading="lazy"
        className={`w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 ${
          tall ? "aspect-[4/5] lg:aspect-[3/4]" : "aspect-[16/10]"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07131F]/85 via-[#07131F]/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#E53935]">
            {p.country} · {p.sector}
          </span>

          <h3 className="mt-2 font-['Archivo'] text-xl font-bold leading-tight tracking-[-0.02em] text-white lg:text-2xl">
            {p.name}
          </h3>
        </div>

        <span
          aria-hidden
          className="mb-1 translate-x-2 text-white opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
        >
          →
        </span>
      </div>
    </Link>
  );
}

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      name: "City of Science & Technology, B-06",
      image:
        "https://theebc-eg.com/wp-content/uploads/2023/01/City-of-Science-Technology-768x599.jpg",
      country: "Egypt",
      sector: "Educational",
    },
    {
      name: "The American University in Cairo",
      image:
        "https://theebc-eg.com/wp-content/uploads/2023/01/AUC-768x512.webp",
      country: "Egypt",
      sector: "Educational",
    },
    {
      name: "Alex Stadium",
      image:
        "https://theebc-eg.com/wp-content/uploads/2023/01/Alexandria-Stadium.webp",
      country: "Egypt",
      sector: "Sporting Clubs",
    },
    {
      name: "U.S Embassy Compound, Khartoum",
      image:
        "https://theebc-eg.com/wp-content/uploads/2023/01/U.S-Embassy-Compound-Khartoum-768x513.jpg",
      country: "Sudan",
      sector: "Commercial & Administrative",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10 xl:px-14">

        {/* Header */}
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#E53935]" />

              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#E53935]">
                04 / Selected Projects
              </span>
            </div>

            <h2 className="mt-6 font-['Archivo'] text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.025em] text-[#07131F]">
              COMPLEX BUILDINGS. VERIFIED.
            </h2>
          </div>

          <Link
            to="/projects"
            className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#07131F] border-b-2 border-[#E53935] pb-2 transition-colors hover:text-[#E53935]"
          >
            View all projects <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">

          {/* Large project */}
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="lg:col-span-7"
          >
            <Card p={featuredProjects[0]} tall />
          </div>

          {/* Two smaller projects */}
          <div className="grid gap-5 lg:col-span-5">
            <div
              data-aos="fade-up"
              data-aos-delay="90"
              data-aos-once="true"
            >
              <Card p={featuredProjects[1]} />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="180"
              data-aos-once="true"
            >
              <Card p={featuredProjects[2]} />
            </div>
          </div>

          {/* Full-width project */}
          <div
            data-aos="fade-up"
            data-aos-delay="120"
            data-aos-once="true"
            className="lg:col-span-12"
          >
            <Card p={featuredProjects[3]} />
          </div>

        </div>
      </div>
    </section>
  );
}