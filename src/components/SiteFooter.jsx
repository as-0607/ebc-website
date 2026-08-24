import { Link } from "react-router-dom";
const STANDARDS = [
  { code: "NEBB", note: "Certified TAB and commissioning provider" },
  { code: "ASHRAE", note: "Codes of practice for HVAC testing and balancing" },
  { code: "AABC", note: "Codes of practice for testing, adjusting and balancing" },
  { code: "ISO EN 14644", note: "Cleanroom testing and classification" },
  { code: "EU GMP ANNEX 1", note: "Cleanroom validation for sterile manufacture" },
  { code: "LEED", note: "Fundamental and enhanced commissioning as third-party CxA" },
  { code: "IEE 17th EDITION", note: "Electrical wiring and installation testing" },
  { code: "DEWA / ADDC", note: "Electrical testing codes of practice" },
];

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

export default function SiteFooter() {
  return (
    <footer className="bg-[#06131e] text-white">
      {/* Main Footer */}
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 border-b border-white/10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-14 lg:py-20">

        {/* Company */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="block h-8 w-[3px] bg-[#ef3e37]" />

            <span className="font-['Archivo'] text-2xl font-extrabold tracking-[-0.02em]">
              EBC-International
            </span>
          </div>

          <p className="mt-3 font-['IBM_Plex_Sans'] text-xs font-medium uppercase tracking-[0.12em] text-white/50">
            {SITE.tagline}
          </p>

          <p className="mt-6 max-w-md font-['IBM_Plex_Sans'] text-sm leading-6 text-white/70">
            A NEBB certified TAB and commissioning provider serving the Egyptian market and the
            MENA region, with a portfolio of projects stretching over 8 countries and of various
            scales.
          </p>

          {/* Standards */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {STANDARDS.slice(0, 5).map((s) => (
              <span
                key={s.code}
                className="font-['IBM_Plex_Sans'] text-xs font-medium uppercase tracking-[0.12em] text-white/45"
              >
                {s.code}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-['IBM_Plex_Sans'] text-xs font-semibold uppercase tracking-[0.12em] text-[#ef3e37]">
            Navigate
          </p>

          <ul className="mt-5 space-y-3 font-['IBM_Plex_Sans'] text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/expertise", label: "Expertise & Instruments" },
              { to: "/global-presence", label: "Global Presence" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-['IBM_Plex_Sans'] text-xs font-semibold uppercase tracking-[0.12em] text-[#ef3e37]">
            Contact
          </p>

          <ul className="mt-5 space-y-4 font-['IBM_Plex_Sans'] text-sm text-white/70">

            {/* Email */}
            <li>
              <span className="block font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.12em] text-white/40">
                Email
              </span>

              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors duration-300 hover:text-white"
              >
                {SITE.email}
              </a>
            </li>

            {/* Telephone */}
            <li>
              <span className="block font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.12em] text-white/40">
                Telephone
              </span>

              <a
                href={`tel:${SITE.telephone}`}
                className="transition-colors duration-300 hover:text-white"
              >
                {SITE.telephone}
              </a>
            </li>

            {/* Mobile */}
            <li>
              <span className="block font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.12em] text-white/40">
                Mobile
              </span>

              <a
                href={`tel:${SITE.mobile}`}
                className="transition-colors duration-300 hover:text-white"
              >
                {SITE.mobile}
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">

        <p className="font-['IBM_Plex_Sans'] text-xs font-medium uppercase tracking-[0.12em] text-white/40">
          © {new Date().getFullYear()} EBC-International
        </p>

        <p className="font-['IBM_Plex_Sans'] text-xs font-medium uppercase tracking-[0.12em] text-white/40">
          Measure. Verify. Perform.
        </p>

      </div>
    </footer>
  );
}