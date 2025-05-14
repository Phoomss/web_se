import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function page() {
    return (
        <div className="container mx-auto px-4 lg:px-8 py-16">
            {/* หัวข้อหลัก */}
            <div className="text-center mb-16">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                    Contact Us
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#C70039] mb-4">
                    ติดต่อสาขาวิชา
                </h1>
                <div className="h-1 bg-[#C70039] mx-auto rounded-full w-24"></div>
            </div>

            {/* ข้อมูลติดต่อ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-[#C70039]" size={28} />
                        <div>
                            <h3 className="text-lg font-semibold mb-1">ที่อยู่</h3>
                            <p className="text-gray-600">
                                สาขาวิชาวิศวกรรมซอฟต์แวร์
                                คณะวิทยาศาสตร์และเทคโนโลย
                                มหาวิทยาลัยราชภัฏนครปฐม
                                85 ถ.มาลัยแมน อ.เมือง จ.นครปฐม 73000
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Phone className="text-[#C70039]" size={28} />
                        <div>
                            <h3 className="text-lg font-semibold mb-1">เบอร์โทรศัพท์</h3>
                            <p className="text-gray-600">034-109-300 ต่อ 3297</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Mail className="text-[#C70039]" size={28} />
                        <div>
                            <h3 className="text-lg font-semibold mb-1">อีเมล</h3>
                            <p className="text-gray-600">senpru@npru.ac.th</p>
                        </div>
                    </div>
                </div>

                {/* แผนที่ */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2265.2953850130703!2d100.0253427!3d13.8384815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2e5267c8ff173%3A0xad38808cf8120641!2z4LiY4Li44Lit4Lii4LmJ4Lix4Liy4LiZ4LiU4Lil4Lij4Li14LmM!5e0!3m2!1sen!2sth!4v1669804865067!5m2!1sen!2sth"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            {/* ปุ่มติดต่อเพิ่มเติม */}
            <div className="text-center">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[#C70039] text-white rounded-full text-lg font-semibold hover:bg-[#a5002c] transition">
                    ติดต่อผ่าน Facebook
                </a>
            </div>
        </div>
    );
}
