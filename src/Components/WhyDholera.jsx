import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/dholera2.jpeg";

export default function WhyDholera() {
  return (
    <div className="relative flex items-center justify-center md:h-screen px-5 py-10">
      {/* Background Image */}
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={img2}
          alt="Dholera"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />

        {/* Text Overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 p-5 text-center rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Dholera?
          </h2>
          <p className="text-sm md:text-xl text-white max-w-2xl">
            Dholera Special Investment Region (DSIR), located about 100
            kilometers southwest of Ahmedabad, is shaping up to be India’s most
            ambitious smart city project.
          </p>
          <p className="mt-4 text-sm md:text-xl text-white max-w-2xl">
            Spread across a massive 920 square kilometers, this futuristic city
            is part of the Delhi-Mumbai Industrial Corridor (DMIC), a
            groundbreaking initiative designed to transform India’s industrial
            and urban landscape.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
