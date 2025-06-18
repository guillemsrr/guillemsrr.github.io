'use client';

import Image from "next/image";
import {imageBaseUrl} from "@components/globals";

interface MDXImageProps
{
    src: string;
    alt?: string;
    className?: string;
}

export default function MDXImage({src, alt = '', className = ''}: MDXImageProps)
{
    return (
        <span className={`block relative w-full aspect-video ${className}`}>
      <Image
          src={imageBaseUrl + src}
          alt={alt}
          fill
          loading="lazy"
          placeholder="blur"
          style={{objectFit: 'contain'}}
      />
    </span>
    );
}