import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'o7ubgk70',
  dataset: 'production',
  apiVersion: '2024-09-24',
  useCdn: false,
  stega: {
    enabled: false,
    studioUrl: '/admin',
  },
})

export const getClient = () => client