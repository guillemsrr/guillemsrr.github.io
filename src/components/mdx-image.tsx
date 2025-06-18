'use client';

import Image from "next/image";
import {imageBaseUrl} from "@components/globals";

interface MDXImageProps
{
    src: string;
    alt?: string;
    className?: string;
    width?: number;
    height?: number;
}

export default function MDXImage({
                                     src,
                                     alt = '',
                                     className = '',
                                     width,
                                     height,
                                 }: MDXImageProps)
{
    if (width && height)
    {
        return (
            <Image
                src={imageBaseUrl + src}
                alt={alt}
                width={width}
                height={height}
                className={className}
                loading="lazy"
                style={{objectFit: 'contain'}}
            />
        );
    }

    return (
        <img
            src={imageBaseUrl + src}
            alt={alt}
            className={className}
            style={{objectFit: 'contain', maxWidth: '100%', height: 'auto'}}
            loading="lazy"
        />
    );
}