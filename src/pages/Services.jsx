import { useState } from "react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
export default function Services() {
  const [open, setOpen] = useState(0);

  const services = [
  {
    no: "01",
    slug: "mep-commissioning",
    title: "Whole Building MEP Commissioning Management",
    body: [
      "EBC-International provides independent, end-to-end MEP Commissioning Management to ensure building systems are safely delivered, tested, commissioned, and verified in accordance with design requirements and performance objectives.",
      "Our commissioning team manages the transition from static completion to full operational performance, including system testing, setting to work, regulation, adjustment, functional verification, and fine-tuning. Commissionability reviews assess equipment access and spacing, testing and commissioning provisions, controls, system interfaces, maintainability, and other critical operational requirements.",
      "EBC-International also provides independent Commissioning Verification and Witnessing Services to owners, developers, contractors, consultants, project managers, and building end users. Comprehensive commissioning test sheets, checklists, and certificates provide clear and traceable records of testing, verification, witnessing, and sign-off.",
    ],
    points: [
      "Commissionability reviews of designs and installations",
      "Equipment access, spacing, testing and commissioning provisions",
      "Controls, system interfaces, and maintainability reviews",
      "Independent commissioning verification and witnessing",
      "Functional verification, regulation, adjustment, and fine-tuning",
      "Commissioning test sheets, checklists, and certificates",
    ],
    image:
      "https://theebc-eg.com/wp-content/uploads/2023/01/City-of-Science-Technology-768x599.jpg",
  },

  {
    no: "02",
    slug: "testing-and-balancing",
    title: "Testing and Balancing",
    body: [
      "EBC-International provides comprehensive Testing, Adjusting and Balancing (TAB) services as a critical component of successful HVAC commissioning. Our qualified engineers test, adjust, and balance HVAC systems to achieve the required design performance while meeting the operational requirements of the building owner.",
      "All works are carried out in accordance with recognized NEBB, AABC, and ASHRAE standards and industry practices. Our TAB engineers work closely with installation contractors to identify installation deficiencies, performance issues, and potential commissioning constraints at an early stage.",
      "All testing and balancing activities are performed using calibrated instruments appropriate for the system and measurements being undertaken. Instrument details and valid calibration certificates are recorded within the commissioning documentation, providing accurate, traceable, and verifiable test results.",
    ],
    points: [
      "Testing, adjusting, and balancing of HVAC systems",
      "Verification of required design performance",
      "Compliance with building owner operational requirements",
      "Identification of installation deficiencies and performance issues",
      "Use of calibrated instruments appropriate for testing",
      "Accurate, traceable, and verifiable test reporting",
    ],
    image:
      "https://theebc-eg.com/wp-content/uploads/2020/10/IMG_6072-768x512.jpg",
  },

  {
    no: "03",
    slug: "electrical-testing",
    title: "Electrical Testing",
    body: [
      "EBC-International provides comprehensive Electrical Testing and Verification Services to ensure electrical installations remain safe, reliable, and compliant with applicable standards and client requirements.",
      "Our qualified electrical engineers and technicians support clients, contractors, designers, project managers, and building operators across a wide range of electrical testing and commissioning activities, including protection, control, and distribution systems.",
      "Testing is carried out by qualified personnel using appropriate calibrated equipment and in accordance with relevant DEWA, ADDC, IEC, IEEE, BS, and IEE Wiring Regulations, as applicable to the project.",
    ],
    points: [
      "Protection relays and control circuits",
      "End-to-end and functional testing",
      "LV cables and electrical distribution systems",
      "Transformers, busbars, CTs and VTs",
      "Circuit breakers, disconnectors, and earth switches",
      "Busbar and transformer protection schemes",
      "Load shedding and metering panels",
      "MCBs, MCCBs, auxiliary relays, and digital meters",
      "Cable continuity, insulation resistance, and Hi-Pot testing",
      "Protection and control schematic verification and functional testing",
    ],
    image:
      "https://theebc-eg.com/wp-content/uploads/2020/09/1517722d-c046-46b7-8ba7-7aa8c1ce0b5e-768x576.jpg",
  },

  {
    no: "04",
    slug: "cleanroom-validation",
    title: "Cleanroom Validation",
    body: [
      "EBC-International provides comprehensive testing, validation, and qualification services for cleanrooms, clean zones, and positive or negative pressure containment areas.",
      "Our experienced team delivers validation programs in accordance with applicable standards, including ISO 14644 and EU GMP Annex 1, as well as specific client requirements and approved in-house procedures.",
      "We specialize in developing Validation Master Plans (VMPs) and customized validation documentation aligned with Good Manufacturing Practice (GMP) requirements, subject to client approval. Our services provide documented evidence that controlled environments consistently achieve the required air quality, pressure, airflow, and environmental conditions.",
    ],
    points: [
      "Airflow and air volume testing, including air change rate calculations",
      "Room pressure differential testing",
      "Installed filter leakage testing",
      "Airborne particle counting",
      "Airflow visualization and direction testing",
      "Room recovery testing",
      "Temperature and humidity measurement",
      "Sound and lighting level testing",
    ],
    image:
      "https://theebc-eg.com/wp-content/uploads/2020/08/20140122_101704-768x576.jpg",
  },

  {
    no: "05",
    slug: "retro-commissioning",
    title: "Retro-Commissioning",
    body: [
      "The goal of retro-commissioning is to identify operational issues and provide solutions to bring equipment back into performance standards. The result is a system that performs optimally, extended life of the equipment, lower maintenance cost, and reduced energy usage.",
      "For owners, this means a cost saving due to lower overhead operational costs. Existing building commissioning is an easy way for a building owner or operator to identify opportunities for improving the energy performance of their facilities.",
    ],
    points: [
      "Monitoring of existing MEP system operation",
      "Identification of operational issues",
      "Corrective solutions to restore performance standards",
      "Extended equipment life and lower maintenance cost",
      "Reduced energy usage",
    ],
    image:
      "https://theebc-eg.com/wp-content/uploads/2021/05/PHOTO-2019-12-31-11-46-19-768x576.jpg",
  },

  {
    no: "06",
    slug: "re-commissioning",
    title: "Re-Commissioning",
    body: [
      "Essentially, it is a systems check-up to ensure they continue to perform as designed. Re-commissioning a building every three to five years is ideal for optimal systems performance, and has proved to save energy and maintenance cost.",
      "The EBC commissioning team conducts collaborative peer reviews so the project team can get clarification and a full understanding of review comments. We work closely with the owner's representative, facility operations managers, the design team and the general contractor.",
    ],
    points: [
      "Systems check-up against design intent",
      "Applies to new buildings and buildings after MEP renovations",
      "Collaborative peer review with the project team",
      "Energy and maintenance cost savings",
    ],
    image:
      "https://theebc-eg.com/wp-content/uploads/2023/01/Kattamya-mall-768x432.jpg",
  },

  {
    no: "07",
    slug: "leed-accreditation",
    title: "LEED Commissioning & Accreditation Services",
    body: [
      "EBC-International provides independent Fundamental and Enhanced MEP Commissioning Services as a third-party commissioning provider, supporting projects pursuing LEED certification.",
      "Our commissioning process helps verify that building systems are designed, installed, tested, and operated in accordance with the Owner's Project Requirements (OPR) and the project's performance objectives.",
      "Effective commissioning helps identify system deficiencies, optimize equipment operation, improve energy efficiency, and support long-term operational performance. We work closely with owners, consultants, contractors, and project teams to ensure commissioning requirements are properly coordinated, documented, and verified throughout the project lifecycle.",
      "EBC-International provides the required commissioning activities and documentation to support applicable LEED commissioning credits, including Fundamental and Enhanced Commissioning requirements.",
    ],
    points: [
      "Independent third-party commissioning provider",
      "Fundamental and Enhanced MEP Commissioning",
      "Verification against Owner's Project Requirements (OPR)",
      "Identification of system deficiencies and optimization opportunities",
      "Energy efficiency and long-term building performance",
      "Commissioning activities and documentation for LEED credits",
    ],
    image:
      "https://theebc-eg.com/wp-content/uploads/2023/01/AUC-768x512.webp",
  },
];

  const process = [
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

  const scrollToService = (index) => {
    setOpen(index);

    setTimeout(() => {
      const element = document.getElementById(
        `service-${services[index].slug}`,
      );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          label="02 / Services"
          meta="EBC / TECHNICAL SERVICE EXPLORER"
          title={
            <>
              SEVEN DISCIPLINES.
              <br />
              ONE OBJECTIVE: <br />
              VERIFIED PERFORMANCE.
            </>
          }
          intro="EBC supports clients, contractors, designers, project managers and end users across the full commissioning lifecycle — from design review to post-occupancy seasonal testing."
          image="https://theebc-eg.com/wp-content/uploads/2020/10/IMG_6072-768x512.jpg"
        />

        {/* Index strip */}
        <section className="border-b border-[oklch(0.9_0.005_240)] bg-[oklch(0.9719_0.0025_228.78)]">
          <div className="mx-auto flex w-full max-w-[88rem] flex-wrap gap-x-8 gap-y-3 px-5 py-6 md:px-10 xl:px-14">
            {services.map((service, index) => (
              <button
                key={service.slug}
                type="button"
                onClick={() => scrollToService(index)}
                className={`font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] transition-colors ${
                  open === index
                    ? "text-[oklch(0.6083_0.209_27.03)]"
                    : "text-[oklch(0.1823_0.0305_249.25)]/50 hover:text-[oklch(0.1823_0.0305_249.25)]"
                }`}
              >
                {service.no} / {service.title.split(" ").slice(0, 3).join(" ")}
              </button>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10 xl:px-14">
            <ul className="border-t border-[oklch(0.9_0.005_240)]">
              {services.map((service, index) => {
                const isOpen = open === index;

                return (
                  <li
                    key={service.slug}
                    id={`service-${service.slug}`}
                    className="scroll-mt-24 border-b border-[oklch(0.9_0.005_240)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center gap-6 py-7 text-left"
                    >
                      <span
                        className={`w-8 shrink-0 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] ${
                          isOpen
                            ? "text-[oklch(0.6083_0.209_27.03)]"
                            : "text-[oklch(0.6664_0.0192_240.14)]"
                        }`}
                      >
                        {service.no}
                      </span>

                      <span
                        className={`flex-1 font-['Archivo'] text-xl font-bold leading-tight tracking-[-0.02em] transition-colors lg:text-3xl ${
                          isOpen
                            ? "text-[oklch(0.1823_0.0305_249.25)]"
                            : "text-[oklch(0.1823_0.0305_249.25)]/70 group-hover:text-[oklch(0.1823_0.0305_249.25)]"
                        }`}
                      >
                        {service.title}
                      </span>

                      <span
                        aria-hidden
                        className={`text-2xl leading-none transition-transform duration-300 ${
                          isOpen
                            ? "rotate-45 text-[oklch(0.6083_0.209_27.03)]"
                            : "text-[oklch(0.6664_0.0192_240.14)]"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        data-aos="fade-up"
                        data-aos-duration="600"
                        className="grid gap-10 pb-12 lg:grid-cols-12"
                      >
                        <div className="lg:col-span-7 lg:pl-14">
                          {service.body.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="mb-4 font-['IBM_Plex_Sans'] text-base leading-[1.65] text-[oklch(0.1823_0.0305_249.25)]/70"
                            >
                              {paragraph}
                            </p>
                          ))}

                          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                            {service.points.map((point) => (
                              <li
                                key={point}
                                className="flex gap-3 font-['IBM_Plex_Sans'] text-sm text-[oklch(0.1823_0.0305_249.25)]/75"
                              >
                                <span className="mt-2 block h-[6px] w-[6px] shrink-0 bg-[oklch(0.6083_0.209_27.03)]" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="lg:col-span-5">
                          <img
                            src={service.image}
                            alt={service.title}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Scope of Work */}
        <section className="relative overflow-hidden bg-[oklch(0.1823_0.0305_249.25)] text-white">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, oklch(1 0 0 / 6%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 6%) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="relative mx-auto w-full max-w-[88rem] px-5 py-20 md:px-10 lg:py-28 xl:px-14">
            <div data-aos="fade-up" data-aos-once="true" className="max-w-4xl">
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[oklch(0.6083_0.209_27.03)]">
                Our Scope of Work
              </span>

              <h2 className="mt-5 font-['Archivo'] text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.025em]">
                INDEPENDENT COMMISSIONING MANAGERS, ENGINEERS AND TECHNICIANS.
              </h2>

              <p className="mt-6 font-['IBM_Plex_Sans'] text-base leading-[1.65] text-white/70">
                EBC integrates into project teams to deliver safe building
                services and systems across every phase of delivery.
              </p>
            </div>

            <ol className="mt-14 grid gap-px bg-white/10 lg:grid-cols-5">
              {process.map((item, index) => (
                <li
                  key={item.no}
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay={index * 100}
                  className="bg-[oklch(0.1823_0.0305_249.25)] p-6"
                >
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[oklch(0.6664_0.0192_240.14)]">
                    {item.no}
                  </span>

                  <h3 className="mt-3 font-['Archivo'] text-base font-bold leading-[1.02] tracking-[-0.02em]">
                    {item.phase}
                  </h3>

                  <p className="mt-3 font-['IBM_Plex_Sans'] text-sm leading-[1.65] text-white/60">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <CTASection />
      </main>

      <SiteFooter />
    </>
  );
}
