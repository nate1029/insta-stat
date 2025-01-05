import React from 'react';
import { LayoutGrid, Image, Film, Images } from 'lucide-react';

interface SidebarProps {
  setActiveOption: (option: string) => void;
}

const Sidebar = ({ setActiveOption }: SidebarProps) => {
  const options = [
    { id: 'reels', icon: Film, label: 'Reels' },
    { id: 'static', icon: Image, label: 'Static Image' },
    { id: 'story', icon: LayoutGrid, label: 'Story' },
    { id: 'carousel', icon: Images, label: 'Carousel' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg rounded-l-xl p-6">
      <div className="space-y-4">
        {options.map((option) => {
          const Icon = option.icon;
          return (
            <button
              key={option.id}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
              onMouseEnter={() => setActiveOption(option.id)}
            >
              <Icon className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;