import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Navigationbar = () => {
  const [open, setOpen] = useState(false);

  const baseClass = "px-3 py-2 rounded-md font-semibold transition-colors";

  const activeClass = "bg-sky-200 text-sky-900";

  const inactiveClass =
    "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800";

  const navItemClass: NavLinkProps["className"] = ({ isActive }) =>
    `${baseClass} ${isActive ? activeClass : inactiveClass}`;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-6 py-4">
      <div className="flex justify-between items-center">
        <NavLink
          to="/"
          className="font-semibold text-lg text-gray-900 dark:text-white"
        >
          Lucienne N.Y. Disch
        </NavLink>

        <button
          className="md:hidden text-gray-700 dark:text-gray-200 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <div className="hidden md:flex space-x-2">
          {/* <NavLink to="/publications" className={navItemClass}>
            Publications
          </NavLink>
          <NavLink to="/projects" className={navItemClass}>
            Projects
          </NavLink> */}
          <NavLink to="/research" className={navItemClass}>
            Research
          </NavLink>
          <NavLink to="/teaching" className={navItemClass}>
            Teaching
          </NavLink>
          {/* <NavLink to="/talks" className={navItemClass}>
            Talks
          </NavLink> */}
          <NavLink to="/repositories" className={navItemClass}>
            Repositories
          </NavLink>
          <NavLink to="/contact" className={navItemClass}>
            Contact
          </NavLink>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-2">
          {/* <NavLink
            to="/publications"
            onClick={() => setOpen(false)}
            className={navItemClass}
          >
            Publications
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setOpen(false)}
            className={navItemClass}
          >
            Projects
          </NavLink> */}
          <NavLink
            to="/research"
            onClick={() => setOpen(false)}
            className={navItemClass}
          >
            Research
          </NavLink>
          <NavLink
            to="/teaching"
            onClick={() => setOpen(false)}
            className={navItemClass}
          >
            Teaching
          </NavLink>
          {/* <NavLink
            to="/talks"
            onClick={() => setOpen(false)}
            className={navItemClass}
          >
            Talks
          </NavLink> */}
          <NavLink
            to="/repositories"
            onClick={() => setOpen(false)}
            className={navItemClass}
          >
            Repositories
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={navItemClass}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};
