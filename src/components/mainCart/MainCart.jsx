import React from "react";

function MainCart({ image, title, description, link }) {
  const truncatedDescription =
    description.length > 120 ? description.slice(0, 120) + "..." : description;

  return (
    <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg  font-semibold text-back mb-4">{title}</h3>
        <p className="text-gray-700 mb-4 text-sm ">{truncatedDescription}</p>
        {link && (
          <a
            href={link}
            className="inline-block px-4 py-2 bg-gray-800 text-white hover:bg-black transition"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
}

export default MainCart;
