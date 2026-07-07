import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { 
  FaCheckCircle, 
  FaUsers, 
  FaMapMarkerAlt, 
  FaMicrophone, 
  FaVideo, 
  FaWifi, 
  FaParking, 
  FaUtensils, 
  FaSnowflake, 
  FaBolt,
  FaArrowRight,
  FaBuilding,
  FaAward,
  FaHandshake,
  FaLightbulb,
  FaCalendarCheck,
  FaStar,
  FaQuoteLeft
} from "react-icons/fa";
import { MdEvent, MdMeetingRoom, MdBusinessCenter } from "react-icons/md";

export default function CorporateEventsPage() {
  const eventTypes = [
    {
      icon: <FaUsers className="text-3xl text-[#b68c3d]" />,
      title: "Conferences & Seminars",
      description: "Large-format conferences with stage setups, AV support, and seating arrangements designed for clear visibility and audience engagement."
    },
    {
      icon: <MdMeetingRoom className="text-3xl text-[#b68c3d]" />,
      title: "Business Meetings",
      description: "Professional, distraction-free environments suited for boardroom discussions, strategy sessions, or client meetings."
    },
    {
      icon: <FaLightbulb className="text-3xl text-[#b68c3d]" />,
      title: "Product Launches",
      description: "A standout product launch venue with dramatic staging, lighting, and sound infrastructure to make your brand reveal memorable."
    },
    {
      icon: <FaAward className="text-3xl text-[#b68c3d]" />,
      title: "Award Ceremonies",
      description: "Elegant settings with grand stage and entry arrangements to honor achievements in style."
    },
    {
      icon: <MdBusinessCenter className="text-3xl text-[#b68c3d]" />,
      title: "Annual Functions",
      description: "Spacious layouts that comfortably host large employee gatherings, performances, and celebratory programs."
    },
    {
      icon: <FaHandshake className="text-3xl text-[#b68c3d]" />,
      title: "Team Building Events",
      description: "Open lawns and flexible indoor-outdoor spaces ideal for interactive and engaging team activities."
    }
  ];

  const facilities = [
    { icon: <FaMicrophone />, title: "Audio Visual Setup", description: "Premium AV infrastructure and professional sound systems" },
    { icon: <FaVideo />, title: "LED Screens", description: "Clear, large-format displays for presentations and branding" },
    { icon: <FaWifi />, title: "High-Speed Wi-Fi", description: "Reliable internet for live streaming and presentations" },
    { icon: <FaParking />, title: "Spacious Parking", description: "Ample parking space for large guest gatherings" },
    { icon: <FaUtensils />, title: "Premium Catering", description: "Pure vegetarian menu across multiple cuisines" },
    { icon: <FaSnowflake />, title: "Air Conditioning", description: "Comfortable climate control throughout the venue" },
    { icon: <FaBolt />, title: "Power Backup", description: "Uninterrupted power supply for flawless execution" }
  ];

  const advantages = [
    {
      icon: <FaCalendarCheck />,
      title: "End-to-end Event Management",
      description: "From planning to execution, our team manages every detail so yours doesn't have to."
    },
    {
      icon: <FaMicrophone />,
      title: "Professional Technical Support",
      description: "Advanced lighting, sound, and AV systems built to support corporate-level presentations."
    },
    {
      icon: <FaBolt />,
      title: "Reliable Execution Under Pressure",
      description: "Uninterrupted power backup and comprehensive security coverage for peace of mind."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Prime Location",
      description: "Easy accessibility via NH24, convenient for delegates from across Ghaziabad and NCR."
    }
  ];

  const testimonials = [
    {
      quote: "The professionalism and attention to detail at Tanushree Farm & Palace made our annual conference a resounding success.",
      author: "Rajesh Kumar",
      position: "Director, TechCorp India"
    },
    {
      quote: "Hosting our product launch here was a game-changer. The AV setup and staging were absolutely world-class.",
      author: "Priya Sharma",
      position: "Marketing Head, Innovate Solutions"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Enhanced with gradient overlay and animation */}
        <div className="relative h-[80vh] w-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-700 hover:scale-100"
            style={{ backgroundImage: "url('/3rdOccasion1.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white px-4 max-w-4xl animate-fadeIn">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-16 bg-[#b68c3d]"></div>
                  <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Premium Venue</span>
                  <div className="h-px w-16 bg-[#b68c3d]"></div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
                  Corporate Events
                </h1>
                <p className="text-2xl md:text-3xl font-light text-gray-200 max-w-3xl mx-auto mb-8">
                  Where Business Meets Excellence
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="#contact">
                    <button className="bg-[#b68c3d] hover:bg-[#9a742f] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                      Book Your Event <FaArrowRight />
                    </button>
                  </Link>
                  <Link href="#facilities">
                    <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                      Explore Facilities
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative scroll indicator */}
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
                Premier Corporate Event Venue in Ghaziabad
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Planning a corporate event that needs to leave a lasting impression? <span className="font-semibold text-[#b68c3d]">Tanushree Farm & Palace</span> is a premier corporate event venue in Ghaziabad, offering an expansive setting where business meets sophistication. Located on NH24 in Mahagunpuram, Ghaziabad, our venue combines scale, seamless accessibility, and refined execution — everything a company needs to host anything from a boardroom-style meeting to a large-scale product launch or annual function.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Whether you're organizing a conference for 50 executives or a corporate gala for over a thousand guests, Tanushree Farm & Palace is designed to handle every scale without compromising on elegance or professionalism. As one of the most versatile <span className="font-semibold">corporate banquet halls in Ghaziabad</span>, we bring together open green landscapes, modern infrastructure, and a dedicated event team to make your business occasion effortless and memorable.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#b68c3d]/10 to-[#b68c3d]/5 p-6 rounded-xl text-center border border-[#b68c3d]/20">
                  <div className="text-4xl font-bold text-[#b68c3d]">400+</div>
                  <div className="text-sm text-gray-600 mt-1">Guest Capacity</div>
                </div>
                <div className="bg-gradient-to-br from-[#b68c3d]/10 to-[#b68c3d]/5 p-6 rounded-xl text-center border border-[#b68c3d]/20">
                  <div className="text-4xl font-bold text-[#b68c3d]">10+</div>
                  <div className="text-sm text-gray-600 mt-1">Event Types</div>
                </div>
                <div className="bg-gradient-to-br from-[#b68c3d]/10 to-[#b68c3d]/5 p-6 rounded-xl text-center border border-[#b68c3d]/20 col-span-2">
                  <div className="text-4xl font-bold text-[#b68c3d]">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Corporate Events Hosted</div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us - Enhanced */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3">
                Why Tanushree Grand Banquets?
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
              <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
                Choosing the right venue can make or break a corporate event. Here's why businesses across Ghaziabad and the NCR region trust us.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-[#b68c3d]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#b68c3d] transition-colors duration-300">
                  <FaBuilding className="text-2xl text-[#b68c3d] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Scale Without Compromise</h3>
                <p className="text-gray-600 leading-relaxed">With space for 400+ guests, our venue accommodates everything from intimate boardroom sessions to large-scale corporate galas.</p>
              </div>
              
              <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-[#b68c3d]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#b68c3d] transition-colors duration-300">
                  <FaMapMarkerAlt className="text-2xl text-[#b68c3d] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prime Accessible Location</h3>
                <p className="text-gray-600 leading-relaxed">Situated on NH24, Mahagunpuram, Ghaziabad, offering seamless connectivity for guests from across the NCR.</p>
              </div>
              
              <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-[#b68c3d]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#b68c3d] transition-colors duration-300">
                  <FaMicrophone className="text-2xl text-[#b68c3d] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Infrastructure</h3>
                <p className="text-gray-600 leading-relaxed">From advanced lighting design to premium audio-visual setups, every element is built for corporate-grade execution.</p>
              </div>
              
              <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-[#b68c3d]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#b68c3d] transition-colors duration-300">
                  <FaUsers className="text-2xl text-[#b68c3d] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Experienced Management Team</h3>
                <p className="text-gray-600 leading-relaxed">Our team handles strategic planning, coordination, and on-ground execution so you can focus on the event itself.</p>
              </div>
            </div>
          </div>

          {/* Types of Corporate Events - Grid with Icons */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3">
                Types of Corporate Events We Host
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
              <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
                As a multi-purpose conference hall and corporate venue, we're equipped to host a wide range of business occasions.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((event, index) => (
                <div key={index} className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#b68c3d]/30">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities - Premium Grid */}
          <div id="facilities" className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Infrastructure</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3">
                World-Class Facilities
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
              <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
                Every successful corporate event depends on dependable infrastructure. Here's what you can expect at our venue.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#b68c3d]/20">
                  <div className="w-12 h-12 bg-[#b68c3d]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#b68c3d] text-xl">
                    {facility.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{facility.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
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

          {/* Why Companies Prefer Us - Enhanced */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#b68c3d] font-semibold tracking-widest text-sm uppercase">Advantages</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-3">
                Why Companies Prefer Us
              </h2>
              <div className="w-24 h-1 bg-[#b68c3d] mx-auto mt-4"></div>
              <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
                Companies choose Tanushree Farm & Palace not just for our infrastructure, but for the complete experience we deliver.
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
              <FaCalendarCheck className="text-5xl text-white/80 mx-auto mb-6" />
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">
                Ready to Host Your Next Corporate Event?
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-3xl mx-auto">
                From conferences and product launches to annual functions and dealer meets, Tanushree Farm & Palace brings together space, infrastructure, and professional execution to make your corporate event a success.
              </p>
              <p className="text-white/80 mb-8 text-lg">
                Book your date today: <span className="text-white font-bold text-xl">+91 98100 42296</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <button className="bg-white text-[#b68c3d] px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-lg">
                    Get in Touch <FaArrowRight />
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