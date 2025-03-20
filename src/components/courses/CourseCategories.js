import Link from 'next/link'

export default function CourseCategories() {
  const categories = [
    {
      title: 'Test Series',
      description: 'Explore LAW 2025-2026 Test Series',
      icon: 'bi bi-file-text',
      link: '/mock-tests/online',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Books',
      description: 'Explore CLATians LAW Preparation Books',
      icon: 'bi bi-book',
      link: '/onlineResourses',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Preparation Tips',
      description: 'Explore Preparation Tips',
      icon: 'bi bi-journal-text',
      link: '/blogs',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Booster Courses',
      description: 'Click Here to Explore CLATians Booster Courses',
      icon: 'bi bi-laptop',
      link: '/courses/online/5',
      bgColor: 'bg-red-50'
    },
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