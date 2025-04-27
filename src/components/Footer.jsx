import { MapPin, Phone, Facebook, ChevronRight, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#92002A] text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

        {/* Section: Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">ติดต่อ</h2>
          <p className="text-sm text-white/80 mb-3 flex items-center">
            <MapPin className="mr-2" /> 85 ถ.มาลัยแมน ต.วังตะกู อ.เมือง จ.นครปฐม 73000
          </p>
          <p className="text-sm text-white/80 mb-3 flex items-center">
            <Phone className="mr-2" /> โทร: 0 3426 1065
          </p>
          <p className="text-sm text-white/80 mb-3  flex items-center">
            <Facebook className="mr-2" /> Software Engineering NPRU
          </p>
          <p className="text-sm text-white/80 flex items-center">
            <Mail className="mr-2" /> senpru@npru.ac.th
          </p>
        </div>

        {/* Section: Website Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">เว็บไซต์</h2>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center">
              <ChevronRight className="mr-2" />
              <a href="https://www.npru.ac.th/index.php" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                เว็บไซต์มหาวิทยาลัย
              </a>
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2" />
              <a href="https://sc.npru.ac.th/sc_npru_new/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                เว็บไซต์คณะวิทยาศาสตร์และเทคโนโลยี
              </a>
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2" />
              <a href="https://reg.npru.ac.th/registrar/apphome.asp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                เว็บไซต์สมัครเข้าศึกษา
              </a>
            </li>
            <li className="flex items-center">
              <ChevronRight className="mr-2" />
              <Link href="/site-map" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                แผงผังเว็บ
              </Link>
            </li>
          </ul>
        </div>

        <div>
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

      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-sm text-white/70">
        <p>© {new Date().getFullYear()} Software Engineering : NPRU. All rights reserved</p>
        <p className="text-sm">Powered by Narongsak P.</p>
      </div>
    </footer>
  );
}
