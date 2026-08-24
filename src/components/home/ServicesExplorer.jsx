import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    slug: "mep-commissioning",
    no: "01",
    title: "Whole Building MEP Commissioning Management",
    short:
      "The advancement of an installation from static completion to full working order to the specified requirement.",
    points: [
      "Design drawing and specification review",
      "Installation supervision against specifications and OPR",
      "Preparation of the commissioning schedule",
      "Certifying readiness of systems and controls for testing",
      "Witnessing Functional Performance Tests (FPT)",
      "Commissioning documentation, test data and certificates",
    ],
    image:
      "https://theebc-eg.com/wp-content/uploads/2023/01/City-of-Science-Technology-768x599.jpg",
  },
  {
    slug: "testing-and-balancing",
    no: "02",
    title: "Testing and Balancing",
    short:
      "A total service for testing, adjusting, balancing and commissioning (TAB) of HVAC systems.",
    points: [
      "Measure total airflow on all A/C and exhaust systems",
      "Balance airflow on each supply and exhaust grille",
      "Measure volts, amps, statics, RPM's and temperatures",
      "Balance chilled water systems, pumps, cooling towers and coils",
      "Staircase, lift and lobby pressurization",
      "Sound and vibration measurements",
    ],
    image:
      "https://theebc-eg.com/wp-content/uploads/2020/10/IMG_6072-768x512.jpg",
  },
  {
    slug: "electrical-testing",
    no: "03",
    title: "Electrical Testing",
    short:
      "Ensuring continued integrity and compliance of electric supply and appliances.",
    points: [
      "Pre-commissioning review of protection logic schemes and control circuits",
      "Advanced and simple relay testing, end to end testing",
      "Power transformer and bus-bar stability testing",
      "CT and VT loop and secondary injection testing",
      "LV cables live and cold testing",
      "Circuit breaker, disconnector and earth switch testing",
    ],
    image:
      "https://theebc-eg.com/wp-content/uploads/2020/09/1517722d-c046-46b7-8ba7-7aa8c1ce0b5e-768x576.jpg",
  },
  {
    slug: "cleanroom-validation",
    no: "04",
    title: "Cleanroom Validation",
    short:
      "Testing and validation/qualification of cleanrooms, clean zones and positive or negative containment rooms.",
    points: [
      "Airflow / air volume tests, including air change rate calculations",
      "Room pressure differential tests",
      "Installed filter leakage test",
      "Airborne particle count test",
      "Airflow visualization and direction tests",
      "Room recovery test",
    ],
    image:
      "https://theebc-eg.com/wp-content/uploads/2020/08/20140122_101704-768x576.jpg",
  },
  {
    slug: "retro-commissioning",
    no: "05",
    title: "Retro-Commissioning",
    short:
      "The systematic process of monitoring and adjusting MEP systems within an existing building.",
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
    slug: "re-commissioning",
    no: "06",
    title: "Re-Commissioning",
    short:
      "Checking the performance of a building's systems three to five years after its previous commissioning.",
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
    slug: "leed-accreditation",
    no: "07",
    title: "LEED Accreditation Services",
    short:
      "Enhanced and Fundamental MEP commissioning as a third party for building systems to obtain LEED accreditation.",
    points: [
      "Third-party commissioning authority (CxA)",
      "Design review and commissioning plan development",
      "Final commissioning report",
      "Contractor submittal review",
      "Seasonal testing and post-occupancy review",
    ],
    image: "https://theebc-eg.com/wp-content/uploads/2023/01/AUC-768x512.webp",
  },
];

export default function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const detailsRef = useRef(null);

  const service = SERVICES[active];

  const handleServiceClick = (index) => {
    setActive(index);

    // Only scroll on smaller screens
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10 xl:px-14">
        {/* Header */}
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#E53935]" />

              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#E53935]">
                04 / Services
              </span>
            </div>

            <h2 className="mt-6 font-['Archivo'] text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.025em] text-[#2F3640]">
              A TECHNICAL CATALOGUE
              <br />
              OF VERIFICATION.
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-3 border-b-2 border-[#E53935] pb-2 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#2F3640] transition-colors hover:text-[#E53935]"
          >
            All services
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Services */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
          className="mt-14 grid gap-px border-y border-[#E6E7E8] bg-[#E6E7E8] lg:grid-cols-12"
        >
          {/* Selector */}
          <ul className="bg-white lg:col-span-5">
            {SERVICES.map((serviceItem, index) => (
              <li key={serviceItem.slug}>
                <button
                  type="button"
                  onClick={() => handleServiceClick(index)}
                  className={`group flex w-full items-center gap-5 border-b border-[#E6E7E8] px-1 py-5 text-left transition-colors ${
                    index === active ? "bg-[#F4F6F7]" : "hover:bg-[#F4F6F7]/60"
                  }`}
                >
                  <span
                    className={`w-7 shrink-0 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] ${
                      index === active ? "text-[#E53935]" : "text-[#A4A9AE]"
                    }`}
                  >
                    {serviceItem.no}
                  </span>

                  <span
                    className={`flex-1 font-['Archivo'] text-lg font-semibold leading-tight tracking-[-0.025em] ${
                      index === active ? "text-[#2F3640]" : "text-[#2F3640]/60"
                    }`}
                  >
                    {serviceItem.title}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`transition-transform ${
                      index === active
                        ? "translate-x-0 text-[#E53935]"
                        : "-translate-x-2 text-transparent"
                    }`}
                  >
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Details */}
          <div ref={detailsRef} className="scroll-mt-24 bg-white lg:col-span-7">
            <div key={service.slug} className="animate-in fade-in duration-500">
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />

                <span className="absolute left-0 top-0 bg-[#E53935] px-4 py-2 font-['Archivo'] text-2xl font-extrabold text-white">
                  {service.no}
                </span>
              </div>

              <div className="px-1 py-8 lg:px-10">
                <h3 className="font-['Archivo'] text-[clamp(1.25rem,1.8vw,1.75rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-[#2F3640]">
                  {service.title}
                </h3>

                <p className="mt-4 text-[#2F3640]/70">{service.short}</p>

                <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm text-[#2F3640]/75"
                    >
                      <span className="mt-2 block h-[6px] w-[6px] shrink-0 bg-[#E53935]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
