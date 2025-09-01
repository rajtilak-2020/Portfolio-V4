import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  const headers = data.headers.map((header, index) => (
    <th key={index} className="px-4 py-3 text-left font-semibold bg-muted/50 border-b">
      {header}
    </th>
  ));
  
  const rows = data.rows.map((row, index) => (
    <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
      {row.map((cell, cellIndex) => (
        <td key={cellIndex} className="px-4 py-3">
          {cell}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse border border-border rounded-lg">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function CustomLink(props: any) {
  const { href, children, ...rest } = props;

  if (href?.startsWith("/")) {
    return (
      <Link 
        href={href} 
        className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
        {...rest}
      >
        {children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return (
      <a 
        className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
        {...props} 
      />
    );
  }

  return (
    <a 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
      {...props} 
    />
  );
}

function RoundedImage(props: any) {
  const { className, alt, src, width, height, ...rest } = props;
  
  const altText = alt || '';
  
  const shouldFloatLeft = altText.toLowerCase().includes('left');
  const shouldFloatRight = altText.toLowerCase().includes('right');
  const isCentered = altText.toLowerCase().includes('center');
  
  const getImageSize = () => {
    const altLower = altText.toLowerCase();
    if (altLower.includes('small')) return 'max-w-xs';
    if (altLower.includes('medium')) return 'max-w-md';
    if (altLower.includes('large')) return 'max-w-2xl';
    if (altLower.includes('full')) return 'w-full';
    return 'max-w-lg';
  };

  const imageSize = getImageSize();
  
  const cleanAlt = altText.replace(/\b(left|right|center|centered|float-left|float-right|float-center|small|medium|large|full)\b/gi, '').trim();
  
  const getWrapperClasses = () => {
    if (shouldFloatLeft) {
      return 'float-left mr-6 mb-4 mt-2 clear-left';
    } else if (shouldFloatRight) {
      return 'float-right ml-6 mb-4 mt-2 clear-right';
    } else if (isCentered) {
      return 'mx-auto block my-8 clear-both';
    } else {
      return 'block my-8 clear-both';
    }
  };

  const imageClasses = [
    'rounded-xl shadow-lg transition-shadow hover:shadow-xl block',
    imageSize,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={getWrapperClasses()}>
      <Image 
        alt={cleanAlt || 'Image'} 
        className={imageClasses}
        src={src}
        width={width || 800}
        height={height || 600}
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...rest} 
      />
      {cleanAlt && (
        <div className="mt-3 text-sm text-muted-foreground text-center italic leading-relaxed">
          {cleanAlt}
        </div>
      )}
    </div>
  );
}

function slugify(str: string): string {
  if (!str || typeof str !== 'string') return '';
  
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function getTextContent(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return children.toString();
  if (Array.isArray(children)) {
    return children.map(getTextContent).join('');
  }
  if (React.isValidElement(children)) {
    return getTextContent(children.props.children);
  }
  return '';
}

function createHeading(level: number) {
  const Heading = (props: any) => {
    const { children, className, ...rest } = props;
    
    const textContent = getTextContent(children);
    const slug = slugify(textContent);
    const getHeadingClasses = () => {
      const baseClasses = 'scroll-mt-20 group relative';
      const styles = {
        1: 'text-4xl font-bold mt-12 mb-8',
        2: 'text-3xl font-semibold mt-10 mb-6', 
        3: 'text-2xl font-semibold mt-8 mb-4',
        4: 'text-xl font-medium mt-6 mb-3',
        5: 'text-lg font-medium mt-4 mb-2',
        6: 'text-base font-medium mt-4 mb-2'
      };
      
      const levelStyle = styles[level as keyof typeof styles] || styles[6];
      return `${baseClasses} ${levelStyle} text-foreground`;
    };

    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    
    return (
      <HeadingTag
        {...(slug && { id: slug })}
        className={`${getHeadingClasses()} ${className || ''}`.trim()}
        {...rest}
      >
        {slug && (
          <a 
            href={`#${slug}`}
            className="anchor absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-muted-foreground hover:text-primary no-underline"
            aria-label={`Link to ${textContent}`}
          >
            #
          </a>
        )}
        {children}
      </HeadingTag>
    );
  };
  
  Heading.displayName = `Heading${level}`;
  return Heading;
}

function EnhancedParagraph(props: any) {
  const { children, ...rest } = props;
  
  if (!children) {
    return null;
  }
  
  const childrenArray = React.Children.toArray(children);
  const containsImages = childrenArray.some(child => {
    if (React.isValidElement(child)) {
      return child.type === RoundedImage || 
             child.props?.mdxType === 'img' ||
             (child.type && typeof child.type === 'function' && 
              (child.type.name === 'RoundedImage' || (child.type as any)?.displayName === 'RoundedImage'));
    }
    return false;
  });
  
  const Tag = containsImages ? 'div' : 'p';
  
  return (
    <Tag 
      className="leading-7 mb-6 text-foreground/90 break-words hyphens-auto" 
      style={{ 
        textAlign: 'justify',
        textJustify: 'inter-word',
        wordWrap: 'break-word',
        overflowWrap: 'break-word'
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function EnhancedBlockquote(props: any) {
  return (
    <blockquote 
      className="border-l-4 border-l-primary pl-6 italic bg-muted/50 py-6 px-6 rounded-r-lg my-8 overflow-hidden clear-both" 
      style={{ 
        display: 'flow-root',
        textAlign: 'left',
        hyphens: 'auto',
        wordWrap: 'break-word'
      }}
      {...props}
    >
      <div className="text-foreground/80 leading-7">
        {props.children}
      </div>
    </blockquote>
  );
}

function EnhancedCode(props: any) {
  return (
    <code 
      className="text-primary bg-muted rounded px-2 py-1 text-sm font-mono border break-all" 
      {...props}
    >
      {props.children}
    </code>
  );
}

function EnhancedPre(props: any) {
  return (
    <pre 
      className="bg-muted border rounded-lg p-4 overflow-x-auto my-6 clear-both text-sm"
      style={{ 
        display: 'flow-root',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all'
      }}
      {...props}
    >
      {props.children}
    </pre>
  );
}

function EnhancedUl(props: any) {
  return (
    <ul 
      className="list-disc pl-6 mb-6 space-y-3 clear-both" 
      style={{ 
        display: 'flow-root'
      }}
      {...props}
    >
      {props.children}
    </ul>
  );
}

function EnhancedOl(props: any) {
  return (
    <ol 
      className="list-decimal pl-6 mb-6 space-y-3 clear-both"
      style={{ 
        display: 'flow-root'
      }}
      {...props}
    >
      {props.children}
    </ol>
  );
}

function EnhancedLi(props: any) {
  return (
    <li 
      className="text-foreground/90 leading-7 break-words"
      style={{
        hyphens: 'auto',
        wordWrap: 'break-word'
      }}
      {...props}
    >
      {props.children}
    </li>
  );
}

function EnhancedHr(props: any) {
  return (
    <hr className="border-t border-border my-12 clear-both" {...props} />
  );
}

function EnhancedStrong(props: any) {
  return (
    <strong className="font-semibold text-foreground" {...props}>
      {props.children}
    </strong>
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
  img: RoundedImage,
  a: CustomLink,
  p: EnhancedParagraph,
  blockquote: EnhancedBlockquote,
  code: EnhancedCode,
  pre: EnhancedPre,
  ul: EnhancedUl,
  ol: EnhancedOl,
  li: EnhancedLi,
  hr: EnhancedHr,
  strong: EnhancedStrong,
  Table,
};