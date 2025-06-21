'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaLaptop, FaBook, FaTimes, FaFileAlt, FaDownload } from 'react-icons/fa'
import { useParams } from 'next/navigation'

// Mock test data
const mockTests = [
  {
    date: { day: '15', month: 'Oct' },
    time: '120 minutes',
    title: 'CLAT Full Mock Test 1',
    mode: 'Online',
    image: 'https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg',
    description: 'Comprehensive mock test covering all CLAT sections including Legal Reasoning, Logical Reasoning, English, Current Affairs, and Quantitative Techniques. This test is designed to simulate the actual exam experience.',
    questions: 150,
    difficulty: 'Medium',
    instructor: 'Adv. Rajesh Sharma',
    instructorRole: 'CLAT Coach & Former Judge'
  },
  {
    date: { day: '22', month: 'Oct' },
    time: '45 minutes',
    title: 'Legal Reasoning Sectional Test',
    mode: 'Online',
    image: 'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg',
    description: 'Focused practice for the legal reasoning section of CLAT. This test includes principle-fact application questions, legal knowledge questions, and case analysis to strengthen your legal aptitude.',
    questions: 40,
    difficulty: 'Hard',
    instructor: 'Prof. Meera Patel',
    instructorRole: 'Law Faculty, National Law University'
  },
  {
    date: { day: '05', month: 'Nov' },
    time: '30 minutes',
    title: 'Current Affairs Mock Test',
    mode: 'Online',
    image: 'https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg',
    description: 'Test your knowledge of recent events and developments relevant to law entrance exams. Covers national and international news, legal developments, and landmark judgments from the past 6 months.',
    questions: 35,
    difficulty: 'Medium',
    instructor: 'Dr. Anand Krishnan',
    instructorRole: 'Political Analyst & Legal Expert'
  },
  {
    date: { day: '12', month: 'Nov' },
    time: '90 minutes',
    title: 'AILET Full Mock Test',
    mode: 'Online',
    image: 'https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg',
    description: 'Complete mock test designed specifically for AILET preparation. Covers all sections with the exact pattern and difficulty level as seen in previous AILET exams.',
    questions: 120,
    difficulty: 'Hard',
    instructor: 'Ms. Priya Desai',
    instructorRole: 'Test Prep Specialist'
  },
  {
    date: { day: '20', month: 'Nov' },
    time: '250 pages',
    title: 'CLAT Comprehensive Test Series',
    mode: 'Offline',
    image: 'https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_1280.jpg',
    description: 'Set of 10 printable mock tests with answer keys and detailed explanations. Perfect for practice in exam-like conditions without digital distractions.',
    questions: '10 tests',
    difficulty: 'Mixed',
    instructor: 'Dr. Sunita Rao',
    instructorRole: 'CLAT Preparation Expert'
  },
  {
    date: { day: '28', month: 'Nov' },
    time: '180 pages',
    title: 'AILET Practice Papers',
    mode: 'Offline',
    image: 'https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_1280.jpg',
    description: 'Collection of previous year papers with detailed solutions and explanations. Includes 8 full-length AILET papers from past years with answer keys.',
    questions: '8 tests',
    difficulty: 'Hard',
    instructor: 'Prof. Karthik Nair',
    instructorRole: 'AILET Expert'
  },
  {
    date: { day: '05', month: 'Dec' },
    time: '120 pages',
    title: 'Legal Aptitude Workbook',
    mode: 'Offline',
    image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
    description: 'Specialized practice material for legal reasoning with 6 sectional tests. Includes principle-based questions, legal maxims, and case analysis with detailed explanations.',
    questions: '6 tests',
    difficulty: 'Medium',
    instructor: 'Mr. Vikram Mehta',
    instructorRole: 'Legal Reasoning Coach'
  },
  {
    date: { day: '12', month: 'Dec' },
    time: '150 pages',
    title: 'English & Comprehension Workbook',
    mode: 'Offline',
    image: 'https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_1280.jpg',
    description: 'Focused practice material for the English section with reading comprehension passages, vocabulary exercises, and grammar questions. Includes 5 sectional tests with solutions.',
    questions: '5 tests',
    difficulty: 'Medium',
    instructor: 'Panel of Experts',
    instructorRole: 'English Language Specialists'
  }
];

