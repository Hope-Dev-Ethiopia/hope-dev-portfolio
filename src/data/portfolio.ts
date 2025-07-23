export type ProjectCategory = 'web' | 'mobile' | 'desktop' | 'design';

export interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  features?: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce platform with advanced product filtering, cart functionality, and secure payment processing. The site features a clean, intuitive interface designed to enhance the shopping experience.',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    features: [
      'Advanced product filtering and search',
      'User authentication and profiles',
      'Shopping cart and wishlist functionality',
      'Secure payment processing',
      'Responsive design for all devices'
    ],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/example'
  },
  {
    title: 'Fitness Tracking App',
    description: 'A comprehensive mobile application for tracking workouts, nutrition, and fitness goals. The app uses interactive charts to visualize progress and provides personalized workout recommendations.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux', 'D3.js'],
    features: [
      'Customizable workout plans',
      'Nutrition tracking and meal planning',
      'Progress visualization with interactive charts',
      'Goal setting and achievement tracking',
      'Social sharing and community features'
    ],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/example'
  },
  {
    title: 'Project Management Tool',
    description: 'A powerful desktop application designed for team collaboration and project management. Features include task assignment, progress tracking, file sharing, and real-time updates.',
    image: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg',
    category: 'desktop',
    technologies: ['Electron', 'React', 'Node.js', 'Socket.io'],
    features: [
      'Task creation and assignment',
      'Project timeline visualization',
      'File sharing and version control',
      'Real-time updates and notifications',
      'Team chat and collaboration tools'
    ],
    repoUrl: 'https://github.com/example'
  },
  {
    title: 'Financial Dashboard',
    description: 'An intuitive financial dashboard that visualizes complex data in an accessible way. The design focuses on clarity and usability, making financial insights available at a glance.',
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg',
    category: 'design',
    technologies: ['Figma', 'Adobe XD', 'Illustrator'],
    features: [
      'Clean, data-focused UI design',
      'Interactive chart and graph templates',
      'Responsive layouts for all devices',
      'Accessibility-compliant color schemes',
      'Complete component library'
    ],
    liveUrl: 'https://example.com'
  },
  {
    title: 'Health Care Portal',
    description: 'A secure web portal for healthcare providers and patients to manage appointments, medical records, and communications. The system prioritizes security while maintaining a user-friendly interface.',
    image: 'https://images.pexels.com/photos/4098151/pexels-photo-4098151.jpeg',
    category: 'web',
    technologies: ['Angular', 'Express', 'PostgreSQL', 'Socket.io'],
    features: [
      'Secure patient portals and profiles',
      'Appointment scheduling and reminders',
      'Medical record management',
      'Secure messaging between patients and providers',
      'Insurance and billing integration'
    ],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/example'
  },
  {
    title: 'Smart Home Control App',
    description: 'A mobile application that integrates with smart home devices to provide centralized control and automation. The app features an elegant, intuitive interface for managing all aspects of a connected home.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'IoT Protocols', 'BLE'],
    features: [
      'Universal device control',
      'Customizable automation routines',
      'Voice command integration',
      'Energy usage monitoring',
      'Security system management'
    ],
    repoUrl: 'https://github.com/example'
  }
];