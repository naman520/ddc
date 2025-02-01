import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Nav/Navbar";
import img1 from "../assets/dholera.jpeg";
import img2 from "../assets/dholera2.jpeg";
import WhyDholera from "./WhyDholera";
import ExploreProperties from "./ExploreProperties";
import InstagramReelsNavigator from "./InstagramReelsNavigator";
import Testimonials from "./Testimonials";

export default function Home2() {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Fade up animation for sections
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div 
        className="max-w-7xl font-serif"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="w-[100vw]"
          variants={fadeUpVariants}
        >
          <Navbar />

          {/* Hero Section with Motion */}
          <div className="flex flex-col md:flex-row justify-around font-bold pt-10 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:text-7xl text-2xl md:pt-20"
            >
              &nbsp;Guiding Your Path
              <br className="max-sm:hidden" />
              &nbsp;to a new home in <br className="max-sm:hidden" />
              &nbsp;Dholera
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="space-y-32"
            >
              <motion.div 
                className="md:text-xl pt-16 font-semibold max-sm:hidden"
                whileHover={{ scale: 1.05 }}
              >
                &copy; 2025 Dholera Dream City
                <br className="max-sm:hidden" />
                All rights Reserved
              </motion.div>
              <motion.div 
                className="font-extralight max-sm:pt-4 text-xl max-sm:pl-2 pr-2"
                whileHover={{ scale: 1.02 }}
              >
                with expert guidance and deep understanding of Dholera's real
                estate <br className="max-sm:hidden" /> landscape we make your
                journey beautiful
              </motion.div>
            </motion.div>
          </div>

          {/* Background Image Section */}
          <div className="relative pt-20 mb-20 flex justify-center h-screen">
            <motion.img
              src={img1}
              alt=""
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="pl-10 w-full pr-10 rounded-xl overflow-hidden h-full object-cover"
            />

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="absolute md:bottom-20 bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-white shadow-lg rounded-lg p-5"
            >
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-5 gap-4"
                variants={containerVariants}
              >
                {/* Search Inputs with hover effects */}
                <motion.input
                  type="text"
                  placeholder="What to look for?"
                  className="p-3 border rounded-md"
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 8px rgba(0,0,0,0.2)" }}
                />
                <motion.select 
                  className="p-3 border rounded-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <option>Property Type</option>
                </motion.select>
                <motion.select 
                  className="p-3 border rounded-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <option>Price</option>
                </motion.select>
                <motion.select 
                  className="p-3 border rounded-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <option>All Cities</option>
                </motion.select>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-black text-white p-3 rounded-md"
                >
                  🔍 Search
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Section 3 Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <WhyDholera/>
          </motion.div>

          {/* Explore Dholera Projects */}
          <motion.div 
            className="bg-[#15191A] pb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ExploreProperties/>
          </motion.div>

          {/* Social Media */}
          <motion.div 
            className="pb-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <InstagramReelsNavigator/>
          </motion.div>

          {/* Milestones */}
          <motion.div 
            className="bg-[#CCC4C2] pb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Testimonials/>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}