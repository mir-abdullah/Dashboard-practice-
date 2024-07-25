import React from 'react'
import { teamMembers } from '../data';
import { FaUser } from 'react-icons/fa';

const Team = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
    <div className="w-full max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">My Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((teamMember) => {
          const { id, name ,role } = teamMember;
          return (
            <div key={id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaUser className="text-blue-500 text-3xl mr-4" />
                <h2 className="text-2xl font-bold">{name}</h2>
              </div>
              <p className="text-gray-700">Member  ID: {id}</p>
              <p className="text-gray-700">Job : {role}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default Team
