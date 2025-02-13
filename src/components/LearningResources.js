import { FaBook, FaClipboardList, FaDesktop, FaRegNewspaper } from 'react-icons/fa';

export default function LearningResources() {
  return (
    <section className="learning-resources py-5 px-5 bg-[#e7edff]">
      <div className="container mx-auto w-[85%] lg:w-[75%]">
        <div className="text-center mb-8">
          <h3 className="font-bold text-2xl mb-2">Preparation Resources</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore resources to enhance your preparation for exams with our curated blogs, courses, test
            series, and books.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Resource Cards */}
          <div className="aspect-square">
            <div className="resource-card text-center p-6 bg-[#eaf4fe] rounded-2xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center">
              <div className="icon-wrapper mb-4 flex justify-center items-center w-20 h-20 bg-white rounded-full shadow-lg">
                <FaDesktop className="text-blue-500 text-3xl" />
              </div>
              <h5 className="font-bold text-lg mb-2">Blogs</h5>
              <p className="text-gray-600 text-sm">Explore Our Latest Blogs</p>
            </div>
          </div>
          
          <div className="aspect-square">
            <div className="resource-card text-center p-6 bg-[#fdecef] rounded-2xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center">
              <div className="icon-wrapper mb-4 flex justify-center items-center w-20 h-20 bg-white rounded-full shadow-lg">
                <FaRegNewspaper className="text-red-500 text-3xl" />
              </div>
              <h5 className="font-bold text-lg mb-2">Online Courses</h5>
              <p className="text-gray-600 text-sm">Click Here to Explore Online Courses</p>
            </div>
          </div>
          
          <div className="aspect-square">
            <div className="resource-card text-center p-6 bg-[#eaffea] rounded-2xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center">
              <div className="icon-wrapper mb-4 flex justify-center items-center w-20 h-20 bg-white rounded-full shadow-lg">
                <FaClipboardList className="text-green-500 text-3xl" />
              </div>
              <h5 className="font-bold text-lg mb-2">Test Series</h5>
              <p className="text-gray-600 text-sm">Explore Test Series for Preparation</p>
            </div>
          </div>
          
          <div className="aspect-square">
            <div className="resource-card text-center p-6 bg-[#e8f4fe] rounded-2xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center">
              <div className="icon-wrapper mb-4 flex justify-center items-center w-20 h-20 bg-white rounded-full shadow-lg">
                <FaBook className="text-blue-400 text-3xl" />
              </div>
              <h5 className="font-bold text-lg mb-2">Books</h5>
              <p className="text-gray-600 text-sm">Explore Recommended Books</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 