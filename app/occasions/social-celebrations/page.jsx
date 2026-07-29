
import SocialCelebrationsPage from './SocialCelebrationsPage';


export const metadata = {
  metadataBase: new URL("https://tanushreegrandbanquets.com"),

  title:
    "Social Celebration Venue in Ghaziabad | Birthday, Anniversary & Family Functions | Tanushree Grand Banquets",

  description:
    "Celebrate birthdays, anniversaries, baby showers, naming ceremonies, reunions, retirement parties, and family gatherings at Tanushree Grand Banquets in Ghaziabad. Premium indoor & outdoor venue with customized décor, vegetarian catering, ample parking, and professional event planning.",

  keywords: [
    "Social Celebration Venue in Ghaziabad",
    "Birthday Party Venue Ghaziabad",
    "Birthday Celebration Hall Ghaziabad",
    "Anniversary Celebration Venue",
    "Baby Shower Venue Ghaziabad",
    "Naming Ceremony Venue",
    "Family Function Hall Ghaziabad",
    "Retirement Party Venue",
    "Farewell Party Venue",
    "Reunion Venue Ghaziabad",
    "Housewarming Party Venue",
    "Celebration Hall Ghaziabad",
    "Party Hall Ghaziabad",
    "Indoor Party Hall",
    "Outdoor Party Venue",
    "Best Banquet Hall Ghaziabad",
    "Family Celebration Venue",
    "Social Event Venue",
    "Event Venue Near Noida",
    "Banquet Hall Near Indirapuram",
    "Banquet Hall Near Vaishali",
    "Party Venue Delhi NCR"
  ],

  alternates: {
    canonical:
      "https://tanushreegrandbanquets.com/occasions/social-celebrations",
  },

  openGraph: {
    type: "website",
    url: "https://tanushreegrandbanquets.com/occasions/social-celebrations",
    title:
      "Social Celebration Venue in Ghaziabad | Tanushree Grand Banquets",
    description:
      "Host unforgettable birthdays, anniversaries, baby showers, family gatherings, reunions, and social celebrations at Tanushree Grand Banquets with premium catering, elegant décor, and spacious banquet facilities.",
    siteName: "Tanushree Grand Banquets",
    locale: "en_IN",
    images: [
      {
        url: "/social-celebration-venue-ghaziabad.jpg",
        width: 1200,
        height: 630,
        alt: "Social Celebration Venue in Ghaziabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Social Celebration Venue in Ghaziabad | Tanushree Grand Banquets",
    description:
      "Premium venue for birthdays, anniversaries, baby showers, reunions, retirement parties, and family celebrations in Ghaziabad.",
    images: ["/social-celebration-venue-ghaziabad.jpg"],
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

  category: "Social Celebrations",

  authors: [
    {
      name: "Tanushree Grand Banquets",
    },
  ],

  creator: "Tanushree Grand Banquets",

  publisher: "Tanushree Grand Banquets",
};

export default function socialCelebrations() {
  return <SocialCelebrationsPage />;
}