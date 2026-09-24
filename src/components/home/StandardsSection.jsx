import {STANDARDS} from "../../data/ebc";

export default function StandardsSection() {
  return (
    <section className=" py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Heading */}
        <div data-aos="fade-up" data-aos-once="true" className="lg:col-span-4">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#ef3e37]" />

            <span className="font-['IBM_Plex_Sans'] text-[0.85rem] font-medium uppercase tracking-[0.12em] text-[#ef3e37]">
              Standards
            </span>
          </div>

          <h2 className="mt-6 font-['Archivo'] text-[clamp(2rem,4vw,3rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-6xl">
            STANDARDS
            <br />
            THAT DEFINE
            <br />
            OUR WORK.
          </h2>
        </div>

        {/* Standards */}
        <div className="grid gap-px bg-[#d9d9d6] sm:grid-cols-2 lg:col-span-8">
          {STANDARDS.map((s, i) => (
            <div
              key={s.code}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={i * 50}
              className="group bg-[#f7f7f5] p-7"
            >
              <div className="flex items-baseline justify-between">
                <p className="font-['Archivo'] text-xl font-extrabold tracking-[-0.02em] text-[#111111]">
                  {s.code}
                </p>

                <span className="font-['IBM_Plex_Sans'] text-xs font-medium uppercase tracking-[0.12em] text-[#777777]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <span className="mt-4 block h-[2px] w-8 bg-[#ef3e37] transition-all duration-500 group-hover:w-16" />

              <p className="mt-4 font-['IBM_Plex_Sans'] text-sm leading-6 text-[#111111]/65">
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
