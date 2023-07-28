// src/components/SocialLink.js
import React from 'react';

const SocialLink = ({ platform, link }) => {
  const platformIcon = {
    facebook: 'fab fa-facebook',
    twitter: 'fab fa-twitter',
    instagram: 'fab fa-instagram',
    // Add other social media platforms and their corresponding icons here
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
      <i className={`${platformIcon[platform]} text-2xl mx-2`} />
    </a>
  );
};

export default SocialLink;
