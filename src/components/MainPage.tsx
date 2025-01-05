'use client';
import React, { useState } from 'react';
import ChatbotArea from './ChatbotArea';
import StatsGraph from './StatsGraph';
import TeamSection from './TeamSection';
import OptionButtons from './OptionButtons';
import PieChart from './PieChart';

type StatsType = 'carousel' | 'reels' | 'static' | 'story';

export default function MainPage() {
    const [activeOption, setActiveOption] = useState<StatsType>('reels');
    return (
        <div className="min-h-screen p-8" style={{ backgroundColor: '#fff3b3' }}>
            <div className="text-center mb-12">
                <h1 className="mono-title text-4xl font-bold mb-4">Insta-Stat</h1>
                <p className="mono-title text-lg">Engagement Simplified, Success Amplified</p>
            </div>

            <main className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <ChatbotArea />
                </div>

                <div className="flex flex-col justify-center items-center space-x-8 space-y-4">
                    <div className='flex w-full justify-center items-center space-x-12'>
                        <OptionButtons setActiveOption={setActiveOption} />
                        <StatsGraph activeOption={activeOption as StatsType} />
                    </div>
                    <div className="border-2 border-black w-2/4 h-auto">
                        <PieChart />
                    </div>
                </div>
                <TeamSection />
            </main>
        </div>
    );
}