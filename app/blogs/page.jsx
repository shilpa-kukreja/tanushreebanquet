"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Best Wedding Farmhouse in Ghaziabad for Grand Open Air Celebrations",
    date: "March 10, 2026",
    image: "/tanushree-banner3.jpg",
    excerpt:
      "When it comes to planning a dream wedding, choosing the right venue defines everything. If you are searching for the best wedding farmhouse in Ghaziabad, Tanushree Farm & Palace offers an unmatched blend of lush green landscapes, expansive space, and refined hospitality on NH24.A Grand Open Air Wedding ExperienceModern couples are increasingly choosing open air wedding venues in Ghaziabad for their flexibility and visual appeal.At Tanushree Farm & Palace, the sprawling lawn accommodates up to 1500 guests, making it ideal for lavish wedding celebrations, receptions, and sangeet ceremonies.The beautifully maintained green lawn provides a natural backdrop for mandap setups, grand stage décor, and elegant seating arrangements.Prime Location on NH24 Conveniently located on NH24 in East Ghaziabad, the venue offers seamless connectivity for guests coming from Delhi, Noida, and surrounding NCR areas.Ample parking for 200 cars ensures comfort and ease for large gatherings.Complete Wedding Infrastructure From mandap setup and catering to power backup and stage arrangements, every detail is thoughtfully managed.Whether you prefer in house décor or your own decorator, flexibility allows you to personalize your big day effortlessly.If you are looking for a luxury wedding venue in Ghaziabad that combines scale, elegance, and flawless execution, Tanushree Farm & Palace stands as a distinguished choice.",
  },
{
  id: 2,
    title: "Why Farmhouse Weddings in Ghaziabad Are Trending in 2026",
      date: "February 28, 2026",
        image: "/tanushree-banner2.webp",
          excerpt:
  "The charm of farmhouse weddings in Ghaziabad continues to grow as couples seek venues that offer space, natural beauty, and creative freedom.The Rise of Outdoor Wedding Venues Unlike enclosed banquet halls, outdoor wedding lawns provide expansive layouts for décor experimentation, floral installations, and immersive lighting. Farmhouse venues allow couples to design personalized celebrations under open skies.Ideal for Big Fat Indian Weddings With guest lists often crossing 800 to 1200 attendees, large marriage lawns in Ghaziabad are becoming the preferred option. Tanushree Farm & Palace accommodates grand wedding gatherings while maintaining elegance and organization.Perfect for Every Wedding Function From haldi and mehendi to engagement, sangeet, wedding ceremony, and reception, farmhouse venues provide flexibility for multiple events within one location.Choosing a farmhouse wedding venue on NH24 ensures accessibility without compromising on grandeur.If you envision a celebration that feels majestic, vibrant, and beautifully curated, an open air farmhouse wedding is the perfect choice.",
  },
{
  id: 3,
    title: "Top Corporate Event Venue in Ghaziabad for Conferences and Product Launches",
      date: "January 15, 2026",
        image: "/tanushree-banner.webp",
          excerpt:
  "Corporate gatherings demand professionalism, infrastructure, and seamless coordination. Finding the right corporate event venue in Ghaziabad can significantly influence the success of your event.Spacious Venue for Large Corporate Gatherings Tanushree Farm & Palace offers a versatile event space suitable for conferences, annual meets, product launches, and corporate celebrations. The expansive layout allows stage setup, branding installations, and structured seating arrangements.Advanced Facilities for Business Events With professional sound systems, lighting arrangements, reliable power backup, and ample parking, the venue supports smooth execution of corporate programs.Convenient Location for NCR Businesses Located on NH24, the venue is easily accessible for companies operating across Delhi NCR. This makes it a practical yet premium choice for business events.For organizations seeking a spacious and elegant corporate event venue in Ghaziabad, Tanushree Farm & Palace provides both functionality and sophistication.",
  },
];

export default function BlogPage() {
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
            Stories of Celebration & Style
          </motion.h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Explore refined inspirations, planning guidance, and grand event ideas designed to transform your special occasions into timeless experiences.
          </p>
        </section>

        {/* BLOG GRID */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group border border-gray-100"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={14} className="mr-2 text-[#C8A165]" />
                  {blog.date}
                </div>

                <h3 className="text-lg font-semibold mb-3">
                  {blog.title}
                </h3>

                <p className="text-sm line-clamp-8 text-gray-600 mb-4">
                  {blog.excerpt}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center text-[#C8A165] text-sm font-medium hover:underline"
                >
                  Read More <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}