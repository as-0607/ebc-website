import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6f6]">
      <div className="mx-auto grid w-full max-w-[1400px] items-stretch gap-0 px-6 lg:grid-cols-12 lg:px-10">
        {/* Content */}
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="py-20 lg:col-span-7 lg:py-28 lg:pr-16"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#ef3e37]" />

            <span className="font-['IBM_Plex_Sans'] text-[0.85rem] font-medium uppercase tracking-[0.12em] text-[#ef3e37]">
              BUILT OVER TIME
            </span>
          </div>

          <h2 className="mt-6 font-['Archivo'] text-[clamp(2rem,4vw,3rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-6xl">
            EXPERIENCE BECOMES EXPERTISE. EXPERTISE BECOMES TRUST.
          </h2>

          <p className="mt-6 max-w-xl font-['IBM_Plex_Sans'] text-lg leading-7 text-[#111111]/70">
            Our growth has been shaped by the projects we have delivered, the
            people we have worked with, and the standards we continue to uphold
            across the Middle East. That experience continues to shape how we
            approach every project—bringing clarity, discipline and confidence
            to the commissioning process.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#ef3e37] px-7 py-4 font-['IBM_Plex_Sans'] text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#d8322c]"
            >
              Talk to our engineering team
              <span aria-hidden>→</span>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-3 border border-[#111111]/25 px-7 py-4 font-['IBM_Plex_Sans'] text-xs font-semibold uppercase tracking-[0.12em] text-[#111111] transition-colors duration-300 hover:border-[#111111] hover:bg-white"
            >
              View our services
            </Link>
          </div>
        </div>

        {/* Image */}
        <div
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="150"
          className="relative min-h-[280px] lg:col-span-5"
        >
          <img
            src={`${import.meta.env.BASE_URL}/images/CTA.jpeg`}
            alt="Completed facility commissioned by EBC-International"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />

          
        </div>
      </div>
    </section>
  );
}
