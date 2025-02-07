import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description: "My thoughts on tech, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Blogs
        </h1>
        <br />
        <h2 className="max-w-[600px] md:text-xl">
          Exploring tech, life, and everything in between. I hope you enjoy reading them!
        </h2>
        <br />
        <br />
      </BlurFade>

      {posts
        .sort((a, b) =>
          new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ? -1
            : 1
        )
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              {/* Show blog thumbnail */}
              {post.metadata.image && (
                <Image
                  src={post.metadata.image}
                  width={800}
                  height={400}
                  alt={post.metadata.title}
                  className="rounded-lg mb-2"
                />
              )}
              <div className="w-full flex flex-col">
                <p className="tracking-tight font-semibold text-lg">
                  {post.metadata.title}
                </p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
