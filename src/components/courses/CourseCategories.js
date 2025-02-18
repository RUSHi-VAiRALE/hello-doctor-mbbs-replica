import Link from 'next/link'

export default function CourseCategories() {
  const categories = [
    {
      title: 'Blogs',
      description: 'Explore Our Latest Blogs',
      icon: 'bi bi-journal-text',
      link: '/blogs',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Online Courses',
      description: 'Click Here to Explore PW Online Courses',
      icon: 'bi bi-laptop',
      link: '/courses',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Test Series',
      description: 'Explore LAW 2025-2026 Test Series',
      icon: 'bi bi-file-text',
      link: '/test-series',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Books',
      description: 'Explore PW LAW Preparation Books',
      icon: 'bi bi-book',
      link: '/books',
      bgColor: 'bg-purple-50'
    }
  ]

  return (
    <div className="py-8 bg-[#e7edff]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href={category.link}
              className={`${category.bgColor} p-6 rounded-xl hover:shadow-lg transition-all duration-300 group`}
            >
              <i className={`${category.icon} text-2xl text-blue-600 mb-3 block`}></i>
              <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 