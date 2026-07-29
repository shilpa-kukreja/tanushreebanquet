
import CulturalCelebrationsPage from './CulturalCelebrationsPage';


export const metadata = {
  metadataBase: new URL("https://tanushreegrandbanquets.com"),

  title:
    "Cultural Event Venue in Ghaziabad | Religious & Festival Celebration Hall | Tanushree Grand Banquets",

  description:
    "Looking for the best cultural event venue in Ghaziabad? Tanushree Grand Banquets hosts religious functions, festival celebrations, community gatherings, cultural programs, award ceremonies, school events, dance performances, and music concerts with premium décor, catering, parking, and event management.",

  keywords: [
    "Cultural Event Venue in Ghaziabad",
    "Religious Function Venue Ghaziabad",
    "Festival Celebration Venue",
    "Community Hall Ghaziabad",
    "Cultural Program Venue",
    "Award Ceremony Venue",
    "School Annual Function Venue",
    "Dance Performance Venue",
    "Music Concert Venue",
    "Satyanarayan Katha Venue",
    "Mata Ki Chowki Venue",
    "Jagran Venue Ghaziabad",
    "Bhajan Sandhya Hall",
    "Navratri Garba Venue",
    "Durga Puja Venue",
    "Diwali Celebration Hall",
    "Event Venue Ghaziabad",
    "Banquet Hall Ghaziabad",
    "Banquet Hall Near Noida",
    "Banquet Hall Near Indirapuram",
    "Cultural Hall Delhi NCR",
    "Religious Event Hall"
  ],

  alternates: {
    canonical:
      "https://tanushreegrandbanquets.com/occasions/cultural-celebrations",
  },

  openGraph: {
    type: "website",
    url: "https://tanushreegrandbanquets.com/occasions/cultural-celebrations",
    title:
      "Cultural Event Venue in Ghaziabad | Tanushree Grand Banquets",
    description:
      "Host religious functions, festival celebrations, cultural programs, community gatherings, award ceremonies, dance performances, and school events at Tanushree Grand Banquets in Ghaziabad.",
    siteName: "Tanushree Grand Banquets",
    locale: "en_IN",
    images: [
      {
        url: "/cultural-event-venue-ghaziabad.jpg",
        width: 1200,
        height: 630,
        alt: "Cultural Event Venue in Ghaziabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cultural Event Venue in Ghaziabad | Tanushree Grand Banquets",
    description:
      "Premium cultural venue for religious ceremonies, festival celebrations, community events, music programs, and cultural functions in Ghaziabad.",
    images: ["/cultural-event-venue-ghaziabad.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  category: "Cultural Celebrations",

  authors: [
    {
      name: "Tanushree Grand Banquets",
    },
  ],

  creator: "Tanushree Grand Banquets",

  publisher: "Tanushree Grand Banquets",
};

export default function culturalCelebrations() {
  return <CulturalCelebrationsPage />;
}