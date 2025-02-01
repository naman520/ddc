import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Circle, Instagram } from "lucide-react";

const InstagramReelsNavigator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reels = [
    "https://www.instagram.com/reel/DFNT9lXMZcW/",
    "https://www.instagram.com/reel/DFNYnpwMNT4/",
    "https://www.instagram.com/reel/DFNT9lXMZcW/",
    "https://www.instagram.com/reel/DFNYnpwMNT4/",
  ];

  const nextReel = () => {
    setCurrentIndex((prev) => (prev + 1) % reels.length);
  };

  const prevReel = () => {
    setCurrentIndex((prev) => (prev - 1 + reels.length) % reels.length);
  };

  const goToReel = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" max-w-2xl mx-auto px-4 pt-20">
      {/* Header */}
      <div className="flex justify-center gap-2 mb-6">
        <Instagram className="h-6 md:mt-2 w-6 text-pink-500" />
        <h2 className="text-xl md:text-3xl font-semibold">Our Latest Reels</h2>
      </div>

      {/* Main content */}
      <div className="relative flex justify-center items-center">
        <iframe
          src={`${reels[currentIndex]}embed/`}
          width="80%"
          className="md:h-[600px] max-sm:h-[400px]"
          style={{
            border: "none",
            overflow: "hidden",
          }}
          allowFullScreen
        ></iframe>

        {/* Navigation buttons */}
        <button
          onClick={prevReel}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
          aria-label="Previous reel"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextReel}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
          aria-label="Next reel"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {reels.map((_, index) => (
          <button
            key={index}
            onClick={() => goToReel(index)}
            className="p-1"
            aria-label={`Go to reel ${index + 1}`}
          >
            <Circle
              className={`h-4 w-4 ${
                currentIndex === index ? "fill-current text-pink-500" : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default InstagramReelsNavigator;
