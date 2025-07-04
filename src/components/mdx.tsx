import {MDXRemote} from 'next-mdx-remote/rsc';
import type {MDXComponents} from 'mdx/types';
import Link from 'next/link';
import React from 'react';
import Gallery from './gallery';
import Iframe from "@components/frame";
import YouTube from "@components/video-youtube";
import {Tag} from "@components/tag";
import LocalizedMDX from "@components/localized-mdx";
import MDXImage from "@components/mdx-image";

const mdxComponents: MDXComponents = {
    img: MDXImage,
    
    Image: (props) => (
        <MDXImage
            {...props}
            className={props.className}
            alt={props.alt || ''}
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

    Gallery,
    Iframe,
    YouTube,
    Tag,
    LocalizedMDX
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