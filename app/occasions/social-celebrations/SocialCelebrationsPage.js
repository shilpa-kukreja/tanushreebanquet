import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { 
  FaCheckCircle, 
  FaUsers, 
  FaMapMarkerAlt, 
  FaUtensils, 
  FaCamera, 
  FaMusic, 
  FaParking, 
  FaShieldAlt, 
  FaBolt,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaPalette,
  FaHeart,
  FaGift,
  FaUserFriends,
  FaHome,
  FaPlane,
  FaHotel,      
  FaCalendarCheck,
  FaBirthdayCake,
  FaCrown
} from "react-icons/fa";
import { MdFamilyRestroom, MdCelebration, MdChildCare } from "react-icons/md";

export default function SocialCelebrationsPage() {
  const eventTypes = [
    {
      icon: <FaBirthdayCake className="text-3xl text-[#b68c3d]" />,
      title: "Birthday Parties",
      description: "From milestone birthdays to children's parties, we bring together decor, entertainment, and catering suited to every age group."
    },
    {
      icon: <FaHeart className="text-3xl text-[#b68c3d]" />,
      title: "Anniversary Celebrations",
      description: "Elegant setups designed to honor years of togetherness, perfect for both intimate and large gatherings."
    },
    {
      icon: <MdChildCare className="text-3xl text-[#b68c3d]" />,
      title: "Baby Shower",
      description: "A warm, beautifully arranged setting to celebrate new beginnings, making us a popular baby shower venue for growing families."
    },
    {
      icon: <FaGift className="text-3xl text-[#b68c3d]" />,
      title: "Naming Ceremony",
      description: "Traditional and joyous arrangements to mark this important family milestone with elegance and warmth."
    },
    {
      icon: <MdFamilyRestroom className="text-3xl text-[#b68c3d]" />,
      title: "Family Gatherings",
      description: "Spacious indoor and outdoor areas ideal for get-togethers, festive family functions, and casual celebrations alike."
    },
    {
      icon: <FaUserFriends className="text-3xl text-[#b68c3d]" />,
      title: "Reunions",
      description: "Ample space and a relaxed ambiance make us a natural choice for old friends and extended family reconnecting."
    },
    {
      icon: <FaHome className="text-3xl text-[#b68c3d]" />,
      title: "Housewarming",
      description: "Elegant arrangements to celebrate a new home with family and loved ones in a welcoming setting."
    },
    {
      icon: <FaPlane className="text-3xl text-[#b68c3d]" />,
      title: "Farewell Party",
      description: "Warm, well-organized setups to send off colleagues, friends, or family members in style."
    },
    {
      icon: <FaCrown className="text-3xl text-[#b68c3d]" />,
      title: "Retirement Party",
      description: "A dignified, celebratory space to honor a career milestone with family, friends, and colleagues."
    }
  ];

  const features = [
    { icon: <FaPalette />, title: "Customizable Décor", description: "In-house decor team creating personalized themes from classic floral to vibrant festive arrangements" },
    { icon: <FaUtensils />, title: "Premium Catering", description: "Pure vegetarian menu featuring North Indian, South Indian, and Chinese cuisines" },
    { icon: <FaCamera />, title: "Photography Friendly", description: "Beautiful lawns and elegant interiors perfect for capturing every special moment" },
    { icon: <FaMusic />, title: "Entertainment Options", description: "DJ arrangements and sound systems for dancing, music, and celebratory performances" },
    { icon: <FaParking />, title: "Ample Parking", description: "Spacious parking area accommodating large guest gatherings comfortably" },
    { icon: <FaBolt />, title: "Power Backup", description: "Uninterrupted power supply ensuring your celebration runs flawlessly" },
    { icon: <FaShieldAlt />, title: "Security Coverage", description: "Comprehensive security arrangements for guest safety and peace of mind" },
    { icon: <FaMapMarkerAlt />, title: "Prime Location", description: "Conveniently located on NH24, Mahagunpuram, Ghaziabad with easy connectivity" }
  ];

  const advantages = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Prime Accessible Location",
      description: "Located on NH24, Mahagunpuram, Ghaziabad, making it easy for guests traveling from across the city and NCR."
    },
    {
      icon: <FaStar />,
      title: "Trusted by the Community",
      description: "Backed by 74+ Google reviews reflecting our consistent service and guest experience."
    },
    {
      icon: <FaUtensils />,
      title: "In-House Catering Excellence",
      description: "Chefs delivering delicious vegetarian menus for every occasion with customizable options."
    },
    {
      icon: <FaUsers />,
      title: "Complete Event Support",
      description: "From decor and entertainment to security and power backup, our team manages every detail."
    }
  ];

  const testimonials = [
    {
      quote: "Tanushree Farm & Palace made our anniversary celebration absolutely magical. The decor was stunning and the service was impeccable.",
      author: "Anita & Rajesh Sharma",
      position: "25th Anniversary Celebration"
    },
    {
      quote: "We hosted our baby shower here and it was perfect! The team took care of everything and made us feel so special.",
      author: "Priya Mehra",
      position: "Baby Shower Celebration"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Premium Design */}
        <div className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src="/3rdOccasion2.jpg"
            alt="Social Celebrations"
            fill
            className="object-cover transform scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white px-4 max-w-4xl animate-fadeIn">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-16 bg-[#b68c3d]"></div>
                  <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Life's Moments</span>
                  <div className="h-px w-16 bg-[#b68c3d]"></div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
                  Social Celebrations
                </h1>
                <p className="text-2xl md:text-3xl font-light text-gray-200 max-w-3xl mx-auto mb-8">
                  Creating Moments That Last Forever
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="#contact">
                    <button className="bg-[#b68c3d] hover:bg-[#9a742f] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                      Plan Your Celebration <FaArrowRight />
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
                Social Celebration Venue in Ghaziabad
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Life's most special moments deserve a setting that matches their significance. <span className="font-semibold text-[#b68c3d]">Tanushree Farm & Palace</span> is a premier social celebration venue in Ghaziabad, thoughtfully designed to host every kind of personal milestone — from joyous birthday parties to heartfelt family reunions. Located on NH24 in Mahagunpuram, Ghaziabad, our venue blends sprawling green landscapes with elegant indoor spaces, giving every celebration room to breathe and shine.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Whether you're planning an intimate baby shower or a grand anniversary celebration for hundreds of guests, our flexible spaces, dedicated event team, and attention to detail make us one of the most sought-after <span className="font-semibold">celebration halls in the region</span>. With space to comfortably host 400+ guests, we're equally suited to a cozy family gathering or a large-scale celebration that brings together generations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#b68c3d]/10 to-[#b68c3d]/5 p-6 rounded-xl text-center border border-[#b68c3d]/20">
                  <div className="text-4xl font-bold text-[#b68c3d]">400+</div>
                  <div className="text-sm text-gray-600 mt-1">Guest Capacity</div>
                </div>
                <div className="bg-gradient-to-br from-[#b68c3d]/10 to-[#b68c3d]/5 p-6 rounded-xl text-center border border-[#b68c3d]/20">
                  <div className="text-4xl font-bold text-[#b68c3d]">15+</div>
                  <div className="text-sm text-gray-600 mt-1">Event Types</div>
                </div>
                <div className="bg-gradient-to-br from-[#b68c3d]/10 to-[#b68c3d]/5 p-6 rounded-xl text-center border border-[#b68c3d]/20 col-span-2">
                  <div className="text-4xl font-bold text-[#b68c3d]">74+</div>
                  <div className="text-sm text-gray-600 mt-1">Google Reviews</div>
                </div>
              </div>
            </div>

            {/* Celebrate Every Moment Section */}
            <div className="bg-gradient-to-br from-[#b68c3d]/5 to-white p-8 rounded-2xl border border-[#b68c3d]/10">
              <h3 className="text-2xl font-serif text-[#b68c3d] mb-4 text-center">Celebrate Every Special Moment</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                At Tanushree Farm & Palace, we understand that every celebration carries its own emotion, energy, and story. That's why our approach isn't one-size-fits-all — our team works closely with you to tailor the venue, decor, and arrangements around the specific occasion, guest list, and mood you envision. With space to comfortably host 400+ guests, we're equally suited to a cozy family gathering or a large-scale celebration that brings together generations.
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
                As a versatile family function hall and social venue, we regularly host a wide range of celebrations for every milestone.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((event, index) => (
                <div key={index} className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#b68c3d]/30 transform hover:-translate-y-1">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decoration Themes */}
          <div className="mb-20 bg-gray-50 p-12 rounded-2xl">
            <div className="text-center mb-12">
              <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Design</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3">
                Decoration Themes
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
              <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
                Every celebration deserves a look that reflects its personality. Our in-house decor team works with you to create customized themes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 bg-[#b68c3d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPalette className="text-2xl text-[#b68c3d]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Classic Floral</h4>
                <p className="text-gray-600">Elegant floral arrangements and sophisticated drape setups for timeless celebrations</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 bg-[#b68c3d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGift className="text-2xl text-[#b68c3d]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Vibrant Festive</h4>
                <p className="text-gray-600">Bold, colorful arrangements perfect for birthdays, baby showers, and family functions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 bg-[#b68c3d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="text-2xl text-[#b68c3d]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Themes</h4>
                <p className="text-gray-600">Personalized themes crafted to match your vision across our expansive lawns and indoor spaces</p>
              </div>
            </div>
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
                Every successful celebration depends on dependable infrastructure and thoughtful amenities. Here's what you can expect.
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
                What Our Clients Say
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
                Why Choose Us
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
              <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
                Families and event planners choose Tanushree Farm & Palace for our commitment to excellence and unforgettable experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:border-[#b68c3d]/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-[#b68c3d]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#b68c3d] text-2xl">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
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
              <FaHeart className="text-5xl text-white/80 mx-auto mb-6" />
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">
                Ready to Celebrate?
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-3xl mx-auto">
                From birthdays and baby showers to reunions and retirement parties, Tanushree Farm & Palace is where your special moments become lasting memories. Book your date today and let us help you create the perfect celebration.
              </p>
              <p className="text-white/80 mb-8 text-lg">
                Call us: <span className="text-white font-bold text-xl">+91 98100 42296</span>
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