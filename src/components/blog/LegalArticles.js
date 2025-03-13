import Image from 'next/image'

export default function LegalArticles({ posts, activeTab }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts[activeTab].map((post) => (
        <div 
          key={post.id} 
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          <div className="relative h-48">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}