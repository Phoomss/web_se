import React from 'react';

export default function FeatureVideo() {
  return (
    <>
      <div className="text-center mb-10">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
          SE Presentation
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#C70039] mb-4">
          วิดีโอนำเสนอสาขาวิศวกรรมซอฟต์แวร์
        </h1>
        <div className="h-1 bg-[#C70039] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/BCyOqIaEUQE?start=128"
              title="Software Engineering Presentation 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jXyZb58_eMo"
              title="Software Engineering Presentation 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>

  );
}
