import BlogClient from './BlogClient';

export const metadata = {
    title:
    ' Wedding Planning Blog | Tanushree Farm & Palace Ghaziabad',

  description:
    'Explore expert wedding planning tips, décor ideas, venue guides and event inspiration from Tanushree Farm & Palace in Ghaziabad.',

  alternates: {
    canonical: 'https://tanushreegrandbanquets.com/blogs',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}