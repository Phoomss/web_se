import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-16">
      {/* หัวข้อหลัก */}
      <div className="text-center mb-16">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
          SE News & Activities
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#C70039] mb-4">
          ข่าวสารและกิจกรรม
        </h1>
        <div className="h-1 bg-[#C70039] mx-auto rounded-full w-24"></div>
      </div>

      {/* ข่าวสาร */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-[#C70039]">ข่าวประชาสัมพันธ์</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* การ์ดข่าว */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
              <Image src="/news.jpg" alt="ข่าวสาร" width={500} height={300} className="object-cover w-full h-48" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">หัวข้อข่าว {item}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  เนื้อหาสรุปสั้น ๆ ของข่าวที่เกี่ยวข้องกับสาขา เช่น ประกาศทุนการศึกษา หรืออบรมต่าง ๆ...
                </p>
                <a href="#" className="text-[#C70039] font-semibold hover:underline">
                  อ่านเพิ่มเติม
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* กิจกรรม */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-[#C70039]">กิจกรรมที่ผ่านมา</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* การ์ดกิจกรรม */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
              <Image src="/activity.jpg" alt="กิจกรรม" width={500} height={300} className="object-cover w-full h-48" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">หัวข้อกิจกรรม {item}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  รายละเอียดกิจกรรมสั้น ๆ เช่น กิจกรรมอบรม Workshop พัฒนาทักษะนักศึกษา ฯลฯ
                </p>
                <a href="#" className="text-[#C70039] font-semibold hover:underline">
                  ดูรูปภาพกิจกรรม
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
