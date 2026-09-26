import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { MISSION_POINTS } from "../data/ebc";
import { PRINCIPLES } from "../data/ebc";

export default function About() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          label="About Us"
          meta="We test it, document it and make it simple"
          title="AN ESTABLISHED LEADER IN MEP COMMISSIONING MANAGEMENT."
          intro="EBC-International is an established company with a strong presence across the Middle East and a long-standing track record across complex building projects. Our expertise spans MEP Commissioning Management, supported by extensive project experience technical capability and a deep understanding of building systems. Our commitment to quality helps clients achieve reliable, efficient and performance-driven building systems."
          image={`${import.meta.env.BASE_URL}/images/headers/about.jpeg`}
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
                src={`${import.meta.env.BASE_URL}/images/headers/about.jpeg`}
                alt="The EBC-International team"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <div data-aos="fade-up" data-aos-once="true">
                <span className=" text-[0.85rem] font-medium uppercase tracking-[0.15em] text-[#EF3E37]">
                  Our Vision
                </span>

                <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4.4vw,4.6rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#0B0F14]">
                  BUILT ON EXPERIENCE. TRUSTED FOR PERFORMANCE.
                </h2>

                <div className="mt-7 space-y-5 text-lg leading-relaxed text-[#0B0F14]/70">
                  <p>
                    EBC-International has built its reputation through years of
                    experience across complex projects in the Middle East,
                    continuously strengthening its technical capabilities and
                    expanding its expertise.
                  </p>

                  <p>
                    Our experience shapes the way we work — bringing knowledge,
                    discipline and practical understanding to every project,
                    while maintaining a consistent commitment to quality and
                    performance.
                  </p>

                  <p>
                    We aim to be a trusted partner for clients who require
                    confidence in the performance of their building systems,
                    delivering expertise that stands behind every commissioning
                    decision.
                  </p>
                </div>
              </div>
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
              <span className="text-[0.85rem] font-medium uppercase tracking-[0.15em] text-[#EF3E37]">
                Our mission
              </span>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em]">
                RAISING THE STANDARD. ENHANCING PROJECT DELIVERY.
              </h2>

              <p className="mt-6 leading-relaxed text-white/70">
                Honesty, integrity and respect for people are the foundation of
                everything we do. EBC is committed to delivering a
                quality-focused approach to MEP Commissioning
                Management—bringing structure, coordination and technical
                oversight throughout the commissioning process. We help ensure
                systems perform as intended, documentation is clear and
                reliable, and every project is delivered with confidence,
                precision and measurable results.
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
              <span className="text-[0.85rem] font-medium uppercase tracking-[0.15em] text-[#EF3E37]">
                Our Guiding Principles
              </span>

              <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#0B0F14]">
                THE PRINCIPLES THAT GUIDE HOW WE WORK, DELIVER, AND BUILD TRUST.
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
