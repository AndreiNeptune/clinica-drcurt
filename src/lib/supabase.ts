import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  const isServer = typeof window === 'undefined';
  const environment = isServer ? 'Server-side' : 'Client-side';
  console.error(`[Supabase Config] ERROR: Missing credentials in ${environment}. URL: ${supabaseUrl ? 'Exists' : 'MISSING'}, Key: ${supabaseKey ? 'Exists' : 'MISSING'}`);
  
  if (!isServer) {
    console.warn('Supabase configuration missing! Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment variables.');
  }
}

// We use placeholders during build if variables are missing to prevent "supabaseUrl is required" errors
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co',
  supabaseKey || 'placeholder-key'
);
