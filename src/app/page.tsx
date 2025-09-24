import { getClient } from '../lib/sanity.client'
import ArticleCard from '../components/ArticleCard'
import Header from '../components/Header'

async function getArticles() {
  const client = getClient()
  
  return await client.fetch(`
    *[_type == "article"] | order(publishedAt desc) {
      _id,
      title,
      titleTamil,
      slug,
      mainImage,
      publishedAt,
      summary,
      "category": categories[0]->title
    }
  `)
}

export const dynamic = 'force-dynamic';

export default async function Home() {
  const articles = await getArticles()

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles?.map((article: any) => (
            <ArticleCard
              key={article._id}
              title={article.titleTamil}
              mainImage={article.mainImage}
              publishedAt={article.publishedAt}
              summary={article.summary}
              slug={article.slug.current}
              category={article.category}
            />
          ))}
          {!articles?.length && (
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-600 tamil-text">கட்டுரைகள் எதுவும் இல்லை</p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}