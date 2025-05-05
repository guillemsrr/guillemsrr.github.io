/**
 * @type {import('next-export-optimize-images').Config}
 */

module.exports = {
  imagesFolderPath: 'public/images',
  exportFolderPath: 'out',
  outputFileTracing: false,

  widths: [640, 1280],
  formats: ['webp'],
  imageExtensions: [],
  skipFormat: [],
  skipFolders: [],
};