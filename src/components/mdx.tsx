import {MDXRemote} from 'next-mdx-remote/rsc';
import type {MDXComponents} from 'mdx/types';
import Image, {ImageProps} from 'next/image';
import Link from 'next/link';
import fs from 'fs'
import path from "path";
import matter from "gray-matter";

export async function loadProjectMdx(slug: string)
{
    const filePath = path.join(
        process.cwd(),
        'src',
        'app',
        '(projects)',
        `${slug}.mdx`
    );

    if (!fs.existsSync(filePath))
    {
        throw new Error(`MDX file not found: ${filePath}`);
    }

    const rawSource = await fs.promises.readFile(filePath, 'utf8');

    const {content, data} = matter(rawSource);
    
    return {
        content,  // The actual content
        frontmatter: data as {
            title: string;
            publishedAt: string;
            summary: string;
        },
    };
}

const mdxComponents: MDXComponents = {
    // Markdown images → plain <img>
    img: (props) => <img {...props} loading="lazy" className={props.className} alt={"image"}/>,

    // JSX <Image /> in your MDX still works via this mapping:
    Image: (props: ImageProps) => (
        <Image
            {...props}
            alt={props.alt || ''}
            sizes="100vw"
            className={props.className}
        />
    ),
    a: ({href, children, ...props}) =>
        href?.startsWith('/') ? (
            <Link href={href} {...props}>{children}</Link>
        ) : (
            <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        ),
}

export function CustomMDX({
                              source,
                              components,
                          }: {
    source: string
    components?: MDXComponents
})
{
    return <MDXRemote source={source} components={{...mdxComponents, ...components}}/>
}