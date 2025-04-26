export const dynamic = 'force-static';

import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap
{
    return [
        {
            url: 'https://guillemsrr.github.io/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        }
    ];
}