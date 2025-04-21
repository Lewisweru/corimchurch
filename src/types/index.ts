// Define types for our application data

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  progress?: number; // percentage complete
  status: 'planning' | 'ongoing' | 'completed';
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'worship' | 'community' | 'education' | 'outreach' | 'youth';
  imageUrl?: string;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface DonationOption {
  id: string;
  title: string;
  description: string;
  icon: string;
}