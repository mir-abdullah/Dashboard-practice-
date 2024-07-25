import React from 'react';

import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaWpforms,
  FaSignOutAlt

} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    text: 'Team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'Projects',
    icon: <FaFolderOpen />,
  },

  {
    id: 5,
    url: '/documents',
    text: 'Documents',
    icon: <FaWpforms />,
  },
  {
    id: 6,
    url: '/login',
    text: 'Logout',
    icon: <FaSignOutAlt />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.LinkedIn.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
];

// src/data.js
export const teamMembers = [
    { id: 1, name: "Mir", role :'MERN Stack' },
    { id: 2, name: "Ali" ,role:'React Native Developer' },
    { id: 3, name: "Abdullah",role:'Quality Assurance' },
  ];
  
  export const documents = [
    { id: 1, title: "Software Requirement Specification" },
    { id: 2, title: "Software Design Document" },
    { id: 3, title: "Testing Document" },
  ];
  
  export const projects = [
    { id: 1, name: "To Do List" },
    { id: 2, name: "Backend" },
    { id: 3, name: "Fitness Tracker App" },
  ];
  