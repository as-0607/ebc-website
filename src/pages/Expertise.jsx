import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { INSTRUMENTS } from "../data/ebc";
import { WHY } from "../data/ebc";
import { MEASUREMENTS } from "../data/ebc";
import { STANDARDS } from "../data/ebc";

export default function Expertise() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          label="04 / Expertise"
          meta="INSTRUMENTATION / STANDARDS"
          title={
            <>
              WE DO NOT GUESS.<br></br>WE MEASURE.
            </>
          }
          intro="State-of-the-art, calibrated measurement equipment operated by qualified engineers, with accurate recording of all results in accordance with method statements and installation checklists."
          image="https://theebc-eg.com/wp-content/uploads/2020/08/20140122_101704-768x576.jpg"
        />

        {/* Measurement Plate */}
        <section className="bg-white py-16 lg:py-24">
          <div className="w-full mx-auto max-w-[88rem] px-5 md:px-10 xl:px-14">
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <img
                src="https://theebc-eg.com/wp-content/uploads/2020/10/IMG_6072-768x512.jpg"
                alt="EBC field instrumentation in use"
                loading="lazy"
                className="aspect-[21/9] w-full object-cover"
              />

              <div className="absolute inset-0 opacity-25 mix-blend-multiply bg-[linear-gradient(to_right,#E2E4E5_1px,transparent_1px),linear-gradient(to_bottom,#E2E4E5_1px,transparent_1px)] bg-[size:72px_72px]" />

              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-px bg-white/20">
                {MEASUREMENTS.map((m) => (
                  <span
                    key={m}
                    className="flex-1 bg-[#07131F]/85 px-3 py-3 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-white/80"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instruments Table */}
        <section className="bg-[#F4F6F7] py-16 lg:py-24">
          <div className="w-full mx-auto max-w-[88rem] px-5 md:px-10 xl:px-14">
            <div
              className="max-w-3xl"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#E53935]">
                Our Instruments
              </span>

              <h2 className="mt-5 font-['Archivo'] text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.025em] text-[#07131F]">
                CALIBRATED<br></br>EQUIPMENT REGISTER.
              </h2>
            </div>

            <div className="mt-12 border-t border-[#E2E4E5]">
              {INSTRUMENTS.map((ins, i) => (
                <div
                  key={ins.name}
                  className="grid gap-2 border-b border-[#E2E4E5] py-5 md:grid-cols-12 md:items-baseline md:gap-6"
                  data-aos="fade-up"
                  data-aos-delay={(i % 4) * 50}
                  data-aos-duration="700"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1] md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-['Archivo'] text-base font-bold tracking-tight text-[#07131F] md:col-span-4">
                    {ins.name}
                  </h3>

                  <p className="text-sm text-[#07131F]/65 md:col-span-6">
                    {ins.use}
                  </p>

                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1] md:col-span-1 md:text-right">
                    {ins.origin || "—"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="relative overflow-hidden bg-[#07131F] text-white">
          <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="relative w-full mx-auto grid max-w-[88rem] gap-8 px-5 py-20 md:px-10 lg:grid-cols-12 lg:py-28 xl:px-14">
            <div
              className="lg:col-span-4"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#E53935]">
                Certifications & Standards
              </span>

              <h2 className="mt-5 font-['Archivo'] text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.025em]">
                STANDARDS THAT DEFINE
                <br />
                OUR WORK.
              </h2>

              <p className="mt-6 text-white/70">
                EBC-International is a NEBB certified TAB and commissioning
                provider. Recommendation letters and certificates are available
                on request.
              </p>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:col-span-8">
              {STANDARDS.map((s, i) => (
                <div
                  key={s.code}
                  className="group bg-[#07131F] p-6"
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                  data-aos-duration="700"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <div className="flex items-baseline justify-between">
                    <p className="font-['Archivo'] text-xl font-extrabold tracking-tight">
                      {s.code}
                    </p>

                    <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <span className="mt-4 block h-[2px] w-8 bg-[#E53935] transition-all duration-500 group-hover:w-16" />

                  <p className="mt-4 text-sm text-white/60">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why EBC */}
        <section className=" py-20 lg:py-28">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
            {/* Heading */}
            <div data-aos="fade-up" data-aos-once="true" className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#ef3e37]" />

                <span className="font-['IBM_Plex_Sans'] text-xs font-medium uppercase tracking-[0.12em] text-[#ef3e37]">
                  Why EBC
                </span>
              </div>

              <h2 className="mt-6 font-['Archivo'] text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.025em] text-[#07131F]">
                INDEPENDENT. CERTIFIED.
                <br />
                DOCUMENTED.
              </h2>
            </div>

            {/* Why EBC cards */}
            <div className="mt-14 grid gap-px bg-[#E2E4E5] md:grid-cols-2 lg:grid-cols-5">
              {WHY.map((w, i) => (
                <div
                  key={w.no}
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay={i * 70}
                  className="bg-white p-7 lg:p-8"
                >
                  <span className="block font-['Archivo'] text-4xl font-extrabold leading-none text-[#d9d9d6] transition-colors duration-500 group-hover:text-[#ef3e37]">
                    {w.no}
                  </span>

                  <h3 className="mt-5 font-['Archivo'] text-base font-bold uppercase tracking-[0.04em] text-[#111111]">
                    {w.title}
                  </h3>

                  <p className="mt-3 font-['IBM_Plex_Sans'] text-sm leading-6 text-[#111111]/65">
                    {w.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <SiteFooter />
    </>
  );
}
