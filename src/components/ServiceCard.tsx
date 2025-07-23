// src/components/ServiceCard.tsx
import React from 'react';
import { Service } from '../lib/types/services'; // Path from components to lib/types
import styles from '../styles/ServiceCard.module.css'; // Path from components to styles

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={styles.serviceCard}>
      <span className={styles.serviceIcon}>{service.icon}</span>
      <h2 className={styles.serviceTitle}>{service.title}</h2>
      <p className={styles.serviceDescription}>{service.description}</p>
    </div>
  );
};

export default ServiceCard;