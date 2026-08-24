export default function WhatEbcDoes() {
  const steps = [
    {
      no: "01",
      title: "INSTALLED SYSTEM",
      description: "Static completion of MEP installation.",
    },
    {
      no: "02",
      title: "TESTING",
      description:
        "Measurement of airflow, pressure, temperature and electrical performance.",
    },
    {
      no: "03",
      title: "ADJUSTMENT",
      description: "Regulation and fine tuning of the system components.",
    },
    {
      no: "04",
      title: "COMMISSIONING",
      description:
        "Setting to work; witnessing Functional Performance Tests.",
    },
    {
      no: "05",
      title: "VERIFICATION",
      description:
        "Verification of actual measurements against design and OPR.",
    },
    {
      no: "06",
      title: "OPERATIONAL CONFIDENCE",
      description:
        "Documented, reliable, safe building performance.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#06131e] text-white">
      {/* Engineering grid */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.06) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[88rem] px-5 py-20 md:px-10 lg:py-28 xl:px-14">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#E53935]" />

              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#E53935]">
                03 / What EBC Does
              </span>
            </div>

            <h2 className="mt-6 font-['Archivo'] text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.025em]">
              FROM STATIC COMPLETION
              <br />
              TO VERIFIED PERFORMANCE.
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            className="lg:col-span-5"
          >
            <p className="text-white/70">
              The advancement of an installation from static completion to
              full working order to the specified requirement, the setting to
              work of an installation, the regulation of the system and the
              fine tuning of the system.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-px border-t border-white/[0.12] sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, index) => (
            <div
              key={step.no}
              data-aos="fade-up"
              data-aos-delay={index * 70}
              data-aos-once="true"
              className="group relative pt-8 pr-6 pb-10"
            >
              {/* Top red line */}
              <span className="absolute left-0 top-0 h-[2px] w-8 bg-[#E53935] transition-all duration-500 group-hover:w-full" />

              {/* Number */}
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#A4A9AE]">
                {step.no}
              </span>

              {/* Title */}
              <h3 className="mt-3 font-['Archivo'] text-base font-bold leading-tight tracking-[-0.025em]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-white/55">
                {step.description}
              </p>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-3 top-[-1px] hidden text-[#E53935]/70 lg:block"
                >
                  ›
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}