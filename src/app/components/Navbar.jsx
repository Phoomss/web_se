"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [inovationOpen, setInovationOpen] = useState(false);
    const [newsAndActivityOpen, setNewsAndActivityOpen] = useState(false);

    return (
        <nav className="top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <a href="/">
                    <Image src="/logo_se.png" width={180} height={40} alt="Logo" />
                </a>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-6 text-lg">
                {['หน้าแรก', 'หลักสูตร'].map((item, index) => (
                    <li key={index} className="hover:text-[#C70039] transition duration-300">
                        <a href="#">{item}</a>
                    </li>
                ))}
                <li className="relative">
                    <button onClick={() => setNewsAndActivityOpen(!newsAndActivityOpen)} className="hover:text-[#C70039] transition duration-300 flex items-center">
                        ข่าวและกิจกรรม
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {newsAndActivityOpen && (
                        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">ข่าวสาร</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">กิจกรรม</a></li>
                        </ul>
                    )}
                </li>
                <li className="relative">
                    <button onClick={() => setInovationOpen(!inovationOpen)} className="hover:text-[#C70039] transition duration-300 flex items-center">
                        วิจัยและนวัตกรรม
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {inovationOpen && (
                        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">ผลงานวิชาการ</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">ผลงานนักศึกษา</a></li>
                        </ul>
                    )}
                </li>
                <li className="relative">
                    <button onClick={() => setAboutOpen(!aboutOpen)} className="hover:text-[#C70039] transition duration-300 flex items-center">
                        เกี่ยวกับเรา
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {aboutOpen && (
                        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">ประวัติสาขา</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">อาจารย์ประจำสาขา</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">ทำเนียบนักศึกษา</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">สถานที่และอุปกรณ์ใช้ในการเรียนการสอน</a></li>
                        </ul>
                    )}
                </li>
            </ul>

            {/* CTA Button */}
            <a className="hidden lg:block bg-[#C70039] text-white px-4 py-2 rounded-lg hover:bg-[#FF5733] transition">Get Started</a>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: -250, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -250, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg flex flex-col p-6 gap-4 lg:hidden"
                    >
                        <button onClick={() => setIsOpen(false)} className="self-end p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {['หน้าแรก', 'หลักสูตร'].map((item, index) => (
                            <a key={index} href="#" className="text-lg hover:text-[#C70039] transition duration-300">
                                {item}
                            </a>
                        ))}
                        <div>
                            <button onClick={() => setNewsAndActivityOpen(!newsAndActivityOpen)} className="text-lg hover:text-[#C70039] transition duration-300 flex items-center">
                                ข่าวและกิจกรรม
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {newsAndActivityOpen && (
                                <ul className="mt-2 bg-white shadow-md rounded-md">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">ข่าวสาร</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">กิจกรรม</a></li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <button onClick={() => setInovationOpen(!inovationOpen)} className="text-lg hover:text-[#C70039] transition duration-300 flex items-center">
                                วิจัยและนวัตกรรม
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {inovationOpen && (
                                <ul className="mt-2 bg-white shadow-md rounded-md">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">ผลงานวิชาการ</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">ผลงานนักศึกษา</a></li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <button onClick={() => setAboutOpen(!aboutOpen)} className="text-lg hover:text-[#C70039] transition duration-300 flex items-center">
                                เกี่ยวกับเรา
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {aboutOpen && (
                                <ul className="mt-2 bg-white shadow-md rounded-md">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">ประวัติสาขา</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">อาจารย์ประจำสาขา</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">ทำเนียบนักศึกษา</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">สถานที่และอุปกรณ์ใช้ในการเรียนการสอน</a></li>
                                </ul>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
