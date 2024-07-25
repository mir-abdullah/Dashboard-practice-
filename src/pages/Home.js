// src/components/Home.js
import React from "react";
import { teamMembers, documents, projects } from "../data";
import { FaUsers, FaFileAlt, FaProjectDiagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <Card
          title="Team Members"
          count={teamMembers.length}
          items={teamMembers.map(member => member.name)}
          icon={<FaUsers className="text-blue-500 text-3xl" />}
          bgColor="bg-blue-100"
        />
        <Card
          title="Documents"
          count={documents.length}
          items={documents.map(doc => doc.title)}
          icon={<FaFileAlt className="text-green-500 text-3xl" />}
          bgColor="bg-green-100"
        />
        <Card
          title="Projects"
          count={projects.length}
          items={projects.map(proj => proj.name)}
          icon={<FaProjectDiagram className="text-red-500 text-3xl font font-black" />}
          bgColor="bg-red-100"
        />
      </div>
    </div>
  );
};

const Card = ({ title, count, items, icon, bgColor }) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg ${bgColor} hover:shadow-xl transition-shadow duration-300`}>
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-full bg-white">
          {icon}
        </div>
        <h2 className="text-2xl font-bold ml-4">{title}</h2>
      </div>
      <p className="text-gray-700 mb-4 text-lg">Total: {count}</p>
      <ul className="list-none space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-800 bg-white p-2 rounded-lg shadow-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
