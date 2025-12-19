import type { MetadataRoute } from 'next';

// هذه السطور الجديدة لحل المشكلة
export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://me.toinfinite.dev', // غيّر الرابط ده بعدين للرابط النهائي بتاعك
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
