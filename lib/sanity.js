import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '08xdir42',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skL5Wgh4E7FwIUN84B3qQB3GZfPbCI3b9rXIos0IeAHjSp2VUpfw4iJnJf6masrfm1ObtM7btKzwGCJlRd5qhOSGdLSaWbZ7dIyyBJeqJ4KiDyMtzhWu3oU69rncIC92NCteprDwciDJTWFuo8ZqmZYZPpgYP5mI6qeAlzwXTxkKZfj255Re',
  useCdn: false,
});
