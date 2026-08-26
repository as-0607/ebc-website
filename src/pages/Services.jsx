import { useState } from "react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { SERVICES } from "../data/ebc";
import { process } from "../data/ebc";
export default function Services() {
  const [open, setOpen] = useState(0);

  const scrollToService = (index) => {
    setOpen(index);

    setTimeout(() => {
      const element = document.getElementById(
        `service-${SERVICES[index].slug}`,
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
            {SERVICES.map((service, index) => (
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
              {SERVICES.map((service, index) => {
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
