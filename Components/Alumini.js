"use client";
import React, { useState, useEffect } from 'react';

const Alumini = () => {
  const alumniData = [
    { name: "John Doe", course: "BCA (2023-2026)", package: "₹ 1.37 crore", placedAt: "Meta" },
    { name: "Jane Smith", course: "BCA (2023-2026)", package: "₹ 80 lakh", placedAt: "Google" },
    { name: "Sam Wilson", course: "BCA (2022-2025)", package: "₹ 1 crore", placedAt: "Amazon" },
    { name: "Alice Brown", course: "BCA (2023-2026)", package: "₹ 95 lakh", placedAt: "Microsoft" },
    { name: "Michael Lee", course: "BCA (2021-2024)", package: "₹ 60 lakh", placedAt: "Apple" },
    { name: "Emma Davis", course: "BCA (2022-2025)", package: "₹ 75 lakh", placedAt: "Netflix" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4); // Default to 4 cards for desktop

  // Update visible cards based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // Mobile view, show 1 card at a time
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet view, show 2 cards at a time
      } else {
        setVisibleCards(4); // Desktop view, show 4 cards at a time
      }
    };

    updateVisibleCards(); // Initial call to set correct card view
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = alumniData.length - visibleCards;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="alumini bg-slate-50 flex flex-col py-4 h-[80vh] justify-center">
      <h1 className="text-3xl font-bold text-center mb-8 uppercase">
        Our Alumni are working with
      </h1>
      <div className="alumini-slider relative flex justify-center items-center">
        <button onClick={handlePrev} className="absolute left-0 p-2 bg-gray-200 rounded">←</button>

        {/* Container for cards */}
        <div className="alumini-container overflow-hidden w-[80%]">
          <div
            className="alumini-track flex transition-transform duration-500"
            style={{
              width: `${(alumniData.length / visibleCards) * 100}%`,
              transform: `translateX(-${currentIndex * 17}%)`,
            }}
          >
            {alumniData.map((alumini, index) => (
              <div
                key={index}
                className={`alumini-card w-[${100 / visibleCards}%] flex flex-col justify-center items-center gap-4 min-h-[300px] bg-white shadow-lg p-4 m-2`}
              >
                <div className="img w-[40%] lg:w-[60%] bg-slate-100">
                  <img src="/user.png" alt={alumini.name} />
                </div>
                <div className="info flex flex-col justify-center items-center">
                  <div className="name text-lg font-bold">{alumini.name}</div>
                  <div className="course text-sm font-semibold text-red-500">{alumini.course}</div>
                  <div className="package text-xl font-semibold">
                    CTC <span className="font-bold text-blue-500">{alumini.package}</span>
                  </div>
                  <div className="placedAt text-sm font-semibold pt-2">Placed at {alumini.placedAt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleNext} className="absolute right-0 p-2 bg-gray-200 rounded">→</button>
      </div>
    </div>
  );
};

export default Alumini;
