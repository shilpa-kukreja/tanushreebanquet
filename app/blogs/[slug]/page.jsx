"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, ArrowRight, Share2, Bookmark, Heart, Clock, CheckCircle, Phone, Mail } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// Blog data with slugs
const allBlogsData = {
  "best-banquet-hall-in-ghaziabad-complete-guide": {
    id: 1,
    title: "Best Banquet Hall in Ghaziabad: A Complete Guide to Choosing the Perfect Venue",
    slug: "best-banquet-hall-in-ghaziabad-complete-guide",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "/6thOurBlog1.jpg",
    category: "Venue Guide",
    author: {
      name: "Tanushree Team",
      role: "Event Experts",
      bio: "Expert event planners with years of experience in creating unforgettable celebrations at Tanushree Grand Banquets."
    },
    excerpt: "Planning a wedding, reception, or milestone celebration comes with one decision that shapes everything else—the venue. This comprehensive guide walks you through everything to consider when choosing a banquet hall.",
    content: `
      <p>Planning a wedding, reception, or milestone celebration comes with one decision that shapes everything else—the venue. If you're searching for the <a href="/blogs/best-banquet-hall-in-ghaziabad-complete-guide#features" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">best banquet hall in Ghaziabad</a>, you're likely comparing space, decor, catering quality, and convenience before making a final call. This guide walks you through everything to consider when choosing a banquet hall, and why <a href="/" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">Tanushree Grand Banquet & Farms</a> has become a preferred choice for couples and families across Ghaziabad, Noida, Delhi, and the wider NCR region.</p>

      <p>Whether you're organizing a <a href="/occasions/corporate-events" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">corporate event</a>, a <a href="/occasions/social-celebrations" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">birthday celebration</a>, or planning a <a href="/occasions/wedding" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">wedding</a>, the right <strong>wedding banquet hall in Ghaziabad</strong> sets the tone for the entire experience. Let's break down what truly matters when selecting a venue.</p>

      <h2>Why Choosing the Right Banquet Hall is Important</h2>
      <p>A banquet hall isn't just a physical space—it's where memories are made. The venue you choose directly affects:</p>
      <ul>
        <li><strong>Guest experience</strong> - comfort, accessibility, and ambiance shape how guests remember your event</li>
        <li><strong>Event flow</strong> - spacious layouts allow for smoother catering, seating, and entertainment logistics</li>
        <li><strong>Budget management</strong> - a well-equipped venue reduces the need for external vendors</li>
        <li><strong>Overall aesthetic</strong> - decor and lighting elevate photos, videos, and the emotional tone of the celebration</li>
      </ul>
      <p>This is why couples and event planners spend considerable time comparing a <strong>marriage hall in Ghaziabad</strong> before booking. A hasty decision can mean compromising on space, catering quality, or parking—all of which affect the day itself.</p>

      <h2 id="features">Key Features to Look for in the Best Banquet Hall in Ghaziabad</h2>
      <p>When evaluating a <a href="/blogs/best-banquet-hall-in-ghaziabad-complete-guide#features" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">luxury banquet hall in Ghaziabad</a>, here are the features that genuinely make a difference:</p>

      <h3>1. Spacious Indoor & Outdoor Areas</h3>
      <p>Flexibility matters. A hall that offers both indoor elegance and outdoor charm allows you to plan ceremonies, receptions, and after-parties without switching locations.</p>

      <h3>2. Elegant Decor & Ambiance</h3>
      <p>Look for venues with tasteful interiors, modern lighting, and decor options that can be customized to match your theme—whether traditional, contemporary, or fusion.</p>

      <h3>3. In-House Catering Quality</h3>
      <p>Food is often the most talked-about part of any celebration. A venue offering pure vegetarian catering—spanning North Indian, South Indian, and Chinese cuisines—ensures a consistent, high-quality dining experience without coordinating multiple outside vendors.</p>

      <h3>4. Ample Parking Space</h3>
      <p>For guests traveling from Ghaziabad, Noida, Delhi, and NCR, hassle-free parking is non-negotiable. This is one of the most overlooked yet essential features of a good <strong>party hall in Ghaziabad</strong>.</p>

      <h3>5. Modern Amenities</h3>
      <p>DJ setups with LED walls, contemporary lighting systems, and comfortable seating arrangements all contribute to a seamless event experience.</p>

      <h3>6. Professional Event Management Support</h3>
      <p>A dedicated team that handles logistics, coordination, and on-ground execution takes the stress off the host, allowing them to actually enjoy the celebration.</p>

      <h3>7. Guest Capacity</h3>
      <p>Depending on your event size, choosing a hall that comfortably accommodates your guest list—without feeling cramped or overly vast—matters. Venues like <a href="/" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">Tanushree Grand Banquet & Farms</a>, which support 400–500 guests, strike a practical balance for mid-to-large gatherings.</p>

      <h2>Types of Events You Can Host at Tanushree Grand Banquet & Farms</h2>
      <p>One of the biggest advantages of choosing <a href="/" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">Tanushree Grand Banquet & Farms</a> is its versatility. The venue is designed to host a wide range of celebrations, including:</p>
      <ul>
        <li><a href="/occasions/wedding" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition"><strong>Wedding Celebrations</strong></a> - a grand, elegant setting for the main ceremony</li>
        <li><a href="/occasions/wedding" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition"><strong>Reception Parties</strong></a> - spacious layouts ideal for evening receptions</li>
        <li><strong>Engagement & Ring Ceremony</strong> - intimate yet festive arrangements</li>
        <li><a href="/occasions/social-celebrations" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition"><strong>Birthday Parties</strong></a> - customizable decor for milestone birthdays</li>
        <li><a href="/occasions/social-celebrations" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition"><strong>Anniversary Celebrations</strong></a> - a warm setting for commemorating special years</li>
        <li><strong>Baby Shower</strong> - comfortable, elegant spaces for smaller family gatherings</li>
        <li><a href="/occasions/corporate-events" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition"><strong>Corporate Events</strong></a> - professional setups for conferences, seminars, and company celebrations</li>
        <li><a href="/occasions/cultural-celebrations" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition"><strong>Cultural & Social Events</strong></a> - flexible spaces suited to community and cultural gatherings</li>
      </ul>
      <p>This range makes it a genuinely multi-purpose <strong>reception venue in Ghaziabad</strong>, suited to nearly any occasion.</p>

      <h2>Why Choose Tanushree Grand Banquet & Farms for Your Next Celebration?</h2>
      <p>With so many options available, why do families and event planners consistently choose <a href="/" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">Tanushree Grand Banquet & Farms</a>?</p>

      <h3>Elegant, Spacious Setting</h3>
      <p>The venue offers a spacious, lavish banquet hall designed to comfortably host 400–500 guests, with both indoor and outdoor arrangements available.</p>

      <h3>Pure Vegetarian In-House Catering</h3>
      <p>Guests can enjoy a curated pure vegetarian menu featuring North Indian, South Indian, and Chinese cuisines, complemented by live chaat and food counters ensuring every guest is well taken care of.</p>

      <h3>Modern Amenities</h3>
      <p>From DJ setups with LED walls to contemporary lighting design, the venue is equipped to match the energy of any celebration, big or small.</p>

      <h3>Ample Parking</h3>
      <p>Convenient, ample parking space means guests arriving from across Ghaziabad, Noida, Delhi, and NCR won't face last-minute hassles.</p>

      <h3>Professional Event Management</h3>
      <p>A dedicated support team assists with planning and on-ground coordination, making <a href="/" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">Tanushree Grand Banquet & Farms</a> a dependable choice for hosts who want a smooth, well-managed event.</p>

      <h3>Customized Event Planning</h3>
      <p>Every celebration is different, and the venue accommodates personalized requests—from decor themes to seating arrangements—to match your vision.</p>

      <p>Whether you're planning a <a href="/occasions/wedding" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">wedding</a>, a <a href="/occasions/corporate-events" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">corporate event</a>, or a <a href="/occasions/social-celebrations" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">birthday party</a>, <strong>Tanushree Grand Banquet & Farms</strong> offers the elegance, space, and support needed to make the day memorable.</p>

      <h2>Tips for Booking the Best Banquet Hall in Ghaziabad</h2>
      <p>If you're actively comparing venues, keep these tips in mind:</p>
      <ul>
        <li><strong>Visit in person</strong> - photos rarely capture the true scale and ambiance of a space</li>
        <li><strong>Ask about catering flexibility</strong> - confirm cuisine options and whether live counters are included</li>
        <li><strong>Check guest capacity against your list</strong> - avoid overcrowding or an overly empty-feeling hall</li>
        <li><strong>Clarify parking arrangements</strong> - especially for weekend events with high guest turnout</li>
        <li><strong>Confirm what's included</strong> - decor, sound systems, lighting, and event management support can vary significantly between venues</li>
        <li><strong>Book early</strong> - popular dates for weddings and receptions fill up quickly, especially during peak season</li>
      </ul>
      <p>Taking the time to compare these details before booking a <strong>wedding venue in Ghaziabad</strong> can save considerable stress later.</p>

      <h2>Conclusion</h2>
      <p>Choosing the <strong>best banquet hall in Ghaziabad</strong> comes down to a combination of space, catering quality, amenities, and reliable event support. For couples, families, and corporate planners looking for an <strong>affordable banquet hall in Ghaziabad</strong> that doesn't compromise on elegance or service, <a href="/" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">Tanushree Grand Banquet & Farms</a> offers a well-rounded solution—spacious interiors, pure vegetarian in-house catering, modern amenities, ample parking, and professional event management, all in one convenient Ghaziabad location.</p>

      <p>If you're planning your next <a href="/occasions/wedding" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">wedding</a>, <a href="/occasions/social-celebrations" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">reception, birthday</a>, or <a href="/occasions/corporate-events" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">corporate event</a>, consider visiting <strong>Tanushree Grand Banquet & Farms</strong> to see the space in person and discuss how it can be customized for your celebration.</p>
    `,
    faqs: [
      {
        question: "What is the guest capacity at Tanushree Grand Banquet & Farms?",
        answer: "The venue comfortably accommodates 400–500 guests, making it suitable for mid-to-large celebrations such as weddings, receptions, and corporate events."
      },
      {
        question: "Does Tanushree Grand Banquet & Farms offer in-house catering?",
        answer: "Yes, the venue provides pure vegetarian in-house catering, including North Indian, South Indian, and Chinese cuisines, along with live chaat and food counters."
      },
      {
        question: "Is parking available at the venue?",
        answer: "Yes, Tanushree Grand Banquet & Farms offers ample parking space, making it convenient for guests traveling from Ghaziabad, Noida, Delhi, and NCR."
      },
      {
        question: "What types of events can be hosted here?",
        answer: "The venue supports a wide range of events, including weddings, receptions, engagements, birthday parties, anniversaries, baby showers, corporate events, and cultural or social gatherings."
      },
      {
        question: "Does the venue provide event planning support?",
        answer: "Yes, professional event management support is available to assist with coordination, decor, and on-ground execution, ensuring a smooth experience for hosts."
      }
    ],
    relatedPosts: [
      { id: 2, title: "Engagement Venue in Ghaziabad: How to Choose the Perfect Place for Your Ring Ceremony", slug: "engagement-venue-in-ghaziabad-perfect-place-ring-ceremony", image: "/blog2.jpeg" }
    ]
  },
  "engagement-venue-in-ghaziabad-perfect-place-ring-ceremony": {
    id: 2,
    title: "Engagement Venue in Ghaziabad: How to Choose the Perfect Place for Your Ring Ceremony",
    slug: "engagement-venue-in-ghaziabad-perfect-place-ring-ceremony",
    date: "April 10, 2026",
    readTime: "6 min read",
    image: "/blog2.jpeg",
    category: "Venue Guide",
    author: {
      name: "Tanushree Team",
      role: "Event Experts",
      bio: "Expert event planners with years of experience in creating unforgettable celebrations at Tanushree Grand Banquets."
    },
    excerpt: "An engagement is one of those milestones that sets the tone for everything that follows. This guide covers why the venue matters, what to look for, and the common mistakes to avoid before booking.",
    content: `
      <p>An engagement is one of those milestones that sets the tone for everything that follows—the wedding, the families coming together, the first photographs shared with everyone. Yet couples often spend far more time picking the wedding venue than the engagement venue, treating it as a smaller decision.</p>

      <p>That's a mistake. The right <a href="/blogs/engagement-venue-in-ghaziabad-perfect-place-ring-ceremony" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">engagement venue in Ghaziabad</a> can turn a simple ring ceremony into a celebration guests still talk about years later, while the wrong one can leave even a well-planned event feeling flat. This guide covers why the venue matters, what to look for, and the common mistakes to avoid before booking.</p>

      <h2>Why the Venue Matters for an Engagement Ceremony</h2>
      <p>An engagement ceremony may be shorter than a wedding, but it carries just as much emotional weight—often the first time both families formally celebrate together, and usually the first big function guests get invited to.</p>

      <ul>
        <li><strong>It sets the tone for the celebration.</strong> A well-designed <a href="/occasions/engagement" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">engagement hall in Ghaziabad</a>, with the right lighting, decor backdrop, and layout, elevates the mood the moment guests walk in—far more than last-minute decoration can achieve.</li>
        <li><strong>It shapes the guest experience.</strong> From comfortable seating to smooth entry and exit, a well-planned <strong>banquet hall for engagement functions</strong> ensures guests aren't dealing with cramped spaces or parking hassles.</li>
        <li><strong>It photographs beautifully.</strong> Engagement photos and reels are often shared widely, and a venue with a strong aesthetic—a well-lit stage, elegant backdrop, or green lawn setting—makes every photo look effortlessly grand.</li>
        <li><strong>It reflects the significance of the occasion.</strong> Choosing a <strong>luxury engagement venue</strong> signals that this moment is being celebrated with the same care as the wedding itself, not treated as a lesser event.</li>
      </ul>

      <h2 id="features">Features to Look for in an Engagement Venue</h2>
      <p>Not every banquet hall is built the same way. Here's what to actually check before shortlisting an <strong>engagement function hall</strong>:</p>

      <h3>1. Guest capacity that matches your list</h3>
      <p>A venue that's too small feels cramped, and one too large can feel empty. Look for a hall offering flexible capacity, so the space feels right whether you're hosting 150 guests or 500.</p>

      <h3>2. Indoor and outdoor options</h3>
      <p>The best engagement venues offer both an air-conditioned indoor hall and an open-air lawn, giving flexibility based on season, guest count, and desired ambience.</p>

      <h3>3. Stage and decor arrangements</h3>
      <p>A dedicated stage with proper decor coordination—mandap-style setups, entry ramps, elegant backdrops—adds a polished, camera-ready look to the ceremony.</p>

      <h3>4. Catering quality and flexibility</h3>
      <p>Since food is central to any Indian celebration, check for quality in-house catering with both vegetarian and non-vegetarian menu options, and whether specific preferences can be accommodated.</p>

      <h3>5. Parking and accessibility</h3>
      <p>Ample private parking and easy accessibility from major roads makes life significantly easier for guests, especially for larger gatherings.</p>

      <h3>6. Power backup and infrastructure</h3>
      <p>Uninterrupted power backup might not seem glamorous, but it's one of the most important practical factors. Nothing disrupts a celebration faster than a power issue mid-ceremony.</p>

      <h3>7. On-ground event support</h3>
      <p>A venue with an experienced team handling logistics on the day takes pressure off the family, letting everyone enjoy the celebration instead of managing it.</p>

      <h2>Tips for Choosing the Perfect Venue</h2>
      <p>Once you've shortlisted a few options, these tips help you make the final call:</p>

      <ul>
        <li><strong>Visit in person before booking.</strong> Photos online rarely capture a venue's true scale, lighting, and feel. A physical visit—ideally around your event's time of day—gives a much clearer picture.</li>
        <li><strong>Ask about total versus comfortable capacity.</strong> A hall might technically fit 400-500 guests, but comfortable seating and movement space matter more than a maximum number.</li>
        <li><strong>Clarify what's included in the package.</strong> Decor, catering, power backup, parking, and staff support don't always come bundled—get clarity on what's included versus what's an add-on.</li>
        <li><strong>Check the location's convenience for your guests.</strong> If most guests are travelling from Delhi NCR, Noida, or Gurgaon, prioritize easy road access over a venue that's stunning but hard to reach.</li>
        <li><strong>Look at real reviews and past events.</strong> Reviews from couples who've hosted similar functions often reveal more about service quality than a sales pitch ever will.</li>
        <li><strong>Confirm timing and flexibility.</strong> Some venues have strict time slots; make sure the timing works for your ceremony structure, especially with multiple rituals planned.</li>
      </ul>

      <h2>Common Mistakes to Avoid Before Booking</h2>
      <p>Even well-organized families run into avoidable issues when booking an engagement venue. Watch out for these:</p>

      <ul>
        <li><strong>Booking based on photos alone.</strong> As mentioned above, skipping the in-person visit is one of the most common—and costly—mistakes families make.</li>
        <li><strong>Ignoring the guest list size while finalizing capacity.</strong> Underestimating your final guest count can lead to a cramped, uncomfortable event; it's safer to plan slightly above your expected number.</li>
        <li><strong>Not confirming catering flexibility early.</strong> If specific menu preferences or dietary requirements matter to your families, confirm this before booking rather than after signing the contract.</li>
        <li><strong>Overlooking accessibility and parking.</strong> A beautiful venue that's difficult to reach or lacks adequate parking can create a frustrating experience for guests before the celebration even begins.</li>
        <li><strong>Skipping questions about power backup and contingency plans.</strong> Especially for evening functions, confirming backup arrangements protects against last-minute disruptions.</li>
        <li><strong>Finalizing without a written agreement.</strong> Verbal assurances about décor, catering, or inclusions can lead to misunderstandings—always get the details of your package in writing.</li>
      </ul>

      <h2>Why Choose Tanushree Grand Banquet & Farms?</h2>
      <p>When it comes to hosting an engagement ceremony that truly feels grand, <a href="/" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">Tanushree Grand Banquet & Farms</a> brings together the practical and the beautiful in one venue.</p>

      <h3>Spacious indoor and outdoor options</h3>
      <p>With both an air-conditioned indoor banquet hall and an expansive open-air green lawn, the venue adapts comfortably to guest lists ranging from a few hundred to well over a thousand.</p>

      <h3>Elegant stage and decor arrangements</h3>
      <p>From grand stage setups to entry ramps and mandap-style arrangements, every detail is designed to make the ceremony look as good in person as it does in photographs.</p>

      <h3>Reliable infrastructure</h3>
      <p>Uninterrupted power backup and spacious private parking mean the practical side of hosting a large celebration is fully taken care of.</p>

      <h3>In-house catering</h3>
      <p>Guests are served through professionally managed in-house catering, with both vegetarian and non-vegetarian menu options to suit different preferences.</p>

      <h3>Prime, accessible location</h3>
      <p>Located in Ghaziabad with strong connectivity to Delhi NCR, Noida, and surrounding areas, the venue is easy for guests to reach regardless of where they're travelling from.</p>

      <h3>Experienced event coordination</h3>
      <p>From decor coordination to on-ground event management, the team's involvement means families can focus on the celebration itself rather than managing logistics.</p>

      <p>For families searching for the <strong>best engagement venue</strong> that balances scale, elegance, and dependable service, <a href="/" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">Tanushree Grand Banquet & Farms</a> is built to deliver exactly that.</p>

      <h2>Conclusion</h2>
      <p>An engagement ceremony deserves the same thought and care that goes into planning a wedding because the venue you choose shapes everything from the guest experience to the photographs that get cherished for years. By focusing on the right features, avoiding common booking mistakes, and visiting in person before finalizing, families can ensure the celebration feels as special as the milestone itself.</p>

      <p>If you're looking for a venue that combines space, elegance, and dependable service in Ghaziabad, <a href="/" class="text-[#b68c3d] underline decoration-2 underline-offset-2 hover:opacity-80 transition">Tanushree Grand Banquet & Farms</a> offers exactly the setting to make an engagement ceremony truly memorable.</p>
    `,
    faqs: [
      {
        question: "What is the ideal guest capacity to look for in an engagement venue?",
        answer: "It depends on your guest list, but choosing a venue with flexible capacity—one that can comfortably handle both smaller and larger gatherings—gives you more room to adjust as your final numbers are confirmed."
      },
      {
        question: "Should I choose an indoor hall or an open-air lawn for an engagement ceremony?",
        answer: "It depends on the season, guest count, and the ambience you're going for. A venue offering both options gives you the flexibility to decide closer to the date based on weather and preference."
      },
      {
        question: "How far in advance should I book an engagement venue in Ghaziabad?",
        answer: "Popular venues get booked quickly, especially during wedding season, so it's advisable to finalize your venue at least a few months in advance to secure your preferred date."
      },
      {
        question: "What should be included in a banquet hall package for an engagement function?",
        answer: "At minimum, clarify what's included around catering, décor, power backup, parking, and event support staff — these are the areas most likely to have separate costs if not confirmed upfront."
      },
      {
        question: "Is in-house catering better than outside catering for engagement functions?",
        answer: "In-house catering often ensures better coordination with the venue's staff and infrastructure, and typically offers more consistent quality since the same team manages both the space and the food service."
      }
    ],
    relatedPosts: [
      { id: 1, title: "Best Banquet Hall in Ghaziabad: A Complete Guide to Choosing the Perfect Venue", slug: "best-banquet-hall-in-ghaziabad-complete-guide", image: "/6thOurBlog1.jpg" }
    ]
  }
};



