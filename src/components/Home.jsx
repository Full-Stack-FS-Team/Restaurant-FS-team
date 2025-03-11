import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-homeBanner mt-0 bg-no-repeat bg-cover bg-center h-screen w-full relative">
      {/* Overlay div */}
      <div className="absolute inset-0 bg-black opacity-35"></div>

      {/* Content */}
      <div className="relative z-50">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
