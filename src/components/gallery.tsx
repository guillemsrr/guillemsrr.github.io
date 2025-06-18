'use client';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {useState} from 'react';
import Image from "next/image";
import {imageBaseUrl} from "@components/globals";

export default function Gallery({
                                    images,
                                    width,
                                    compress
                                }: {
    images: { src: string; alt?: string }[];
    width?: string;
    compress?: boolean;
})
{
    const [imageIndex, setImageIndex] = useState<number>(-1);

    return (
        <>
            <div
                className={
                    compress
                        ? 'flex flex-wrap justify-center gap-4'
                        : 'grid grid-cols-2 md:grid-cols-3 gap-4'
                }
            >
                {images.map((img, idx) => (
                    <div className={width ?? 'w-full'} key={idx}
                    >
                        <Image
                            src={imageBaseUrl + img.src}
                            alt={img.alt ?? 'image'}
                            width={400}
                            height={300}
                            loading="lazy"
                            onClick={() =>
                            {
                                setImageIndex(idx); // Set the clicked image index
                            }}
                            className="cursor-pointer"
                        />
                    </div>
                ))}
            </div>

            <Lightbox
                open={imageIndex !== -1} // Only show lightbox when an image is selected
                close={() => setImageIndex(-1)} // Close the lightbox
                index={imageIndex} // Pass the current index directly
                slides={images.map((image) => ({src: image.src, alt: image.alt}))} // Map slides correctly
                carousel={{finite: true}} // Prevent wrapping around the carousel
                on={{
                    view: ({index}) =>
                    {
                        setImageIndex(index); // Use the latest index from the event to set the imageIndex
                    }
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
                                fontSize: '0.875rem'
                            }}
                        >
                            {imageIndex + 1} / {images.length} {/* Show current/max */}
                        </div>
                    )
                }}
            />
        </>
    );
}