import { StaticImageData } from 'next/image'

export type SanityImage = {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export type Article = {
  _id: string
  titleTamil: string
  mainImage: SanityImage
  publishedAt: string
  content: any
  category?: string
  author?: string
  slug: {
    current: string
  }
}

export type ArticlePageParams = {
  params: {
    slug: string
  }
}