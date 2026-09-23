import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const areas = [
  {
    to: "/admin/news",
    no: "01",
    title: "News",
    text: "Publish company updates, technical insights and announcements for the home page.",
  },
  {
    to: "/admin/projects",
    no: "02",
    title: "Projects",
    text: "Add and maintain the project portfolio shown on the Projects page.",
  },
];

export default function AdminDashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <main className="min-h-screen bg-[#F4F5F5]">
      <header className="border-b border-[#E6E7E8] bg-white">
        <div className="mx-auto flex w-full max-w-[88rem] flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-10 xl:px-14">
          <div>
            <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#C8102E]">Admin</span>
            <h1 className="mt-1 font-['Archivo'] text-2xl font-bold tracking-[-0.03em] text-[#07131F]">Content management</h1>
            <p className="mt-1 text-sm text-[#2F3640]/60">{user?.email}</p>
          </div>
          <button type="button" onClick={handleSignOut} className="border border-[#2F3640] px-5 py-2.5 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#2F3640] transition-colors hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white">Sign out</button>
        </div>
      </header>
      <section className="mx-auto w-full max-w-[88rem] px-5 py-12 md:px-10 xl:px-14">
        <p className="max-w-xl text-[#07131F]/65">Choose the part of the website you want to update.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {areas.map((area) => (
            <Link key={area.to} to={area.to} className="group bg-[#07131F] p-7 transition-colors hover:bg-[#C8102E]">
              <p className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#E53935] group-hover:text-white/70">{area.no}</p>
              <h2 className="mt-8 font-['Archivo'] text-3xl font-bold text-white">{area.title}</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/65 group-hover:text-white/85">{area.text}</p>
              <p className="mt-8 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-white">Manage →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
