import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center bg-[#06131e] pt-[74px] text-white">
        <section className="relative w-full overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 opacity-30">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                `,
                backgroundSize: "64px 64px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#EF3E37]">
              Error 404
            </span>
            <h1 className="mt-5 max-w-4xl text-[clamp(3.5rem,10vw,9rem)] font-bold uppercase leading-[0.82] tracking-[-0.06em]">
              Page not found.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
              The page you are looking for does not exist or may have moved.
            </p>
            <Link
              to="/"
              className="mt-10 inline-flex bg-[#EF3E37] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#C92F2B]"
            >
              Return home
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
