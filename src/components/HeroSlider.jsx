import { Link } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { HERO_SLIDES } from "../data/ebc";

const DURATION = 7000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const startTimeRef = useRef(null);
  const animationRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setCurrent(index);
    setProgress(0);
    startTimeRef.current = performance.now();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
    startTimeRef.current = performance.now();
  }, []);

  useEffect(() => {
    startTimeRef.current = performance.now();

    const animate = (time) => {
      const elapsed = time - startTimeRef.current;
      const percentage = elapsed / DURATION;

      if (percentage >= 1) {
        nextSlide();
      } else {
        setProgress(percentage);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [nextSlide]);

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-[#07131F] text-white md:min-h-[82vh]">

      {/* =========================
          BACKGROUND SLIDES
      ========================== */}

      {HERO_SLIDES.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === current
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <img
            src={item.image}
            alt=""
            className={`h-full w-full object-cover transition-transform duration-[9000ms] ease-out ${
              index === current ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* =========================
          LIGHT READABILITY OVERLAY
      ========================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#07131F]/75 via-[#07131F]/35 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07131F]/55 via-transparent to-transparent" />

      {/* Subtle technical grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative mx-auto flex min-h-[78vh] max-w-[1400px] flex-col justify-end px-6 pb-12 pt-28 md:min-h-[82vh] md:px-10 md:pb-14 lg:px-14">

        {/* Technical top information */}

        <div className="mb-auto hidden items-center gap-4 pt-8 md:flex">

          <span className="h-px w-16 bg-[#E53935]" />

          <span className="text-[11px] font-semibold tracking-[0.18em] text-white/70">
            EBC / INDEPENDENT BUILDING COMMISSIONING
          </span>

          <span className="ml-auto text-[11px] font-semibold tracking-[0.18em] text-white/40">
            MEP · TAB · ELECTRICAL · CLEANROOM
          </span>

        </div>

        {/* Main content */}

        <div className="max-w-4xl">

          {/* Label */}

          <p
            key={`label-${current}`}
            className="animate-in fade-in text-xs font-semibold tracking-[0.2em] text-[#E53935] duration-700"
          >
            {slide.label}
          </p>

          {/* Heading */}

          <h1
            key={`title-${current}`}
            className="mt-5 text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em] animate-in fade-in slide-in-from-bottom-4 duration-700 "
          >
            {slide.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Description */}

          <p
            key={`text-${current}`}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 animate-in fade-in duration-1000 md:text-lg"
          >
            {slide.text}
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-3">

            <Link
              to="/services"
              className="group inline-flex items-center gap-3 bg-[#E53935] px-6 py-4 text-xs font-bold tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#C92F2B]"
            >
              EXPLORE OUR SERVICES

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 border border-white/35 px-6 py-4 text-xs font-bold tracking-[0.12em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              VIEW PROJECTS

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>

        {/* =========================
            SLIDER INDICATORS
        ========================== */}

        <div className="mt-12 flex items-end gap-5">

          {/* Number */}

          <div className="shrink-0 text-sm font-semibold tracking-[0.15em]">

            <span className="text-white">
              {String(current + 1).padStart(2, "0")}
            </span>

            <span className="text-white/35">
              {" "}
              / {String(HERO_SLIDES.length).padStart(2, "0")}
            </span>

          </div>

          {/* Progress bars */}

          <div className="flex flex-1 gap-2">

            {HERO_SLIDES.map((item, index) => (

              <button
                key={item.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className="group relative h-[2px] flex-1 overflow-hidden bg-white/25"
              >

                <span
                  className="absolute inset-y-0 left-0 bg-[#E53935]"
                  style={{
                    width:
                      index === current
                        ? `${progress * 100}%`
                        : index < current
                        ? "100%"
                        : "0%",
                  }}
                />

              </button>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}