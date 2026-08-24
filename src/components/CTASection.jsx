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

            <span className="font-['IBM_Plex_Sans'] text-xs font-medium uppercase tracking-[0.12em] text-[#ef3e37]">
              Next Step
            </span>
          </div>

          <h2 className="mt-6 font-['Archivo'] text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-6xl">
            YOUR BUILDING IS BUILT.
            <br />
            NOW MAKE SURE IT PERFORMS.
          </h2>

          <p className="mt-6 max-w-xl font-['IBM_Plex_Sans'] text-lg leading-7 text-[#111111]/70">
            Talk to EBC-International about testing, commissioning and verification for your next
            project.
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
            src="https://theebc-eg.com/wp-content/uploads/2023/01/Ministries-15-16-A-768x354.jpg"
            alt="Completed facility commissioned by EBC-International"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <span className="absolute bottom-5 left-5 bg-[#111111]/80 px-3 py-2 font-['IBM_Plex_Sans'] text-xs font-medium uppercase tracking-[0.12em] text-white/80">
            EBC / VERIFIED PERFORMANCE
          </span>
        </div>

      </div>
    </section>
  );
}