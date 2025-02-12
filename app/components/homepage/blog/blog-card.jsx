// @flow strict
import React from 'react';
import { FaTools } from 'react-icons/fa'; // You can replace this with an icon based on service type

function ServiceCard({ service }) {
  return (
    <div className="border border-[#25213b] hover:border-[#464c6a] transition-all duration-300 bg-[#1b203e] rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 relative group">
      <div className="h-40 lg:h-48 w-auto cursor-pointer overflow-hidden rounded-t-lg bg-gradient-to-r from-violet-600 to-pink-600">
        <div className="flex justify-center items-center h-full w-full">
          <FaTools size={50} className="text-white group-hover:text-violet-200 transition-all duration-300" />
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col">
        <h3 className="text-2xl font-bold text-[#16f2b3] mb-3 hover:text-violet-500 transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-sm lg:text-base text-[#d3d8e8] mb-5 leading-relaxed">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {service.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-violet-600 text-white px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wide shadow-lg transition-all duration-300 transform hover:bg-violet-500 hover:text-white hover:scale-110 hover:shadow-2xl"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
