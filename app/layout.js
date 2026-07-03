// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Best Banquet Hall in Ghaziabad | Tanushree Farm & Palace",
//   description: " Tanushree Farm & Palace is the best banquet hall in Ghaziabad for weddings, receptions & corporate events. Located on NH24 with space for 1500+ guests. Book now!",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }



// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Best Banquet Hall in Ghaziabad | Tanushree Farm & Palace",
//   description:
//     "Tanushree Farm & Palace is the best banquet hall in Ghaziabad for weddings, receptions & corporate events. Located on NH24 with space for 1500+ guests. Book now!",
//   alternates: {
//     canonical: 'https://tanushreegrandbanquets.com',
//   },
// };

// const schemaData = {
//   "@context": "https://schema.org",
//   "@type": ["LocalBusiness", "EventVenue"],
//   name: "Tanushree Farm & Palace",
//   description:
//     "Best banquet hall in Ghaziabad for weddings, receptions, corporate events and private celebrations. Located on NH24 with capacity for 1500+ guests.",
//   url: "https://tanushreegrandbanquets.com",
//   telephone: "+919810042296",
//   email: "tanushreegrandbanquets@gmail.com",
//   address: {
//     "@type": "PostalAddress",
//     streetAddress: "NH24, Mahagunpuram",
//     addressLocality: "Ghaziabad",
//     addressRegion: "Uttar Pradesh",
//     postalCode: "201010",
//     addressCountry: "IN",
//   },
//   geo: {
//     "@type": "GeoCoordinates",
//     latitude: "28.6833",
//     longitude: "77.4833",
//   },
//   priceRange: "₹₹",
//   servesCuisine: "Indian",
//   maximumAttendeeCapacity: 1500,
//   amenityFeature: [
//     {
//       "@type": "LocationFeatureSpecification",
//       name: "Parking",
//       value: true,
//     },
//     {
//       "@type": "LocationFeatureSpecification",
//       name: "Power Backup",
//       value: true,
//     },
//     {
//       "@type": "LocationFeatureSpecification",
//       name: "AC Rooms",
//       value: true,
//     },
//     {
//       "@type": "LocationFeatureSpecification",
//       name: "Stage & Mandap",
//       value: true,
//     },
//   ],
//   aggregateRating: {
//     "@type": "AggregateRating",
//     ratingValue: "4.5",
//     reviewCount: "74",
//   },
//   sameAs: [
//     "https://www.instagram.com/tanushreegrandbanquets",
//     "https://www.facebook.com/tanushreegrandbanquets",
//   ],
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemaData),
//           }}
//         />

//         {children}
//       </body>
//     </html>
//   );
// }


import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // <-- import Script from next/script
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Banquet Hall in Ghaziabad | Tanushree Farm & Palace",
  description:
    "Tanushree Farm & Palace is the best banquet hall in Ghaziabad for weddings, receptions & corporate events. Located on NH24 with space for 1500+ guests. Book now!",
  alternates: {
    canonical: 'https://tanushreegrandbanquets.com',
  },
  other: {
    // Add the Google Site Verification meta tag
    'google-site-verification': 'mfz7fUmZymqI-cdFSMHf7D6U-IbcQcEP687HBcyZQpc',
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EventVenue"],
  name: "Tanushree Farm & Palace",
  description:
    "Best banquet hall in Ghaziabad for weddings, receptions, corporate events and private celebrations. Located on NH24 with capacity for 1500+ guests.",
  url: "https://tanushreegrandbanquets.com",
  telephone: "+919810042296",
  email: "tanushreegrandbanquets@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "NH24, Mahagunpuram",
    addressLocality: "Ghaziabad",
    addressRegion: "Uttar Pradesh",
    postalCode: "201010",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.6833",
    longitude: "77.4833",
  },
  priceRange: "₹₹",
  servesCuisine: "Indian",
  maximumAttendeeCapacity: 1500,
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Parking",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Power Backup",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "AC Rooms",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Stage & Mandap",
      value: true,
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "74",
  },
  sameAs: [
    "https://www.instagram.com/tanushreegrandbanquets",
    "https://www.facebook.com/tanushreegrandbanquets",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Existing JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />

        {/* Google Analytics – external script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CWKNH9X6GY"
          strategy="afterInteractive"
        />

        {/* Google Analytics – inline configuration */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CWKNH9X6GY');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}