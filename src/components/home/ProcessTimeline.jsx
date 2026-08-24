const PROCESS = [
  {
    no: "01",
    phase: "DESIGN PHASE",
    text: "Review of design drawings and specifications for commissioning requirements, commissionability reviews, and advice on facilities and devices required for systems to be fully commissioned.",
  },
  {
    no: "02",
    phase: "CONSTRUCTION PHASE",
    text: "Review and supervision of the installation with respect to specifications and OPR, preparation of the commissioning schedule, and coordination workshops for communication and conflict resolution.",
  },
  {
    no: "03",
    phase: "TESTING & COMMISSIONING",
    text: "Certifying readiness of systems, subsystems, equipment and controls for testing; monitoring and witnessing progressive installation and pre-commissioning with accurate recording of all results.",
  },
  {
    no: "04",
    phase: "PERFORMANCE VERIFICATION",
    text: "Witnessing Functional Performance Tests for all systems and components — operating modes, interlocks, control responses, responses to abnormal or emergency conditions, and MEP interfaces.",
  },
  {
    no: "05",
    phase: "DOCUMENTATION & POST-OCCUPANCY",
    text: "Monitoring and advising on preparation of O&Ms, commissioning documentation, test data, inspection reports and certificates; seasonal testing and post-occupancy review.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-[#F4F6F7] py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10 xl:px-14">
        {/* Header */}
        <div data-aos="fade-up" data-aos-once="true" className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#E53935]" />

            <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#E53935]">
              05 / How EBC Works
            </span>
          </div>

          <h2 className="mt-6 font-['Archivo'] text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.025em] text-[#2F3640]">
            THE COMMISSIONING SEQUENCE.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Desktop horizontal line */}
          <span className="absolute left-0 top-[10px] hidden h-[2px] w-full bg-[#E6E7E8] lg:block" />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {PROCESS.map((process, index) => (
              <li
                key={process.no}
                data-aos="fade-up"
                data-aos-delay={index * 110}
                data-aos-once="true"
                className="relative border-l-2 border-[#E6E7E8] pl-6 lg:border-l-0 lg:pt-8 lg:pl-0"
              >
                {/* Timeline dot */}
                <span className="absolute left-[-7px] top-0 block h-3 w-3 bg-[#E53935] lg:left-0 lg:top-[4px]" />

                {/* Number */}
                <span className="block font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#A4A9AE]">
                  {process.no}
                </span>

                {/* Phase */}
                <h3 className="mt-2 font-['Archivo'] text-base font-bold leading-tight tracking-[-0.025em] text-[#2F3640]">
                  {process.phase}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-[#2F3640]/65 lg:pr-6">
                  {process.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
