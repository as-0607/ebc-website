import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../utils/Supabase";
import { deleteNewsImage } from "../../utils/news";

const FIELD = "w-full border border-[#E2E4E5] bg-white px-4 py-3 text-sm text-[#07131F] outline-none transition-colors placeholder:text-[#07131F]/35 focus:border-[#C8102E]";
const EMPTY_FORM = { title: "", summary: "", published_at: new Date().toISOString().slice(0, 10), image: "" };

export default function AdminNews() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [query, setQuery] = useState("");

  const loadNews = async () => {
    setLoading(true); setError("");
    const { data, error: loadError } = await supabase.from("news").select("*").order("created_at", { ascending: false });
    if (loadError) { setError(loadError.message); setItems([]); } else setItems(data ?? []);
    setLoading(false);
  };
  useEffect(() => {
    const timer = window.setTimeout(loadNews, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const filteredItems = useMemo(() => {
    const term = query.trim().toLowerCase();
    return !term ? items : items.filter((item) => [item.title, item.summary].filter(Boolean).some((value) => value.toLowerCase().includes(term)));
  }, [items, query]);
  const updateField = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  const resetForm = () => { setEditingId(null); setForm({ ...EMPTY_FORM, published_at: new Date().toISOString().slice(0, 10) }); };
  const startEdit = (item) => { setEditingId(item.id); setForm({ title: item.title ?? "", summary: item.summary ?? "", published_at: item.published_at ?? "", image: item.image ?? "" }); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0]; if (!file) return;
    setUploading(true); setError("");
    const extension = file.name.split(".").pop();
    const path = `${Date.now()}-${crypto.randomUUID()}.${extension}`;
    const { error: uploadError } = await supabase.storage.from("news-images").upload(path, file);
    if (uploadError) { setError(uploadError.message); setUploading(false); return; }
    const { data } = supabase.storage.from("news-images").getPublicUrl(path);
    updateField("image", data.publicUrl); setUploading(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault(); setSaving(true); setError("");
    const payload = { title: form.title.trim(), summary: form.summary.trim(), published_at: form.published_at, image: form.image.trim() };
    const request = editingId ? supabase.from("news").update(payload).eq("id", editingId) : supabase.from("news").insert(payload);
    const { error: saveError } = await request; setSaving(false);
    if (saveError) { setError(saveError.message); return; }
    resetForm(); loadNews();
  };
  const handleDelete = async (item) => {
    if (!window.confirm(`Delete “${item.title}”?`)) return;
    setError(""); const { error: deleteError } = await supabase.from("news").delete().eq("id", item.id);
    if (deleteError) { setError(deleteError.message); return; }
    if (item.image) { const { error: imageError } = await deleteNewsImage(item.image); if (imageError) { setError(`News deleted, but the image could not be deleted: ${imageError.message}`); return; } }
    if (editingId === item.id) resetForm(); await loadNews();
  };
  const handleSignOut = async () => { await signOut(); navigate("/admin/login", { replace: true }); };

  return <main className="min-h-screen bg-[#F4F5F5]">
    <header className="border-b border-[#E6E7E8] bg-white"><div className="mx-auto flex w-full max-w-[88rem] flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-10 xl:px-14"><div><Link to="/admin" className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#C8102E]">Admin / Content management</Link><h1 className="mt-1 font-['Archivo'] text-2xl font-bold tracking-[-0.03em] text-[#07131F]">News</h1><p className="mt-1 text-sm text-[#2F3640]/60">{user?.email}</p></div><button type="button" onClick={handleSignOut} className="border border-[#2F3640] px-5 py-2.5 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#2F3640] transition-colors hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white">Sign out</button></div></header>
    <div className="mx-auto grid w-full max-w-[88rem] gap-8 px-5 py-10 md:px-10 xl:grid-cols-12 xl:px-14">
      <section className="bg-white p-6 xl:col-span-5"><h2 className="font-['Archivo'] text-xl font-bold text-[#07131F]">{editingId ? "Edit news item" : "Add news item"}</h2><form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <label><span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">Title</span><input required value={form.title} onChange={(event) => updateField("title", event.target.value)} className={`${FIELD} mt-2`} /></label>
        <label><span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">Summary</span><textarea required rows="4" value={form.summary} onChange={(event) => updateField("summary", event.target.value)} className={`${FIELD} mt-2 resize-y`} /></label>
        <label><span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">Publish date</span><input required type="date" value={form.published_at} onChange={(event) => updateField("published_at", event.target.value)} className={`${FIELD} mt-2`} /></label>
        <label><span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">Image URL</span><input value={form.image} onChange={(event) => updateField("image", event.target.value)} className={`${FIELD} mt-2`} placeholder="https://..." /></label>
        <label><span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">Or upload image</span><input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2 w-full text-sm text-[#2F3640]" />{uploading && <p className="mt-2 text-sm text-[#2F3640]/60">Uploading...</p>}{form.image && <img src={form.image} alt="" className="mt-3 h-28 w-full object-cover" />}</label>
        {error && <p className="border border-[#C8102E]/20 bg-[#C8102E]/5 px-4 py-3 text-sm text-[#C8102E]">{error}</p>}
        <div className="flex flex-wrap gap-3"><button type="submit" disabled={saving || uploading} className="bg-[#C8102E] px-6 py-3 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-white disabled:opacity-60">{saving ? "Saving..." : editingId ? "Update news" : "Add news"}</button>{editingId && <button type="button" onClick={resetForm} className="border border-[#E6E7E8] px-6 py-3 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#2F3640]">Cancel</button>}</div>
      </form></section>
      <section className="bg-white p-6 xl:col-span-7"><div className="flex flex-wrap items-center justify-between gap-4"><h2 className="font-['Archivo'] text-xl font-bold text-[#07131F]">All news</h2><input value={query} onChange={(event) => setQuery(event.target.value)} className={`${FIELD} max-w-xs`} placeholder="Search news" /></div>
        {loading ? <p className="mt-8 text-sm text-[#2F3640]/60">Loading news...</p> : filteredItems.length === 0 ? <p className="mt-8 text-sm text-[#2F3640]/60">No news yet. Add the first item on the left.</p> : <div className="mt-6 divide-y divide-[#E6E7E8]">{filteredItems.map((item) => <article key={item.id} className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center">{item.image ? <img src={item.image} alt="" className="h-20 w-28 shrink-0 object-cover" /> : <div className="flex h-20 w-28 shrink-0 items-center justify-center bg-[#F4F5F5] text-[0.625rem] uppercase tracking-[0.16em] text-[#A4A9AE]">No image</div>}<div className="min-w-0 flex-1"><h3 className="font-['Archivo'] text-base font-bold text-[#07131F]">{item.title}</h3><p className="mt-1 font-['IBM_Plex_Sans'] text-[0.6875rem] uppercase tracking-[0.16em] text-[#A4A9AE]">{item.published_at}</p></div><div className="flex gap-2"><button type="button" onClick={() => startEdit(item)} className="border border-[#2F3640] px-4 py-2 font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.16em] text-[#2F3640]">Edit</button><button type="button" onClick={() => handleDelete(item)} className="border border-[#C8102E] px-4 py-2 font-['IBM_Plex_Sans'] text-[0.625rem] font-medium uppercase tracking-[0.16em] text-[#C8102E]">Delete</button></div></article>)}</div>}
      </section>
    </div>
  </main>;
}
