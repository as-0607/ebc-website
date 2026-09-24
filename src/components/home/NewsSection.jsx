import { useEffect, useState } from "react";
import { fetchNews } from "../../utils/news";

const formatDate = (value) => {
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime())
    ? "Latest update"
    : new Intl.DateTimeFormat("en", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(date);
};

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchNews().then(setNews);
  }, []);

  if (news.length === 0) return null;

  return (
    <section id="news" className="scroll-mt-20 bg-[#07131F] py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10 xl:px-14">
        <div data-aos="fade-up" data-aos-once="true" className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#E53935]" />
            <span className="font-['IBM_Plex_Sans'] text-[0.85rem] font-medium uppercase tracking-[0.22em] text-[#E53935]">
              Company News
            </span>
          </div>
          <h2 className="mt-6 font-['Archivo'] text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.02] tracking-[-0.025em] text-white">
            FROM EBC.
            <br />
            ON THE GROUND.
          </h2>
        </div>

        <div className="mt-14">
          <div className="mb-4 flex justify-end gap-2">
            <button
              type="button"
              aria-label="Previous news"
              onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}
              disabled={activeIndex === 0}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#E53935] hover:bg-[#E53935] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next news"
              onClick={() => setActiveIndex((index) => Math.min(news.length - 1, index + 1))}
              disabled={activeIndex >= news.length - 1}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#E53935] hover:bg-[#E53935] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
          {news.map((item) => {
            const content = (
              <div className="flex min-h-52 flex-col bg-[#102330] sm:flex-row">
                <div
                  className="relative z-10 h-48 w-full shrink-0 overflow-hidden bg-[#122D3C] [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] sm:-mr-8 sm:h-auto sm:w-72 sm:[clip-path:polygon(0_0,88%_0,100%_100%,0_100%)]"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-[#122D3C]" />
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-7 sm:pl-9">
                  <h3 className="font-['Archivo'] text-xl font-bold leading-tight tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{item.summary}</p>
                  <p className="mt-5 font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.18em] text-white/45">
                    {formatDate(item.published_at)}
                  </p>
                </div>
              </div>
            );

            return <article key={item.id} className="group w-full shrink-0 overflow-hidden">{content}</article>;
          })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
