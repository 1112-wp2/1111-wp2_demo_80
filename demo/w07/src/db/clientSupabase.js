import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAronKey = process.env.REACT_APP_SUPABASE_ARON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAronKey);