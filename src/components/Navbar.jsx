import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/expertise", label: "Expertise" },
  { to: "/global-presence", label: "Global Presence" },
  { to: "/contact", label: "Contact US" },
];

export default function Navbar({ overHero = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const solid = scrolled || !overHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        solid
          ? "border-gray-200 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-white/10 bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18.5 w-full max-w-350 items-center justify-between px-6 md:px-10 lg:px-14">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          {/* Red vertical line */}
          <span className="mt-1 h-8 w-0.75 bg-[#E53935]" />

          <div className="leading-none">
            <span
              className={`block text-xl font-extrabold tracking-tight ${
                solid ? "text-[#07131F]" : "text-white"
              }`}
            >
              EBC
            </span>

            <span
              className={` block text-[9px] font-semibold uppercase tracking-[0.18em] ${
                solid ? "text-gray-500" : "text-white/70"
              }`}
            >
              International
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                  isActive
                    ? "text-[#E53935]"
                    : solid
                      ? "text-[#07131F]/70 hover:text-[#E53935]"
                      : "text-white/85 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Let's Talk */}
          <Link
            to="/contact"
            className="hidden bg-[#E53935] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-[#C92F2B] lg:inline-flex"
          >
            Credentials
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.25 lg:hidden ${
              solid ? "text-[#07131F]" : "text-white"
            }`}
          >
            <span
              className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? "translate-y-1.75 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? "-translate-y-1.75 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-2">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-gray-200 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-[#E53935] ${
                    isActive ? "text-[#E53935]" : "text-[#07131F]/75"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mb-4 mt-4 bg-[#E53935] px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#C92F2B]"
            >
              Credentials
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
