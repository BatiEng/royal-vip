import React from "react";

const FeatureItem = ({ title, description, image }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto group">
      {/* Image */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-72 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text Container */}
      <div className="absolute left-1/2 bottom-[-3.5rem] transform -translate-x-1/2 bg-white rounded-xl shadow-lg px-4 py-3 w-[90%] sm:w-4/5">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
