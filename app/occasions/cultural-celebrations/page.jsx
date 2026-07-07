import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { 
  FaUsers, 
  FaMapMarkerAlt, 
  FaUtensils, 
  FaMusic, 
  FaParking, 
  FaShieldAlt, 
  FaBolt,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaPalette,
  FaGift,
  FaCalendarCheck,
  FaPray,
  FaFeather,
  FaDharmachakra,
  FaTheaterMasks,
  FaHands,
  FaAward,
  FaSchool,
  FaHandshake,
  FaMicrophoneAlt
} from "react-icons/fa";
import {
  MdFestival,
  MdCelebration,
  MdGroups,
  MdTempleHindu
} from "react-icons/md";

export default function CulturalCelebrationsPage() {
  const eventTypes = [
    {
      icon: <MdTempleHindu className="text-3xl text-[#b68c3d]" />,
      title: "Religious Functions",
      description: "Peaceful and well-organized environment for Satyanarayan Katha, Mata Ki Chowki, Jagran, Bhajan Sandhya, Havan & Pooja, Naamkaran Ceremony, and spiritual gatherings."
    },
    {
      icon: <MdFestival className="text-3xl text-[#b68c3d]" />,
      title: "Festival Celebrations",
      description: "Celebrate Diwali, Holi, Eid, Christmas, Lohri, Navratri Garba Nights, Durga Puja, and national events with joy and elegance."
    },
    {
      icon: <FaTheaterMasks className="text-3xl text-[#b68c3d]" />,
      title: "Cultural Programs",
      description: "Perfect venue for dance competitions, drama performances, talent shows, art exhibitions, fashion shows, and literary events."
    },
    {
      icon: <MdGroups className="text-3xl text-[#b68c3d]" />,
      title: "Community Gatherings",
      description: "Ideal for RWA events, community meetings, social gatherings, family reunions, club events, charity programs, and NGO events."
    },
    {
      icon: <FaAward className="text-3xl text-[#b68c3d]" />,
      title: "Award Functions",
      description: "Elegant banquet spaces for corporate awards, employee recognition, school award ceremonies, and cultural excellence awards."
    },
    {
      icon: <FaSchool className="text-3xl text-[#b68c3d]" />,
      title: "School Events",
      description: "Trusted venue for annual functions, graduation ceremonies, parent meetings, cultural days, prize distribution, and workshops."
    },
    {
      icon: <FaHandshake className="text-3xl text-[#b68c3d]" />,
      title: "Dance Performances",
      description: "Spacious hall with customizable stage setup for classical, folk, contemporary dance shows, and dance academy annual functions."
    },
    {
      icon: <FaMicrophoneAlt className="text-3xl text-[#b68c3d]" />,
      title: "Music Programs",
      description: "Professional arrangements for live concerts, classical music events, orchestra, Sufi nights, cultural festivals, and singing competitions."
    }
  ];

  const features = [
    { icon: <FaPalette />, title: "Customized Décor", description: "Traditional floral, temple theme, festival-themed, and cultural backdrop decorations" },
    { icon: <FaUtensils />, title: "Traditional Catering", description: "Vegetarian and multi-cuisine menus with regional specialties and live food counters" },
    { icon: <FaMusic />, title: "Music & Entertainment", description: "Professional sound systems for live music, performances, and cultural programs" },
    { icon: <FaMapMarkerAlt />, title: "Prime Location", description: "Conveniently located in Ghaziabad with easy accessibility from major areas" },
    { icon: <FaParking />, title: "Ample Parking", description: "Dedicated parking facilities ensuring hassle-free experience for all guests" },
    { icon: <FaBolt />, title: "Power Backup", description: "Uninterrupted power supply ensuring your cultural event runs flawlessly" },
    { icon: <FaShieldAlt />, title: "Security Coverage", description: "Comprehensive security arrangements for guest safety and peace of mind" },
    { icon: <FaCalendarCheck />, title: "Professional Management", description: "Experienced team assisting with planning and coordinating every aspect" }
  ];

  const advantages = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Premium Banquet Hall in Ghaziabad",
      description: "Elegant and spacious event venue with modern amenities while preserving traditional warmth."
    },
    {
      icon: <FaPalette />,
      title: "Customized Cultural Décor",
      description: "Available decoration options including traditional floral, temple theme, festival-themed setups, and LED lighting."
    },
    {
      icon: <FaUtensils />,
      title: "Traditional & Modern Catering",
      description: "Delicious vegetarian and multi-cuisine menus prepared with the highest standards of quality and hygiene."
    },
    {
      icon: <FaUsers />,
      title: "Professional Event Management",
      description: "Our experienced team provides complete event management support from planning to execution."
    },
    {
      icon: <FaParking />,
      title: "Convenient Location with Ample Parking",
      description: "Located in Ghaziabad with dedicated parking facilities for hassle-free guest experience."
    },
    {
      icon: <FaGift />,
      title: "Affordable Event Packages",
      description: "Competitive pricing with flexible packages designed to suit every budget and requirement."
    }
  ];

  const testimonials = [
    {
      quote: "The arrangements for our Satyanarayan Katha were impeccable. The traditional décor and peaceful ambiance made the ceremony truly divine.",
      author: "Sharma Family",
      position: "Religious Function"
    },
    {
      quote: "We hosted our community's Diwali celebration here and it was spectacular! The festive décor, spacious hall, and excellent catering made it unforgettable.",
      author: "RWA Committee",
      position: "Festival Celebration"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Premium Design */}
        <div className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src="/3rdOccasion3.jpg"
            alt="Cultural Celebrations"
            fill
            className="object-cover transform scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white px-4 max-w-4xl animate-fadeIn">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-16 bg-[#b68c3d]"></div>
                  <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Cultural Heritage</span>
                  <div className="h-px w-16 bg-[#b68c3d]"></div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
                  Cultural Celebrations
                </h1>
                <p className="text-2xl md:text-3xl font-light text-gray-200 max-w-3xl mx-auto mb-8">
                  Honoring Traditions with Grace
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="#contact">
                    <button className="bg-[#b68c3d] hover:bg-[#9a742f] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                      Plan Your Event <FaArrowRight />
                    </button>
                  </Link>
                  <Link href="#features">
                    <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                      Explore Venue
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Introduction with stats */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">About Us</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3">
                Cultural Event Venue in Ghaziabad
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  India is a land of vibrant traditions, colorful festivals, and meaningful cultural gatherings. <span className="font-semibold text-[#b68c3d]">Tanushree Grand Banquets</span> is a premium cultural event venue in Ghaziabad, offering elegant spaces, exceptional hospitality, and customized event solutions for celebrations of every tradition. From intimate religious functions to large-scale cultural festivals, our banquet hall provides the perfect setting with modern amenities while preserving the warmth and essence of traditional celebrations.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Whether you're planning a religious ceremony, a cultural program, a community event, or a festive celebration, choosing the right venue plays a crucial role in creating unforgettable memories. Our experienced team understands the importance of cultural sensitivity and works diligently to ensure every aspect of your celebration respects and honors your heritage.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#b68c3d]/10 to-[#b68c3d]/5 p-6 rounded-xl text-center border border-[#b68c3d]/20">
                  <div className="text-4xl font-bold text-[#b68c3d]">400+</div>
                  <div className="text-sm text-gray-600 mt-1">Guest Capacity</div>
                </div>
                <div className="bg-gradient-to-br from-[#b68c3d]/10 to-[#b68c3d]/5 p-6 rounded-xl text-center border border-[#b68c3d]/20">
                  <div className="text-4xl font-bold text-[#b68c3d]">12+</div>
                  <div className="text-sm text-gray-600 mt-1">Event Types</div>
                </div>
                <div className="bg-gradient-to-br from-[#b68c3d]/10 to-[#b68c3d]/5 p-6 rounded-xl text-center border border-[#b68c3d]/20 col-span-2">
                  <div className="text-4xl font-bold text-[#b68c3d]">50+</div>
                  <div className="text-sm text-gray-600 mt-1">Cultural Events Hosted</div>
                </div>
              </div>
            </div>

            {/* Celebrate Every Tradition Section */}
            <div className="bg-gradient-to-br from-[#b68c3d]/5 to-white p-8 rounded-2xl border border-[#b68c3d]/10">
              <h3 className="text-2xl font-serif text-[#b68c3d] mb-4 text-center">Celebrate Every Tradition with Grandeur</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                Every cultural celebration reflects emotions, heritage, and togetherness. At Tanushree Grand Banquets, we understand the importance of these occasions and provide a venue designed to accommodate events of all sizes with elegance and comfort. Our experienced team ensures that every detail—from décor and seating arrangements to catering and guest management—is planned according to your customs and preferences.
              </p>
            </div>
          </div>

          {/* Events We Host - Grid with Icons */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3">
                Events We Host
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
              <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
                From religious functions to cultural programs and community gatherings, we host a diverse range of cultural celebrations.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventTypes.map((event, index) => (
                <div key={index} className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#b68c3d]/30 transform hover:-translate-y-1">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {event.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Venue Highlights */}
          <div className="mb-20 bg-gray-50 p-12 rounded-2xl">
            <div className="text-center mb-12">
              <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Infrastructure</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3">
                Venue Highlights
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
              <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
                Our venue combines traditional elegance with modern amenities to create the perfect setting for cultural celebrations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#b68c3d]/10 rounded-lg flex items-center justify-center text-[#b68c3d]">
                    <FaDharmachakra />
                  </div>
                  <h4 className="font-semibold text-gray-900">Spacious Banquet Hall</h4>
                </div>
                <p className="text-gray-600 text-sm">Comfortably accommodates both intimate gatherings and large cultural celebrations</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#b68c3d]/10 rounded-lg flex items-center justify-center text-[#b68c3d]">
                    <FaPalette />
                  </div>
                  <h4 className="font-semibold text-gray-900">Elegant Interiors</h4>
                </div>
                <p className="text-gray-600 text-sm">Beautiful interiors creating a welcoming atmosphere for traditional and modern celebrations</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#b68c3d]/10 rounded-lg flex items-center justify-center text-[#b68c3d]">
                    <FaBolt />
                  </div>
                  <h4 className="font-semibold text-gray-900">Fully Air-Conditioned</h4>
                </div>
                <p className="text-gray-600 text-sm">Guests remain comfortable throughout the event regardless of the season</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#b68c3d]/10 rounded-lg flex items-center justify-center text-[#b68c3d]">
                    <FaMapMarkerAlt />
                  </div>
                  <h4 className="font-semibold text-gray-900">Convenient Location</h4>
                </div>
                <p className="text-gray-600 text-sm">Located in Ghaziabad, easily accessible from major residential and commercial areas</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#b68c3d]/10 rounded-lg flex items-center justify-center text-[#b68c3d]">
                    <FaParking />
                  </div>
                  <h4 className="font-semibold text-gray-900">Ample Parking</h4>
                </div>
                <p className="text-gray-600 text-sm">Dedicated parking facilities ensuring a hassle-free experience for all guests</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#b68c3d]/10 rounded-lg flex items-center justify-center text-[#b68c3d]">
                    <FaUsers />
                  </div>
                  <h4 className="font-semibold text-gray-900">Professional Management</h4>
                </div>
                <p className="text-gray-600 text-sm">Experienced team assisting with planning and coordinating every aspect of your event</p>
              </div>
            </div>
          </div>

          {/* Decoration Options */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Design</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3">
                Decoration Options
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
              <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
                Every cultural celebration has its own identity. We provide customized decoration themes based on your event.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#b68c3d]/5 to-white p-6 rounded-xl border border-[#b68c3d]/10 text-center">
                <div className="w-16 h-16 bg-[#b68c3d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPalette className="text-2xl text-[#b68c3d]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Traditional Décor</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>Traditional Floral Décor</li>
                  <li>Temple Theme Decorations</li>
                  <li>Rangoli Arrangements</li>
                  <li>Entrance Decorations</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-[#b68c3d]/5 to-white p-6 rounded-xl border border-[#b68c3d]/10 text-center">
                <div className="w-16 h-16 bg-[#b68c3d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MdFestival className="text-2xl text-[#b68c3d]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Festival Themes</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>Festival-Themed Setups</li>
                  <li>Cultural Backdrops</li>
                  <li>Stage Decoration</li>
                  <li>LED Lighting</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-[#b68c3d]/5 to-white p-6 rounded-xl border border-[#b68c3d]/10 text-center">
                <div className="w-16 h-16 bg-[#b68c3d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGift className="text-2xl text-[#b68c3d]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Themes</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>Personalized Decor</li>
                  <li>Color Theme Coordination</li>
                  <li>Modern & Traditional Blend</li>
                  <li>Custom Backdrop Design</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-600 text-center mt-6">
              Our decorators work closely with clients to create an ambience that reflects their traditions and preferences.
            </p>
          </div>

          {/* Traditional Catering */}
          <div className="mb-20 bg-[#b68c3d]/5 p-12 rounded-2xl border border-[#b68c3d]/10">
            <div className="text-center mb-8">
              <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Cuisine</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3">
                Traditional Catering
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">Our Cuisine Offerings</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-[#b68c3d] text-xl">✓</span>
                    <span className="text-gray-700">Traditional Indian Cuisine</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#b68c3d] text-xl">✓</span>
                    <span className="text-gray-700">Regional Specialties</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#b68c3d] text-xl">✓</span>
                    <span className="text-gray-700">Live Food Counters</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">Special Menus</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-[#b68c3d] text-xl">✓</span>
                    <span className="text-gray-700">Sweet Counters</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#b68c3d] text-xl">✓</span>
                    <span className="text-gray-700">Festival Menus</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#b68c3d] text-xl">✓</span>
                    <span className="text-gray-700">Customized Buffet Options</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-center mt-6">We ensure that every guest enjoys an exceptional dining experience.</p>
          </div>

          {/* Features - Premium Grid */}
          <div id="features" className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Facilities</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3">
                World-Class Features
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
              <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
                Every successful cultural celebration depends on dependable infrastructure and thoughtful amenities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#b68c3d]/20">
                  <div className="w-12 h-12 bg-[#b68c3d]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#b68c3d] text-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3">
                What Our Guests Say
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl relative">
                  <FaQuoteLeft className="text-[#b68c3d] text-3xl opacity-20 mb-4" />
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#b68c3d]/20 rounded-full flex items-center justify-center">
                      <FaStar className="text-[#b68c3d]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us - Enhanced */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Advantages</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3">
                Why Choose Tanushree Grand Banquets
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
              <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
                Choosing the right banquet hall for cultural events is essential for creating memorable experiences. Here's why clients choose us.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:border-[#b68c3d]/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-[#b68c3d]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#b68c3d] text-2xl">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section - Premium */}
          <div id="contact" className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#b68c3d] to-[#9a742f] p-12 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
              <FaPray className="text-5xl text-white/80 mx-auto mb-6" />
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">
                Book the Best Cultural Event Venue in Ghaziabad
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-3xl mx-auto">
                Celebrate your traditions in an elegant and welcoming setting at Tanushree Grand Banquets. Whether you're planning a religious function, community gathering, festival celebration, cultural program, or award ceremony, our experienced team is dedicated to making every occasion memorable.
              </p>
              <p className="text-white/80 mb-8 text-lg">
                Contact us today: <span className="text-white font-bold text-xl">+91 98100 42296</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <button className="bg-white text-[#b68c3d] px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-lg">
                    Plan Your Event <FaArrowRight />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#b68c3d] transition-all duration-300">
                    Send Enquiry
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}