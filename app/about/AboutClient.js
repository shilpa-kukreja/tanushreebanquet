"use client";

import { motion } from "framer-motion";
import { Award, Users, Sparkles, Building2 } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className=" text-gray-300">

        {/* HERO SECTION */}
        <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
          <Image
            src="/tanushree-banner.webp" // Add your banquet image in public folder
            alt="Banquet Hall"
            fill
            className="object-cover "
          />

          <div className="relative z-10 max-w-3xl px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif text-white font-semibold"
            >
              About Tanushree Farm & Palace
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-6 text-lg text-gray-300 leading-relaxed"
            >
              Where grandeur meets open skies. We craft unforgettable celebrations with refined hospitality, lush green surroundings, and flawless execution.
            </motion.p>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif text-black mb-6">
              Our Story
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Tanushree Farm & Palace was envisioned as a grand open air destination where celebrations unfold beneath expansive skies and timeless elegance. Created to host life’s most cherished milestones, our venue blends lush green landscapes with refined infrastructure and warm, attentive hospitality.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From lavish weddings and regal receptions to corporate gatherings and cultural festivities, we curate experiences defined by scale, sophistication, and seamless execution. Every celebration here is thoughtfully orchestrated, ensuring your special moments are not just hosted, but beautifully remembered.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/tanushree-banner2.webp" // Add another banquet image in public folder
              alt="Our Story"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* VALUES SECTION */}
        <section className="py-20 bg-[#111614]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-serif text-white mb-12">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

              {[
                {
                  icon: <Sparkles size={28} />,
                  title: "Grandeur",
                  desc: "Expansive green landscapes and refined arrangements designed to create majestic celebrations that leave lasting impressions.",
                },
                {
                  icon: <Users size={28} />,
                  title: "Warm Hospitality",
                  desc: "Thoughtful, attentive service delivered with grace, ensuring every guest feels welcomed, valued, and cared for.",
                },
                {
                  icon: <Award size={28} />,
                  title: "Precision",
                  desc: "Meticulous planning and seamless execution that transform every vision into a flawlessly orchestrated experience.",
                },
                {
                  icon: <Building2 size={28} />,
                  title: "Celebration Versatility",
                  desc: "An exceptional destination crafted to host weddings, corporate gatherings, and cultural festivities with equal elegance.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#0f1412] p-8 rounded-2xl border border-gray-800 hover:border-[#C8A165] transition duration-300"
                >
                  <div className="text-[#C8A165] mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8A165]/20 to-transparent blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Let’s Curate Your Grand Celebration
            </h2>

            <p className="text-gray-400 mb-8">
              Reserve your special day at Tanushree Farm & Palace and experience open air elegance, refined hospitality, and seamless execution like never before.
            </p>

            <button className="px-10 py-3 bg-[#C8A165] text-black font-medium rounded-full hover:bg-[#b8904f] transition duration-300">
              Book Your Date
            </button>
          </motion.div>
        </section>

      </main>

      <Footer />
    </>
  );
}