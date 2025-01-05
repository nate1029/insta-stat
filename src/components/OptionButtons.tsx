import React from 'react';
import { Film, Image, LayoutGrid, Images } from 'lucide-react';

interface OptionButtonsProps {
  setActiveOption: (option: string) => void;
}

const OptionButtons = ({ setActiveOption }: OptionButtonsProps) => {
  const options = [
    { id: 'reels', icon: Film, label: 'Reels' },
    { id: 'static', icon: Image, label: 'Static Image' },
    { id: 'story', icon: LayoutGrid, label: 'Story' },
    { id: 'carousel', icon: Images, label: 'Carousel' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      {options.map((option) => {
        const Icon = option.icon;
        return (
          <button
            key={option.id}
            className="w-48 px-4 py-2 border-2 border-black hover:bg-gray-50 transition-colors flex items-center space-x-2 font-mono"
            onMouseEnter={() => setActiveOption(option.id)}
          >
            <Icon className="w-4 h-4" />
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default OptionButtons;