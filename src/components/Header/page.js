"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../Header/header.css";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Berita", href: "#berita" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" }, // tambah kontak
];

const Header = ({ title }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPos = window.scrollY + 100;
      let current = null;
      sections.forEach((section, idx) => {
        if (section && section.offsetTop <= scrollPos) {
          current = navLinks[idx].href;
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-400 ${
        scrolled
          ? "bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#6a11cb] shadow-lg"
          : "bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#6a11cb] text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          className={`text-3xl md:text-4xl font-bold cursor-pointer select-none ${
            scrolled ? "text-[#2575fc]" : "text-white italic drop-shadow-lg"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          title="Scroll to top"
        >
          {title}
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-10 font-semibold">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`
        relative px-3 py-2 rounded-md
        transition-colors duration-300
        hover:text-[#facc15]
        ${
          activeLink === href
            ? "text-[#facc15]"
            : scrolled
            ? "text-gray-200"
            : "text-white"
        }
      `}
              onClick={() => setActiveLink(href)}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#facc15] transition-all duration-300 ${
                  activeLink === href ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden relative w-10 h-10 flex flex-col justify-center items-center group`}
          aria-label="Toggle Menu"
          title="Toggle Menu"
        >
          <span
            className={`block h-1 w-7 rounded-lg transition-transform duration-300 ease-in-out
            ${
              menuOpen
                ? "rotate-45 translate-y-2 bg-[#2575fc]"
                : "bg-white group-hover:bg-[#2575fc]"
            }`}
          />
          <span
            className={`block h-1 w-7 rounded-lg my-1 transition-opacity duration-300 ease-in-out
            ${menuOpen ? "opacity-0" : "opacity-100 group-hover:bg-[#2575fc]"}`}
          />
          <span
            className={`block h-1 w-7 rounded-lg transition-transform duration-300 ease-in-out
            ${
              menuOpen
                ? "-rotate-45 -translate-y-2 bg-[#2575fc]"
                : "bg-white group-hover:bg-[#2575fc]"
            }`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        className={`md:hidden bg-white shadow-md transition-max-height duration-400 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-3 font-semibold text-[#facc15]">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => {
                  handleLinkClick();
                  setActiveLink(href);
                }}
                className={`block px-3 py-2 rounded-md hover:bg-yellow-400/20 transition-colors duration-200 ${
                  activeLink === href ? "bg-yellow-300/30" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
