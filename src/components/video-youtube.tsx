'use client'

export default function YouTube({id}: { id: string })
{
    return (
        <div className="mt-4 flex justify-center">
            <div className="w-full flex items-center">
                <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    );
}