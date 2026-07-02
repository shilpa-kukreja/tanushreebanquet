import ContactClient from './ContactClient';

export const metadata = {
    title:
    'Book the Best Banquet Hall in Ghaziabad | Tanushree Farm & Palace',

  description:
    ' Contact Tanushree Farm & Palace — the best banquet hall in Ghaziabad — to check availability & pricing. Call +91 98100 42296 or email us today.',

  alternates: {
    canonical: 'https://tanushreegrandbanquets.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}