export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const blog = allBlogsData[slug];

  // If blog not found
  if (!blog) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif text-[#b68c3d] mb-4">Blog Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link href="/blogs" className="text-[#b68c3d] hover:underline">
              ← Back to all blogs
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-800 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-[#b68c3d] transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <Link href="/blogs" className="text-gray-600 hover:text-[#b68c3d] transition-colors">Blogs</Link>
              <span className="text-gray-400">›</span>
              <span className="text-[#b68c3d] font-medium line-clamp-1">{blog.title}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[55vh] min-h-[450px] w-full overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30">
            <div className="flex items-end h-full max-w-7xl mx-auto px-6 lg:px-12 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white max-w-4xl"
              >
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="bg-[#b68c3d] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {blog.category}
                  </span>
                  <span className="text-white/80 text-sm flex items-center gap-1">
                    <Clock size={14} /> {blog.readTime}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                  {blog.title}
                </h1>
                <div className="flex items-center gap-4 mt-4 text-white/80 flex-wrap">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} /> {blog.date}
                  </span>
                  <span className="w-px h-4 bg-white/30 hidden sm:block"></span>
                  <span>By {blog.author.name}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none prose-headings:text-[#b68c3d] prose-headings:font-serif prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:text-gray-700 prose-strong:text-[#b68c3d] prose-ul:text-gray-700 prose-li:text-gray-700 prose-a:text-[#b68c3d] prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2 prose-a:hover:opacity-80 prose-a:transition"
              >
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </motion.article>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-600">Share this article:</span>
                    <div className="flex gap-2">
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-[#b68c3d] hover:text-white transition-colors">
                        <Share2 size={18} />
                      </button>
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-[#b68c3d] hover:text-white transition-colors">
                        <Heart size={18} />
                      </button>
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-[#b68c3d] hover:text-white transition-colors">
                        <Bookmark size={18} />
                      </button>
                    </div>
                  </div>
                  <Link href="/contact" className="text-[#b68c3d] font-medium hover:underline flex items-center gap-2">
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* FAQs Section */}
              {blog.faqs && blog.faqs.length > 0 && (
                <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-3xl font-serif text-[#b68c3d] mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {blog.faqs.map((faq, index) => (
                      <details key={index} className="group">
                        <summary className="flex items-center justify-between cursor-pointer p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                          <span className="font-medium text-gray-800">{faq.question}</span>
                          <span className="text-[#b68c3d] group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="p-4 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio */}
              <div className="mt-12 bg-[#b68c3d]/5 rounded-2xl p-8 border border-[#b68c3d]/10">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-[#b68c3d] rounded-full flex items-center justify-center text-white text-2xl font-serif">
                    T
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{blog.author.name}</h4>
                    <p className="text-gray-600">{blog.author.role}</p>
                    <p className="text-gray-600 text-sm mt-1">{blog.author.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Quick Enquiry */}
                <div className="bg-[#b68c3d] text-white rounded-2xl p-6">
                  <h4 className="text-xl font-serif mb-4">Plan Your Event</h4>
                  <p className="text-white/80 text-sm mb-4">Get a free consultation for your celebration</p>
                  <Link href="/contact">
                    <button className="w-full bg-white text-[#b68c3d] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Enquire Now
                    </button>
                  </Link>
                  <div className="mt-4 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <Phone size={14} /> +91 98100 42296
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Mail size={14} /> tanushreegrandbanquets@gmail.com
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                {blog.relatedPosts && blog.relatedPosts.length > 0 && (
                  <div>
                    <h4 className="text-lg font-serif text-gray-900 mb-4">Related Articles</h4>
                    <div className="space-y-4">
                      {blog.relatedPosts.map((post) => (
                        <Link key={post.id} href={`/blogs/${post.slug}`} className="block group">
                          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-32 w-full">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-4">
                              <h5 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-[#b68c3d] transition-colors">
                                {post.title}
                              </h5>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Links */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-serif text-gray-900 mb-4">Quick Links</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/occasions/wedding" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#b68c3d]" /> Wedding Venue
                      </Link>
                    </li>
                    <li>
                      <Link href="/occasions/corporate-events" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#b68c3d]" /> Corporate Events
                      </Link>
                    </li>
                    <li>
                      <Link href="/occasions/social-celebrations" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#b68c3d]" /> Social Celebrations
                      </Link>
                    </li>
                    <li>
                      <Link href="/occasions/cultural-celebrations" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#b68c3d]" /> Cultural Celebrations
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#b68c3d]" /> Gallery
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#b68c3d]" /> Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Blogs */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#b68c3d] transition-colors">
              <ArrowLeft size={18} /> Back to all blogs
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}