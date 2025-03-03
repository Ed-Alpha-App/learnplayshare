
export interface Lesson {
  id: number;
  title: string;
  description: string;
  video_url: string;
  subject: string;
  progress?: number; // Optional progress percentage (0-100)
}
