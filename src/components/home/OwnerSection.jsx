
export default function OwnerSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[88rem] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-20 xl:px-14">
        {/* Image */}
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="lg:col-span-6"
        >
          <div className="relative">
            <img
              src="https://theebc-eg.com/wp-content/uploads/2023/01/AUC-768x512.webp"
              alt="Complex building served by EBC-International"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />

            <div className="absolute -right-4 bottom-8 hidden bg-[#06131e] px-6 py-5 text-white md:block lg:-right-10">
              <p className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#A4A9AE]">
                Status
              </p>

              <p className="mt-1 font-['Archivo'] text-2xl font-bold">
                PHYSICALLY COMPLETE
              </p>

              <p className="mt-2 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#E53935]">
                PERFORMANCE — NOT YET VERIFIED
              </p>
            </div>

            <span className="absolute left-5 top-5 bg-white/90 px-3 py-2 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#2F3640]/70">
              EBC / OWNER PERSPECTIVE
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-6">
          <div data-aos="fade-up" data-aos-once="true">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#E53935]" />

              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#E53935]">
                02 / The Problem
              </span>
            </div>

            <h2 className="mt-6 font-['Archivo'] text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.025em] ">
              YOUR BUILDING IS COMPLEX.
              <br />
              YOUR PERFORMANCE
              <br />
              SHOULD NOT BE UNCERTAIN.
            </h2>

            <p className="mt-6 max-w-xl text-lg text-black/70">
              A building can be physically complete without its MEP systems
              performing to the owner&apos;s requirements. EBC independently
              reviews design and installation, witnesses testing, verifies
              actual measurements, and documents the result.
            </p>
          </div>

          {/* Verification chain */}
          <div
            data-aos="fade-up"
            data-aos-delay="120"
            data-aos-once="true"
            className="mt-10 border-t border-[#E6E7E8] pt-8"
          >
            <p className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#A4A9AE]">
              The verification chain
            </p>

            <ol className="mt-6 grid grid-cols-2 gap-x-6 sm:grid-cols-4">
              {[
                "DESIGN",
                "INSTALLATION",
                "TEST",
                "ADJUST",
                "COMMISSION",
                "VERIFY",
                "DOCUMENT",
                "PERFORM",
              ].map((step, i) => (
                <li key={step} className="relative py-3 ">
                  <span className="absolute left-0 top-0 h-[2px] w-full bg-[#E6E7E8]" />

                  <span
                    className="absolute left-0 top-0 h-[2px] bg-[#E53935]"
                    style={{
                      width: `${Math.min(((i + 1) / 8) * 100, 100)}%`,
                    }}
                  />

                  <span className="block font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#A4A9AE]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="mt-1 block font-['Archivo'] text-sm font-bold tracking-[-0.025em] text-[#2F3640]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
