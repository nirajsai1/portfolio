import { ReactCardFlip } from "react-card-flip";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { Fragment, useState } from "react";
import { DiDjango } from "react-icons/di";
import { SiApollographql, SiMongodb, SiNovu } from "react-icons/si";
import { FaDocker, FaNode, FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import Skill from "./Skill";

export default function Skills() {
  const skills = [
    { name: "React", percentage: "70" },
    { name: "Node.js", percentage: "60" },
    { name: "Docker", percentage: "70" },
    { name: "GraphQL-API", percentage: "80" },
    { name: "Tailwind CSS", percentage: "65" },
    { name: "DSA", percentage: "80" },
    { name: "Python", percentage: "90" },
    { name: "C++", percentage: "80" },
    { name: "Novu", percentage: "60" },
    { name: "Django", percentage: "85" },
  ];

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div id="Skills" className="bg-gradient-to-b from-gray-900 to-gray-800 py-10">
      <h1 className="text-center text-4xl font-extrabold text-purple-400 mb-12">
        My Skills
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 mx-auto w-3/4">
        <RiReactjsLine className="text-9xl text-blue-500 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300" />
        <DiDjango className="text-9xl text-green-600 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-green-600/50 transition-shadow duration-300" />
        <SiApollographql className="text-9xl text-purple-500 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300" />
        <FaDocker className="text-9xl text-blue-400 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-blue-400/50 transition-shadow duration-300" />
        <FaNode className="text-9xl text-lime-500 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-lime-500/50 transition-shadow duration-300" />
        <SiMongodb className="text-9xl text-green-500 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-green-500/50 transition-shadow duration-300" />
        <BiLogoPostgresql className="text-9xl text-blue-500 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300" />
        <RiTailwindCssFill className="text-9xl text-teal-400 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-teal-400/50 transition-shadow duration-300" />
        <SiNovu className="text-9xl text-red-400 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-red-400/50 transition-shadow duration-300" />
        <FaPython className="text-9xl text-yellow-400 bg-gray-700 p-4 rounded-xl shadow-lg hover:shadow-yellow-400/50 transition-shadow duration-300" />
      </div>
    </div>
  );
}
