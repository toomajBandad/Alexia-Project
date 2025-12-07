import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/backgrounds/8.jpg";

function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white h-140 sm:h-180"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black/50 absolute inset-0 h-full"></div>{" "}
      {/* overlay for readability */}
      <div className="relative container mx-auto px-6 py-24 flex flex-col h-full justify-center">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Welcome to Axelia
        </h1>

        {/* Supporting Text */}
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-100">
          At Axelia, we offer a Scalable|approach As your business grows, we
          ensure your security evolves accordinly
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/solutions"
            className="sm:px-6 px-2 py-3 bg-white border text-gray-500 font-semibold rounded-lg shadow hover:text-black transition duration-300"
          >
            Explore Solutions
          </Link>
          <Link
            to="/resources"
            className="sm:px-6 px-2 py-3 bg-transparent border rounded-lg hover:bg-white hover:text-black font-semibold transition duration-300"
          >
            View Resources
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
