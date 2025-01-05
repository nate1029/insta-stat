  import React from 'react';

  type StatsType = 'carousel' | 'reels' | 'static' | 'story';

  interface StatsGraphProps {
    activeOption: StatsType;
  }

  // Define the stats for each type
  const statsData: Record<StatsType, { likes: number; comments: number; shares: number; engagement: number }> = {
    carousel: {
      likes: 77.9,
      comments: 89.2,
      shares: 97.4,
      engagement: 78.8,
    },
    reels: {
      likes: 94.9,
      comments: 91.6,
      shares: 80.7,
      engagement: 94.8,
    },
    static: {
      likes: 72.1,
      comments: 83.0,
      shares: 68.5,
      engagement: 82.9,
    },
    story: {
      likes: 98.0,
      comments: 94.1,
      shares: 84.1,
      engagement: 99.99,
    },
  };

  const StatsGraph = ({ activeOption }: StatsGraphProps) => {
    // Function to get stats based on the active option
    const getGraphData = () => {
      const data = statsData[activeOption]; // Access the stats directly using the typed key
      return [
        { label: 'Likes', value: data.likes, color: '#ffccf9' },
        { label: 'Comments', value: data.comments, color: '#fff8cc' },
        { label: 'Shares', value: data.shares, color: '#ccffcc' },
        { label: 'Engagement', value: data.engagement, color: '#cce0ff' },
      ];
    };

    const graphData = getGraphData();

    return (
      <div className="border-2 border-black p-6 w-96">
        <h3 className="text-lg font-mono mb-4">Engagement Rate</h3>
        <div className="h-64 flex items-end space-x-6">
          {graphData.map((bar) => (
            <div
              key={bar.label}
              className="bg-white border-2 border-black relative group"
              style={{
                height: '100%',
                width: '20%', // Fixed width for all bars
              }}
            >
              <div
                className="absolute bottom-0 w-full transition-all duration-500"
                style={{
                  height: `${bar.value}%`, // Adjust the height based on value
                  backgroundColor: bar.color,
                  borderTop: '2px solid black',
                }}
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-mono whitespace-nowrap">
                  {bar.value.toFixed(1)}%
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          {graphData.map((bar) => (
            <span key={bar.label} className="text-sm font-mono text-center" style={{ width: '20%' }}>
              {bar.label}
            </span>
          ))}
        </div>
      </div>
    );
  };

  export default StatsGraph;
