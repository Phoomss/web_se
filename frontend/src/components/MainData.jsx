import React from 'react';
import FeatureVideo from './dataAbout/FeatureVideo';
import News from './ActivityAndNews/News';
import Activity from './ActivityAndNews/Activity';
import BasicData from './dataAbout/BasicData';
import BasicDataCard from './dataAbout/BasicDataCard';

export default function MainData() {
  return (
    <>
      {/* Main Container */}
      <div className="container mx-auto px-4 mt-10 space-y-16">
        
        {/* News Section */}
        <section>
          <div className="max-w-screen-lg mx-auto">
            <News />
          </div>
        </section>

        {/* Feature Video Section */}
        <section>
          <div className="max-w-screen-lg mx-auto">
            <FeatureVideo />
          </div>
        </section>

        {/* Basic Data Section */}
        <section>
          <div className="max-w-screen-lg mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <BasicData />
          </div>
        </section>
      </div>

      {/* BasicDataCard Section */}
      <section className="bg-[#C70039] ">
        <div className="container mx-auto px-4">
          <BasicDataCard />
        </div>
      </section>

      {/* Activity Section */}
      <section className="container mx-auto px-4 my-16">
        <Activity />
      </section>
    </>
  );
}
