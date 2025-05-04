'use client';

//import {useParams} from 'next/navigation';
//import {Locale} from '@i18n/routing';
import ReactMarkdown from 'react-markdown';

export default function LocalizedMDX(props: { [lang: string]: string })
{
    /*const locale = useParams().lang as Locale;
    const currentLang = locale ?? 'en';*/
    const content = props['en'] ?? props['en'];

    return (
        <div className="prose dark:prose-invert">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>);
}