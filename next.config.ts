import withExportImages from 'next-export-optimize-images';
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        loader: 'default',
    },
};

export default withExportImages(nextConfig);