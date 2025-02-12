import { FaBook, FaClipboardList, FaDesktop, FaRegNewspaper } from 'react-icons/fa';

export default function LearningResources() {
  return (
    <section className="learning-resources py-5 bg-[#e7edff]">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h3 className="font-bold text-2xl">Preparation Resources</h3>
          <p className="text-muted">
            Explore resources to enhance your preparation for exams with our curated blogs, courses, test
            series, and books.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Resource Cards */}
          <div className="col">
            <div className="resource-card text-center p-4 bg-[#eaf4fe] rounded-2xl h-full shadow-md">
              <div className="icon-wrapper mx-auto mb-3 flex justify-center items-center w-16 h-16 bg-white rounded-full shadow-lg">
                <FaDesktop className="text-primary text-3xl" />
              </div>
              <h5 className="font-bold">Blogs</h5>
              <p className="text-muted">Explore Our Latest Blogs</p>
            </div>
          </div>
          <div className="col">
            <div className="resource-card text-center p-4 bg-[#fdecef] rounded-2xl h-full shadow-md">
              <div className="icon-wrapper mx-auto mb-3 flex justify-center items-center w-16 h-16 bg-white rounded-full shadow-lg">
                <FaRegNewspaper className="text-danger text-3xl" />
              </div>
              <h5 className="font-bold">Online Courses</h5>
              <p className="text-muted">Click Here to Explore Online Courses</p>
            </div>
          </div>
          <div className="col">
            <div className="resource-card text-center p-4 bg-[#eaffea] rounded-2xl h-full shadow-md">
              <div className="icon-wrapper mx-auto mb-3 flex justify-center items-center w-16 h-16 bg-white rounded-full shadow-lg">
                <FaClipboardList className="text-success text-3xl" />
              </div>
              <h5 className="font-bold">Test Series</h5>
              <p className="text-muted">Explore Test Series for Preparation</p>
            </div>
          </div>
          <div className="col">
            <div className="resource-card text-center p-4 bg-[#e8f4fe] rounded-2xl h-full shadow-md">
              <div className="icon-wrapper mx-auto mb-3 flex justify-center items-center w-16 h-16 bg-white rounded-full shadow-lg">
                <FaBook className="text-info text-3xl" />
              </div>
              <h5 className="font-bold">Books</h5>
              <p className="text-muted">Explore Recommended Books</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 