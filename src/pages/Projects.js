// src/components/Projects.js
import React from 'react';
import { projects } from '../data';
import { FaProjectDiagram } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const { id, name } = project;
            return (
              <div key={id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <FaProjectDiagram className="text-green-500 text-3xl mr-4" />
                  <h2 className="text-2xl font-bold">{name}</h2>
                </div>
                <p className="text-gray-700">Project ID: {id}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
