'use client';
import React, { useState } from 'react';
import ChatbotArea from './ChatbotArea';
import StatsGraph from './StatsGraph';
import TeamSection from './TeamSection';
import OptionButtons from './OptionButtons';

export default function MainPage() {
    const [activeOption, setActiveOption] = useState('reels');
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

                <div className="flex justify-center items-start space-x-12">
                    <OptionButtons setActiveOption={setActiveOption} />
                    <StatsGraph activeOption={activeOption} />
                </div>

                <TeamSection />
            </main>
        </div>
    );
}