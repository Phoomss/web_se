import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#92002A] text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Section: Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#" className="hover:text-white transition">Branding</a></li>
            <li><a href="#" className="hover:text-white transition">Design</a></li>
            <li><a href="#" className="hover:text-white transition">Marketing</a></li>
            <li><a href="#" className="hover:text-white transition">Advertisement</a></li>
          </ul>
        </div>

        {/* Section: Company */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#" className="hover:text-white transition">About us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Jobs</a></li>
            <li><a href="#" className="hover:text-white transition">Press kit</a></li>
          </ul>
        </div>

        {/* Section: Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">ติดต่อ</h2>
          <p className="text-sm text-white/80 mb-2">คณะวิทยาศาสตร์และเทคโนโลยี</p>
          <p className="text-sm text-white/80 mb-2">มหาวิทยาลัยราชภัฏจันทรเกษม</p>
          <p className="text-sm text-white/80">โทร: 02-942-XXXX</p>
        </div>

        {/* Section: Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-white transition"><i className="fab fa-facebook-f text-xl"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-twitter text-xl"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-youtube text-xl"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-tiktok text-xl"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Software Engineering - Nakhon Pathom Rajabhat University. All Rights Reserved.
      </div>
    </footer>
  );
}
 