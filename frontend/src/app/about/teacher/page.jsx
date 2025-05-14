import React from "react";

const staffList = [
  {
    name: "ดร. สมชาย ใจดี",
    position: "หัวหน้าสาขา",
    email: "somchai@example.com",
    imageUrl: "https://via.placeholder.com/150", // ใส่ URL รูปจริงได้
  },
  {
    name: "อ. สาวิตรี สุขใจ",
    position: "อาจารย์ประจำสาขา",
    email: "sawitree@example.com",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "อ. กิตติภพ เมืองทอง",
    position: "อาจารย์ประจำสาขา",
    email: "kittiphop@example.com",
    imageUrl: "https://via.placeholder.com/150",
  },
  // เพิ่มอีกได้เรื่อยๆ
];

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#C70039]">
        อาจารย์ประจำสาขาวิศวกรรมซอฟต์แวร์
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {staffList.map((staff, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={staff.imageUrl}
              alt={staff.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-[#C70039] mb-2">{staff.name}</h2>
              <p className="text-gray-600 mb-2">{staff.position}</p>
              <p className="text-gray-500 text-sm">{staff.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
