import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '<your-project-id>',
  dataset: '<your-dataset>',
  useCdn: true,
});
