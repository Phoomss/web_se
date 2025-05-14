"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const activities = [
    {
        id: 1,
        title: "โครงการพัฒนาทักษะโปรแกรมเมอร์",
        date: "15 เมษายน 2568",
        description: "จัดอบรมทักษะเขียนโปรแกรมขั้นสูงสำหรับนักศึกษา SE ชั้นปีที่ 3-4",
        imageUrl: "/images/activity1.jpg",
    },
    {
        id: 2,
        title: "แข่งขันเขียนโปรแกรม (Hackathon)",
        date: "22 เมษายน 2568",
        description: "ขอเชิญนักศึกษาทุกชั้นปีเข้าร่วมการแข่งขันพัฒนาแอปพลิเคชันใน 24 ชั่วโมง",
        imageUrl: "/images/activity2.jpg",
    },
    {
        id: 3,
        title: "ศึกษาดูงานบริษัทซอฟต์แวร์",
        date: "2 พฤษภาคม 2568",
        description: "ศึกษาดูงานการพัฒนาซอฟต์แวร์ ณ บริษัทชั้นนำในกรุงเทพมหานคร",
        imageUrl: "/images/activity3.jpg",
    },
];

export default function ActivityPage() {
    return (
        <>
            {/* หัวข้อหลัก */}
            <div className="text-center mb-12">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                    SE Activity
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#C70039] mb-4">
                    กิจกรรม
                </h1>
                <div className="h-1 bg-[#C70039] w-24 mx-auto rounded-full"></div>
            </div>

            {/* รายการกิจกรรม */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activities.map((activity) => (
                    <div key={activity.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300" data-aos="fade-right" >
                        <img
                            src={activity.imageUrl}
                            alt={activity.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <p className="text-sm text-gray-400 mb-2">{activity.date}</p>
                            <h2 className="text-2xl font-bold text-[#C70039] mb-2">{activity.title}</h2>
                            <p className="text-gray-600 mb-4">{activity.description}</p>
                            <a
                                href="#"
                                className="text-[#C70039] font-semibold hover:underline"
                            >
                                ดูรายละเอียด →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* ปุ่มดูทั้งหมด */}
            <div className="text-center mt-12">
                <a
                    href="/news-activities"
                    className="inline-block bg-[#C70039] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#92002A] transition duration-300"
                >
                    ดูกิจกรรมทั้งหมด
                </a>
            </div>
        </>
    );
}
