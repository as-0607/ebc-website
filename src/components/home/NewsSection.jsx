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

  useEffect(() => {
    fetchNews().then(setNews);
  }, []);

  if (news.length === 0) return null;

  return (
    <section className="bg-[#07131F] py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10 xl:px-14">
        <div data-aos="fade-up" data-aos-once="true" className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#E53935]" />
            <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#E53935]">
              05 / Company News
            </span>
          </div>
          <h2 className="mt-6 font-['Archivo'] text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.025em] text-white">
            FROM EBC.
            <br />
            ON THE GROUND.
          </h2>
        </div>

        <div className="mt-14 grid gap-4">
          {news.slice(0, 3).map((item) => {
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

            return <article key={item.id} className="group overflow-hidden">{content}</article>;
          })}
        </div>
      </div>
    </section>
  );
}
