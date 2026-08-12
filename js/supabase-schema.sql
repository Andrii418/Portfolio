-- Schema Supabase dla analityki portfolio (opcjonalne — tryb produkcyjny)
-- Uruchom w Supabase SQL Editor po utworzeniu projektu.

create table if not exists analytics_events (
  id uuid default gen_random_uuid() primary key,
  session_id text not null,
  visitor_id text,
  event_type text not null,
  page text,
  path text,
  payload jsonb default '{}',
  geo jsonb default '{}',
  is_lead boolean default false,
  created_at timestamptz default now()
);

create index if not exists idx_analytics_events_created on analytics_events (created_at desc);
create index if not exists idx_analytics_events_session on analytics_events (session_id);

create table if not exists portfolio_settings (
  id int primary key default 1 check (id = 1),
  mode text default 'recruitment',
  promo_enabled boolean default false,
  promo_text text default '',
  promo_link text default '',
  updated_at timestamptz default now()
);

insert into portfolio_settings (id) values (1) on conflict (id) do nothing;

alter table analytics_events enable row level security;
alter table portfolio_settings enable row level security;

-- Anon: insert zdarzeń (tracker publiczny)
create policy "anon insert events" on analytics_events
  for insert to anon with check (true);

-- Anon: odczyt zdarzeń (admin używa anon key — w produkcji rozważ service role tylko po stronie serwera)
create policy "anon read events" on analytics_events
  for select to anon using (true);

-- Ustawienia: odczyt dla wszystkich, zapis dla anon (admin panel)
create policy "anon read settings" on portfolio_settings
  for select to anon using (true);

create policy "anon update settings" on portfolio_settings
  for update to anon using (true);

create policy "anon insert settings" on portfolio_settings
  for insert to anon with check (true);

-- Realtime (włącz w Dashboard → Database → Replication dla analytics_events)
