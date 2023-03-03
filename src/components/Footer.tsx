// make a beautiful footer for e store website with nextjs and typescript and tailwindcss
//

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a href="#" className="mx-3 text-gray-200 hover:text-gray-400">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 0" />
              </svg>
            </a>
            <a href="#" className="mx-3 text-gray-200 hover:text-gray-400">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 0" />
              </svg>
            </a>
            <a href="#" className="mx-3 text-gray-200 hover:text-gray-400">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 0" />
              </svg>
            </a>
          </div>
          <div className="mt-2 md:order-1 md:mt-0">
            <a href="#" className="text-gray-200 hover:text-gray-400">
              Terms of Service
            </a>
            <span className="mx-3 text-gray-400">•</span>
            <a href="#" className="text-gray-200 hover:text-gray-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
