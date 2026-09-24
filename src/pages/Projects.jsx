import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { PROJECTS } from "../data/ebc";
import { PROJECT_SECTORS } from "../data/projectOptions";
import { fetchProjects } from "../utils/projects";

const SECTORS = ["All", ...PROJECT_SECTORS];

export default function Projects() {
  const [projects, setProjects] = useState(PROJECTS);
  const [country, setCountry] = useState("All");
  const [sector, setSector] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  // Close modal with Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const list = useMemo(() => {
    return projects.filter((project) => {
      const countryMatch = country === "All" || project.country === country;

      const sectorMatch = sector === "All" || project.sector === sector;

      return countryMatch && sectorMatch;
    });
  }, [country, projects, sector]);

  const handleCountryChange = (value) => {
    setCountry(value);
    setSector("All");
    setVisibleCount(9);
  };
  const handleSectorChange = (newSector) => {
    setSector(newSector);
    setVisibleCount(9);
  };
  const visibleProjects = list.slice(0, visibleCount);
  const handleLoadMore = () => {
    setVisibleCount((previous) => previous + 9);
  };

  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          label="03 / Projects"
          meta={`${projects.length} PROJECTS · 9 COUNTRIES`}
          title="A PORTFOLIO OF COMPLEX BUILDINGS."
          intro="A selection of projects from the EBC-International archive. Every project is delivered by qualified engineers working to recognized codes of practice."
          image="https://theebc-eg.com/wp-content/uploads/2023/01/Alexandria-Stadium.webp"
        />

        {/* ================= FILTERS ================= */}
        <section className="border-b border-[#E6E7E8] bg-[#F4F5F5]">
          <div className="mx-auto w-full max-w-[88rem] px-5 py-6 md:px-10 xl:px-14">
            {/* Country */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-4 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#A4A9AE]">
                Location
              </span>

              {["All", "Egypt", "KSA", "Others"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleCountryChange(item)}
                  className={`font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.15em] border px-4 py-2.5 transition-colors ${
                    country === item
                      ? "border-[#C8102E] bg-[#C8102E] text-white"
                      : "border-[#E6E7E8] bg-white text-[#2F3640]/60 hover:border-[#2F3640]/40 hover:text-[#2F3640]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Sector */}
            {country !== "Others" && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="mr-4 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase leading-[1.2] tracking-[0.22em] text-[#A4A9AE]">
                  Sector
                </span>

                {SECTORS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleSectorChange(item)}
                    className={`font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.15em] border px-4 py-2.5 transition-colors ${
                      sector === item
                        ? "border-[#C8102E] bg-[#C8102E] text-white"
                        : "border-[#E6E7E8] bg-white text-[#2F3640]/60 hover:border-[#2F3640]/40 hover:text-[#2F3640]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            <div className="mt-5 border-t border-[#E6E7E8] pt-5">
              <p className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#A4A9AE]">
                Showing {Math.min(visibleCount, list.length)} of {list.length}{" "}
                projects
              </p>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid w-full max-w-[88rem] gap-6 px-5 sm:grid-cols-2 md:px-10 lg:grid-cols-3 xl:px-14">
            {visibleProjects.map((project, index) => (
              <article
                key={project.id ?? project.name}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 80}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden bg-[#2F3640]"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex aspect-[4/3] w-full items-center justify-center bg-[#F4F5F5]"
                  >
                    <span className="border border-[#C8102E]/30 px-4 py-2 font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.22em] text-[#2F3640]/40">
                      EBC Project Archive
                    </span>
                  </div>
                )}

                <div
                  className={`absolute inset-0 ${
                    project.image
                      ? "bg-gradient-to-t from-[#2F3640]/90 via-[#2F3640]/15 to-transparent"
                      : "bg-gradient-to-t from-[#F4F5F5] via-[#F4F5F5]/30 to-transparent"
                  }`}
                />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <div>
                    <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#C8102E]">
                      {project.country} · {project.sector}
                    </span>

                    <h2
                      className={`mt-2 font-['Archivo'] text-lg font-bold leading-tight tracking-[-0.025em] ${
                        project.image ? "text-white" : "text-[#2F3640]"
                      }`}
                    >
                      {project.name}
                    </h2>
                  </div>

                  <span
                    aria-hidden
                    className={`mb-1 translate-x-2 text-xl opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 ${
                      project.image ? "text-white" : "text-[#2F3640]"
                    }`}
                  >
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {list.length === 0 && (
            <div className="mx-auto max-w-[88rem] px-5 py-20 text-center md:px-10 xl:px-14">
              <p className="font-['Archivo'] text-2xl font-bold text-[#2F3640]">
                No projects found.
              </p>

              <p className="mt-3 text-sm text-[#2F3640]/60">
                Try another location or sector.
              </p>
            </div>
          )}

          {visibleCount < list.length && (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] border border-[#2F3640] bg-white px-8 py-4 text-[#2F3640] transition-colors hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white"
              >
                Load More
                <span className="ml-3">
                  ({Math.min(visibleCount + 9, list.length)} / {list.length})
                </span>
              </button>
            </div>
          )}

          <div className="mx-auto mt-12 w-full max-w-[88rem] border-t border-[#E6E7E8] px-5 pt-6 md:px-10 xl:px-14">
            <p className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#A4A9AE]">
              Selected projects shown. Full project record available on request.
            </p>
          </div>
        </section>

        <CTASection />
      </main>

      <SiteFooter />

      {/* ================= PROJECT MODAL ================= */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#101318]/75 px-5 py-8 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.name}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-[900px] overflow-y-auto bg-white shadow-2xl"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center bg-[#2F3640]/90 text-xl text-white transition-colors hover:bg-[#C8102E]"
            >
              ×
            </button>

            {/* Image */}
            <div className="relative">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="max-h-[55vh] w-full object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex aspect-[4/3] max-h-[55vh] w-full items-center justify-center bg-[#F4F5F5]"
                >
                  <span className="border border-[#C8102E]/30 px-5 py-3 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#2F3640]/40">
                    EBC Project Archive
                  </span>
                </div>
              )}

              <span className="absolute bottom-0 left-0 bg-[#C8102E] px-5 py-3 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-white">
                {selectedProject.country}
              </span>
            </div>

            {/* Details */}
            <div className=" grid gap-px bg-[#E6E7E8] sm:grid-cols-2">
              <div className="bg-[#F4F5F5] p-5">
                <p className="font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.2em] text-[#A4A9AE]">
                  Location
                </p>
                <p className="mt-2 font-['Archivo'] text-base font-bold text-[#2F3640]">
                  {selectedProject.country}
                </p>
              </div>

              <div className="bg-[#F4F5F5] p-5">
                <p className="font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.2em] text-[#A4A9AE]">
                  Sector
                </p>
                <p className="mt-2 font-['Archivo'] text-base font-bold text-[#2F3640]">
                  {selectedProject.sector}
                </p>
              </div>

              {selectedProject.contractor && (
                <div className="bg-[#F4F5F5] p-5">
                  <p className="font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.2em] text-[#A4A9AE]">
                    Contractor
                  </p>
                  <p className="mt-2 font-['Archivo'] text-base font-bold text-[#2F3640]">
                    {selectedProject.contractor}
                  </p>
                </div>
              )}

              {selectedProject.consultant && (
                <div className="bg-[#F4F5F5] p-5">
                  <p className="font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.2em] text-[#A4A9AE]">
                    Consultant
                  </p>
                  <p className="mt-2 font-['Archivo'] text-base font-bold text-[#2F3640]">
                    {selectedProject.consultant}
                  </p>
                </div>
              )}

              {selectedProject.system && (
                <div className="bg-[#F4F5F5] p-5">
                  <p className="font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.2em] text-[#A4A9AE]">
                    System
                  </p>
                  <p className="mt-2 font-['Archivo'] text-base font-bold text-[#2F3640]">
                    {selectedProject.system}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
