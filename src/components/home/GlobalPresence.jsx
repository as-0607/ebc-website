import {COUNTRIES} from "../../data/ebc";
import { Link } from "react-router-dom";

const MARKERS = {
  Egypt: { x: 47, y: 55 },
  Qatar: { x: 62, y: 55 },
  "United Arab Emirates": { x: 67, y: 57 },
  "Saudi Arabia": { x: 58, y: 60 },
  KSA: { x: 58, y: 60 },
  Sudan: { x: 47, y: 70 },
  Djibouti: { x: 55, y: 78 },
  Italy: { x: 33, y: 28 },
};

export default function GlobalPresence() {
  return (
    <section
      className="relative overflow-hidden py-20 text-white lg:py-28"
      style={{
        backgroundColor: "oklch(0.2485 0.0395 245.71)",
      }}
    >
      {/* Engineering grid */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              oklch(1 0 0 / 6%) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              oklch(1 0 0 / 6%) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[88rem] gap-14 px-5 lg:grid-cols-12 lg:gap-20 lg:py-0 md:px-10 xl:px-14">
        {/* LEFT */}
        <div data-aos="fade-up" className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <span
              className="h-px w-12"
              style={{
                backgroundColor: "oklch(0.6083 0.209 27.03)",
              }}
            />

            <span
              className="uppercase"
              style={{
                color: "oklch(0.6083 0.209 27.03)",
                fontFamily:
                  '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif',
                fontSize: "0.6875rem",
                letterSpacing: "0.22em",
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              06 / Global Presence
            </span>
          </div>

          <h2
            className="mt-6"
            style={{
              fontFamily: '"Archivo", ui-sans-serif, system-ui, sans-serif',
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.02,
              fontSize: "clamp(2rem, 4.2vw, 4rem)",
              textWrap: "balance",
            }}
          >
            LOCAL ROOTS.
            <br />
            INTERNATIONAL REACH.
          </h2>

          <p
            className="mt-6 max-w-xl"
            style={{
              color: "rgb(255 255 255 / 70%)",
            }}
          >
            From local beginnings in 2011 to a portfolio stretching over 8
            countries, EBC provides services to projects in Doha, Dubai, Sudan,
            Djibouti, Saudi Arabia and Italy.
          </p>

          <Link
            to="/global-presence"
            className="mt-8 inline-flex items-center gap-3 border-b-2 pb-2 uppercase transition-colors hover:text-red-500"
            style={{
              fontFamily:
                '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif',
              fontSize: "0.6875rem",
              letterSpacing: "0.22em",
              fontWeight: 500,
              lineHeight: 1.2,
              borderColor: "oklch(0.6083 0.209 27.03)",
            }}
          >
            Explore our reach
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* RIGHT */}
        <div data-aos="fade-up" data-aos-delay="120" className="lg:col-span-7">
          {/* Map */}
          <div
            className="relative aspect-[4/3] w-full border"
            style={{
              borderColor: "oklch(1 0 0 / 12%)",
              backgroundColor: "rgb(7 19 31 / 40%)",
            }}
          >
            {/* Map grid */}
            <div
              className="absolute inset-0 opacity-80"
              style={{
                backgroundImage: `
                  linear-gradient(
                    to right,
                    oklch(1 0 0 / 6%) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    to bottom,
                    oklch(1 0 0 / 6%) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "72px 72px",
              }}
            />

            <span
              className="absolute top-4 left-4 uppercase"
              style={{
                color: "rgb(255 255 255 / 35%)",
                fontFamily:
                  '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif',
                fontSize: "0.6875rem",
                letterSpacing: "0.22em",
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              MENA + MEDITERRANEAN / SERVICE COVERAGE
            </span>

            {COUNTRIES.map((country, index) => {
              const marker = MARKERS[country.name];

              if (!marker) {
                return null;
              }

              return (
                <div
                  key={country.name}
                  className="group absolute"
                  style={{
                    left: `${marker.x}%`,
                    top: `${marker.y}%`,
                  }}
                >
                  <span
                    className="relative block h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      backgroundColor: "oklch(0.6083 0.209 27.03)",
                    }}
                  >
                    <span
                      className="absolute inset-0 animate-ping"
                      style={{
                        backgroundColor: "rgb(229 57 53 / 60%)",
                        animationDelay: `${index * 400}ms`,
                        animationDuration: "3s",
                      }}
                    />
                  </span>

                  <span
                    className="absolute top-3 left-2 whitespace-nowrap transition-colors group-hover:text-white"
                    style={{
                      color: "rgb(255 255 255 / 70%)",
                      fontFamily:
                        '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif',
                      fontSize: "0.6875rem",
                      letterSpacing: "0.22em",
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    {country.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Countries */}
          <ul
            className="mt-6 grid gap-px sm:grid-cols-3"
            style={{
              backgroundColor: "rgb(255 255 255 / 10%)",
            }}
          >
            {COUNTRIES.map((country, index) => (
              <li
                key={country.name}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className="px-4 py-4"
                style={{
                  backgroundColor: "oklch(0.2485 0.0395 245.71)",
                }}
              >
                <p
                  className="tracking-tight"
                  style={{
                    fontFamily:
                      '"Archivo", ui-sans-serif, system-ui, sans-serif',
                    fontSize: "0.875rem",
                    fontWeight: 700,
                  }}
                >
                  {country.name}
                </p>

                {country.note && (
                  <p
                    className="mt-1 uppercase"
                    style={{
                      color: "oklch(0.6664 0.0192 240.14)",
                      fontFamily:
                        '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif',
                      fontSize: "0.6875rem",
                      letterSpacing: "0.22em",
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    {country.note}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
