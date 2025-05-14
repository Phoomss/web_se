"use client";
import React, { useEffect } from 'react';

export default function FeatureVideo() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="mt-16 px-4 md:px-10">
      {/* หัวข้อ */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#C70039] mb-3">
          แนะนำสาขาวิศวกรรมซอฟต์แวร์
        </h1>
        <div className="border-b-4 border-[#C70039] w-24 mx-auto"></div>
      </div>

      {/* วิดีโอ TikTok */}
      <div className="flex justify-center">
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@softwarese/video/7473829329114303749"
          data-video-id="7473829329114303749"
          style={{ maxWidth: '605px', minWidth: '325px' }}
        >
          <section>Loading...</section>
        </blockquote>
      </div>
    </section>
  );
}
