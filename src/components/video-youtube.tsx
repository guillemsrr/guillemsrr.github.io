'use client';

import {useParams} from 'next/navigation';
//import {Locale} from '@i18n/routing';

type YouTubeProps =
    | { id: string } // direct single ID
    | { [lang: string]: string }; // localized language keys

export default function YouTube(props: YouTubeProps)
{
    const locale = 'en';//useParams().lang as Locale;

    let videoId: string;

    if ('id' in props)
    {
        videoId = props.id;
    }
    else
    {
        const currentLang = locale ?? 'en';
        videoId = props[currentLang] ?? props['en'];
    }

    return (
        <div className="mt-4 flex justify-center">
            <div className="w-full flex items-center">
                <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    );
}