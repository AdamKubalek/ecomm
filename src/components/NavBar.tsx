// generate NavBar component with tailwind its a store

import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-teal-500 p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <span className="text-xl font-semibold tracking-tight">Tailwind</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white">
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/"
            className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Contact
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
          >
            Download
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
