import Image from 'next/image';
import React from 'react';

const TeamSection = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-gray-600 mb-4">Made By Team Karma For Pre-Hackathon (Level SuperMind)</p>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Team</h2>
      <div className="flex justify-center space-x-12">
        <div className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/naiteek-choksi-7205b2227/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/naiteek-pic.jpg"
              alt="Naiteek Chokshi"
              className="w-16 h-16 rounded-full object-cover"
            />
          </a>
          <p className="mt-2 font-medium text-gray-700">Naiteek Chokshi</p>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://www.instagram.com/divyx.29/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/divya-pic.jpg"
              alt="Divya Machhi"
              className="w-16 h-16 rounded-full object-cover"
            />
          </a>
          <p className="mt-2 font-medium text-gray-700">Divya Machhi</p>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/jrp39/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/jaimik-pic.jpg"
              alt="Jaimik Patel"
              className="w-16 h-16 rounded-full object-cover"
            />
          </a>
          <p className="mt-2 font-medium text-gray-700">Jaimik Patel</p>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;