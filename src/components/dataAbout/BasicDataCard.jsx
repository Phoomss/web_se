import React from "react";
import { GraduationCap, FileText, UserCheck } from "lucide-react";

export default function BasicDataCard() {
  return (
    <div className="mt-16 p-10">
      {/* หัวข้อหลัก */}
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        หลักสูตรและคุณสมบัติผู้เข้าศึกษา
      </h1>
      <div className="border-b-4 border-white w-28 mx-auto mb-12"></div>

      {/* การ์ดทั้งหมด */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="group bg-white rounded-2xl shadow-xl p-8 transition-transform transform hover:scale-105 duration-300 hover:bg-[#92002A]">
          <div className="flex flex-col items-center text-center">
            <GraduationCap size={40} className="mb-4 text-[#C70039] group-hover:text-white" />
            <h2 className="text-2xl font-semibold mb-4 text-[#C70039] group-hover:text-white">
              รูปแบบหลักสูตร
            </h2>
            <ul className="list-disc list-inside text-lg space-y-2 text-left text-[#C70039] group-hover:text-white">
              <li>หลักสูตร 4 ปี ภาคปกติ</li>
              <li>เรียนการสอนเป็นภาษาไทย</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group bg-white rounded-2xl shadow-xl p-8 transition-transform transform hover:scale-105 duration-300 hover:bg-[#92002A]">
          <div className="flex flex-col items-center text-center">
            <UserCheck size={40} className="mb-4 text-[#C70039] group-hover:text-white" />
            <h2 className="text-2xl font-semibold mb-4 text-[#C70039] group-hover:text-white">
              คุณสมบัติผู้สมัคร
            </h2>
            <ul className="list-disc list-inside text-lg space-y-2 text-left text-[#C70039] group-hover:text-white">
              <li>มัธยมศึกษาตอนปลาย (ม.6)</li>
              <li>ประกาศนียบัตรวิชาชีพ (ปวช.)</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group bg-white rounded-2xl shadow-xl p-8 transition-transform transform hover:scale-105 duration-300 hover:bg-[#92002A] flex flex-col justify-between">
          <div className="flex flex-col items-center text-center">
            <FileText size={40} className="mb-4 text-[#C70039] group-hover:text-white" />
            <h2 className="text-2xl font-semibold mb-4 text-[#C70039] group-hover:text-white">
              รายละเอียดหลักสูตร
            </h2>
            <p className="text-lg mb-6 text-[#C70039] group-hover:text-white">
              คลิกเพื่อดูรายละเอียดหลักสูตรวิศวกรรมซอฟต์แวร์
            </p>
          </div>
          <div className="text-center">
            <a
              href="https://pgm.npru.ac.th/se/data/files/%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3SE-64.pdf"
              className="inline-block bg-[#C70039] text-white text-lg font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-[#C70039] transition duration-300"
              target="_blank"
            >
              ดูรายละเอียดหลักสูตร
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
