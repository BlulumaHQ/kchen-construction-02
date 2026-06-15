import { createClient } from "@supabase/supabase-js";

// Same Supabase project that powers the Bluluma CMS.
// These are public, publishable (anon) credentials — safe to ship in the frontend.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ?? "https://uzdjwpkgldzhnoxjeyrw.supabase.co";
const supabaseKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ?? "sb_publishable_ifsg2zxajGqu19GsJ2X4RQ_KHBHGIvi";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});
