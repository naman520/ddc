import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/dholera2.jpeg";

export default function WhyDholera() {
  return (
    <div className="relative flex flex-col md:flex-row items-center md:h-screen px-5 py-10">
      {/* Left Side - Text with Animation */}
      <motion.div
        className="md:w-1/2 text-white bg-black/60 p-5 md:p-10 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Dholera?</h2>
        <p className="text-lg md:text-xl">
          Dholera Special Investment Region (DSIR), located about 100
          kilometers southwest of Ahmedabad, is shaping up to be India’s
          most ambitious smart city project.
        </p>
        <p className="mt-4 text-lg md:text-xl">
          Spread across a massive 920 square kilometers, this futuristic city is
          part of the Delhi-Mumbai Industrial Corridor (DMIC), a groundbreaking
          initiative designed to transform India’s industrial and urban
          landscape.
        </p>
      </motion.div>

      {/* Right Side - Image with Animation */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={img2}
          alt="Dholera"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
}
