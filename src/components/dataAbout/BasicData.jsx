"use client";
import Image from 'next/image';
import React from 'react';

export default function BasicData() {
    return (
        <>
            {/* หัวข้อหลัก */}
            <h1 className="text-4xl font-bold text-[#C70039] mb-2">
                หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิศวกรรมซอฟต์แวร์
            </h1>
            <div className="border-b-4 border-[#C70039]  mx-auto mb-10"></div>

            {/* Grid 6-6 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* ซ้าย 6 ส่วน */}
                <div className="md:col-span-6 space-y-8">
                    {/* 🔹 ข้อมูลหลักสูตร */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[#C70039] mb-3">
                            ข้อมูลทั่วไป
                        </h2>
                        <div className="text-lg text-gray-800 space-y-2 leading-relaxed">
                            <p><strong>ภาษาไทย:</strong> หลักสูตรวิทยาศาสตร์บัณฑิต สาขาวิชาวิศวกรรมซอฟต์แวร์</p>
                            <p><strong>ภาษาอังกฤษ:</strong> Bachelor of Science (Software Engineering)</p>
                        </div>
                    </div>

                    {/* 🔹 ชื่อปริญญาและสาขา */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[#C70039] mb-3">
                            ชื่อปริญญาและสาขาวิชา
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-lg text-gray-800 leading-relaxed">
                            <p><strong>ชื่อเต็ม (ไทย):</strong> วิทยาศาสตร์บัณฑิต สาขาวิชาวิศวกรรมซอฟต์แวร์</p>
                            <p><strong>ชื่อย่อ (ไทย):</strong> วท.บ. (วิศวกรรมซอฟต์แวร์)</p>
                            <p><strong>ชื่อเต็ม (อังกฤษ):</strong> Bachelor of Science (Software Engineering)</p>
                            <p><strong>ชื่อย่อ (อังกฤษ):</strong> B.Sc. (Software Engineering)</p>
                            <p className="md:col-span-2">
                                <strong>จำนวนหน่วยกิตที่เรียนตลอดหลักสูตร:</strong> 145 หน่วยกิต
                            </p>
                        </div>
                    </div>
                </div>

                {/* ขวา 6 ส่วน */}
                <div className="md:col-span-6">
                    <div className="w-full rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/imageBarcher.png"
                            alt="แผนภาพหลักสูตรวิศวกรรมซอฟต์แวร์"
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </>


    );
}
