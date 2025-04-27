"use client";
import React from "react";
import Image from "next/image";
import { Facebook } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            {/* 🎉 Banner Top */}
            <div className="w-full bg-[#C70039] text-white text-center text-sm py-2">
                <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-2 px-4 lg:px-8">
                    <p className="text-xs md:text-sm">
                        "ผลิตบัณฑิตที่มีความรู้และทักษะการพัฒนาซอฟต์แวร์อย่างเป็นระบบ สามารถประยุกต์ใช้อย่างมีคุณธรรม จริยธรรม"
                    </p>
                    <span className="hidden lg:inline-block mx-2">|</span>
                    <div className="flex items-center gap-2 text-xs">
                        <span>ติดต่อเรา : 0888-888-8888</span>
                        <a href="https://www.facebook.com/softwarenpru" title="Facebook" className="hover:text-amber-400">
                            <Facebook size={16} />
                        </a>
                    </div>
                </div>
            </div>

            {/* 🌐 Main Navbar */}
            <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 lg:px-8">
                {/* START */}
                <div className="navbar-start">
                    {/* Mobile Hamburger */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow-lg bg-white rounded-xl w-56 text-sm space-y-1">
                            <li>
                                <Link href="/" className="hover:text-[#C70039] transition-colors duration-200">หน้าแรก</Link>
                            </li>

                            <li>
                                <details>
                                    <summary className="hover:text-[#C70039] transition-colors duration-200 cursor-pointer">
                                        เกี่ยวกับสาขา
                                    </summary>
                                    <ul className="pl-4 mt-1 space-y-1">
                                        <li>
                                            <Link href="/about/history" className="hover:text-[#C70039]">ประวัติความเป็นมา</Link>
                                        </li>
                                        <li>
                                            <Link href="/about/classroom" className="hover:text-[#C70039]">ห้องปฏิบัติการ</Link>
                                        </li>
                                        <li>
                                            <Link href="/about/teacher" className="hover:text-[#C70039]">อาจารย์ประจำสาขา</Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <Link href="/course" className="hover:text-[#C70039] transition-colors duration-200">หลักสูตร/ค่าเทอม</Link>
                            </li>

                            <li>
                                <Link href="/news-activities" className="hover:text-[#C70039] transition-colors duration-200">ข่าวสารและกิจกรรม</Link>
                            </li>

                            <li>
                                <Link href="https://pgm.npru.ac.th/se/data/files/%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3SE-64.pdf" className="hover:text-[#C70039] transition-colors duration-200" target='_blank'>ดาวน์โหลดเอกสาร</Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-[#C70039] transition-colors duration-200">ติดต่อสาขา</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2" title="Software Engineering Nakhon Pathom">
                        <Image
                            src="/logo.png"
                            width={130}
                            height={50}
                            alt="Software Engineering Nakhon Pathom"
                            priority
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[15px] font-semibold gap-6">
                        <li>
                            <Link href="/" className="hover:text-[#C70039] transition-colors duration-200">
                                หน้าแรก
                            </Link>
                        </li>

                        <li tabIndex={0}>
                            <details className="group">
                                <summary className="hover:text-[#C70039] transition-colors duration-200">
                                    เกี่ยวกับสาขา
                                </summary>
                                <ul className="mt-2 bg-white shadow-lg border rounded-xl p-3 space-y-2 w-52 text-sm group-open:animate-fadeIn">
                                    <li>
                                        <Link href="/about/history" className="hover:text-[#C70039]">ประวัติความเป็นมา</Link>
                                    </li>
                                    <li>
                                        <Link href="/about/classroom" className="hover:text-[#C70039]">ห้องปฏิบัติการ</Link>
                                    </li>
                                    <li>
                                        <Link href="/about/teacher" className="hover:text-[#C70039]">อาจารย์ประจำสาขา</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <Link href="/course" className="hover:text-[#C70039] transition-colors duration-200">
                                หลักสูตร/ค่าเทอม
                            </Link>
                        </li>

                        <li>
                            <Link href="/news-activities" className="hover:text-[#C70039] transition-colors duration-200">
                                ข่าวสารและกิจกรรม
                            </Link>
                        </li>

                        <li>
                            <Link href="https://pgm.npru.ac.th/se/data/files/%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3SE-64.pdf" target='_blank' className="hover:text-[#C70039] transition-colors duration-200">
                                ดาวน์โหลดเอกสาร
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact" className="hover:text-[#C70039] transition-colors duration-200">
                                ติดต่อสาขา
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
