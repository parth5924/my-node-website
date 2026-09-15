"use client";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoUrl =
    "https://scontent-bom5-2.cdninstagram.com/v/t51.82787-19/552971430_17842265736587626_7114327637964217142_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=100&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy41NjcuQzMifQ%3D%3D&_nc_ohc=iQB5RMiuHz4Q7kNvwE3nT1c&_nc_oc=AdoZIgRhzAxzZV55w-nUJObikx4_OyKd1hlWNr7j0xp-C3I0PBIOL5d-rjwHeLAn1EI&_nc_zt=24&_nc_ht=scontent-bom5-2.cdninstagram.com&_nc_gid=Hf1lLVBaAwSWrA8zRD7DDw&_nc_ss=79689&oh=00_AQKEu7x4w1cHHTrq2ChKE9HCYOUUqX-Mk_vYi8cub_P1OQ&oe=6AAF25FA";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img
                src={logoUrl}
                alt="Anshchildcare logo"
                className="w-10 h-10 rounded-lg object-cover border border-sky-100"
              />
              <span className="text-xl max-sm:hidden font-bold text-gray-900">
                Anshchildcare
              </span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-sky-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-sky-500 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-sky-500 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-sky-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+91 8200635101</span>
            </div>
            <a href="tel:+918200635101">
              <Button className="bg-sky-500 hover:bg-sky-600">Book Consultation</Button>
            </a>
            <Button
              className="bg-white hover:bg-white md:hidden p-2 text-gray-700 hover:text-sky-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          <Link href="/" className="block text-gray-900 hover:text-sky-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-sky-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="/services" className="block text-gray-700 hover:text-sky-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Services
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-sky-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Phone className="h-4 w-4" />
            <span>+91 8200635101</span>
          </div>
          <a href="tel:+918200635101" className="block">
            <Button className="w-full bg-sky-500 hover:bg-sky-600">Book Consultation</Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
