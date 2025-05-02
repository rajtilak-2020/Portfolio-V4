import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate, formatFullDate, cn } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { ShareButton } from "@/components/Sharebutton";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);
  if (!post) return;

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  let ogImage = image?.startsWith("http") ? image : `${DATA.url}${image}`;

  return {
    title: `${title} | ${DATA.name}'s Blog`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  let post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <BlurFade>
      <article className="relative min-h-screen">
        {/* Hero Section with Full-width Image */}
        {post.metadata.image && (
          <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
            <div className="absolute inset-0">
              <Image
                src={post.metadata.image}
                fill
                alt={post.metadata.title}
                className="object-cover"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background dark:from-background/90 dark:via-background/80 dark:to-background" />
            </div>
            <div className="relative h-full flex flex-col justify-end">
              <div className="container max-w-4xl mx-auto px-4 pb-8 md:pb-12 lg:pb-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
                  {post.metadata.title}
                </h1>
              </div>
            </div>
          </div>
        )}

        <div className="container max-w-4xl mx-auto px-4 py-12">
          {/* Back Button and Metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Suspense fallback={<div className="h-5" />}>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={post.metadata.publishedAt} title={formatFullDate(post.metadata.publishedAt)}>
                    {formatDate(post.metadata.publishedAt)}
                  </time>
                </div>
                {post.metadata.readingTime && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.metadata.readingTime} min read</span>
                  </div>
                )}
                {post.metadata.tags && (
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    <span>{post.metadata.tags.join(", ")}</span>
                  </div>
                )}
              </Suspense>
            </div>
          </div>

          {/* Blog Content */}
          <div className={cn(
            "prose prose-lg dark:prose-invert max-w-none",
            "prose-headings:font-semibold prose-headings:tracking-tight",
            "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
            "prose-code:text-primary prose-code:bg-muted prose-code:rounded prose-code:px-1 prose-code:py-0.5",
            "prose-pre:bg-muted",
            "prose-img:rounded-lg",
            "prose-strong:text-primary",
            "prose-blockquote:border-l-primary",
            "prose-hr:border-border"
          )}>
            <MDXRemote source={post.source} />
          </div>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Share this article</h3>
              <div className="flex items-center gap-4">
                <ShareButton 
                  title={post.metadata.title}
                  text={post.metadata.summary}
                  url={`${DATA.url}/blog/${post.slug}`}
                />
              </div>
            </div>
          </div>
        </div>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image?.startsWith("http")
                ? post.metadata.image
                : `${DATA.url}${post.metadata.image}`,
              url: `${DATA.url}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: DATA.name,
              },
            }),
          }}
        />
      </article>
    </BlurFade>
  );
}