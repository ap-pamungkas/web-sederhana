"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../Header/header.css";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Berita", href: "#berita" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
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
      const scrollPos = window.scrollY + 80; // Kurangi offset untuk deteksi active section
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

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false); // Tutup menu mobile
    
    // Tambahkan smooth scroll dengan offset untuk sticky header
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80; // Tinggi header sticky
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  // Tutup menu ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('header')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Tutup menu ketika resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            scrolled ? "text-white" : "text-white italic drop-shadow-lg"
          }`}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false); // Tutup menu jika buka
          }}
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
              onClick={() => handleLinkClick(href)}
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
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          className={`md:hidden relative w-10 h-10 flex flex-col justify-center items-center group z-60`}
          aria-label="Toggle Menu"
          title="Toggle Menu"
        >
          <span
            className={`block h-1 w-7 rounded-lg transition-transform duration-300 ease-in-out
            ${
              menuOpen
                ? "rotate-45 translate-y-2 bg-white"
                : "bg-white group-hover:bg-[#facc15]"
            }`}
          />
          <span
            className={`block h-1 w-7 rounded-lg my-1 transition-opacity duration-300 ease-in-out
            ${menuOpen ? "opacity-0" : "opacity-100 bg-white group-hover:bg-[#facc15]"}`}
          />
          <span
            className={`block h-1 w-7 rounded-lg transition-transform duration-300 ease-in-out
            ${
              menuOpen
                ? "-rotate-45 -translate-y-2 bg-white"
                : "bg-white group-hover:bg-[#facc15]"
            }`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-3 font-semibold">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(href);
                }}
                className={`block px-3 py-2 rounded-md hover:bg-blue-50 transition-colors duration-200 
                  ${
                    activeLink === href 
                      ? "bg-blue-100 text-[#2575fc] font-bold" 
                      : "text-gray-700 hover:text-[#2575fc]"
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