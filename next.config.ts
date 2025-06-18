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
        domains: ['pub-43bd1a2c92284948a57f7a70decf6fd6.r2.dev'],
    },
};

export default withExportImages(nextConfig);