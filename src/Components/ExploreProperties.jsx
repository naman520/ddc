import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/dholera.jpeg";
import img2 from "../assets/dholera2.jpeg";
import img3 from "../assets/dholera3.jpeg";

const images = [img1, img2, img3];

export default function ExploreProperties() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="pt-5">
      <div className="text-center text-amber-200 font-bold font-serif md:text-5xl text-2xl">
        Explore Our Property Listings
      </div>
      <p className="text-center text-white text-sm font-extralight mt-2">
        From cozy apartments to spacious family homes, our diverse listings
        cater to various needs and preferences
      </p>
      <div className="flex justify-center pt-5">
        <div className="bg-white h-10 w-[10%] max-sm:w-[30%] flex rounded-2xl border border-black justify-center text-center">
          <p className="pt-2">Dholera, Gujarat</p>
        </div>
      </div>
      <div className="flex justify-center pt-10 max-sm:pr-10 max-sm:pl-10 overflow-hidden relative">
        <motion.img
          key={index}
          src={images[index]}
          alt="Property"
          className="h-[500px] w-[1000px] rounded-lg shadow-lg cursor-pointer"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <button
          onClick={handlePrev}
          className="absolute left-10 bottom-5 md:left-1/4 md:bottom-5 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-10 bottom-5 md:right-1/4 md:bottom-5 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
