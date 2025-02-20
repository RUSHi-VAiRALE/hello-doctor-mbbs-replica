import Image from 'next/image'
import Link from 'next/link'
import BlogCard from './BlogCard'

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips to Crack CLAT 2025",
      description: "Preparing for CLAT? Here are the top 5 tips to improve your legal aptitude and logical reasoning skills...",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
    {
      id: 2,
      title: "Best Law Colleges in India",
      description: "Looking for the top-ranked law universities? Here's a list of the best law schools and their admission process...",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
    {
      id: 3,
      title: "How to Improve Legal Reasoning",
      description: "Legal reasoning is a key part of CLAT. Learn expert strategies to solve legal reasoning questions easily...",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
    {
      id: 4,
      title: "Understanding CLAT Pattern",
      description: "Get familiar with the latest CLAT exam pattern and prepare accordingly for better results...",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
    {
      id: 5,
      title: "Time Management in CLAT",
      description: "Master the art of time management during the CLAT exam with these proven strategies...",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
    {
      id: 6,
      title: "Mock Test Importance",
      description: "Why taking regular mock tests is crucial for your CLAT preparation journey...",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    }
  ]

  return (
    <section className="bg-[#fdf6f4] py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Featured News */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative h-[300px] lg:h-auto">
              <Image
                src="https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
                alt="Featured News"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="lg:w-1/2 p-6 md:p-8 lg:p-12">
              <div className="animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Breaking: Major Update in Law Entrance Exams
                </h2>
                <p className="text-gray-600 mb-6">
                  The legal entrance exam pattern has been updated for 2025. Students are advised to check the latest guidelines and syllabus updates to stay ahead in their preparation.
                </p>
                <Link 
                  href="/blogs/1" 
                  className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Latest Blogs & Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="#" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
} 