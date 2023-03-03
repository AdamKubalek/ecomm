import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
}: {
  itemsPerPage: number;
  totalItems: number;
  paginate: (a: number) => void;
}) => {
  const pageNumbers = [];
  const [scrollPosition, setScrollPosition] = useState(0);
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [paginate]);

  const handlePagination = (number: number) => {
    console.log("### handlePagination", window.pageYOffset);
    setScrollPosition(window.pageYOffset);
    paginate(number);
  };

  return (
    <ul className="flex gap-2 p-6">
      {pageNumbers.map((number) => (
        <li key={number}>
          <Link
            onClick={() => handlePagination(number)}
            href=""
            className="rounded-md border bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
          >
            {number}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
