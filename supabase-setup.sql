-- Tabla: consultas del formulario de contacto
create table if not exists consultas (
  id          uuid default gen_random_uuid() primary key,
  created_at  timestamp with time zone default now(),
  nombre      text not null,
  correo      text not null,
  area        text,
  mensaje     text not null,
  leida       boolean default false
);

-- Solo el service_role puede insertar/leer (el anon no tiene acceso)
alter table consultas enable row level security;

create policy "service role only"
  on consultas
  using (false);   -- bloquea todo acceso anon; service role bypasa RLS

-- Tabla: casos del portafolio (para cuando Aldo tenga los datos reales)
create table if not exists casos (
  id          uuid default gen_random_uuid() primary key,
  created_at  timestamp with time zone default now(),
  area        text not null,
  anio        integer,
  titulo      text not null,
  descripcion text,
  activo      boolean default true
);

-- Los casos son públicos (cualquiera puede leer)
alter table casos enable row level security;

create policy "public read"
  on casos for select
  using (activo = true);

create policy "service role write"
  on casos for all
  using (false)
  with check (false);
