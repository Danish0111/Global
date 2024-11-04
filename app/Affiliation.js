import React from 'react';
// import './AffiliationSlider.css'; // Import your CSS file

const affiliations = [
  { id: 1, logo: '/UP.png', alt: 'Affiliation 1' },
  { id: 2, logo: 'AICTE.png', alt: 'Affiliation 2' },
  { id: 2, logo: 'NCTE.png', alt: 'Affiliation 3' },
  { id: 2, logo: 'CCSU.png', alt: 'Affiliation 4' },
  { id: 2, logo: 'APJ.png', alt: 'Affiliation 5' },
  // ... more affiliations
];

export default function AffiliationSlider() {
  // Duplicate affiliations for seamless scrolling
  const duplicatedAffiliations = [...affiliations, ...affiliations];

  return (
    <>
      <div className="contain">
        <div className="affiliation-slider">
          <div className="slider-track">
            {duplicatedAffiliations.map((affiliation, index) => (
              <div className="slide" key={index}>
                <img src={affiliation.logo} alt={affiliation.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
