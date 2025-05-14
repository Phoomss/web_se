"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const videoList = [
  {
    id: 1,
    title: "วิดีโอนำเสนอหลักสูตรวิศวกรรมซอฟต์แวร์ 1",
    url: "https://www.youtube.com/embed/BCyOqIaEUQE?start=128"
  },
  {
    id: 2,
    title: "วิดีโอนำเสนอหลักสูตรวิศวกรรมซอฟต์แวร์ 2",
    url: "https://www.youtube.com/embed/jXyZb58_eMo"
  }
];

export default function FeatureVideo() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
        {videoList.map((video) => (
          <div key={video.id} data-aos="fade-up" className="flex justify-center">
            <div className="relative w-full max-w-3xl aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
