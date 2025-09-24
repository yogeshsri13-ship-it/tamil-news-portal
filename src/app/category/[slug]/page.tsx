import { getClient } from '../../../lib/sanity.client'
import ArticleCard from '../../../components/ArticleCard'
import Header from '../../../components/Header'

async function getCategoryArticles(categorySlug: string) {
  const client = getClient()
  
  return await client.fetch(`
    *[_type == "article" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
      _id,
      titleTamil,
      slug,
      mainImage,
      publishedAt,
      summary,
      "category": categories[0]->title
    }
  `, { categorySlug })
}

async function getCategory(slug: string) {
  const client = getClient()
  return await client.fetch(`
    *[_type == "category" && slug.current == $slug][0] {
      title,
      description
    }
  `, { slug })
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const [articles, category] = await Promise.all([
    getCategoryArticles(params.slug),
    getCategory(params.slug)
  ])

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2 tamil-text">
            {category?.title}
          </h1>
          {category?.description && (
            <p className="text-gray-600 tamil-text">{category.description}</p>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article: any) => (
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
        </div>

        {articles.length === 0 && (
          <p className="text-center text-gray-600 tamil-text">
            இந்த பிரிவில் கட்டுரைகள் எதுவும் இல்லை
          </p>
        )}
      </main>
    </>
  )
}