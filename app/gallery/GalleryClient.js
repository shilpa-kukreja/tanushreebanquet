"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = [
    "/image1 (1).jpeg",
    "/image1 (2).jpeg",
    "/image1 (3).jpeg",
    "/image1 (4).jpeg",
    "/image1 (5).jpeg",
    "/image1 (6).jpeg",
    "/5thEvents7.jpg",
    "/5thEvents8.jpg",
    "/5thEvents9.jpg",
];

export default function GalleryPage() {
    return (
        <>
            <Navbar />

            <main className="bg-white text-gray-800 min-h-screen">

                {/* HERO */}
                <section className="py-24 text-center bg-gradient-to-b from-[#f9f6f1] to-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-serif text-[#C8A165]"
                    >
                        Our Gallery
                    </motion.h1>

                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        A curated showcase of grand celebrations, elegant décor, and open air moments brought to life at Tanushree Farm & Palace.
                    </p>
                </section>

                {/* GALLERY GRID */}
                <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative h-80 rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <Image
                                src={src}
                                alt="Gallery Image"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                            />

                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                <span className="text-white text-lg font-semibold">
                                    View Moment
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </section>
            </main>

            <Footer />
        </>
    );
}