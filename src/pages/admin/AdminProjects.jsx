import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { PROJECT_COUNTRIES, PROJECT_SECTORS } from "../../data/projectOptions";
import { supabase } from "../../utils/Supabase";
import {
  PROJECT_IMAGES_BUCKET,
  deleteProjectImage,
} from "../../utils/projects";

const FIELD =
  "w-full border border-[#E2E4E5] bg-white px-4 py-3 text-sm text-[#07131F] outline-none transition-colors placeholder:text-[#07131F]/35 focus:border-[#C8102E]";

const EMPTY_FORM = {
  name: "",
  image: "",
  country: "Egypt",
  location: "",
  sector: PROJECT_SECTORS[0],
  contractor: "",
  consultant: "",
  system: "",
};

export default function AdminProjects() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [query, setQuery] = useState("");

  const loadProjects = async () => {
    setLoading(true);
    setError("");

    const { data, error: loadError } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (loadError) {
      setError(loadError.message);
      setProjects([]);
    } else {
      setProjects(data ?? []);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return projects;
    return projects.filter((project) =>
      [project.name, project.country, project.sector, project.location]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(term)),
    );
  }, [projects, query]);

  const updateField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const resetForm = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  const startEdit = (project) => {
    setEditingId(project.id);
    setForm({
      name: project.name ?? "",
      image: project.image ?? "",
      country: project.country ?? "Egypt",
      location: project.location ?? "",
      sector: project.sector ?? PROJECT_SECTORS[0],
      contractor: project.contractor ?? "",
      consultant: project.consultant ?? "",
      system: project.system ?? "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    const extension = file.name.split(".").pop();
    const path = `${Date.now()}-${crypto.randomUUID()}.${extension}`;
    const { error: uploadError } = await supabase.storage
      .from("project-images")
      .upload(path, file);

    if (uploadError) {
      setError(uploadError.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("project-images").getPublicUrl(path);
    updateField("image", data.publicUrl);
    setUploading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      name: form.name.trim(),
      image: form.image.trim(),
      country: form.country,
      location: form.location.trim(),
      sector: form.sector,
      contractor: form.contractor.trim(),
      consultant: form.consultant.trim(),
      system: form.system.trim(),
    };

    const request = editingId
      ? supabase.from("projects").update(payload).eq("id", editingId)
      : supabase.from("projects").insert(payload);

    const { error: saveError } = await request;

    setSaving(false);

    if (saveError) {
      setError(saveError.message);
      return;
    }

    resetForm();
    loadProjects();
  };

  const handleDelete = async (project) => {
    const confirmed = window.confirm(`Delete “${project.name}”?`);
    if (!confirmed) return;

    setError("");

    // 1. Delete the project from the database
    const { error: deleteError } = await supabase
      .from("projects")
      .delete()
      .eq("id", project.id);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    // 2. Delete the associated image from Supabase Storage
    if (project.image) {
      const { error: imageError } = await deleteProjectImage(project.image);

      if (imageError) {
        setError(
          `Project deleted, but the image could not be deleted: ${imageError.message}`,
        );
        return;
      }
    }

    // 3. Reset the form if the deleted project was being edited
    if (editingId === project.id) {
      resetForm();
    }

    // 4. Refresh the project list
    await loadProjects();
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <main className="min-h-screen bg-[#F4F5F5]">
      <header className="border-b border-[#E6E7E8] bg-white">
        <div className="mx-auto flex w-full max-w-[88rem] flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-10 xl:px-14">
          <div>
            <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#C8102E]">
              Admin
            </span>
            <h1 className="mt-1 font-['Archivo'] text-2xl font-bold tracking-[-0.03em] text-[#07131F]">
              Projects
            </h1>
            <p className="mt-1 text-sm text-[#2F3640]/60">{user?.email}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/admin/news"
              className="border border-[#2F3640] px-5 py-2.5 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#2F3640] transition-colors hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white"
            >
              Manage news
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="border border-[#2F3640] px-5 py-2.5 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#2F3640] transition-colors hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-[88rem] gap-8 px-5 py-10 md:px-10 xl:grid-cols-12 xl:px-14">
        <section className="bg-white p-6 xl:col-span-5">
          <h2 className="font-['Archivo'] text-xl font-bold text-[#07131F]">
            {editingId ? "Edit project" : "Add project"}
          </h2>

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">
                Name
              </span>
              <input
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className={`${FIELD} mt-2`}
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">
                  Country
                </span>
                <select
                  value={form.country}
                  onChange={(event) =>
                    updateField("country", event.target.value)
                  }
                  className={`${FIELD} mt-2`}
                >
                  {PROJECT_COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">
                  Sector
                </span>
                <select
                  value={form.sector}
                  onChange={(event) =>
                    updateField("sector", event.target.value)
                  }
                  className={`${FIELD} mt-2`}
                >
                  {PROJECT_SECTORS.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">
                Location
              </span>
              <input
                value={form.location}
                onChange={(event) =>
                  updateField("location", event.target.value)
                }
                className={`${FIELD} mt-2`}
              />
            </label>

            <label className="block">
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">
                Image URL
              </span>
              <input
                value={form.image}
                onChange={(event) => updateField("image", event.target.value)}
                className={`${FIELD} mt-2`}
                placeholder="https://..."
              />
            </label>

            <label className="block">
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">
                Or upload image
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2 w-full text-sm text-[#2F3640]"
              />
              {uploading && (
                <p className="mt-2 text-sm text-[#2F3640]/60">Uploading...</p>
              )}
              {form.image && (
                <img
                  src={form.image}
                  alt=""
                  className="mt-3 h-28 w-full object-cover"
                />
              )}
            </label>

            <label className="block">
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">
                Contractor
              </span>
              <input
                value={form.contractor}
                onChange={(event) =>
                  updateField("contractor", event.target.value)
                }
                className={`${FIELD} mt-2`}
              />
            </label>

            <label className="block">
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">
                Consultant
              </span>
              <input
                value={form.consultant}
                onChange={(event) =>
                  updateField("consultant", event.target.value)
                }
                className={`${FIELD} mt-2`}
              />
            </label>

            <label className="block">
              <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">
                System
              </span>
              <input
                value={form.system}
                onChange={(event) => updateField("system", event.target.value)}
                className={`${FIELD} mt-2`}
              />
            </label>

            {error && (
              <p className="border border-[#C8102E]/20 bg-[#C8102E]/5 px-4 py-3 text-sm text-[#C8102E]">
                {error}
              </p>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={saving || uploading}
                className="bg-[#C8102E] px-6 py-3 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-white disabled:opacity-60"
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update project"
                    : "Add project"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="border border-[#E6E7E8] px-6 py-3 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#2F3640]"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="bg-white p-6 xl:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-['Archivo'] text-xl font-bold text-[#07131F]">
              All projects
            </h2>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className={`${FIELD} max-w-xs`}
              placeholder="Search projects"
            />
          </div>

          {loading ? (
            <p className="mt-8 text-sm text-[#2F3640]/60">
              Loading projects...
            </p>
          ) : filteredProjects.length === 0 ? (
            <p className="mt-8 text-sm text-[#2F3640]/60">
              No projects yet. Add the first one on the left.
            </p>
          ) : (
            <div className="mt-6 divide-y divide-[#E6E7E8]">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt=""
                      className="h-20 w-28 shrink-0 object-cover"
                    />
                  ) : (
                    <div className="flex h-20 w-28 shrink-0 items-center justify-center bg-[#F4F5F5] text-[0.625rem] uppercase tracking-[0.16em] text-[#A4A9AE]">
                      No image
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <h3 className="font-['Archivo'] text-base font-bold text-[#07131F]">
                      {project.name}
                    </h3>
                    <p className="mt-1 font-['IBM_Plex_Sans'] text-[0.6875rem] uppercase tracking-[0.16em] text-[#A4A9AE]">
                      {project.country}
                      {project.location ? ` · ${project.location}` : ""} ·{" "}
                      {project.sector}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(project)}
                      className="border border-[#2F3640] px-4 py-2 font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.16em] text-[#2F3640]"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(project)}
                      className="border border-[#C8102E] px-4 py-2 font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.16em] text-[#C8102E]"
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
