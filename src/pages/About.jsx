import Navbar from "../components/Navbar";
import  SiteFooter  from "../components/SiteFooter";
import PageHeader from "../components/PageHeader";
import  CTASection  from "../components/CTASection";

const MISSION_POINTS = [
  "Validation of construction integrity.",
  "Confirmation of operability of the facility in terms of performance, reliability, safety and security.",
  "Provide cost effective solutions for our clients through the commissioning management process.",
  "Optimizing energy use.",
  "Increase productivity by creating optimal workplace environments.",
  "Provide documentation, to serve as the historical record of the \u201cWhat?, Why? and How to?\u201d of key delivery team decisions throughout the planning and delivery process.",
  "Maintain facility performance for the building's entire life cycle.",
];

const PRINCIPLES = [
  "Ensuring the safety of all our employees, customers, and associates.",
  "Valuing people as the essential asset of our company with a shared responsibility in fulfilling our mission.",
  "Executing quality work that exceeds expectations.",
  "Governing ourselves with integrity in our operations and professional relationships.",
  "Demonstrating innovation and an entrepreneurial spirit.",
];



const TIMELINE = [
  {
    year: "2011",
    title: "OUR BEGINNING",
    text: "EBC-International begins providing testing and commissioning services to the Egyptian market, with a history of premier service dating back to 2011.",
  },
  {
    year: "GROWTH",
    title: "ENRICHED SERVICE OFFERING",
    text: "From local beginnings, EBC enjoys continuous growth and enrichment of service offerings — commissioning management, TAB, electrical testing and cleanroom validation.",
  },
  {
    year: "TODAY",
    title: "INTERNATIONAL PRESENCE",
    text: "Growth oriented and expanding on an international scale, providing services to projects in Doha, Dubai, Sudan, Djibouti, Saudi Arabia and Italy.",
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          label="01 / About Us"
          meta="EBC / SINCE 2011"
          title="A LEADING PROVIDER OF TESTING & COMMISSIONING SERVICES."
          intro="EBC-International is a leading provider of Testing & Commissioning services to the Egyptian market and MENA region, with a history of providing premier services dating back to 2011."
          image="https://theebc-eg.com/wp-content/uploads/2020/09/8b66f42e-4d80-4d01-b47c-b7b0fac1526a-e1620393616232-768x839.jpg"
        />

        {/* Story */}
        <section className=" py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
            {/* Image */}
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="lg:col-span-5"
            >
              <img
                src="https://theebc-eg.com/wp-content/uploads/2020/09/8b66f42e-4d80-4d01-b47c-b7b0fac1526a-e1620393616232-768x839.jpg"
                alt="The EBC-International team"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />

              <p className="mt-4 font-mono text-[0.75rem] uppercase tracking-[0.15em] text-[#7A8087]">
                EBC / TEAM
              </p>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <div data-aos="fade-up" data-aos-once="true">
                <span className=" text-[0.75rem] font-medium uppercase tracking-[0.15em] text-[#EF3E37]">
                  Our Story
                </span>

                <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4.4vw,4.6rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#0B0F14]">
                  WE DO NOT ONLY ENVISION THE FUTURE. WE BUILD IT.
                </h2>

                <div className="mt-7 space-y-5 text-lg leading-relaxed text-[#0B0F14]/70">
                  <p>
                    From our local beginnings over 10 years ago to our vast
                    international presence today, EBC has enjoyed continuous
                    growth and enrichment of service offerings.
                  </p>

                  <p>
                    Every milestone reached has enabled us to better fulfill our
                    purpose of preparing our communities and environment for the
                    future.
                  </p>

                  <p>
                    Today EBC is proud to be one of the Middle East&apos;s
                    leading professional services firms as we continue to
                    provide technical expertise and strategic advice to clients
                    in infrastructure, property &amp; buildings, environmental
                    and energy sectors.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <ol className="mt-14 grid gap-px bg-[#D8D8D2] sm:grid-cols-3">
                {TIMELINE.map((t, i) => (
                  <li
                    key={t.year}
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay={i * 90}
                    className="bg-white p-6"
                  >
                    <span className="font-mono  text-[0.75rem] font-medium uppercase tracking-[0.15em] text-[#EF3E37]">
                      {t.year}
                    </span>

                    <h3 className="mt-3 text-base font-bold tracking-tight text-[#0B0F14]">
                      {t.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#0B0F14]/65">
                      {t.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="relative overflow-hidden bg-[#06131e] text-white">
          <div className="absolute inset-0 opacity-60">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative mx-auto grid max-w-[1400px] gap-14 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-28">
            {/* Mission text */}
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="lg:col-span-5"
            >
              <span className="text-[0.75rem] font-medium uppercase tracking-[0.15em] text-[#EF3E37]">
                Our Mission
              </span>

              <h2 className="mt-5 text-[clamp(2.25rem,4.4vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em]">
                A QUALITY-FOCUSED PROCESS FOR ENHANCING PROJECT DELIVERY.
              </h2>

              <p className="mt-6 leading-relaxed text-white/70">
                Honesty, integrity, and respect for people are the basis for
                everything we do. EBC was developed to raise the standard of the
                commissioning management and documentation process to a level
                that is not conventionally provided in the construction
                industry.
              </p>
            </div>

            {/* Mission points */}
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="100"
              className="lg:col-span-7"
            >
              <ul className="grid gap-px bg-white/10">
                {MISSION_POINTS.map((m, i) => (
                  <li
                    key={m}
                    className="flex gap-5 bg-[#06131e] px-1 py-5 lg:px-6"
                  >
                    <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#7A8087]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="text-white/80">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-[#f5f6f6] py-20 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div data-aos="fade-up" data-aos-once="true" className="max-w-2xl">
              <span className="text-[0.75rem] font-medium uppercase tracking-[0.15em] text-[#EF3E37]">
                Our Guiding Principles
              </span>

              <h2 className="mt-5 text-[clamp(2.25rem,4.4vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#0B0F14]">
                ALL STAGES OF EACH PROJECT ARE GUIDED BY THESE CORE VALUES.
              </h2>
            </div>

            <ul className="mt-14 grid gap-px bg-[#D8D8D2] md:grid-cols-2 lg:grid-cols-5">
              {PRINCIPLES.map((p, i) => (
                <li
                  key={p}
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay={i * 70}
                  className="bg-[#f5f6f6] p-7"
                >
                  <span className="block text-3xl font-extrabold leading-none text-[#D8D8D2]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-5 text-sm leading-relaxed text-[#0B0F14]/75">
                    {p}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTASection />
      </main>

      <SiteFooter />
    </>
  );
}
