import BlurFade from "@/components/magicui/blur-fade";
import { globalComponents } from "@/components/mdx";
import { ShareButton } from "@/components/Sharebutton";
import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { cn, formatDate, formatFullDate } from "@/lib/utils";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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
      <article className="relative -mt-12 sm:-mt-24">
        {/* Back Button - Always visible at top left */}
        <div className="absolute top-4 left-4 z-20">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors group bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Blogs
          </Link>
        </div>

        {/* Hero Section with Natural Image Height */}
        {post.metadata.image && (
          <div className="relative w-full">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
              <Image
                src={post.metadata.image}
                fill
                alt={post.metadata.title}
                className="object-cover object-center"
                priority
                quality={100}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end">
              <div className="container max-w-4xl mx-auto px-6 pb-8 md:pb-12">
                <div className="max-w-3xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                    {post.metadata.title}
                  </h1>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/80">
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
              </div>
            </div>
          </div>
        )}

        <div className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Blog Content with Enhanced Styling */}
          <div className={cn(
            "prose prose-lg dark:prose-invert max-w-none blog-content",
            "prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground",
            "prose-h1:text-3xl prose-h1:md:text-4xl prose-h1:mb-8 prose-h1:mt-12",
            "prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mb-6 prose-h2:mt-10",
            "prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mb-4 prose-h3:mt-8",
            "prose-p:text-base prose-p:leading-relaxed prose-p:mb-6",
            "prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium",
            "prose-code:text-primary prose-code:bg-muted prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm",
            "prose-pre:bg-muted prose-pre:border prose-pre:border-border",
            "prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8",
            "prose-strong:text-primary prose-strong:font-semibold",
            "prose-blockquote:border-l-4 prose-blockquote:border-l-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:bg-muted/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg",
            "prose-hr:border-border prose-hr:my-12",
            "prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2",
            "prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2",
            "prose-li:marker:text-muted-foreground",
            "prose-table:border-collapse prose-table:w-full",
            "prose-th:border prose-th:border-border prose-th:bg-muted prose-th:p-3 prose-th:text-left",
            "prose-td:border prose-td:border-border prose-td:p-3"
          )}>
            <MDXRemote source={post.source} components={globalComponents} />
          </div>

          {/* Enhanced Share Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Share this article</h3>
                <p className="text-sm text-muted-foreground">
                  If you found this helpful, consider sharing it with others!
                </p>
              </div>
              <div className="flex items-center gap-3">
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