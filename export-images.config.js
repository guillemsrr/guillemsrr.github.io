/** @type {import('next-export-optimize-images').Config} */
module.exports = {
  imagesFolderPath: 'public/images',
  exportFolderPath: 'out',
  outputFileTracing: false,

  widths: [640, 1280],
  formats: ['webp'],
  imageExtensions: ['jpg', 'jpeg', 'png'],
  skipFormat: [],
  skipFolders: [],

  // This removes the original .png files
  keepOriginalImages: false,
};