import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";
import { allBlogsData } from "../blogData";

const SITE_URL = "https://tanushreegrandbanquets.com";

export function generateStaticParams() {
  return Object.keys(allBlogsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = allBlogsData[slug];

  if (!blog) {
    return {
      title: "Blog Not Found | Tanushree Grand Banquet",
    };
  }

  return {
    title: `${blog.title} | Tanushree Grand Banquet`,
    description: blog.excerpt,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${SITE_URL}/blogs/${blog.slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = allBlogsData[slug];

  if (!blog) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image,
    datePublished: blog.date,
    author: {
      "@type": "Organization",
      name: blog.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Tanushree Grand Banquet & Farms",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blogs/${blog.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogDetailClient blog={blog} />
    </>
  );
}
