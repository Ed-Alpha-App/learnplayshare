
import { createClient } from '@supabase/supabase-js';
import { Lesson } from '@/types/learn';
import { toast } from 'sonner';

// Initialize Supabase client with fallback for missing credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Only create the client if credentials are available
const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export const fetchLessons = async (subject: string): Promise<Lesson[]> => {
  try {
    if (!supabase) {
      // If Supabase client isn't initialized, show an error toast and use fallback data
      toast.error("Supabase connection not configured. Using sample data.");
      throw new Error("Supabase client not initialized");
    }
    
    const { data, error } = await supabase
      .from('lessons')
      .select('*')
      .eq('subject', subject.toLowerCase());
    
    if (error) throw error;
    
    if (data && data.length > 0) {
      toast.success(`Loaded ${data.length} lessons for ${subject}`);
      return data;
    } else {
      // If no lessons found for this subject, show a notification
      toast.info(`No lessons found for ${subject}. Showing sample data.`);
      throw new Error("No lessons found");
    }
  } catch (error) {
    console.error('Error fetching lessons:', error);
    // If there's an error or no lessons found, return dummy lessons
    return [
      {
        id: 1,
        title: `${subject} Lesson 1`,
        description: 'Introduction to the basics',
        video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        subject: subject.toLowerCase()
      },
      {
        id: 2,
        title: `${subject} Lesson 2`,
        description: 'Advanced concepts and applications',
        video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        subject: subject.toLowerCase()
      }
    ];
  }
};
