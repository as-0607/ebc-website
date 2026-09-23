create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  image text default '',
  country text not null,
  location text default '',
  sector text not null,
  contractor text default '',
  consultant text default '',
  system text default '',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.projects enable row level security;

drop policy if exists "Public can read projects" on public.projects;
create policy "Public can read projects"
  on public.projects
  for select
  to anon, authenticated
  using (true);

drop policy if exists "Authenticated can insert projects" on public.projects;
create policy "Authenticated can insert projects"
  on public.projects
  for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated can update projects" on public.projects;
create policy "Authenticated can update projects"
  on public.projects
  for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated can delete projects" on public.projects;
create policy "Authenticated can delete projects"
  on public.projects
  for delete
  to authenticated
  using (true);

insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do nothing;

drop policy if exists "Public read project images" on storage.objects;
create policy "Public read project images"
  on storage.objects
  for select
  using (bucket_id = 'project-images');

drop policy if exists "Authenticated upload project images" on storage.objects;
create policy "Authenticated upload project images"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'project-images');

drop policy if exists "Authenticated update project images" on storage.objects;
create policy "Authenticated update project images"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'project-images');

drop policy if exists "Authenticated delete project images" on storage.objects;
create policy "Authenticated delete project images"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'project-images');

create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  summary text not null default '',
  published_at date not null default current_date,
  image text default '',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.news enable row level security;

alter table public.news drop column if exists category;
alter table public.news drop column if exists link;

drop policy if exists "Public can read news" on public.news;
create policy "Public can read news" on public.news for select to anon, authenticated using (true);
drop policy if exists "Authenticated can insert news" on public.news;
create policy "Authenticated can insert news" on public.news for insert to authenticated with check (true);
drop policy if exists "Authenticated can update news" on public.news;
create policy "Authenticated can update news" on public.news for update to authenticated using (true) with check (true);
drop policy if exists "Authenticated can delete news" on public.news;
create policy "Authenticated can delete news" on public.news for delete to authenticated using (true);

insert into storage.buckets (id, name, public) values ('news-images', 'news-images', true) on conflict (id) do nothing;
drop policy if exists "Public read news images" on storage.objects;
create policy "Public read news images" on storage.objects for select using (bucket_id = 'news-images');
drop policy if exists "Authenticated upload news images" on storage.objects;
create policy "Authenticated upload news images" on storage.objects for insert to authenticated with check (bucket_id = 'news-images');
drop policy if exists "Authenticated update news images" on storage.objects;
create policy "Authenticated update news images" on storage.objects for update to authenticated using (bucket_id = 'news-images');
drop policy if exists "Authenticated delete news images" on storage.objects;
create policy "Authenticated delete news images" on storage.objects for delete to authenticated using (bucket_id = 'news-images');
