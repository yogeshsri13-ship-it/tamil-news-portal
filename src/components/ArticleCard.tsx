import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { urlForImage } from '../lib/sanity.image'

interface ArticleCardProps {
  title: string
  mainImage: any
  publishedAt: string
  summary: string
  slug: string
  category?: string
}

export default function ArticleCard({
  title,
  mainImage,
  publishedAt,
  summary,
  slug,
  category,
}: ArticleCardProps) {
  return (
    <Link href={`/article/${slug}`} className="article-card block">
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        {mainImage && (
          <Image
            src={urlForImage(mainImage).url()}
            alt={title}
            className="object-cover transition-transform duration-200 hover:scale-105"
            fill
          />
        )}
        {category && (
          <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
            {category}
          </span>
        )}
      </div>
      <h2 className="article-title tamil-text">{title}</h2>
      <div className="article-meta">
        {publishedAt && (
          <time dateTime={publishedAt}>
            {format(new Date(publishedAt), 'MMMM d, yyyy')}
          </time>
        )}
      </div>
      {summary && (
        <p className="article-excerpt tamil-text">
          {summary}
        </p>
      )}
    </Link>
  )
}