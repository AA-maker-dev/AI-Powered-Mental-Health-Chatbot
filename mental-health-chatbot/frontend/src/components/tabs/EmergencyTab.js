import React from 'react';
import '../styles/EmergencyTab.css';

function EmergencyTab() {
  const emergencyContacts = [
    {
      country: 'United States',
      services: [
        { name: 'National Suicide Prevention Lifeline', number: '988', available: '24/7' },
        { name: 'Crisis Text Line', number: 'Text HOME to 741741', available: '24/7' },
        { name: 'SAMHSA National Helpline', number: '1-800-662-4357', available: '24/7' }
      ]
    },
    {
      country: 'United Kingdom',
      services: [
        { name: 'Samaritans', number: '116 123', available: '24/7' },
        { name: 'Crisis Text Line', number: 'Text SHOUT to 85258', available: '24/7' },
        { name: 'Mind Support', number: '0300 123 3393', available: '09:00-17:00' }
      ]
    },
    {
      country: 'Canada',
      services: [
        { name: 'Canada Suicide Prevention Service', number: '1-833-456-4566', available: '24/7' },
        { name: 'Crisis Text Line Canada', number: 'Text HOME to 741741', available: '24/7' }
      ]
    },
    {
      country: 'Australia',
      services: [
        { name: 'Lifeline', number: '13 11 14', available: '24/7' },
        { name: 'Kids Helpline', number: '1800 55 1800', available: '24/7' },
        { name: 'Beyond Blue', number: '1300 224 636', available: '24/7' }
      ]
    }
  ];

  return (
    <div className="emergency-tab">
      <div className="emergency-header">
        <h2>Emergency Support</h2>
        <p className="emergency-subtitle">If you're in crisis, please reach out. You're not alone.</p>
      </div>

      <div className="emergency-warning">
        <span className="warning-icon">⚠️</span>
        <div>
          <strong>In immediate danger?</strong> Call emergency services (911 in US, 999 in UK, 000 in Australia)
        </div>
      </div>

      <div className="contacts-container">
        {emergencyContacts.map((region, idx) => (
          <div key={idx} className="contact-region">
            <h3>{region.country}</h3>
            <div className="contact-list">
              {region.services.map((service, serviceIdx) => (
                <div key={serviceIdx} className="contact-item">
                  <div className="contact-info">
                    <div className="contact-name">{service.name}</div>
                    <div className="contact-availability">{service.available}</div>
                  </div>
                  <div className="contact-number">
                    {service.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="emergency-tips">
        <h3>What to do in a crisis:</h3>
        <ul>
          <li>✓ Call or text a crisis helpline - they're trained to help</li>
          <li>✓ Reach out to a trusted friend or family member</li>
          <li>✓ Go to your nearest emergency room if you feel unsafe</li>
          <li>✓ Remove access to means of self-harm if possible</li>
          <li>✓ Be honest about how you're feeling</li>
        </ul>
      </div>
    </div>
  );
}

export default EmergencyTab;