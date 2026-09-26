export default function PageHeader({ label, title, intro, image, meta }) {
  return (
    <section className="relative overflow-hidden bg-[#0B0F14] text-white">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

<div className="absolute inset-0 bg-gradient-to-r from-[#07131F] via-[#07131F]/80 to-[#07131F]/40" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07131F]/55 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-50">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-40 pb-16 md:px-10 md:pt-48 md:pb-24 lg:px-12">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-[#EF3E37]" />

          <span className="font-mono  text-[0.85rem] font-medium uppercase tracking-[0.15em] text-[#EF3E37]">
            {label}
          </span>

          {meta && (
            <span className="ml-auto hidden font-mono text-[0.8rem] font-medium uppercase tracking-[0.15em] text-white/40 md:block">
              {meta}
            </span>
          )}
        </div>

        <h1 className="mt-6 max-w-4xl text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em]">
          {title}
        </h1>

        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}