import React from "react";

function BtnPro({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 font-semibold
                 bg-linear-to-r from-blue-700 via-blue-600 to-blue-900
                 text-white shadow-md transition-colors duration-300
                 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 
                 hover:cursor-pointer hover:shadow-lg"
    >
      {children}
    </button>
  );
}

export default BtnPro;
