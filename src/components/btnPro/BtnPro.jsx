import React from "react";

function BtnPro({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 rounded-lg font-semibold 
                 bg-linear-to-r from-blue-600 via-blue-500 to-blue-800 
                 text-white shadow-md hover:scale-105 transition-transform"
    >
      {children}
    </button>
  );
}

export default BtnPro;
