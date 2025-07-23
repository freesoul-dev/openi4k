// src/lib/servicesData.ts
import { Service } from './types/services'; // Adjust path based on exact placement if needed

export const servicesData: Service[] = [
  {
    id: 'videography',
    title: 'Videography',
    description: 'From concept to post-production, we capture compelling visual stories for events, companies, and brands. Our services include cinematic video production, corporate videos, event coverage, promotional content, and more.',
    icon: '🎥' // Or use a path: '/images/videography-icon.svg'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Creative and impactful graphic design solutions to elevate your brand. We specialize in logo design, brand guidelines, marketing collateral (brochures, flyers), social media graphics, and print design.',
    icon: '🎨'
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Visually stunning and user-friendly web designs that leave a lasting impression. Our expertise covers UI/UX design, responsive layouts, interactive elements, and ensuring a seamless user experience across all devices.',
    icon: '🖥️'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Robust and scalable web development services to bring your digital vision to life. We build custom websites, e-commerce platforms, content management systems, and ensure optimal performance and security.',
    icon: '💻'
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Develop a unique and memorable brand identity that resonates with your target audience. Our branding services include brand strategy, naming, visual identity creation, and brand guide development.',
    icon: '🏷️'
  },
  {
    id: 'marketing-campaigns',
    title: 'Marketing Campaigns',
    description: 'Strategic and results-driven marketing campaigns to boost your visibility and engagement. We offer digital marketing strategies, content marketing, social media management, and SEO optimization.',
    icon: '📈'
  },
  {
    id: 'full-stack-creative',
    title: 'Full-Stack Creative Solutions',
    description: 'A comprehensive approach to your creative needs, integrating all our services for a cohesive and powerful presence. Ideal for events, companies, and brands seeking an end-to-end creative partner.',
    icon: '💡'
  }
];