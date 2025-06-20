'use client';

export default function Iframe({src}: { src: string })
{
    const paddingTop = (167 / 552) * 100;

    // Append dark=true unless already present
    let finalSrc = src;
    try
    {
        const url = new URL(src);
        if (!url.searchParams.has('dark'))
        {
            url.searchParams.set('dark', 'true');
            finalSrc = url.toString();
        }
    } catch (error)
    {
        console.warn('Invalid URL passed to <Iframe />:', src);
    }

    return (
        <div className="w-full max-w-[552px]">
            <div
                className="relative w-full"
                style={{paddingTop: `${paddingTop}%`}}
            >
                <iframe
                    src={finalSrc}
                    className="absolute top-0 left-0 w-full h-full"
                />
            </div>
        </div>
    );
}