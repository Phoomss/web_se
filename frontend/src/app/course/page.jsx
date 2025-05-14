"use client";
import { LibraryBig, NotepadText } from "lucide-react";
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
                <h2 className="text-2xl font-bold text-[#C70039] flex"><NotepadText className="mr-2" /> ค่าธรรมเนียมการศึกษา</h2>

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
                                <td className="py-4 px-6">12,700 บาท</td>
                                <td className="py-4 px-6">รวมค่าใช้จ่ายเบื้องต้น</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-4 px-6">ภาคเรียนที่ 2</td>
                                <td className="py-4 px-6">11,700 บาท</td>
                                <td className="py-4 px-6">-</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6">ภาคฤดูร้อน</td>
                                <td className="py-4 px-6">-</td>
                                <td className="py-4 px-6">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* หลักสูตร */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#C70039] flex"><LibraryBig className="mr-2" /> หลักสูตรการเรียนการสอน</h2>

                <div className="space-y-4 text-gray-700">
                    <p>
                        หลักสูตรวิศวกรรมซอฟต์แวร์มุ่งเน้นการผลิตบัณฑิตที่มีความรู้ ความสามารถในการพัฒนาระบบซอฟต์แวร์อย่างมีประสิทธิภาพ
                        สามารถทำงานร่วมกับผู้อื่น และมีจริยธรรมทางวิชาชีพ
                    </p>

                    <ul className="list-disc list-inside space-y-2">
                        <li>ปี 1 : ภาษาอังกฤษเพื่อการสื่อสาร, เทคโนโลยีดิจิทัล, วิศวกรรมซอฟต์แวร์เบื้องต้น, การออกแบบอัลกอริทึม</li>
                        <li>ปี 2 : การพัฒนาโปรแกรมประยุกต์, ปฏิสัมพันธ์ระหว่างมนุษย์กับคอมพิวเตอร์, การพัฒนาโปรแกรมประยุกต์ฐานข้อมูล, วิศวกรรมซอฟต์แวร์, การเขียนโปรแกรมคอมพิวเตอร์</li>
                        <li>ปี 3 : การพัฒนาเว็บแอปพลิเคชัน, การวิเคราะห์และออกแบบเชิงวัตถุ, สถิติและวิธีการเชิงประสบการณ์, เทคโนโลยีบล็อกเชน</li>
                        <li>ปี 4 : การพัฒนาโปรแกรมประยุกต์บนเว็บ, การทดสอบซอฟต์แวร์, การพัฒนาและปรับปรุงซอฟต์แวร์, ฝึกประสบการณ์วิชาชีพ, โครงงานวิจัยด้านวิศวกรรมซอฟต์แวร์</li>
                    </ul>

                    <div className="mt-6">
                        <a href="https://pgm.npru.ac.th/se/data/files/%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3SE-64.pdf" target='_blank' className="inline-block bg-[#C70039] text-white px-6 py-3 rounded-full hover:bg-[#a8002c] transition">
                            ดาวน์โหลดรายละเอียดหลักสูตร (หลักสูตรปรับปรุง พ.ศ. 2564)
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}
