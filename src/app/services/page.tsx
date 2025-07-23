// src/app/services/page.tsx
import React from 'react';
import { Metadata } from 'next'; // For SEO metadata in App Router

import { servicesData } from '@/lib/servicesData'; // Using '@/lib' alias if configured
import ServiceCard from '@/components/ServiceCard'; // Using '@/components' alias if configured
import styles from '@/styles/ServicesPage.module.css'; // Using '@/styles' alias if configured

// --- Metadata for SEO (Next.js App Router Feature) ---
export const metadata: Metadata = {
  title: 'Our Services - Free World Agency',
  description: 'Discover the full-stack creative services offered by Free World Agency, including videography, graphic design, web development, branding, and marketing for events, companies, and brands.',
  keywords: ['videography', 'graphic design', 'web design', 'web development', 'branding', 'marketing campaigns', 'creative agency', 'full-stack creative', 'event services', 'brand services'],
  openGraph: {
    title: 'Our Services - Free World Agency',
    description: 'Discover the full-stack creative services offered by Free World Agency.',
    url: 'https://www.free-world.agency/services', // Replace with your actual domain
    siteName: 'Free World Agency',
    images: [
      {
        url: 'https://www.free-world.agency/og-image.jpg', // Path to your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Free World Agency Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Free World Agency',
    description: 'Full-stack creative services for events, companies, and brands.',
    // creator: '@yourtwitterhandle', // Optional: Your Twitter handle
    images: ['https://www.free-world.agency/twitter-image.jpg'], // Path to your Twitter card image
  },
};
// --- End Metadata ---


const ServicesPage = () => { // No need for React.FC here in App Router pages
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.pageTitle}>Our Full-Stack Creative Services</h1>
      <p className={styles.pageDescription}>
        At Free World Agency, we offer a comprehensive suite of creative services designed to
        empower events, companies, and brands. Our full-stack approach ensures
        cohesive and impactful solutions across all your creative needs.
      </p>
      <div className={styles.servicesGrid}>
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;