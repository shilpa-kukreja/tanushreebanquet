import BlogClient from './BlogClient';

export const metadata = {
    title:
    ' Blog | Tips from the Best Banquet Hall in Ghaziabad',

  description:
    'Wedding & event planning tips from Tanushree Farm & Palace — the best banquet hall in Ghaziabad. Read expert advice on venues, decor, catering & more.',

  alternates: {
    canonical: 'https://tanushreegrandbanquets.com/blogs',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}