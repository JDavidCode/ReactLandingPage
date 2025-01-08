import React from 'react';

function FastTrackSection() {
  return (
    <section className="bg-gray-900 text-white p-8 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Side */}
        <div className='my-auto'>
          <h2 className="text-2xl font-bold mb-4">Fast-Track Your Projects</h2>
          <p className="text-gray-300 mb-8 text-sm">
            At ScrewFast, we ensure a swift start with instant account setup.
            Experience the speed of construction redefined.
          </p>
          <blockquote className="bg-gray-800 p-6 rounded-lg">
            <p className="text-md italic mb-4">"ScrewFast dramatically boosted our project efficiency. Setup was instant, and their rapid response times are phenomenal. Truly a game-changer in hardware and construction support!"</p>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Samantha Ruiz"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">Samantha Ruiz</p>
                <p className="text-gray-400 text-xs">Chief Operating Officer | ConstructIt Inc.</p>
              </div>
            </div>
          </blockquote>
        </div>

        {/* Right Side: Stats */}
        <div className="md:grid grid-cols-2 gap-4 text-center hidden">
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-2xl font-bold">70k+</p>
            <p className="text-gray-400 text-sm">customers equipped — from DIY to major construction firms</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-2xl font-bold text-orange-500">35%</p>
            <p className="text-gray-400 text-sm">uptick in project efficiency with ScrewFast tools and services</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-2xl font-bold text-orange-500">15.3%</p>
            <p className="text-gray-400 text-sm">reduction in maintenance costs reported by long-term clients</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-2xl font-bold">2x</p>
            <p className="text-gray-400 text-sm">quicker assembly using innovative fastening solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FastTrackSection;
