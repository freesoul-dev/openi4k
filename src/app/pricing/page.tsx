import React from 'react';

// Define interfaces for better type safety
interface VideoService {
  name: string;
  rate: string;
  notes: string;
}

interface WebService {
  name: string;
  rate: string;
  notes: string;
}

interface WebPlan {
  type: string;
  rate: string;
  details: string;
}

const videoServices: VideoService[] = [
  { name: 'Camera Fee (Sony a7S III)', rate: '$70', notes: 'Flat fee for camera system use' },
  { name: '4K Filming Rate', rate: '$55 - $70 per hour', notes: 'Sliding scale based on project complexity/duration' },
  { name: 'Drone Fee (DJI Mini 3 Pro)', rate: '$70', notes: 'Flat fee for drone use' },
  { name: '4K Drone Footage', rate: '$50 per hour', notes: 'Hourly rate for 4K aerial footage' },
  { name: 'Editing (Adobe Premiere Pro or CapCut Pro)', rate: '$35 -  $65 per hour', notes: 'Sliding scale based on project duration' },
];

const webServices: WebService[] = [
  { name: 'Web Design Rate', rate: '$35 - $55 per hour', notes: 'Sliding scale for creative design process' },
  { name: 'Web Development Rate', rate: '$45 - $75 per hour', notes: 'Hourly rate for coding and implementation' },
];

const webPlans: WebPlan[] = [
  {
    type: 'Monthly Plan (Web Design & Development)',
    rate: '$150 per month',
    details: '$$0 down to start; includes monthly maintenance updates (does not include e-commerce or blog maintenance)',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '960px', margin: '40px auto', padding: '20px', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center', color: '#fff', marginBottom: '40px' }}>
        Production & Development Services: Pricing Guide
      </h1>

      <p style={{ marginBottom: '30px', color: '#fff' }}>
        Thank you for your interest in my production and development services. This guide outlines my standard rates for various offerings. Please note that all rates are subject to project scope and specific client needs.
      </p>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#fff', marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
          Video Production Services
        </h2>
        <p style={{ marginBottom: '20px', color: '#fff' }}>
          My video production services leverage high-quality equipment to capture stunning visuals for your projects.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr style={{ }}>
                <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Service</th>
                <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Rate</th>
                <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {videoServices.map((service, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px 15px' }}>{service.name}</td>
                  <td style={{ padding: '10px 15px' }}>{service.rate}</td>
                  <td style={{ padding: '10px 15px' }}>{service.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#fff', marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
          Web Design & Development Services
        </h2>
        <p style={{ marginBottom: '20px', color: '#fff' }}>
          I offer comprehensive web design and development services to create engaging and functional online presences.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr style={{ }}>
                <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Service</th>
                <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Rate</th>
                <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {webServices.map((service, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px 15px' }}>{service.name}</td>
                  <td style={{ padding: '10px 15px' }}>{service.rate}</td>
                  <td style={{ padding: '10px 15px' }}>{service.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ color: '#fff', marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
          $0 Down Web Design & Development Plans
        </h3>
        <p style={{ marginBottom: '20px', color: '#fff' }}>
          I understand that upfront costs can be a barrier. That's why I offer flexible payment plans for web design and development projects.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr style={{ }}>
                <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Plan Type</th>
                <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Rate</th>
                <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Details</th>
              </tr>
            </thead>
            <tbody>
              {webPlans.map((plan, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px 15px' }}>{plan.type}</td>
                  <td style={{ padding: '10px 15px' }}>{plan.rate}</td>
                  <td style={{ padding: '10px 15px' }}>{plan.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>
        I'm happy to discuss your specific project needs and provide a tailored quote. Please feel free to reach out to schedule a consultation.
      </p>
    </div>
  );
};

export default PricingPage;