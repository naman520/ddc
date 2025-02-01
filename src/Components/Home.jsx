import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Nav/Navbar";
import img1 from "../assets/dholera.jpeg";
import img2 from "../assets/dholera2.jpeg";
import WhyDholera from "./WhyDholera";
import ExploreProperties from "./ExploreProperties";
import InstagramReelsNavigator from "./InstagramReelsNavigator";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl font-serif">
        <div className="w-[100vw]">
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
              <div className="md:text-xl pt-16 font-semibold max-sm:hidden">
                &copy; 2025 Dholera Dream City
                <br className="max-sm:hidden" />
                All rights Reserved
              </div>
              <div className="font-extralight max-sm:pt-4 text-xl max-sm:pl-2 pr-2">
                with expert guidance and deep understanding of Dholera's real
                estate <br className="max-sm:hidden" /> landscape we make your
                journey beautiful
              </div>
            </motion.div>
          </div>

          {/* Background Image Section */}
          <div className="relative pt-20 mb-20 flex justify-center h-screen">
            <motion.img
              src={img1}
              alt=""
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="pl-10 w-full pr-10 rounded-xl overflow-hidden h-full object-cover"
            />

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="absolute md:bottom-20 bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-white shadow-lg rounded-lg p-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
                {/* Search Inputs */}
                <input
                  type="text"
                  placeholder="What to look for?"
                  className="p-3 border rounded-md"
                />
                <select className="p-3 border rounded-md">
                  <option>Property Type</option>
                </select>
                <select className="p-3 border rounded-md">
                  <option>Price</option>
                </select>
                <select className="p-3 border rounded-md">
                  <option>All Cities</option>
                </select>

                {/* Search Button with Hover Animation */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white p-3 rounded-md"
                >
                  🔍 Search
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Section 3 Video  */}
          <div>
            <WhyDholera/>
          </div>
          {/* Explore Dholera Projects */}
          <div className="bg-[#15191A] pb-10">
                <ExploreProperties/>
          </div>

          {/* Social Media */}
          <div className="pb-5">
            <InstagramReelsNavigator/>
          </div>

          {/* Milestones */}
            <div className="bg-[#CCC4C2] pb-10">
              <Testimonials/>
            </div>
        </div>
      </div>
    </>
  );
}
