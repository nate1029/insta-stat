export const runtime = "edge";

import React from 'react';

const TeamSection = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-gray-600 mb-4">Made By Team Karma For Pre-Hackathon (Langflow)</p>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Team</h2>
      <div className="flex justify-center space-x-8">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
          <p className="mt-2 font-medium text-gray-700">Team Member 1</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-purple-600" />
          <p className="mt-2 font-medium text-gray-700">Team Member 2</p>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;