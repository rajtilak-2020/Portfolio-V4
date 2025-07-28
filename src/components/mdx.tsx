import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
  const { className, alt, src, width, height, ...rest } = props;
  
  // Check if image should float left or right based on alt text
  const shouldFloatLeft = alt?.toLowerCase().match(/\b(left|float-left)\b/);
  const shouldFloatRight = alt?.toLowerCase().match(/\b(right|float-right)\b/);
  const isCentered = alt?.toLowerCase().match(/\b(center|centered|float-center)\b/);
  
  // Determine image size based on alt text or props
  const getImageSize = () => {
    if (alt?.toLowerCase().match(/\bsmall\b/)) return 'max-w-xs';
    if (alt?.toLowerCase().match(/\bmedium\b/)) return 'max-w-md';
    if (alt?.toLowerCase().match(/\blarge\b/)) return 'max-w-2xl';
    if (alt?.toLowerCase().match(/\bfull\b/)) return 'w-full';
    return 'max-w-lg'; // default size
  };

  const imageSize = getImageSize();
  
  // Create wrapper classes based on float direction
  const wrapperClasses = [
    'my-6',
    shouldFloatLeft && 'float-left',
    shouldFloatRight && 'float-right',
    isCentered && 'mx-auto block',
    !shouldFloatLeft && !shouldFloatRight && !isCentered && 'block'
  ].filter(Boolean).join(' ');

  const imageClasses = [
    'rounded-xl shadow-lg',
    imageSize,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={wrapperClasses}>
      <Image 
        alt={alt} 
        className={imageClasses}
        src={src}
        width={width || 800}
        height={height || 600}
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...rest} 
      />

    </span>
  );
}

// This replaces rehype-slug
function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = (props: any) => {
    const { children, ...rest } = props;
    let slug = slugify(children as string);
    return React.createElement(
      `h${level}`,
      { id: slug, ...rest },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

// Enhanced paragraph component for better text wrapping
function EnhancedParagraph(props: any) {
  return (
    <p className="leading-relaxed mb-6" {...props}>
      {props.children}
    </p>
  );
}

// Enhanced blockquote component
function EnhancedBlockquote(props: any) {
  return (
    <blockquote 
      className="border-l-4 border-l-primary pl-6 italic bg-muted/50 py-4 px-6 rounded-r-lg my-8" 
      {...props}
    >
      {props.children}
    </blockquote>
  );
}

// Enhanced code component
function EnhancedCode(props: any) {
  return (
    <code 
      className="text-primary bg-muted rounded px-1.5 py-0.5 text-sm font-mono" 
      {...props}
    >
      {props.children}
    </code>
  );
}

export const globalComponents: MDXComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  img: RoundedImage, // Also handle regular img tags
  a: CustomLink,
  p: EnhancedParagraph,
  blockquote: EnhancedBlockquote,
  code: EnhancedCode,
  Table,
};
