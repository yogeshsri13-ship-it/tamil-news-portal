import { NextPage } from 'next'

export type PageParams = {
  params: { slug: string }
}

export type ArticlePageProps = PageParams & {
  searchParams?: { [key: string]: string | string[] | undefined }
}

declare module 'next' {
  interface PageProps extends ArticlePageProps {}
}