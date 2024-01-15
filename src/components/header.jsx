import React, { useState } from "react";
import { useContextData } from "../context/provider";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation()
  const { dispatch } = useContextData();
  const [hideMenu, setHideMenu] = useState(true)
  const toggleMenu = ()=>{
    setHideMenu(!hideMenu)
  }
  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
    <div className="flex-1 flex justify-between items-center">
        <a href="#" className="text-xl">TEB</a>
    </div>

    <label htmlFor="menu-toggle" className=" cursor-pointer md:hidden block" onClick={toggleMenu}>
      <svg className="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />

    <div className={`${hideMenu && 'hidden'} md:flex md:items-center md:w-auto w-full`} id="menu">
        <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li><Link to="/" className={` w-20 md:p-4 py-3 px-0 block hover:font-bold ${(location.pathname==='/') && 'font-bold'}`} >Search</Link></li>
                <li><Link to="/admin/addoredit" className={` w-20 md:p-4 py-3 px-0 block hover:font-bold ${(location.pathname==='/admin/addoredit') && 'font-bold'}`} >Add</Link></li>
                <li><Link to="/admin/upload" className={` w-20 md:p-4 py-3 px-0 block hover:font-bold ${(location.pathname==='/admin/upload') && 'font-bold'}`} >Upload</Link></li>
                <li><Link to="/about" className={` w-32 md:p-4 py-3 px-0 block hover:font-bold ${(location.pathname==='/about') && 'font-bold'}`}>About Us</Link></li>
                <li><Link to="/contact" className={` w-32 md:p-4 py-3 px-0 block hover:font-bold ${(location.pathname==='/contact') && 'font-bold'} md:mb-0 mb-2`}>Contact Us</Link></li>
            </ul>
        </nav>
    </div>
</header>
  );
}

export default Header;
