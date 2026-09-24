import { measurements } from "../../data/ebc";
import { expertise } from "../../data/ebc";

export default function TechnicalExpertise() {
  return (
    <section className="bg-[#F4F6F7] py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[88rem] gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16 xl:px-14">
        {/* Left content */}
        <div data-aos="fade-up" data-aos-once="true" className="lg:col-span-4">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#E53935]" />

            <span className="font-['IBM_Plex_Sans'] text-[0.85rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#E53935]">
              Technical Expertise
            </span>
          </div>

          <h2 className="mt-6 font-['Archivo'] text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.02] tracking-[-0.025em] text-[#07131F]">
            WE DO NOT GUESS.
            <br />
            WE MEASURE.
          </h2>

          <p className="mt-6 text-[#07131F]/70">
            Qualified engineers, independent commissioning professionals and
            state-of-the-art calibrated instrumentation, with accurate recording
            of all results, in accordance with method statements and
            installation checklists.
          </p>

          {/* Measurements */}
          <ul className="mt-8 grid grid-cols-2 gap-px bg-[#E5E7E9]">
            {measurements.map((measurement) => (
              <li
                key={measurement}
                className="bg-[#F4F6F7] px-3 py-4 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#07131F]/70"
              >
                {measurement}
              </li>
            ))}
          </ul>
        </div>

        {/* Right content */}
        <div
          data-aos="fade-up"
          data-aos-delay="120"
          data-aos-once="true"
          className="lg:col-span-8"
        >
          <div className="relative">
            <img
              src="https://theebc-eg.com/wp-content/uploads/2020/10/IMG_6072-768x512.jpg"
              alt="EBC engineers performing on-site measurement and testing"
              loading="lazy"
              className="aspect-[16/11] w-full object-cover"
            />

            {/* Engineering grid */}
            <div
              className="absolute inset-0 opacity-25 mix-blend-multiply"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #E5E7E9 1px, transparent 1px),
                  linear-gradient(to bottom, #E5E7E9 1px, transparent 1px)
                `,
                backgroundSize: "72px 72px",
              }}
            />

            <span className="absolute left-5 top-5 bg-[#07131F]/85 px-3 py-2 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-white/80">
              INSTRUMENTATION / CALIBRATED
            </span>

            <span className="absolute bottom-5 right-5 border border-white/40 bg-[#07131F]/70 px-3 py-2 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-white/80">
              FIELD MEASUREMENT · RECORDED
            </span>
          </div>

          {/* Expertise cards */}
          <div className="mt-5 grid gap-px bg-[#E5E7E9] sm:grid-cols-3">
            {expertise.map((item) => (
              <div key={item.k} className="bg-[#F4F6F7] p-6">
                <p className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#E53935]">
                  {item.k}
                </p>

                <p className="mt-2 text-sm text-[#07131F]/70">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
