
import { createClient } from '@supabase/supabase-js';
import { Lesson } from '@/types/learn';
import { toast } from 'sonner';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create the Supabase client if credentials are available
const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export const fetchLessons = async (subject: string): Promise<Lesson[]> => {
  try {
    // Check if Supabase is properly initialized
    if (!supabase) {
      console.error('Supabase client not initialized. Check your environment variables.');
      toast.error("Database connection error. Using sample data.");
      throw new Error("Supabase client not initialized");
    }
    
    console.log(`Fetching lessons for ${subject}...`);
    
    const { data, error } = await supabase
      .from('lessons')
      .select('*')
      .eq('subject', subject.toLowerCase());
    
    if (error) {
      console.error('Supabase query error:', error);
      toast.error(`Error loading lessons: ${error.message}`);
      throw error;
    }
    
    if (data && data.length > 0) {
      console.log(`Loaded ${data.length} lessons for ${subject}:`, data);
      toast.success(`Loaded ${data.length} lessons for ${subject}`);
      
      // Add random progress to each lesson (in a real app, this would come from the database)
      const lessonsWithProgress = data.map(lesson => ({
        ...lesson,
        progress: Math.floor(Math.random() * 100) // Random progress between 0-100%
      }));
      
      return lessonsWithProgress;
    } else {
      console.log(`No lessons found for ${subject}`);
      toast.info(`No lessons found for ${subject}. Showing sample data.`);
      throw new Error("No lessons found");
    }
  } catch (error) {
    console.error('Error fetching lessons:', error);
    
    // Return sample data as fallback
    return [
      {
        id: 1,
        title: `${subject} Lesson 1`,
        description: 'Introduction to the basics',
        video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        subject: subject.toLowerCase(),
        progress: 75 // Sample progress
      },
      {
        id: 2,
        title: `${subject} Lesson 2`,
        description: 'Advanced concepts and applications',
        video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        subject: subject.toLowerCase(),
        progress: 25 // Sample progress
      }
    ];
  }
};
