export default function OwnerSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[88rem] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-20 xl:px-14">
        {/* Image */}
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="lg:col-span-6"
        >
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}/images/why.jpeg`}
              alt="Complex building served by EBC-International"
              loading="lazy"
              className="aspect-[5/5] w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-6">
          <div data-aos="fade-up" data-aos-once="true">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#E53935]" />

              <span className="font-['IBM_Plex_Sans'] text-[0.85rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#E53935]">
                WHY EBC-INTERNATIONAL?
              </span>
            </div>

            <h2 className="mt-6 font-['Archivo'] text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.02] tracking-[-0.025em] ">
              YOUR TRUSTED
              <br />
              PARTNER FOR
              <br />
              COMMISSIONING EXCELLENCE.
            </h2>

            <p className="mt-6 max-w-xl text-lg text-black/80">
              CERTIFIED EXCELLENCE
            </p>
            <p className="mt-2 max-w-xl  text-black/60">
              EBC’s certifications and professional credentials, including NEBB,
              CSA, LEED and ISO, reflect our commitment to quality, technical
              excellence, and internationally recognized standards. These
              credentials reinforce our ability to deliver reliable MEP
              Commissioning services across complex building projects.
            </p>
            <p className="mt-2 max-w-xl text-lg text-black/80">
              COMMITMENT TO QUALITY
            </p>
            <p className="mt-2 max-w-xl  text-black/60">
              Quality is embedded throughout our approach—from design review and
              site testing to documentation and final verification. Our
              independent processes are designed to identify issues early,
              support effective coordination, and ensure systems perform as
              intended.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
