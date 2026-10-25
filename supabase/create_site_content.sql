-- ============================================================
-- Uplift Relief Foundation – Site Content Table
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. Create the table
CREATE TABLE IF NOT EXISTS public.site_content (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section     text NOT NULL,
  key         text NOT NULL,
  value       text NOT NULL DEFAULT '',
  updated_at  timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT  site_content_section_key_unique UNIQUE (section, key)
);

-- 2. Auto-update updated_at on every row change
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_site_content_updated_at ON public.site_content;
CREATE TRIGGER trg_site_content_updated_at
  BEFORE UPDATE ON public.site_content
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 3. Row Level Security
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Public can READ (so frontend components can fetch content)
CREATE POLICY "public_read_site_content"
  ON public.site_content FOR SELECT
  USING (true);

-- Only authenticated users can WRITE (admin protection)
CREATE POLICY "auth_write_site_content"
  ON public.site_content FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');
