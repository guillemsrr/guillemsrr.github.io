import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
        loader: 'default',
        deviceSizes: [640, 1280],
        imageSizes: [],
        formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pub-43bd1a2c92284948a57f7a70decf6fd6.r2.dev',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;