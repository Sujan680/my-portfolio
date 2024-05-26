import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  const projects = data;

  return (
    <div name="work" className="w-full min-h-screen text-gray-300 bg-[#0c1728] py-32">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-center font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6 ">Check out some of my recent work</p>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#304155] group container rounded-md 
              flex justify-center items-center mx-auto content-div bg-cover bg-center h-[200px] md:h-[150px]"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 bg-black bg-opacity-40 w-full h-full flex flex-col justify-center items-center rounded-md">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
