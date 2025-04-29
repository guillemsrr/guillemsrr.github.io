'use client';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {useState} from 'react';

export default function Gallery({images}: { images: { src: string; alt?: string }[] })
{
    const [imageIndex, setImageIndex] = useState<number>(-1);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img.src}
                        alt={img.alt}
                        onClick={() =>
                        {
                            setImageIndex(idx); // Set the clicked image index
                        }}
                        className="cursor-pointer w-full h-auto"
                    />
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
                    },
                }}
                render={{
                    slide: ({slide}) => (
                        <div className="flex justify-center items-center max-w-full max-h-full">
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="max-w-full max-h-[80vh] object-contain"
                            />
                        </div>
                    ),
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
                            {imageIndex + 1} / {images.length} {/* Show current/max */}
                        </div>
                    ),
                }}
            />
        </>
    );
}