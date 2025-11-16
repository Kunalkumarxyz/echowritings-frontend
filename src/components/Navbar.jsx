// src/components/Navbar.jsx
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "./ThemeProvider.jsx";
import logo from "../assets/Logo.jpg";

const navItemClass = ({ isActive }) =>
  `px-3 py-2 rounded-xl text-sm md:text-base ${
    isActive ? "text-brand" : "text-neutral-700 dark:text-neutral-200"
  } hover:text-brand focus:outline-none nav-link`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const preventFocus = (e) => e.preventDefault();
  const toggleMenu = (e) => {
    e.preventDefault();
    setOpen((prev) => {
      if (prev) document.activeElement?.blur?.();
      return !prev;
    });
  };

  const closeAndBlur = (e) => {
    e?.currentTarget?.blur?.();
    e?.target?.blur?.();
    setOpen(false);
    setTimeout(() => document.activeElement?.blur?.(), 10);
  };

  const mobileThemeBtn = `
    flex-1 text-sm px-3 py-2 rounded-md 
    bg-amber-400 dark:bg-amber-600 
    text-neutral-900 dark:text-neutral-100 
    border-none outline-none shadow-none
    focus:outline-none focus:ring-0 focus-visible:outline-none
    active:outline-none ring-0
  `;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">

      <style>{`
        /* Logo floating animation */
        .logo-wiggle {
          animation: wiggleMove 3.8s ease-in-out infinite;
        }
        @keyframes wiggleMove {
          0%   { transform: translate(0px, 0px); }
          20%  { transform: translate(1.5px, -1.5px); }
          40%  { transform: translate(-1.5px, 1.5px); }
          60%  { transform: translate(1px, 1px); }
          80%  { transform: translate(-1px, -1px); }
          100% { transform: translate(0px, 0px); }
        }

        /* Remove focus border from EchoWritings text */
        .brand-text {
          outline: none !important;
          border: none !important;
        }
        .brand-text:focus,
        .brand-text:active {
          outline: none !important;
          border: none !important;
        }
      `}</style>

      <div className="container-px mx-auto flex items-center justify-between h-16 gap-4">

        {/* LOGO + BRAND */}
        <Link to="/" className="flex items-center gap-3 shrink-0 brand-text">
          <div className="w-11 h-11 rounded-full overflow-hidden shadow border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 logo-wiggle">
            <img
              src={logo}
              alt="EchoWritings Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="font-semibold text-lg brand-text select-none">
            <span className="text-neutral-900 dark:text-white">Echo</span>
            <span className="text-brand">Writings</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navItemClass} end>Home</NavLink>
          <NavLink to="/about" className={navItemClass}>About</NavLink>
          <NavLink to="/services" className={navItemClass}>Services</NavLink>
          <NavLink to="/stories" className={navItemClass}>Stories</NavLink>
          <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggle}
            className="px-3 py-2 rounded-md text-sm text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-600 bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-800"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>

          <Link to="/contact" className="px-4 py-2 rounded-md bg-amber-500 hover:bg-amber-600 text-white font-semibold">
            Get Started
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          ref={toggleRef}
          onClick={toggleMenu}
          onMouseDown={preventFocus}
          onTouchStart={preventFocus}
          className="md:hidden p-2 rounded-md"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" className="text-neutral-900 dark:text-white">
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        ref={panelRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        } bg-white dark:bg-neutral-900 border-t border-neutral-300 dark:border-neutral-800`}
      >
        <div className="container-px py-3 flex flex-col gap-2">

          <NavLink onClick={closeAndBlur} to="/" className={navItemClass} end>Home</NavLink>
          <NavLink onClick={closeAndBlur} to="/about" className={navItemClass}>About</NavLink>
          <NavLink onClick={closeAndBlur} to="/services" className={navItemClass}>Services</NavLink>
          <NavLink onClick={closeAndBlur} to="/stories" className={navItemClass}>Stories</NavLink>
          <NavLink onClick={closeAndBlur} to="/contact" className={navItemClass}>Contact</NavLink>

          <div className="border-t border-neutral-300 dark:border-neutral-800 my-2"></div>

          <button
            className={mobileThemeBtn}
            onMouseDown={preventFocus}
            onTouchStart={preventFocus}
            onClick={(e) => {
              preventFocus(e);
              toggle();
              closeAndBlur(e);
            }}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>

          <p className="text-xs mt-2 text-neutral-600 dark:text-neutral-400">
            EchoWritings — Motivation & quotes everyday.
          </p>
        </div>
      </div>
    </header>
  );
}
