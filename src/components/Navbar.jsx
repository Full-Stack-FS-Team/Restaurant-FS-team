import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container py-4 flex justify-between items-center">
        <div className="w-40">
          <img
            className="w-full "
            src="/images/demo-restaurant-logo-white@2x.png"
            alt=""
          />
        </div>
        <ul className="flex justify-between items-center gap-4">
          <li className="text-white p-3 font-semibold uppercase">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white p-3  font-semibold uppercase">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white p-3  font-semibold uppercase">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="text-white p-3  font-semibold uppercase">
            <Link to="story">Story</Link>
          </li>
          <li className="text-white p-3  font-semibold uppercase">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="text-white p-3  font-semibold uppercase">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="text-white p-3  font-semibold uppercase">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          <button className="bg-transparent border text-white py-2 px-4 rounded-full">
            Book A Table
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
