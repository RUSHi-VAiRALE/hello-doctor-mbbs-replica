'use client'
import { useState, useEffect } from "react"
import AboutHero from "@/components/AboutHero"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaBell, FaBriefcase, FaGraduationCap, FaHandshake, FaChevronDown, FaChevronUp, FaCalendarAlt, FaTasks, FaUserTie } from "react-icons/fa"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { app } from "@/firebase"

export default function CareersPage() {
  const [activeRole, setActiveRole] = useState(null);
  const [email, setEmail] = useState("");
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const toggleRole = (id) => {
    setActiveRole(activeRole === id ? null : id);
  };

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
      responsibilities: "Lecturing: Delivering lectures on various legal topics (e.g., constitutional law, international law, contracts, etc.). Seminars and Workshops: Facilitating interactive discussions, debates, and workshops. Curriculum Development: Designing course syllabi, creating learning materials, and updating content to reflect current legal developments. Student Advising: Guiding students on academic matters, career paths, and legal internships. Conducting Research: Publishing articles in legal journals, books, and other academic publications. Presenting Papers: Attending and presenting at academic conferences and seminars. Grant Writing: Applying for research grants to fund projects.",
      dayToDay: "Committee Work: Serving on departmental or university committees (e.g., curriculum committees, academic integrity boards). Program Management: Overseeing legal studies programs, managing course schedules, and ensuring accreditation standards are met. Faculty Meetings: Participating in regular faculty meetings to discuss academic policies and departmental issues. Advising Students: Mentoring students on academic performance and career opportunities in law. Supervising Theses: Guiding graduate or undergraduate students in research projects or dissertations."
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
            <div className="space-y-8 mb-16">
              {displayCareers.map((career) => (
                <div key={career.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleRole(career.id)}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4">
                        <FaUserTie className="text-xl" />
                      </div>
                      <h3 className="text-xl font-bold">{career.role}</h3>
                    </div>
                    <div>
                      {activeRole === career.id ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </div>
                  </div>
                  
                  {activeRole === career.id && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <div className="mb-6">
                        <div className="flex items-center mb-3">
                          <FaTasks className="text-orange-500 mr-2" />
                          <h4 className="font-semibold text-lg">Responsibilities</h4>
                        </div>
                        <ul className="pl-6 text-gray-600 space-y-2 list-disc">
                          {Array.isArray(career.responsibilities) ? (
                            career.responsibilities.map((item, index) => (
                              <li key={index} className="pl-2 ml-4">
                                {item}
                              </li>
                            ))
                          ) : (
                            typeof career.responsibilities === 'string' && 
                            career.responsibilities.split('. ').filter(item => item.trim() !== '').map((item, index) => (
                              <li key={index} className="pl-2 ml-4">
                                {item.trim().replace(/\.$/, '')}
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-3">
                          <FaCalendarAlt className="text-orange-500 mr-2" />
                          <h4 className="font-semibold text-lg">Day-to-Day Tasks</h4>
                        </div>
                        <ul className="pl-6 text-gray-600 space-y-2 list-disc">
                          {Array.isArray(career.dayToDay) ? (
                            career.dayToDay.map((item, index) => (
                              <li key={index} className="pl-2 ml-4">
                                {item}
                              </li>
                            ))
                          ) : (
                            typeof career.dayToDay === 'string' && 
                            career.dayToDay.split('. ').filter(item => item.trim() !== '').map((item, index) => (
                              <li key={index} className="pl-2 ml-4">
                                {item.trim().replace(/\.$/, '')}
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaBriefcase className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Teaching Positions</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Legal Studies Faculty
                </li>
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Current Affairs Expert
                </li>
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  English Language Trainer
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaGraduationCap className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Content Creation</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Legal Content Writers
                </li>
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Question Bank Developers
                </li>
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Video Content Creators
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaHandshake className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Support Roles</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Student Counselors
                </li>
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Academic Coordinators
                </li>
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Operations Staff
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
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