
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EarringsCarousel = ({ earrings }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % earrings.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + earrings.length) % earrings.length);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md md:max-w-lg">
        {/* Main Image Display */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-card shadow-lg">
          <img
            key={currentIndex}
            src={earrings[currentIndex].url}
            alt={earrings[currentIndex].alt}
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ animation: 'fadeIn 0.5s ease-in-out' }}
            data-sparkle="true"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevItem}
          className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-background/90 hover:bg-background rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 z-10"
          aria-label="Anterior joya"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>

        <button
          onClick={nextItem}
          className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-background/90 hover:bg-background rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 z-10"
          aria-label="Siguiente joya"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>

        {/* Position Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/90 px-3 py-1.5 rounded-full shadow-lg z-10">
          <span className="text-xs md:text-sm font-semibold text-foreground">
            {currentIndex + 1} de {earrings.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EarringsCarousel;
