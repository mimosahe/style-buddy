import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xgdjpshdgninjuxkztst.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnZGpwc2hkZ25pbmp1eGt6dHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1MTQ4MjksImV4cCI6MTk5NDA5MDgyOX0.DhS39wANGZPJfo3EMKOirTQbGzEzVK2BB1Oyb5_jZuU"

export const supabase = createClient(supabaseUrl, supabaseKey)