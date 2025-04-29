'use client';

export default function Iframe({src}: { src: string; })
{
    return (
        <div>
            <iframe
                src={src}
                width={552}
                height={167}
                allowFullScreen
            >
            </iframe>
        </div>
    );
};