import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full bg-[#1a2639] text-gray-300 py-24">
      <div className="max-w-[1000px] mx-auto p-6  flex flex-col justify-center w-full h-full">
        <div className='sm:text-center pb-8 pl-4'>

          <p className='text-4xl text-center font-bold underline  text-pink-800 '>
            Skills
          </p>

        </div>

        <p className="py-4 text-center ">
          These are the technologies I've worked with.
        </p>
      </div>

      <div className="w-full  grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
        <div className=" shadow-md shadow-[#8692a1] hover:scale-110 duration-500">
          <img className="w-20  mx-auto" src={HTML} alt="htmlicon" />
          <p className="my-4">HTML</p>
        </div>
        <div className=" shadow-md shadow-[#8692a1] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={CSS} alt="htmlicon" />
          <p className="my-4">CSS</p>
        </div>
        <div className=" shadow-md shadow-[#8692a1] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Bootstrap} alt="htmlicon" />
          <p className="my-4">Bootstrap</p>
        </div>
        <div className=" shadow-md shadow-[#8692a1] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Tailwind} alt="htmlicon" />
          <p className="my-4">Tailwindcss</p>
        </div>
        <div className=" shadow-md shadow-[#8692a1] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={JavaScript} alt="htmlicon" />
          <p className="my-4">JavaScript</p>
        </div>
        <div className=" shadow-md shadow-[#8692a1] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={ReactImg} alt="htmlicon" />
          <p className="my-4">Reactjs</p>
        </div>
        <div className=" shadow-md shadow-[#8692a1] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={GitHub} alt="htmlicon" />
          <p className="my-4">Github</p>
        </div>
        <div className=" shadow-md shadow-[#8692a1] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Node} alt="htmlicon" />
          <p className="my-4">Nodejs</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
