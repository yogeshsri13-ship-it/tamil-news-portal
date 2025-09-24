import Link from 'next/link'

const categories = [
  { name: 'மாவட்ட செய்திகள்', slug: 'local-news' },
  { name: 'கல்வி', slug: 'education' },
  { name: 'அரசியல்', slug: 'politics' },
  { name: 'சுகாதாரம்', slug: 'health' },
  { name: 'கலை & கலாச்சாரம்', slug: 'culture' },
  { name: 'விளையாட்டு', slug: 'sports' },
]

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="py-6">
          <Link href="/" className="block text-center">
            <h1 className="text-4xl font-bold tamil-text">
              இளம்குறள் செய்திகள்
            </h1>
            <p className="mt-2 text-gray-600">Tamil News Portal</p>
          </Link>
        </div>
        <nav className="py-4 border-t">
          <ul className="flex flex-wrap justify-center gap-6 tamil-text">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/category/${category.slug}`}
                  className="hover:text-red-600 transition-colors"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}