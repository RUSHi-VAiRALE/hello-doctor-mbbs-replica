'use client'
import { useState, useEffect } from "react"
import AboutHero from "@/components/AboutHero"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaBell, FaBriefcase, FaGraduationCap, FaHandshake, FaChevronDown, FaChevronUp, FaCalendarAlt, FaTasks, FaUserTie, FaTimes } from "react-icons/fa"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { app } from "@/firebase"
import JobApplicationForm from "@/components/careers/JobApplicationForm"

export default function CareersPage() {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [email, setEmail] = useState("");
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const db = getFirestore(app);
        const careersCollection = collection(db, "careers");
        const careersSnapshot = await getDocs(careersCollection);
        const careersData = careersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCareers(careersData);
      } catch (error) {
        console.error("Error fetching careers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest! We'll notify you at ${email} about future opportunities.`);
    setEmail("");
  };

  // Fallback data in case Firebase fetch fails
  const fallbackCareers = [
    {
      id: "1",
      role: "Legal Studies Faculty",
      shortDescription: "Join our team as a Legal Studies Faculty member to shape the future of law aspirants.",
      responsibilities: "Lecturing: Delivering lectures on various legal topics (e.g., constitutional law, international law, contracts, etc.). Seminars and Workshops: Facilitating interactive discussions, debates, and workshops. Curriculum Development: Designing course syllabi, creating learning materials, and updating content to reflect current legal developments. Student Advising: Guiding students on academic matters, career paths, and legal internships. Conducting Research: Publishing articles in legal journals, books, and other academic publications. Presenting Papers: Attending and presenting at academic conferences and seminars. Grant Writing: Applying for research grants to fund projects.",
      dayToDay: "Committee Work: Serving on departmental or university committees (e.g., curriculum committees, academic integrity boards). Program Management: Overseeing legal studies programs, managing course schedules, and ensuring accreditation standards are met. Faculty Meetings: Participating in regular faculty meetings to discuss academic policies and departmental issues. Advising Students: Mentoring students on academic performance and career opportunities in law. Supervising Theses: Guiding graduate or undergraduate students in research projects or dissertations."
    },
    {
      id: "2",
      role: "Content Creator",
      shortDescription: "Create engaging legal content for our students and online platforms.",
      responsibilities: "Developing study materials. Creating practice questions. Writing blog articles on legal topics.",
      dayToDay: "Research on current legal developments. Content writing and editing. Collaborating with faculty members."
    },
    {
      id: "3",
      role: "Student Counselor",
      shortDescription: "Guide and support students through their law entrance exam preparation journey.",
      responsibilities: "Providing academic guidance. Addressing student queries. Conducting orientation sessions.",
      dayToDay: "One-on-one counseling sessions. Tracking student progress. Coordinating with faculty for student support."
    }
  ];

  const displayCareers = careers.length > 0 ? careers : fallbackCareers;

  return (
    <>
      <AboutHero route="Home" page="Careers" />
      
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-md text-sm font-medium mb-4">
              CAREER OPPORTUNITIES
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Join Our Growing Team</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We're building a team of passionate educators and professionals dedicated to helping law aspirants achieve their dreams.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
          ) : (
            <>
              {/* Career Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {displayCareers.map((career) => (
                  <div 
                    key={career.id} 
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer overflow-hidden"
                    onClick={() => setSelectedCareer(career)}
                  >
                    <div className="h-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700"></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4">
                          <FaUserTie className="text-xl" />
                        </div>
                        <h3 className="text-xl font-bold">{career.role}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {career.shortDescription || "Join our team and make a difference in the lives of law aspirants."}
                      </p>
                      <div className="flex justify-end">
                        <button className="text-orange-600 font-medium flex items-center hover:text-orange-700">
                          View Details <FaArrowRight className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Career Detail Modal */}
              {selectedCareer && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                  <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                    <div className="sticky top-0 bg-white z-10 p-6 border-b border-gray-100 flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4">
                          <FaUserTie className="text-xl" />
                        </div>
                        <h2 className="text-2xl font-bold">{selectedCareer.role}</h2>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCareer(null);
                        }}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <FaTimes className="text-xl" />
                      </button>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-6">
                        <div className="flex items-center mb-3">
                          <FaTasks className="text-orange-500 mr-2" />
                          <h4 className="font-semibold text-lg">Responsibilities</h4>
                        </div>
                        <ul className="pl-6 text-gray-600 space-y-2 list-disc">
                          {Array.isArray(selectedCareer.responsibilities) ? (
                            selectedCareer.responsibilities.map((item, index) => (
                              <li key={index} className="pl-2 ml-4">
                                {item}
                              </li>
                            ))
                          ) : (
                            typeof selectedCareer.responsibilities === 'string' && 
                            selectedCareer.responsibilities.split('. ').filter(item => item.trim() !== '').map((item, index) => (
                              <li key={index} className="pl-2 ml-4">
                                {item.trim().replace(/\.$/, '')}
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-center mb-3">
                          <FaCalendarAlt className="text-orange-500 mr-2" />
                          <h4 className="font-semibold text-lg">Day-to-Day Tasks</h4>
                        </div>
                        <ul className="pl-6 text-gray-600 space-y-2 list-disc">
                          {Array.isArray(selectedCareer.dayToDay) ? (
                            selectedCareer.dayToDay.map((item, index) => (
                              <li key={index} className="pl-2 ml-4">
                                {item}
                              </li>
                            ))
                          ) : (
                            typeof selectedCareer.dayToDay === 'string' && 
                            selectedCareer.dayToDay.split('. ').filter(item => item.trim() !== '').map((item, index) => (
                              <li key={index} className="pl-2 ml-4">
                                {item.trim().replace(/\.$/, '')}
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                      
                      <div className="mt-8 flex justify-center">
                        <button 
                          className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                          onClick={() => {
                            setShowApplicationForm(true);
                          }}
                        >
                          Apply for this position
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Job Application Form Modal */}
              {showApplicationForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                  <JobApplicationForm 
                    jobRole={selectedCareer ? selectedCareer.role : "Selected Position"} 
                    onClose={() => setShowApplicationForm(false)} 
                  />
                </div>
              )}
            </>
          )}

          

          <div id="career-notification-form" className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Get Notified About Job Openings</h2>
              <p className="text-gray-600">
                Be the first to know when we start hiring. We'll notify you as soon as positions become available.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap"
              >
                Join Talent Pool <FaBell className="ml-2" />
              </button>
            </form>
            
            <p className="text-sm text-gray-500 text-center">
              By joining our talent pool, you'll receive updates about job openings and career opportunities.
            </p>
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/contactUs" 
              className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
            >
              Have questions? Contact us <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}