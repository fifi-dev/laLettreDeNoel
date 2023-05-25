import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hpmuxfyxvfikehbynhqc.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwbXV4Znl4dmZpa2VoYnluaHFjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NTAwMTgxNSwiZXhwIjoyMDAwNTc3ODE1fQ.9ZEuvTctYnPZXH02eaXuIt4_4vi2GnPH8ifd5EkEZ9g';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);