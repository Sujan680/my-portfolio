import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HashLink as Link } from 'react-router-hash-link';
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192F]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col text-white justify-center h-full">
        <p className="text-pink-900 text-4xl">Hi, 👋 i'm a</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Sujan Magar,
        </h1>
        <h2 className="text-4xl sm:text-6xl font-extralight text-[#8892b0]">
        <Typewriter
              options={{
                strings: ["Web Developer!", "Web Design!!", "Beginner Mern Stack Developer!!!"],
                autoStart: true,
                loop: true,
              }}
            />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Web Developer specialization in building (and
          ocassionally designing ) exceptional digital experience . Currently,
          I'm building responsive e-commerce web application.
        </p>
        <div className="flex gap-4">
          <Link smooth to="#work">
          <button className="text-white border-2 px-4 py-2 my-2 flex items-center rounded-md hover:bg-pink-700"  >
           View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiOutlineArrowNarrowRight className="ml-3" />
            </span>
          </button>
          </Link>
          <button className="text-white border-2 px-4 py-2 my-2 flex items-center rounded-md hover:bg-red-700" >
            Hire me
            <span className="group-hover:rotate-90 duration-300">
              <HiOutlineArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
