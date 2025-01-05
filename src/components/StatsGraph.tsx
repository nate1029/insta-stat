import React from 'react';

interface StatsGraphProps {
  activeOption: string;
}

const StatsGraph = ({ activeOption }: StatsGraphProps) => {
  const getGraphData = () => {
    switch (activeOption) {
      case 'reels':
        return { height: '80%', color: '#fff8cc' };
      case 'static':
        return { height: '60%', color: '#fff8cc' };
      case 'story':
        return { height: '70%', color: '#fff8cc' };
      case 'carousel':
        return { height: '100%', color: '#fff8cc' };
      default:
        return { height: '50%', color: '#fff8cc' };
    }
  };

  const { height, color } = getGraphData();

  return (
    <div className="border-2 border-black p-6 w-96">
      <h3 className="text-lg font-mono mb-4">Engage-O-Meter</h3>
      <div className="h-64 flex items-end space-x-6">
        {[1, 2, 3, 4, 5].map((bar) => (
          <div
            key={bar}
            className="flex-1 bg-white border-2 border-black relative group"
            style={{ height: '100%' }}
          >
            <div
              className="absolute bottom-0 w-full transition-all duration-500"
              style={{
                height,
                backgroundColor: color,
                borderTop: '2px solid black'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsGraph;