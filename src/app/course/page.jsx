"use client";
import React from "react";

export default function page() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">

            {/* Heading */}
            <div className="text-center mb-10">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">SE Course & Tuition</p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#C70039] mb-4">หลักสูตร และ ค่าเทอม</h1>
                <div className="h-1 bg-[#C70039] mx-auto rounded-full w-24"></div>
            </div>

            {/* ค่าเทอม */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#C70039]">📋 ค่าธรรมเนียมการศึกษา</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                        <thead className="bg-[#C70039] text-white">
                            <tr>
                                <th className="py-3 px-6 text-left">ภาคเรียน</th>
                                <th className="py-3 px-6 text-left">ค่าธรรมเนียม</th>
                                <th className="py-3 px-6 text-left">หมายเหตุ</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="border-b">
                                <td className="py-4 px-6">ภาคเรียนที่ 1</td>
                                <td className="py-4 px-6">15,000 บาท</td>
                                <td className="py-4 px-6">รวมค่าใช้จ่ายเบื้องต้น</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-4 px-6">ภาคเรียนที่ 2</td>
                                <td className="py-4 px-6">15,000 บาท</td>
                                <td className="py-4 px-6">-</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6">ภาคฤดูร้อน</td>
                                <td className="py-4 px-6">7,500 บาท</td>
                                <td className="py-4 px-6">(ถ้ามี)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* หลักสูตร */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#C70039]">📚 หลักสูตรการเรียนการสอน</h2>

                <div className="space-y-4 text-gray-700">
                    <p>
                        หลักสูตรวิศวกรรมซอฟต์แวร์มุ่งเน้นการผลิตบัณฑิตที่มีความรู้ ความสามารถในการพัฒนาระบบซอฟต์แวร์อย่างมีประสิทธิภาพ
                        สามารถทำงานร่วมกับผู้อื่น และมีจริยธรรมทางวิชาชีพ
                    </p>

                    <ul className="list-disc list-inside space-y-2">
                        <li>ปี 1 : พื้นฐานคณิตศาสตร์, การเขียนโปรแกรมเบื้องต้น</li>
                        <li>ปี 2 : โครงสร้างข้อมูล, วิศวกรรมซอฟต์แวร์เบื้องต้น</li>
                        <li>ปี 3 : การพัฒนาซอฟต์แวร์, โครงงานซอฟต์แวร์</li>
                        <li>ปี 4 : ฝึกงานวิชาชีพ, โครงงานจบการศึกษา</li>
                    </ul>

                    <div className="mt-6">
                        <a href="/curriculum.pdf" className="inline-block bg-[#C70039] text-white px-6 py-3 rounded-full hover:bg-[#a8002c] transition">
                            📄 ดาวน์โหลดรายละเอียดหลักสูตร (PDF)
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}
