import withExportImages from 'next-export-optimize-images';
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        loader: 'default',
        deviceSizes: [640, 1280],
        imageSizes: [],
        formats: ['image/webp'],
    },
};

export default withExportImages(nextConfig);