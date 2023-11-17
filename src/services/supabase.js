import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jtvuscpjmcbebkkbcwvp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0dnVzY3BqbWNiZWJra2Jjd3ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMjAxOTEsImV4cCI6MjAxNTc5NjE5MX0.nB9TBc-lRzEkxdLSDNsyx5sFku7YcLDwVc2Ov5Xtp8A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
