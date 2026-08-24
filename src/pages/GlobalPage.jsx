import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
const PROJECTS = [
  {
    name: "City of Science & Technology, B-06",
    image:
      "https://theebc-eg.com/wp-content/uploads/2023/01/City-of-Science-Technology-768x599.jpg",
    country: "Egypt",
    sector: "Educational",
  },
  {
    name: "The American University in Cairo",
    image: "https://theebc-eg.com/wp-content/uploads/2023/01/AUC-768x512.webp",
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
const COUNTRIES = [
  { name: "Egypt", note: "Headquarters — Cairo" },
  { name: "Qatar", note: "Doha" },
  { name: "United Arab Emirates", note: "Dubai" },
  { name: "Saudi Arabia", note: "" },
  { name: "Sudan", note: "" },
  { name: "Djibouti", note: "" },
  { name: "Italy", note: "" },
];
const SITE = {
  name: "EBC-International",
  tagline: "Elite Building Commissioning",
  email: "Info@theebc-eg.com",
  telephone: "0226716964",
  mobile: "00201004109006",
  since: "2011",
  countries: "8",
  projectsCount: "87+",
};
export default function GlobalPage() {
  return (
    <>
    <Navbar/>
      <main>
        <PageHeader
          label="05 / Global Presence"
          meta={`${SITE.countries} COUNTRIES · ${SITE.projectsCount} PROJECTS`}
          title={<>GROWTH ORIENTED, ON<br/>AN INTERNATIONAL SCALE.</>}
          intro="EBC-International serves clients across the Middle East, North Africa and Europe, with projects delivered in Egypt, Qatar, the UAE, Saudi Arabia, Sudan, Djibouti and Italy."
          image="https://theebc-eg.com/wp-content/uploads/2023/01/Alexandria-Stadium.webp"
        />

        {/* Countries */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid w-full max-w-[80rem] gap-px bg-[#E2E4E5] sm:grid-cols-2 lg:grid-cols-4">
            {COUNTRIES.map((r, i) => (
              <div
                key={r.name}
                className="group bg-white p-7"
                data-aos="fade-up"
                data-aos-delay={i * 60}
                data-aos-duration="700"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#E53935]">
                    {r.name.slice(0, 3).toUpperCase()}
                  </span>
                </div>

                <h2 className="mt-6 font-['Archivo'] text-2xl font-extrabold tracking-tight text-[#07131F]">
                  {r.name}
                </h2>

                <span className="mt-4 block h-[2px] w-8 bg-[#E53935] transition-all duration-500 group-hover:w-20" />

                <p className="mt-4 text-sm text-[#07131F]/65">
                  {r.note || "Projects delivered"}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HQ + Coverage */}
        <section className="relative overflow-hidden bg-[#07131F] text-white">
          {/* Grid Lines */}
          <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="relative mx-auto grid w-full max-w-[88rem] gap-12 px-5 py-20 md:px-10 lg:grid-cols-12 lg:py-28 xl:px-14">
            {/* Headquarters */}
            <div
              className="lg:col-span-5"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#E53935]">
                Headquarters
              </span>

              <h2 className="mt-5 font-['Archivo'] text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.025em]">
                CAIRO, EGYPT.
              </h2>

              <p className="mt-6 text-white/70">
                Cairo, Egypt — serving the MENA region.
              </p>

              <dl className="mt-8 space-y-3 border-t border-white/10 pt-6">
                <div className="flex gap-4">
                  <dt className="w-24 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Phone
                  </dt>

                  <dd className="text-white/80">{SITE.telephone}</dd>
                </div>

                <div className="flex gap-4">
                  <dt className="w-24 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Email
                  </dt>

                  <dd className="text-white/80">{SITE.email}</dd>
                </div>
              </dl>
            </div>

            {/* Project Coverage */}
            <div
              className="lg:col-span-7"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
                {PROJECTS.slice(0, 8).map((p, i) => (
                  <li
                    key={p.name}
                    className="bg-[#07131F] p-5"
                    data-aos="fade-up"
                    data-aos-delay={i * 50}
                    data-aos-duration="700"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                  >
                    <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                      {p.country}
                    </span>

                    <p className="mt-2 text-sm text-white/80">{p.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <SiteFooter/>
    </>
  );
}
