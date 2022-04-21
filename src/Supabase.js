import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(
  "https://xrrssujwiyaaixgnittu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhycnNzdWp3aXlhYWl4Z25pdHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg4ODA5NDUsImV4cCI6MTk2NDQ1Njk0NX0.oWGOErgN7HOXNqGMwMQHlzbCJRPwDq6CcEegmOsvtEs"
)