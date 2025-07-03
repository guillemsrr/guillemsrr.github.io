'use client';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {useState} from 'react';
import Image from 'next/image';
import {imageBaseUrl} from '@components/globals';

export default function Gallery({
                                    images,
                                    cols = 3,
                                }: {
    images: { src: string; alt?: string }[];
    cols?: number;
})
{
    const [imageIndex, setImageIndex] = useState<number>(-1);

    const gridCols = `grid-cols-2 md:grid-cols-${cols}`;

    return (
        <>
            <div className={`grid ${gridCols} gap-4`}>
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className={"w-full aspect-square relative overflow-hidden cursor-pointer transition hover:scale-105 hover:ring-3 hover:ring-neutral-600 dark:hover:ring-neutral-300"}
                        onClick={() => setImageIndex(idx)}
                    >
                        <Image
                            src={imageBaseUrl + img.src}
                            alt={img.alt ?? 'image'}
                            fill
                            className="object-cover transition duration-300"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            <Lightbox
                open={imageIndex !== -1}
                close={() => setImageIndex(-1)}
                index={imageIndex}
                slides={images.map((image) => ({src: image.src, alt: image.alt}))}
                carousel={{finite: true}}
                on={{
                    view: ({index}) => setImageIndex(index),
                }}
                render={{
                    slide: ({slide}) =>
                    {
                        const [loaded, setLoaded] = useState(false);

                        return (
                            <div className="relative w-full h-[80vh] flex items-center justify-center">
                                {!loaded && (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-sm">
                                        Loading...
                                    </div>
                                )}
                                <Image
                                    src={imageBaseUrl + slide.src}
                                    alt={slide.alt ?? 'image'}
                                    fill
                                    style={{objectFit: 'contain'}}
                                    className={`transition-opacity duration-500 ${
                                        loaded ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    onLoad={() => setLoaded(true)}
                                />
                            </div>
                        );
                    },
                    slideFooter: () => (
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '1rem',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                borderRadius: '0.375rem',
                                fontSize: '0.875rem',
                            }}
                        >
                            {imageIndex + 1} / {images.length}
                        </div>
                    ),
                }}
            />
        </>
    );
}