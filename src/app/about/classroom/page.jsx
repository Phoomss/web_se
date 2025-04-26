import React from "react";
import { Users } from "lucide-react";

export default function page() {
  return (
    <section className="px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#C70039] mb-4">
          ห้องเรียนของเรา
        </h1>
        <div className="w-20 h-1 bg-[#C70039] mx-auto rounded-full"></div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 overflow-hidden">
          <img
            src="/classrooms/classroom1.jpg"
            alt="ห้องเรียน SE 101"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-[#C70039] mb-2">ห้องเรียน SE 101</h2>
            <p className="text-gray-600 mb-4">
              ห้องเรียนสำหรับวิชาพื้นฐาน ขนาด 50 คน
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
              <Users size={20} />
              <span>จุได้ 50 คน</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 overflow-hidden">
          <img
            src="/classrooms/lab.jpg"
            alt="ห้องปฏิบัติการ Lab"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-[#C70039] mb-2">ห้องปฏิบัติการ Lab</h2>
            <p className="text-gray-600 mb-4">
              ห้องคอมพิวเตอร์พร้อมอุปกรณ์ครบชุด
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
              <Users size={20} />
              <span>จุได้ 40 คน</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 overflow-hidden">
          <img
            src="/classrooms/seminar.jpg"
            alt="ห้องประชุม SE"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-[#C70039] mb-2">ห้องประชุม SE</h2>
            <p className="text-gray-600 mb-4">
              ห้องสำหรับจัดสัมมนา และโครงงานต่าง ๆ
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
              <Users size={20} />
              <span>จุได้ 60 คน</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 overflow-hidden">
          <img
            src="/classrooms/smartclassroom.jpg"
            alt="ห้องเรียนอัจฉริยะ"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-[#C70039] mb-2">ห้องเรียนอัจฉริยะ</h2>
            <p className="text-gray-600 mb-4">
              ห้องเรียนอัจฉริยะ พร้อมเทคโนโลยีล้ำสมัย
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
              <Users size={20} />
              <span>จุได้ 45 คน</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
