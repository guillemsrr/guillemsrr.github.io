const repoName = "guillemsrr.github.io"; // <-- CHANGE THIS!

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : '',
    assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : '',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;