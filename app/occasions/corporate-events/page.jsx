
import CorporateEventsPage from './CorporateEventsPage';

export const metadata = {
  title:
    "Corporate Event Venue in Ghaziabad | Tanushree Grand Banquets",

  description:
    "Host conferences, seminars, product launches and business meetings at Tanushree Grand Banquets, Ghaziabad.",

  keywords: [
    "Corporate Event Venue in Ghaziabad",
    "Corporate Banquet Hall",
    "Conference Hall Ghaziabad",
    "Business Meeting Venue",
    "Corporate Party Venue",
    "Seminar Hall",
    "Product Launch Venue",
    "Annual Function Venue"
  ],

  alternates: {
    canonical:
      "https://tanushreegrandbanquets.com/occasions/corporate-events"
  },

  openGraph: {
    title:
      "Corporate Event Venue in Ghaziabad",
    description:
      "Premium Corporate Event Venue in Ghaziabad.",
    images: ["/corporate-event-venue-ghaziabad.jpg"]
  }
}

export default function corporateEvents() {
  return <CorporateEventsPage />;
}