import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export type BlogMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  readingTime?: string;
  tags?: string[];
};

export type BlogPost = {
  metadata: BlogMetadata;
  slug: string;
  source: string;
};

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes}`;
}

function getMDXFiles(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => path.extname(file).toLowerCase() === ".mdx");
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    return [];
  }
}

export async function markdownToHTML(markdown: string): Promise<string> {
  try {
    const result = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypePrettyCode, {
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
        defaultLang: 'plaintext',
      })
      .use(rehypeStringify)
      .process(markdown);

    return result.toString();
  } catch (error) {
    console.error("Error processing markdown:", error);
    return markdown;
  }
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf-8");
    const { content: rawContent, data } = matter(source);
    
    // Validate required metadata fields
    if (!data.title || !data.publishedAt || !data.summary) {
      console.error(`Missing required metadata in ${slug}.mdx`);
      return null;
    }

    const metadata: BlogMetadata = {
      title: data.title,
      publishedAt: data.publishedAt,
      summary: data.summary,
      image: data.image,
      tags: data.tags,
      readingTime: calculateReadingTime(rawContent),
    };

    const content = await markdownToHTML(rawContent);

    return {
      source: content,
      metadata,
      slug,
    };
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error);
    return null;
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const contentDir = path.join(process.cwd(), "content");
    const mdxFiles = getMDXFiles(contentDir);
    
    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = path.basename(file, path.extname(file));
        const post = await getPost(slug);
        return post;
      })
    );

    // Filter out null posts and sort by date
    return posts
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => 
        new Date(b.metadata.publishedAt).getTime() - 
        new Date(a.metadata.publishedAt).getTime()
      );
  } catch (error) {
    console.error("Error getting blog posts:", error);
    return [];
  }
}