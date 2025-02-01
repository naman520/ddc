import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-7xl ">
      <div className="flex justify-around bg-[#423B3C] text-[#f8cfda] pt-7 shadow-md pb-2 w-[100vw] text-xl relative">
        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden absolute left-5 bg-white text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-5">
          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/projects">Our Projects</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/about">About Us</Link>
        </div>

        {/* Logo / Title (Centered) */}
        <div className="text-xl font-semibold">Dholera Dream City</div>

        {/* Contact Links (Desktop) */}
        <div className="hidden md:flex space-x-5">
          <Link to="/contact">Contact Us</Link>
          <Link to="/book-call">Book A Call</Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white text-lg space-y-4 py-4 border-t">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/properties" onClick={() => setIsOpen(false)}>Properties</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Our Projects</Link>
          <Link to="/faqs" onClick={() => setIsOpen(false)}>FAQs</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/book-call" onClick={() => setIsOpen(false)}>Book A Call</Link>
        </div>
      )}
    </div>
  );
}
