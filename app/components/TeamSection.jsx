"use client";

import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="relative bg-[#F6F1E8] py-10 px-6 md:px-12 overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,161,101,0.08),_transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Small Top Label */}
        <span className="text-sm tracking-[0.4em] uppercase text-[#C8A165] font-medium">
          Our Team
        </span>

        {/* Main Heading */}
        <h2 className="mt-4 text-3xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
          Our Professional Team <br className="hidden md:block" /> 
          & Premium Facilities
        </h2>

        {/* Elegant Divider */}
        <div className="w-24 h-[2px] bg-[#C8A165] mx-auto mt-6 mb-8"></div>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg">
          At Jubilee, our team of professionals is dedicated to crafting 
          experiences that surpass your dreams. From event conceptualization 
          to flawless execution, every detail is handled with precision, 
          passion, and perfection. Behind the scenes, our administration and 
          maintenance teams ensure seamless coordination and world-class service.
        </p>

        {/* Image Card */}
        <div className="mt-14 relative group">
          
          <div className="absolute -inset-2 bg-gradient-to-r from-[#C8A165]/40 to-[#A67C3C]/40 blur-2xl opacity-30 group-hover:opacity-50 transition duration-500 rounded-2xl"></div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#E8E1D8]">
            <Image
              src="/tanushree-banner5.avif" 
              alt="Professional Team"
              width={1200}
              height={800}
              className="w-full h-auto object-cover transition duration-700"
            />
          </div>

        </div>

        {/* ================= TWO BOXES BELOW IMAGE ================= */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">

          {/* Box 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#E8E1D8] hover:shadow-2xl transition duration-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Expert Event Management
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Professional planning & coordination</li>
              <li>• Charismatic event hostesses</li>
              <li>• Custom décor & theme styling</li>
              <li>• Award-winning culinary team</li>
              <li>• DJ & entertainment services</li>
              <li>• Personalized event collaterals</li>
            </ul>
          </div>

          {/* Box 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#E8E1D8] hover:shadow-2xl transition duration-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Premium Facilities
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• State-of-the-art lighting & AV setup</li>
              <li>• PA system & CCTV coverage</li>
              <li>• Elegant stage & ramp settings</li>
              <li>• Ergonomic seating arrangements</li>
              <li>• Reliable backup power system</li>
              <li>• Ample parking with valet service</li>
            </ul>
          </div>

        </div>
        {/* ========================================================== */}

      </div>
    </section>
  );
}