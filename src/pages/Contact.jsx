import { useState } from "react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import PageHeader from "../components/PageHeader";
const SITE = {
  name: "EBC-International",
  tagline: "Elite Building Commissioning",
  email: "Info@theebc-eg.com",
  telephone: "0226716964",
  mobile: "00201004109006",
  since: "2011",
  countries: "8",
  projectsCount: "87+",
};
const SERVICES = [
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
    image: "https://theebc-eg.com/wp-content/uploads/2023/01/AUC-768x512.webp",
  },
];
const FIELD =
  "w-full border border-[#E2E4E5] bg-white px-4 py-3.5 text-sm text-[#07131F] outline-none transition-colors placeholder:text-[#07131F]/35 focus:border-[#E53935]";
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="06 / Contact"
          meta="CAIRO / EGYPT"
          title="LET'S DISCUSS YOUR PROJECT."
          intro="Send us the project scope, systems involved and target handover date. An EBC commissioning manager will respond with an approach and proposal."
          image="https://theebc-eg.com/wp-content/uploads/2020/08/20140122_101704-768x576.jpg"
        />

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid w-full max-w-[88rem] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-20 xl:px-14">
            {/* Contact Form */}
            <div
              className="lg:col-span-7"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#E53935]">
                Project Enquiry
              </span>

              <h2 className="mt-4 font-['Archivo'] text-2xl font-extrabold tracking-tight text-[#07131F]">
                REQUEST A PROPOSAL
              </h2>

              <form
                className="mt-8 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                {/* Full Name */}
                <label className="block">
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Full name
                  </span>

                  <input
                    required
                    name="name"
                    className={`${FIELD} mt-2`}
                    placeholder="Your name"
                  />
                </label>

                {/* Company */}
                <label className="block">
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Company
                  </span>

                  <input
                    name="company"
                    className={`${FIELD} mt-2`}
                    placeholder="Organisation"
                  />
                </label>

                {/* Email */}
                <label className="block">
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Email
                  </span>

                  <input
                    required
                    type="email"
                    name="email"
                    className={`${FIELD} mt-2`}
                    placeholder="name@company.com"
                  />
                </label>

                {/* Phone */}
                <label className="block">
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Phone
                  </span>

                  <input
                    name="phone"
                    className={`${FIELD} mt-2`}
                    placeholder="+20 …"
                  />
                </label>

                {/* Service */}
                <label className="block sm:col-span-2">
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Service required
                  </span>

                  <select
                    name="service"
                    className={`${FIELD} mt-2`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </label>

                {/* Project Details */}
                <label className="block sm:col-span-2">
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Project details
                  </span>

                  <textarea
                    required
                    name="message"
                    rows={5}
                    className={`${FIELD} mt-2 resize-none`}
                    placeholder="Building type, systems, area, programme and handover date."
                  />
                </label>

                {/* Submit */}
                <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                  <button
                    type="submit"
                    className="font-['IBM_Plex_Sans'] bg-[#E53935] px-8 py-4 text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-white transition-colors hover:bg-[#C9322E]"
                  >
                    Send enquiry →
                  </button>

                  {sent && (
                    <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#07131F]/60">
                      Thank you — we&apos;ll be in touch shortly.
                    </span>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div
              className="lg:col-span-5"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <div className="bg-[#07131F] p-8 text-white">
                <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#E53935]">
                  Head Office
                </span>

                <p className="mt-5 text-white/80">Cairo, Egypt</p>

                <dl className="mt-8 space-y-4 border-t border-white/10 pt-6">
                  {/* Phone */}
                  <div>
                    <dt className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                      Phone
                    </dt>

                    <dd className="mt-1">
                      <a
                        href={`tel:${SITE.telephone}`}
                        className="block transition-colors hover:text-[#E53935]"
                      >
                        {SITE.telephone}
                      </a>

                      <a
                        href={`tel:${SITE.mobile}`}
                        className="block transition-colors hover:text-[#E53935]"
                      >
                        {SITE.mobile}
                      </a>
                    </dd>
                  </div>

                  {/* Email */}
                  <div>
                    <dt className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                      Email
                    </dt>

                    <dd className="mt-1">
                      <a
                        href={`mailto:${SITE.email}`}
                        className="transition-colors hover:text-[#E53935]"
                      >
                        {SITE.email}
                      </a>
                    </dd>
                  </div>

                  {/* Working Hours */}
                  <div>
                    <dt className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                      Working hours
                    </dt>

                    <dd className="mt-1 text-white/80">
                      Sunday – Thursday, 09:00 – 17:00 EET
                    </dd>
                  </div>
                </dl>
              </div>

              <img
                src="https://theebc-eg.com/wp-content/uploads/2020/10/IMG_6072-768x512.jpg"
                alt="EBC commissioning engineers on site"
                loading="lazy"
                className="mt-6 aspect-[4/3] w-full object-cover"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="700"
                data-aos-easing="ease-out"
                data-aos-once="true"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
