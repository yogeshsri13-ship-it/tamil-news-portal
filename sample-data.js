// This is a reference file showing how to create initial data in Sanity Studio

// Example of creating categories
export const categories = [
  {
    _type: 'category',
    title: 'மாவட்ட செய்திகள்',
    titleEnglish: 'Local News',
    description: 'உள்ளூர் செய்திகள் மற்றும் நிகழ்வுகள்'
  },
  {
    _type: 'category',
    title: 'கல்வி',
    titleEnglish: 'Education',
    description: 'கல்வி தொடர்பான செய்திகள்'
  },
  {
    _type: 'category',
    title: 'அரசியல்',
    titleEnglish: 'Politics',
    description: 'அரசியல் செய்திகள் மற்றும் விவாதங்கள்'
  },
  {
    _type: 'category',
    title: 'சுகாதாரம்',
    titleEnglish: 'Health',
    description: 'சுகாதாரம் மற்றும் மருத்துவ செய்திகள்'
  },
  {
    _type: 'category',
    title: 'கலை & கலாச்சாரம்',
    titleEnglish: 'Culture',
    description: 'கலை, கலாச்சார நிகழ்வுகள் மற்றும் செய்திகள்'
  },
  {
    _type: 'category',
    title: 'விளையாட்டு',
    titleEnglish: 'Sports',
    description: 'விளையாட்டு செய்திகள் மற்றும் நிகழ்வுகள்'
  }
]

// Example of creating an author
export const sampleAuthor = {
  _type: 'author',
  name: 'ராஜன்',
  nameEnglish: 'Rajan',
  bio: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '15 வருட பத்திரிகை அனுபவம் கொண்ட மூத்த செய்தியாளர்'
        }
      ]
    }
  ]
}

// Example of creating an article
export const sampleArticle = {
  _type: 'article',
  title: 'பாம்பு கடியால் சிறுவன் உயிரிழப்பு',
  slug: {
    _type: 'slug',
    current: 'snake-bite-incident'
  },
  summary: 'கிராமப்புற பகுதியில் பாம்பு கடித்ததில் 12 வயது சிறுவன் உயிரிழப்பு - மருத்துவமனை அதிகாரிகள் விசாரணை',
  publishedAt: new Date().toISOString(),
  body: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'நேற்று மாலை வீட்டின் பின்புறம் விளையாடிக் கொண்டிருந்த போது நச்சு பாம்பு கடித்ததில் 12 வயது சிறுவன் உயிரிழந்தார்.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'உடனடியாக அரசு மருத்துவமனைக்கு கொண்டு செல்லப்பட்ட போதிலும் சிகிச்சை பலனின்றி உயிரிழந்தார்.'
        }
      ]
    }
  ]
}