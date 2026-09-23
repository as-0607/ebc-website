import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const FIELD =
  "w-full border border-[#E2E4E5] bg-white px-4 py-3.5 text-sm text-[#07131F] outline-none transition-colors placeholder:text-[#07131F]/35 focus:border-[#C8102E]";

export default function AdminLogin() {
  const { user, loading, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/admin";

  useEffect(() => {
    if (!loading && user) {
      navigate(from, { replace: true });
    }
  }, [from, loading, navigate, user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    const { error: signInError } = await signIn(email.trim(), password);

    setSubmitting(false);

    if (signInError) {
      setError(signInError.message || "Login failed. Check your credentials.");
      return;
    }

    navigate(from, { replace: true });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07131F] px-5 py-16">
      <div className="w-full max-w-md bg-white p-8 shadow-2xl md:p-10">
        <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#C8102E]">
          Admin access
        </span>
        <h1 className="mt-4 font-['Archivo'] text-3xl font-bold tracking-[-0.03em] text-[#07131F]">
          Sign in
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#2F3640]/70">
          Credentials are verified by Supabase Auth. After a successful login you
          can manage news and projects.
        </p>

        <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">
              Email
            </span>
            <input
              required
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={`${FIELD} mt-2`}
              placeholder="admin@example.com"
            />
          </label>

          <label className="block">
            <span className="font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[#8F98A1]">
              Password
            </span>
            <input
              required
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={`${FIELD} mt-2`}
              placeholder="••••••••"
            />
          </label>

          {error && (
            <p className="border border-[#C8102E]/20 bg-[#C8102E]/5 px-4 py-3 text-sm text-[#C8102E]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 bg-[#C8102E] px-6 py-3.5 font-['IBM_Plex_Sans'] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#a50d25] disabled:opacity-60"
          >
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
