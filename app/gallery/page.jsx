import GalleryClient from './GalleryClient';

export const metadata = {
    title:
    ' Gallery | Best Banquet Hall in Ghaziabad – Tanushree Farm & Palace',

  description:
    'See why Tanushree Farm & Palace is the best banquet hall in Ghaziabad. Browse real wedding photos, reception setups, mandap decor & corporate event spaces.',

  alternates: {
    canonical: 'https://tanushreegrandbanquets.com/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}