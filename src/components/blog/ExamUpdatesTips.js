import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaLightbulb, FaBookOpen, FaRegClock, FaRegCalendarAlt } from 'react-icons/fa'

export default function ExamUpdatesTips({ activeTabExam }) {
  // Sample exam tips data - replace with your actual data
  const examTips = {
    clat: [
      {
        id: 1,
        title: "Master Legal Reasoning",
        description: "Focus on understanding the principles behind legal reasoning questions rather than memorizing cases. Practice identifying assumptions and conclusions in arguments.",
        icon: <FaLightbulb className="text-orange-500" />,
        image: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
      },
      {
        id: 2,
        title: "Current Affairs Strategy",
        description: "Read newspapers daily and make concise notes on important legal developments. Focus on Supreme Court judgments and new legislation.",
        icon: <FaBookOpen className="text-blue-500" />,
        image: "https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581_1280.jpg"
      },
      {
        id: 3,
        title: "Time Management",
        description: "Allocate time based on section weightage. Spend more time on high-scoring sections like legal reasoning and current affairs.",
        icon: <FaRegClock className="text-green-500" />,
        image: "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg"
      },
      {
        id: 4,
        title: "Mock Test Schedule",
        description: "Take at least one full-length mock test every week in the last three months. Analyze mistakes and focus on improving weak areas.",
        icon: <FaRegCalendarAlt className="text-purple-500" />,
        image: "https://cdn.pixabay.com/photo/2015/07/28/20/51/school-864940_1280.jpg"
      }
    ],
    ailet: [
      {
        id: 1,
        title: "Focus on Legal Aptitude",
        description: "AILET has more emphasis on legal knowledge. Study important legal maxims, principles, and landmark cases thoroughly.",
        icon: <FaLightbulb className="text-orange-500" />,
        image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
      },
      {
        id: 2,
        title: "English Comprehension",
        description: "Practice reading complex passages quickly. Work on vocabulary and grammar rules that commonly appear in AILET.",
        icon: <FaBookOpen className="text-blue-500" />,
        image: "https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_1280.jpg"
      },
      {
        id: 3,
        title: "GK Preparation",
        description: "AILET tests deeper GK than CLAT. Focus on static GK, international relations, and constitutional developments.",
        icon: <FaRegClock className="text-green-500" />,
        image: "https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg"
      }
    ],
    cetlaw: [
      {
        id: 1,
        title: "Legal Reasoning Focus",
        description: "MH CET-LAW emphasizes legal reasoning and logical deduction. Practice identifying legal principles from given scenarios.",
        icon: <FaLightbulb className="text-orange-500" />,
        image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_1280.jpg"
      },
      {
        id: 2,
        title: "Maharashtra-Specific Knowledge",
        description: "Pay special attention to Maharashtra-specific legal developments and current affairs that may appear in the exam.",
        icon: <FaBookOpen className="text-blue-500" />,
        image: "https://cdn.pixabay.com/photo/2016/11/14/05/15/academic-1822682_1280.jpg"
      }
    ],
    lsat: [
      {
        id: 1,
        title: "Analytical Reasoning",
        description: "LSAT focuses heavily on analytical reasoning. Practice logic games and puzzles to improve your reasoning skills.",
        icon: <FaLightbulb className="text-orange-500" />,
        image: "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg"
      },
      {
        id: 2,
        title: "Reading Comprehension",
        description: "Work on reading dense, complex passages quickly and accurately. Focus on identifying main ideas and author's tone.",
        icon: <FaBookOpen className="text-blue-500" />,
        image: "https://cdn.pixabay.com/photo/2015/07/02/10/40/writing-828911_1280.jpg"
      },
      {
        id: 3,
        title: "Logical Reasoning",
        description: "Practice identifying assumptions, conclusions, and flaws in arguments. This is a major component of LSAT.",
        icon: <FaRegClock className="text-green-500" />,
        image: "https://cdn.pixabay.com/photo/2017/07/31/11/46/laptop-2557571_1280.jpg"
      }
    ],
    cuet: [
      {
        id: 1,
        title: "Domain Knowledge",
        description: "For CUET Law, focus on the domain-specific paper which tests legal aptitude and awareness.",
        icon: <FaLightbulb className="text-orange-500" />,
        image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg"
      },
      {
        id: 2,
        title: "General Test Preparation",
        description: "Don't neglect the general test sections. Language, general knowledge, and numerical ability are equally important.",
        icon: <FaBookOpen className="text-blue-500" />,
        image: "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg"
      }
    ],
    aillet: [
      {
        id: 1,
        title: "Focus on Legal Principles",
        description: "AIL-LET has a strong focus on legal principles and their application. Study landmark cases thoroughly.",
        icon: <FaLightbulb className="text-orange-500" />,
        image: "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg"
      },
      {
        id: 2,
        title: "Current Legal Developments",
        description: "Stay updated with recent Supreme Court judgments and legislative changes that might be tested in the exam.",
        icon: <FaBookOpen className="text-blue-500" />,
        image: "https://cdn.pixabay.com/photo/2017/09/08/00/37/friend-2727307_1280.jpg"
      }
    ]
  }

  // Get tips for the active exam tab
  const activeTips = examTips[activeTabExam] || []

  return (
    <div className="mt-8 mb-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Expert Tips for {activeTabExam.toUpperCase()}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Follow these strategic tips from our expert faculty to maximize your preparation for the {activeTabExam.toUpperCase()} exam.
        </p>
      </div>

      {activeTips.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeTips.map((tip) => (
            <div key={tip.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    {tip.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                <p className="text-gray-600 mb-4">{tip.description}</p>
              </div>
              
              <div className="px-6 pb-6">
                <Link 
                  href={`/tips/${activeTabExam}/${tip.id}`} 
                  className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
                >
                  Read full strategy <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <FaLightbulb className="text-orange-400 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Tips Coming Soon</h3>
          <p className="text-gray-600">
            We're preparing expert tips for {activeTabExam.toUpperCase()}. Check back soon!
          </p>
        </div>
      )}
    </div>
  )
}