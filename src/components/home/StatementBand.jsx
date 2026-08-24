import { useEffect, useRef, useState } from "react";

function useCountUp(target, run, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;

    let animationFrame;
    const start = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - start) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, run, duration]);

  return value;
}

export default function StatementBand() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRun(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = useCountUp(87, run);
  const countries = useCountUp(8, run);
  const year = useCountUp(2011, run, 1600);

  const stats = [
    {
      description: "Projects delivered",
      value: `${projects}+`,
    },
    {
      description: "Countries served",
      value: countries,
    },
    {
      description: "Serving clients since",
      value: year,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#07131F] text-white"
    >
      {/* Background image */}
      <img
        src="https://theebc-eg.com/wp-content/uploads/2023/01/Alexandria-Stadium.webp"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07131F] via-[#07131F]/85 to-[#07131F]/50" />

      <div className="relative mx-auto w-full max-w-[88rem] px-5 py-20 md:px-10 lg:py-24 xl:px-14">

        {/* Label */}
        <p
          data-aos="fade-up"
          data-aos-once="true"
          className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#E53935]"
        >
          Measure. Verify. Perform.
        </p>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
          className="mt-6 max-w-4xl font-['Archivo'] text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.025em]"
        >
          EBC DOES NOT INSTALL YOUR SYSTEMS.
          <br />
          EBC PROVES THEY WORK.
        </h2>

        {/* Statistics */}
        <dl
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
          className="mt-14 grid gap-px border-t border-white/10 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.description} className="pt-8">
              <dt className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#A4A9AE]">
                {stat.description}
              </dt>

              <dd className="mt-2 font-['Archivo'] text-5xl font-extrabold tracking-[-0.02em] lg:text-6xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Source */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
          className="mt-10 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-white/40"
        >
          SOURCE / EBC-INTERNATIONAL PROJECT RECORD
        </p>
      </div>
    </section>
  );
}