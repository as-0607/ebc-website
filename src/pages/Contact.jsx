import { useForm } from "@formspree/react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import PageHeader from "../components/PageHeader";
import { SITE, SERVICES } from "../data/ebc";

const FIELD =
  "w-full border border-[#E2E4E5] bg-white px-4 py-3.5 text-sm text-[#07131F] outline-none transition-colors placeholder:text-[#07131F]/35 focus:border-[#E53935]";

export default function Contact() {
  const [state, handleSubmit] = useForm("xdeonkoj");

  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          label="06 / Contact"
          meta="CAIRO / EGYPT"
          title="LET'S DISCUSS YOUR PROJECT."
          intro="Send us the project scope, systems involved and target handover date. An EBC commissioning manager will respond with an approach and proposal."
          image="https://theebc-eg.com/wp-content/uploads/2020/08/20140122_101704-768x576.jpg"
        />

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid w-full max-w-[88rem] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-20 xl:px-14">
            {/* Contact Form */}
            <div
              className="lg:col-span-7"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#E53935]">
                Project Enquiry
              </span>

              <h2 className="mt-4 font-['Archivo'] text-2xl font-extrabold tracking-tight text-[#07131F]">
                REQUEST A PROPOSAL
              </h2>

              <form
                className="mt-8 grid gap-4 sm:grid-cols-2"
                onSubmit={handleSubmit}
              >
                {/* Full Name */}
                <label className="block">
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Full name
                  </span>

                  <input
                    required
                    name="name"
                    className={`${FIELD} mt-2`}
                    placeholder="Your name"
                  />
                </label>

                {/* Company */}
                <label className="block">
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Company
                  </span>

                  <input
                    name="company"
                    className={`${FIELD} mt-2`}
                    placeholder="Organisation"
                  />
                </label>

                {/* Email */}
                <label className="block">
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Email
                  </span>

                  <input
                    required
                    type="email"
                    name="email"
                    className={`${FIELD} mt-2`}
                    placeholder="name@company.com"
                  />
                </label>

                {/* Phone */}
                <label className="block">
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Phone
                  </span>

                  <input
                    name="phone"
                    className={`${FIELD} mt-2`}
                    placeholder="+20 …"
                  />
                </label>

                {/* Service */}
                <label className="block sm:col-span-2">
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Service required
                  </span>

                  <select
                    name="service"
                    className={`${FIELD} mt-2`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </label>

                {/* Project Details */}
                <label className="block sm:col-span-2">
                  <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                    Project details
                  </span>

                  <textarea
                    required
                    name="message"
                    rows={5}
                    className={`${FIELD} mt-2 resize-none`}
                    placeholder="Building type, systems, area, programme and handover date."
                  />
                </label>

                {/* Submit */}
                <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="font-['IBM_Plex_Sans'] bg-[#E53935] px-8 py-4 text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-white transition-colors hover:bg-[#C9322E] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {state.submitting ? "Sending..." : "Send enquiry →"}
                  </button>

                  {/* Success Message */}
                  {state.succeeded && (
                    <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#07131F]/60">
                      Thank you — we&apos;ll be in touch shortly.
                    </span>
                  )}

                  {/* Error Message */}
                  {state.errors && (
                    <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#E53935]">
                      Something went wrong. Please try again.
                    </span>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div
              className="lg:col-span-5"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <div className="bg-[#07131F] p-8 text-white">
                <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#E53935]">
                  Head Office
                </span>

                <p className="mt-5 text-white/80">Cairo, Egypt</p>

                <dl className="mt-8 space-y-4 border-t border-white/10 pt-6">
                  {/* Phone */}
                  <div>
                    <dt className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                      Phone
                    </dt>

                    <dd className="mt-1">
                      <a
                        href={`tel:${SITE.telephone}`}
                        className="block transition-colors hover:text-[#E53935]"
                      >
                        {SITE.telephone}
                      </a>

                      <a
                        href={`tel:${SITE.mobile}`}
                        className="block transition-colors hover:text-[#E53935]"
                      >
                        {SITE.mobile}
                      </a>
                    </dd>
                  </div>

                  {/* Email */}
                  <div>
                    <dt className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                      Email
                    </dt>

                    <dd className="mt-1">
                      <a
                        href={`mailto:${SITE.email}`}
                        className="transition-colors hover:text-[#E53935]"
                      >
                        {SITE.email}
                      </a>
                    </dd>
                  </div>

                  {/* Working Hours */}
                  <div>
                    <dt className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium leading-[1.2] tracking-[0.22em] uppercase text-[#8F98A1]">
                      Working hours
                    </dt>

                    <dd className="mt-1 text-white/80">
                      Sunday – Thursday, 09:00 – 17:00 EET
                    </dd>
                  </div>
                </dl>
              </div>

              <img
                src="https://theebc-eg.com/wp-content/uploads/2020/10/IMG_6072-768x512.jpg"
                alt="EBC commissioning engineers on site"
                loading="lazy"
                className="mt-6 aspect-[4/3] w-full object-cover"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="700"
                data-aos-easing="ease-out"
                data-aos-once="true"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
