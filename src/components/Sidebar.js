import React from 'react';
import { NavLink } from 'react-router-dom';
import { links, social } from '../data';

const Sidebar = () => {
  return (
    <aside className="sidebar bg-gray-800 text-white w-64 min-h-screen flex flex-col justify-between">
      <ul className="mt-10">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id} className="mb-4">
              <NavLink 
                to={url} 
                className={({ isActive }) => 
                  `flex items-center text-lg font-medium p-2 rounded-lg hover:text-yellow-400 ${isActive ? "bg-gray-700 text-yellow-400" : "text-white"}`
                }
                end
              >
                <span className="text-xl mr-4">{icon}</span>
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="flex justify-around mb-10">
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id}>
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
