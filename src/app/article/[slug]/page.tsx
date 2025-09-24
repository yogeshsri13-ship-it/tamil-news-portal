import { getClient } from '../../../lib/sanity.client'
import { format } from 'date-fns'
import Image from 'next/image'
import { urlForImage } from '../../../lib/sanity.image'

async function getArticle(slug: string) {
  const client = getClient()
  
  return await client.fetch(`
    *[_type == "article" && slug.current == $slug][0] {
      _id,
      titleTamil,
      mainImage,
      publishedAt,
      content,
      "category": categories[0]->title,
      "author": author->name
    }
  `, { slug })
}

interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ArticlePage({ params, searchParams }: PageProps) {
  const article = await getArticle(params.slug)

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Article not found</h1>
      </div>
    )
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4 tamil-text">{article.titleTamil}</h1>
        <div className="flex items-center text-gray-600 gap-4">
          {article.author && (
            <span className="tamil-text">எழுதியவர்: {article.author}</span>
          )}
          {article.publishedAt && (
            <time dateTime={article.publishedAt}>
              {format(new Date(article.publishedAt), 'MMMM d, yyyy')}
            </time>
          )}
          {article.category && (
            <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
              {article.category}
            </span>
          )}
        </div>
      </header>

      {article.mainImage && (
        <div className="relative h-96 mb-8">
          <Image
            src={urlForImage(article.mainImage).url()}
            alt={article.titleTamil}
            className="object-cover rounded-lg"
            fill
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none tamil-text">
        {article.content}
      </div>
    </article>
  )
}