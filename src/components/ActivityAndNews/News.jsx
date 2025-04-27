"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const newsList = [
  {
    id: 1,
    title: "ประกาศรับสมัครนักศึกษาใหม่ ประจำปีการศึกษา 2568",
    date: "25 เมษายน 2568",
    description: "เปิดรับสมัครนักศึกษาใหม่ระดับปริญญาตรี สาขาวิศวกรรมซอฟต์แวร์ ตั้งแต่วันนี้ถึง 31 พฤษภาคม 2568",
    imageUrl: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "ขอเชิญร่วมงาน Open House 2025",
    date: "10 พฤษภาคม 2568",
    description: "ขอเชิญนักเรียน นักศึกษา และผู้สนใจเข้าร่วมงาน Open House เพื่อเยี่ยมชมการเรียนการสอนในสาขา SE",
    imageUrl: "/images/news2.jpg",
  },
  {
    id: 3,
    title: "อบรมเชิงปฏิบัติการ พัฒนาแอปพลิเคชันด้วย React",
    date: "5 มิถุนายน 2568",
    description: "สาขา SE จัดอบรมการพัฒนาเว็บแอปพลิเคชันด้วย React Framework ฟรี! สำหรับนักศึกษาทุกชั้นปี",
    imageUrl: "/images/news3.jpg",
  },
];

export default function NewsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* หัวข้อหลัก */}
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
          SE News
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#C70039] mb-4">
          ข่าวประชาสัมพันธ์
        </h1>
        <div className="h-1 bg-[#C70039] w-24 mx-auto rounded-full"></div>
      </div>

      {/* รายการข่าว */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsList.map((news) => (
          <div
            key={news.id}
            data-aos="fade-left" 
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-2">{news.date}</p>
              <h2 className="text-2xl font-bold text-[#C70039] mb-2">{news.title}</h2>
              <p className="text-gray-600 mb-4">{news.description}</p>
              <a href="#" className="text-[#C70039] font-semibold hover:underline">
                อ่านเพิ่มเติม →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ปุ่มดูข่าวทั้งหมด */}
      <div className="text-center mt-12">
        <a
          href="/news-activities"
          className="inline-block bg-[#C70039] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#92002A] transition duration-300"
        >
          ดูข่าวทั้งหมด
        </a>
      </div>
    </>
  );
}
