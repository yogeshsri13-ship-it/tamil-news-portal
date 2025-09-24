'use client'

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, projectId } from './src/env'
import { schemaTypes } from './src/schemas'

export default defineConfig({
  name: 'tamil-news',
  title: 'Tamil News Portal',
  projectId: 'o7ubgk70',
  dataset: 'production',
  basePath: '/admin',
  apiVersion: '2024-09-24',
  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: '2024-09-24' })
  ],
  schema: {
    types: schemaTypes,
  },
})
