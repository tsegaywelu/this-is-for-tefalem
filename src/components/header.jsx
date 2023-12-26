import React from "react";
import { useContextData } from "../context/provider";

function Header() {
  const { dispatch } = useContextData();
  return (
    <header className="max-w-4xl w-full shadow-lg p-4 fixed top-0 z-50 bg-white dark:text-gray-600">
      <nav className="sm:mr-12 uppercase tracking-3 flex justify-end items-center space-x-5 sm:pr-4">
        <a href="#" className="">
          login
        </a>
        <a href="#">signup</a>
      </nav>
    </header>
  );
}

export default Header;