export default function MockTestDetail() {
  const { id } = useParams()
  const mockTest = mockTests[parseInt(id)];
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      errors.phoneNumber = 'Phone number must be 10 digits';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setShowRegistrationForm(false);
        setSubmitSuccess(false);
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-[#fdf6f4] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src={mockTest.image}
          alt={mockTest.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] px-4 py-2 rounded-lg mb-4">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>Available from {mockTest.date.day} {mockTest.date.month}</span>
                <span className="mx-2">|</span>
                {mockTest.mode === 'Online' ? (
                  <FaLaptop className="mr-2" />
                ) : (
                  <FaBook className="mr-2" />
                )}
                <span>{mockTest.mode}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{mockTest.title}</h1>
            <div className="flex items-center">
              <FaClock className="mr-2" />
              <span>{mockTest.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mock Test Details */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">About This Mock Test</h2>
              <p className="text-gray-700 mb-8">{mockTest.description}</p>

              <h3 className="text-xl font-bold mb-4">Prepared By</h3>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold">{mockTest.instructor}</h4>
                  <p className="text-gray-600">{mockTest.instructorRole}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Test Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FaFileAlt className="text-blue-600 mr-2" />
                    <h4 className="font-bold">Questions</h4>
                  </div>
                  <p>{mockTest.questions}</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FaClock className="text-purple-600 mr-2" />
                    <h4 className="font-bold">Duration/Size</h4>
                  </div>
                  <p>{mockTest.time}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className="text-green-600 mr-2" />
                    <h4 className="font-bold">Difficulty</h4>
                  </div>
                  <p>{mockTest.difficulty}</p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    {mockTest.mode === 'Online' ? (
                      <FaLaptop className="text-amber-600 mr-2" />
                    ) : (
                      <FaBook className="text-amber-600 mr-2" />
                    )}
                    <h4 className="font-bold">Mode</h4>
                  </div>
                  <p>{mockTest.mode}</p>
                </div>
              </div>

              {mockTest.mode === 'Online' ? (
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">How to Take This Test</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Register for the test using the button on the right</li>
                    <li>You'll receive access to the test in your dashboard</li>
                    <li>Ensure you have a stable internet connection</li>
                    <li>Set aside uninterrupted time as per the test duration</li>
                    <li>Your results and analysis will be available immediately after completion</li>
                  </ol>
                </div>
              ) : (
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">How to Use This Material</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Register to download the PDF files</li>
                    <li>Print the test papers for an exam-like experience</li>
                    <li>Time yourself according to the recommended duration</li>
                    <li>Check your answers using the provided answer key</li>
                    <li>Review the detailed explanations to understand concepts better</li>
                  </ol>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Test Details</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCalendarAlt className="text-[#ad4a16] mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold">Available From</h4>
                    <p className="text-gray-600">{mockTest.date.day} {mockTest.date.month}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-[#ad4a16] mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold">Duration/Size</h4>
                    <p className="text-gray-600">{mockTest.time}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaFileAlt className="text-[#ad4a16] mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold">Questions/Tests</h4>
                    <p className="text-gray-600">{mockTest.questions}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  {mockTest.mode === 'Online' ? (
                    <FaLaptop className="text-[#ad4a16] mt-1 mr-3" />
                  ) : (
                    <FaBook className="text-[#ad4a16] mt-1 mr-3" />
                  )}
                  <div>
                    <h4 className="font-bold">Mode</h4>
                    <p className="text-gray-600">{mockTest.mode}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowRegistrationForm(true)}
                  className="w-full py-3 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  {mockTest.mode === 'Online' ? 'Start Test Now' : 'Download PDF'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Mock Tests */}
      <div className="bg-[#e7edff] py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">More Mock Tests</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockTests.map((otherTest, index) => (
              parseInt(id) !== index && index < 4 && (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={otherTest.image}
                      alt={otherTest.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-[#E3D7B8] px-5 py-2 rounded-br-xl">
                      <div className="text-center">
                        <h5 className="text-2xl font-bold text-gray-800">{otherTest.date.day}</h5>
                        <small className="text-gray-600 text-sm">{otherTest.date.month}</small>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-3 py-1 rounded-bl-xl text-sm">
                      {otherTest.mode}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center mb-3">
                      <FaClock className="text-[#ad4a16] mr-2 text-base" />
                      <span className="text-[#ad4a16] font-medium">View Details</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{otherTest.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{otherTest.description}</p>

                    <Link href={`/mock-tests/${index}`}>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                        <span className="bg-[#ad4a16]/10 text-[#ad4a16] text-xs px-2 py-1 rounded-full">
                          {otherTest.difficulty}
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowRegistrationForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close registration form"
            >
              <FaTimes size={24} />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">
                {mockTest.mode === 'Online' ? 'Register for Online Test' : 'Download Test Materials'}
              </h2>

              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">Registration Successful!</h3>
                  {mockTest.mode === 'Online' ? (
                    <p className="text-gray-600">You can now access the test in your dashboard. Good luck!</p>
                  ) : (
                    <p className="text-gray-600">Your download will begin shortly. Check your email for additional resources.</p>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors ${formErrors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.fullName && <p className="mt-1 text-sm text-red-600">{formErrors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter your email address"
                    />
                    {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors ${formErrors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter your phone number"
                    />
                    {formErrors.phoneNumber && <p className="mt-1 text-sm text-red-600">{formErrors.phoneNumber}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                      placeholder="Any questions or comments?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (mockTest.mode === 'Online' ? "Start Test" : "Download PDF")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}