import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PieChart = () => {
    const data = {
        labels: ['Stories', 'Reels', 'Static Images', 'Carousel'],
        datasets: [
            {
                label: 'Engagement Distribution',
                data: [27.85, 26.65, 23.32, 22.16],
                backgroundColor: ['#f7c6ff', '#fff8cc', '#ccffcc', '#cce0ff'],
                borderColor: ['#000000', '#000000', '#000000', '#000000'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'bottom' as const,
                align: 'center' as const,
                labels: {
                    boxWidth: 15,
                    boxHeight: 15,
                    padding: 20,
                    usePointStyle: false,
                    font: {
                        family: 'monospace',
                        size: 12
                    },
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="w-full h-96 p-4 bg-[#fff3b3]">
            <h3 className="text-lg font-mono text-center mb-4">Content Distribution Insights</h3>
            <Pie className='pb-10' data={data} options={options} />
        </div>
    );
};

export default PieChart;