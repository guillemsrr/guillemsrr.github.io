'use client';

export default function Iframe({src}: { src: string })
{
    const paddingTop = (167 / 552) * 100;

    return (
        <div className="w-full max-w-[552px]">
            <div
                className="relative w-full"
                style={{paddingTop: `${paddingTop}%`}}
            >
                <iframe
                    src={src}
                    className="absolute top-0 left-0 w-full h-full"
                />
            </div>
        </div>
    );
}