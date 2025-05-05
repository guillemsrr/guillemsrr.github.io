'use client';

import Image from 'next-export-optimize-images/image';

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
				src={src}
				alt={alt}
				fill
				loading="lazy"
				style={{objectFit: 'contain'}}
			/>
    </span>
	);
}