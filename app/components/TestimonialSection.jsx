"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Star } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Riya & Ankit",
      time: "8 months ago",
      review:
        "Tanushree Farm & Palace turned our wedding into something truly magical. The open lawn looked breathtaking under the evening lights, and every arrangement was handled flawlessly. Our guests are still talking about the ambience and hospitality.",
    },
    {
      name: "Mr. & Mrs. Malhotra",
      time: "8 months ago",
      review:
        "We hosted our daughter’s engagement here and the experience was exceptional. From décor coordination to catering, everything was managed with such professionalism. The team ensured we enjoyed every moment stress free.",
    },
    {
      name: "Karan Mehta",
      time: "8 months ago",
      review:
        "With over 1000 guests attending our reception, we needed a venue that could handle scale without compromising elegance. Tanushree delivered beautifully. Spacious, well managed, and absolutely stunning.",
    },
      {
      name: "Rahul Sharma, Event Director",
      time: "8 months ago",
      review:
        "We organized a corporate product launch at Tanushree Farm & Palace and the setup was impressive. The stage arrangements, sound system, and overall coordination reflected true professionalism. Highly recommended for premium corporate events.",
    },
    {
      name: "Neha Verma",
      time: "8 months ago",
      review:
        "Our family function felt grand yet intimate. The green lawn, the mandap setup, and the hospitality created the perfect traditional atmosphere. It was everything we had envisioned.",
    },
  ];

  return (
    <section className="relative bg-[#F8F5F0] py-24 px-6 md:px-12 overflow-hidden">

      {/* Soft Luxury Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,161,101,0.08),_transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.4em] uppercase text-[#C8A165] font-medium">
            Testimonials
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-serif font-semibold text-gray-900">
            What Our Guests Say
          </h2>

          <div className="w-24 h-[2px] bg-[#C8A165] mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 items-start">

          {/* Premium Rating Box */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-[#E8E1D8] text-center">

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              EXCELLENT
            </h3>

            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-[#C8A165] fill-[#C8A165]" />
              ))}
            </div>

            <p className="text-gray-600 mb-2">
              Based on <span className="font-semibold">74 reviews</span>
            </p>

            <p className="text-lg font-semibold text-gray-800 tracking-wide">
              Google Reviews
            </p>
          </div>

          {/* Swiper Testimonials */}
          <div className="lg:col-span-3">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-[#E8E1D8] h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                    {/* Top Section */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {item.time}
                        </p>
                      </div>

                      <div className="w-9 h-9 rounded-full bg-[#C8A165]/10 flex items-center justify-center text-[#C8A165] font-bold">
                        G
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-[#C8A165] fill-[#C8A165]"
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-600 line-clamp-4 text-sm leading-relaxed">
                      {item.review}
                    </p>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}