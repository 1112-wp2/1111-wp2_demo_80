import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPERBASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPERBASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);