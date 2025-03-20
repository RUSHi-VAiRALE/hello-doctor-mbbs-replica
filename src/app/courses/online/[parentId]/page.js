'use client'

import CoursesHero from '@/components/courses/CoursesHero'
import CourseCategories from '@/components/courses/CourseCategories'
import CoursesList from '@/components/courses/CoursesList'
import LawEntranceExams from '@/components/courses/LawEntranceExams'
import FAQ from '@/components/FAQ'
import { usePathname } from 'next/navigation'

const data = [
  {
    "examName": "CLAT Entrance Exam",
    "description": "Looking for the best online CLAT coaching to ace the Common Law Admission Test (CLAT)? Join CLATians, India’s leading CLAT preparation platform, offering live interactive classes, expert mentorship, structured study material, and real-time mock tests. Our Online CLAT Course ensures flexible learning, AI-driven performance analysis, and 24/7 access to study resources, helping you secure a seat in the top NLUs (National Law Universities) from the comfort of your home.",
    "courses": [
    {
      id: 1,
      parentInd : 0,
      title: "Target CLAT-2026",
      tag: "CLAT",
      batchType : "online",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 2,
      parentInd : 0,
      title: "Advanced Crash Courses",
      tag: "CLAT",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "online",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 3,
      parentInd : 0,
      title: "Crash Course",
      tag: "CLAT",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "online",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
  ]
  },
  {
    "examName": "CLAT + AILET",
    "description": "Looking for the best online CLAT & AILET coaching to ace the Common Law Admission Test (CLAT) and All India Law Entrance Test (AILET)? Join CLATians, India's leading online law entrance preparation platform, offering live interactive classes, expert mentorship, structured study material, and real-time mock tests. Our Online CLAT & AILET Course ensures flexible learning, personalized doubt-solving sessions, and exam-focused preparation to help you secure admission in top National Law Universities (NLUs) and NLU Delhi.",
    "courses": [
    {
      id: 1,
      parentInd : 1,
      title: "Target CLAT + AILET 2026",
      tag: "CLAT + AILET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      batchType : "online",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 2,
      parentInd : 1,
      title: "Advanced Crash Courses",
      tag: "CLAT + AILET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      batchType : "online",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 3,
      parentInd : 1,
      title: "Crash Course",
      tag: "CLAT + AILET",
      badges: ["NEW", "Hinglish"],
      batchType : "online",
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
  ]
  },
  {
    "examName": "CUET-LAW (UG)",
    "description": "Looking for the best online CUET-LAW (UG) coaching to secure admission in top central universities? Join CLATians, India’s leading CUET Law preparation institute, offering live interactive classes, expert mentorship, structured study material, and real-time mock tests. Our Online CUET-LAW (UG) Course provides flexible learning, personalized attention, and exam-focused preparation, ensuring you excel in the CUET-LAW (UG) entrance exam and secure a seat in prestigious law programs at central universities.",
    "courses": [
    {
      id: 1,
      parentInd : 2,
      title: "Target CUET-LAW(UG) 2026",
      tag: "CUET-LAW (UG)",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "online",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 2,
      parentInd : 2,
      title: "Advanced Crash Courses",
      tag: "CUET-LAW (UG)",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "online",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 3,
      parentInd : 2,
      title: "Crash Course",
      tag: "CUET-LAW (UG)",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      batchType : "online",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
  ]
  },
  {
    "examName": "CUET-LAW (PG)",
    "description": "Looking for the best online CUET-LAW (PG) coaching to excel in the Common University Entrance Test for Law (PG)? Join CLATians, India’s leading CUET-LAW (PG) preparation institute, offering live interactive classes, expert mentorship, structured study material, and real-time mock tests. Our Online CUET-LAW (PG) Course ensures personalized guidance, flexible learning, and exam-focused preparation to help you secure admission to top central universities and law schools.",
    "courses": [
    {
      id: 1,
      parentInd : 3,
      title: "Target CUET-LAW(PG) 2026",
      tag: "CUET-LAW (PG)",
      badges: ["NEW", "Hinglish"],
      batchType : "online",
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 2,
      parentInd : 3,
      title: "Advanced Crash Courses",
      tag: "CUET-LAW (PG)",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "online",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 3,
      parentInd : 3,
      title: "Crash Course",
      tag: "CUET-LAW (PG)",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      batchType : "online",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
  ]
  },
  {
    "examName": "AIL-LET",
    "description": "Looking for the best online coaching for AIL-LET to secure admission to the Army Institute of Law (AIL), Mohali? Join CLATians, India’s leading AIL-LET preparation institute, offering live interactive classes, expert mentorship, structured study material, and real-time mock tests. Our AIL-LET Online Batch ensures personalized guidance, flexible learning, and strategic preparation to help you ace the AIL Law Entrance Test (AIL-LET) and secure your dream seat.",
    "courses": [
    {
      id: 1,
      parentInd : 4,
      title: "Target AIL-LET 2026",
      tag: "AIL-LET",
      badges: ["NEW", "Hinglish"],
      batchType : "online",
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 2,
      parentInd : 4,
      title: "Advanced Crash Courses",
      tag: "AIL-LET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "online",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 3,
      parentInd : 4,
      title: "Crash Course",
      tag: "AIL-LET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "online",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
  ]
  },
  {
    "examName": "Booster Courses",
    "description": "Struggling with a specific section of the Common Law Admission Test (CLAT)? Strengthen your weak areas with CLATians’ Online BOOSTER Batches, designed to provide in-depth, subject-wise coaching for Legal Reasoning, English, Logical Reasoning, Current Affairs, and Math. Our expert-led online classes, exam-focused study material, and real-time mock tests ensure you master each section and boost your overall CLAT score.",
    "courses": [
      {
        "id": 1,
        parentInd : 5,
        "title": "Legal Reasoning Booster",
        "tag": "Booster Courses",
        "badges": ["NEW", "Hinglish"],
        "startDate": "13 Jan, 2025",
        "endDate": "31 Dec, 2025",
      batchType : "online",
        "features": "Premium Features Included",
        "price": "₹4,999",
        "originalPrice": "₹10,000",
        "discount": "50% OFF",
        "image": "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
      },
      {
        "id": 2,
        parentInd : 5,
        "title": "English Booster",
        "tag": "Booster Courses",
        "badges": ["NEW", "Hinglish"],
      batchType : "online",
        "startDate": "13 Jan, 2025",
        "endDate": "31 Dec, 2025",
        "features": "Premium Features Included",
        "price": "₹4,999",
        "originalPrice": "₹10,000",
        "discount": "50% OFF",
        "image": "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
      },
      {
        "id": 3,
        parentInd : 5,
        "title": "Logical Reasoning Booster",
        "tag": "Booster Courses",
        "badges": ["NEW", "Hinglish"],
        "startDate": "13 Jan, 2025",
      batchType : "online",
        "endDate": "31 Dec, 2025",
        "features": "Premium Features Included",
        "price": "₹4,999",
        "originalPrice": "₹10,000",
        "discount": "50% OFF",
        "image": "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
      },{
        "id": 4,
        parentInd : 5,
        "title": "Current Affairs Booster",
        "tag": "Booster Courses",
        "badges": ["NEW", "Hinglish"],
      batchType : "online",
        "startDate": "13 Jan, 2025",
        "endDate": "31 Dec, 2025",
        "features": "Premium Features Included",
        "price": "₹4,999",
        "originalPrice": "₹10,000",
        "discount": "50% OFF",
        "image": "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
      },{
        "id": 5,
        parentInd : 5,
        "title": "Math Booster",
        "tag": "Booster Courses",
        "badges": ["NEW", "Hinglish"],
      batchType : "online",
        "startDate": "13 Jan, 2025",
        "endDate": "31 Dec, 2025",
        "features": "Premium Features Included",
        "price": "₹4,999",
        "originalPrice": "₹10,000",
        "discount": "50% OFF",
        "image": "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
      }
    ]
  }
]
const faqs = [
    { 
      index: 0,
      question: "Scholarship Test Details",
      answer: "No. of Questions = 50 Time Duration = 50 min (For Online Test) & 60 min for (Offline Test)Timing = Online Test (24×7) & Offline Test 10:00am to 06:00pmMode of Test = Online and Offline"
    },
    {
      index: 1,
      question: "Eligibility for the Test",
      answer: "Any Candidate who want to appear for CLAT 2025/CLAT 2026."
    },
    {
      index: 2,
      question: "What are the Test Syllabus ?",
      answer: "Completely based on your Knowledge, Language and IQ. "
    },
    {
      index: 3,
      question: "What are the Subjects ?",
      answer: "Reading Comprehension – 20Q Legal Awareness – 10Q Logical Reasoning – 10Q General Awareness – 5Q General Maths – 5Q"
    },
    {
      index: 4,
      question: "Scholarship Test Benefits!",
      answer: "Upto 1o Marks – 10% Scholarship 11 to 15 Marks – 15% Scholarship 16 to 20 Marks – 20% Scholarship 21 to 25 Marks – 25% Scholarship 26 to 30 Marks – 30% Scholarship 31 to 35 Marks – 35% Scholarship 36 to 40 Marks – 40% Scholarship 41 to 45 Marks – 50% Scholarship 46 to 48 Marks – 70% Scholarship 49 to 50 Marks – 100% Scholarship"
    },
    // Add more FAQs...
  ]

  // Default props with CLAT data
  const examData = {
    heroTitle: "Excel in CLAT with Expert Coaching at CLATians",
    heroSubtitle: "Your Gateway to Premier Law Universities",
    introduction: [
      "The Common Law Admission Test (CLAT) stands as the gateway to India's prestigious National Law Universities (NLUs). This competitive examination evaluates your proficiency in English language, current affairs, legal reasoning, logical reasoning, and quantitative techniques. At CLATians, we provide comprehensive CLAT coaching designed by legal experts to transform aspirants into successful law professionals.",
      "Our CLAT preparation programs are meticulously structured to address individual learning needs, helping you master the exam and secure admission to your dream law school."
    ],
    whyChooseTitle: "Why Choose CLATians?",
    whyChoosePoints: [
      "Expert legal faculty",
      "Comprehensive study resources",
      "Rigorous testing system",
      "Proven success rate"
    ],
    eligibility: {
      title: "Understanding CLAT Eligibility Requirements",
      headers: ["Program Level", "Required Qualifications", "Minimum Marks"],
      data: [
        {
          program: "UG Program (5-year integrated LLB)",
          qualifications: "Completed or Appearing Class 12th examination",
          marks: "45% (General/OBC/NRI/PWD)\n40% (SC/ST)"
        },
        {
          program: "PG Program (LLM)",
          qualifications: "Completed or Appearing 3-year or 5-year LLB",
          marks: "50% (General/OBC/NRI/PWD)\n45% (SC/ST)"
        }
      ],
      footer: "Verify your eligibility status before enrolling in our specialized coaching programs."
    },
    examStructure: {
      title: "CLAT Exam Structure: Know What to Expect",
      headers: ["Section", "Question Range", "Marks Allocation", "Examination Duration"],
      data: [
        {
          section: "English Language",
          questions: "28-32",
          marks: "28-32",
          duration: "2 hours (combined)"
        },
        {
          section: "Current Affairs & GK",
          questions: "35-39",
          marks: "35-39",
          duration: ""
        },
        {
          section: "Legal Reasoning",
          questions: "35-39",
          marks: "35-39",
          duration: ""
        },
        {
          section: "Logical Reasoning",
          questions: "28-32",
          marks: "28-32",
          duration: ""
        },
        {
          section: "Quantitative Techniques",
          questions: "13-17",
          marks: "13-17",
          duration: ""
        }
      ],
      notes: [
        "Correct answers earn +1 mark",
        "Incorrect responses deduct 0.25 marks",
        "Total questions: 120",
        "Maximum score: 120 marks"
      ],
      notesFooter: "This understanding helps you develop effective time management strategies during your preparation."
    },
    syllabus: {
      title: "Comprehensive CLAT Syllabus Coverage",
      data: [
        {
          section: "English Language",
          topics: "Reading comprehension, vocabulary enhancement, grammar mastery, sentence correction, verbal reasoning"
        },
        {
          section: "Current Affairs & GK",
          topics: "National and international developments, legal events, awards and recognition, sports updates, scientific advancements, social issues"
        },
        {
          section: "Legal Reasoning",
          topics: "Legal principles application, case scenarios analysis, tort law, contract law, constitutional fundamentals"
        },
        {
          section: "Logical Reasoning",
          topics: "Analytical reasoning, Critical Reasoning, arrangements, logical deductions, data sufficiency"
        },
        {
          section: "Quantitative Techniques",
          topics: "Data interpretation, percentage calculations, time-speed-distance problems, algebraic concepts, probability, arithmetic reasoning"
        }
      ],
      footer: "Our expert faculty ensures complete mastery of the CLAT syllabus through structured learning modules."
    },
    strategicApproach: {
      title: "Strategic CLAT Preparation Approach",
      intro: "Follow these proven strategies to maximize your CLAT success potential:",
      strategies: [
        {
          title: "Master the Exam Framework",
          description: "Thoroughly analyze the CLAT syllabus and understand examination patterns to develop targeted preparation strategies."
        },
        {
          title: "Implement a Disciplined Study Schedule",
          description: "Create a balanced timetable covering all sections, with additional focus on challenging areas through our personalized study plans."
        },
        {
          title: "Regular Assessment through Mock Tests",
          description: "Participate in our comprehensive mock tests that simulate actual exam conditions, helping you evaluate progress and refine time management skills."
        },
        {
          title: "Stay Current with Legal Developments",
          description: "Follow our current affairs digest to remain updated on relevant legal and general developments crucial for the examination."
        },
        {
          title: "Develop Effective Time Management",
          description: "Master time allocation techniques through our specialized workshops, particularly beneficial for quantitative and logical reasoning sections."
        },
        {
          title: "Learn from Expert Mentors",
          description: "Benefit from our experienced faculty who provide structured guidance, proven strategies, and premium study resources."
        }
      ]
    },
    whyWeStandApart: {
      title: "Why CLATians Stands Apart",
      intro: "Our success record speaks volumes about our coaching excellence:",
      points: [
        {
          title: "Expert Legal Faculty",
          description: "Instruction from practicing lawyers and CLAT toppers who provide insider perspectives on exam strategies."
        },
        {
          title: "Comprehensive Study Resources",
          description: "Access to meticulously crafted study materials covering all CLAT topics with practice questions."
        },
        {
          title: "Rigorous Testing System",
          description: "Regular practice tests designed to mirror actual examination conditions."
        },
        {
          title: "Proven Success Rate",
          description: "Consistent record of students securing top ranks and admissions to premier NLUs."
        }
      ]
    },
    learningOptions: {
      title: "Flexible Learning Options at CLATians",
      headers: ["Program Type", "Ideal For", "Key Features"],
      data: [
        {
          type: "Regular Classroom Program",
          idealFor: "Full-time aspirants",
          features: "Daily interactive sessions, comprehensive coverage, continuous doubt resolution, regular assessment"
        },
        {
          type: "Weekend Intensive Program",
          idealFor: "Working professionals & school students",
          features: "Concentrated weekend sessions, focused topic coverage, specialized practice materials"
        },
        {
          type: "Accelerated Revision Course",
          idealFor: "Late starters & final preparation",
          features: "Rapid syllabus review, strategic shortcuts, intensive mock testing, personalized feedback"
        },
        {
          type: "Digital Learning Platform",
          idealFor: "Remote learners & flexibility seekers",
          features: "Live online classes, recorded sessions, virtual doubt clearing, digital practice resources"
        }
      ]
    },
    feeStructure: {
      title: "Affordable Excellence: Fee Structure",
      description: "CLATians offers competitive pricing for all coaching programs with flexible payment options. Our merit scholarships make quality CLAT coaching accessible to deserving students."
    },
    successStories: {
      title: "Success Stories: From CLATians to NLUs",
      stories: [
        {
          name: "Aryan Sharma",
          institution: "NLSIU Bangalore",
          testimonial: "CLATians' structured approach and mock test series were instrumental in my securing a seat at NLSIU Bangalore."
        },
        {
          name: "Priya Mehta",
          institution: "CLAT Topper",
          testimonial: "The personalized attention and current affairs focus at CLATians helped me excel in the CLAT examination."
        }
      ]
    },
    faqs: {
      title: "Common Questions About CLAT Preparation",
      questions: [
        {
          question: "When should I ideally begin CLAT preparation?",
          answer: "We recommend 8-12 months of dedicated preparation. However, our accelerated programs can accommodate shorter timeframes."
        },
        {
          question: "Is online CLAT coaching effective?",
          answer: "Absolutely! Our digital learning platform provides comprehensive preparation with live classes, recorded sessions, and interactive doubt-clearing."
        },
        {
          question: "How can I improve my CLAT performance?",
          answer: "Regular practice with our mock tests, consistent current affairs updates, and focused improvement in weak areas through our targeted modules."
        },
        {
          question: "Are scholarship opportunities available?",
          answer: "Yes, we offer merit-based scholarships to deserving candidates. Contact our admissions team for details."
        }
      ]
    },
    cta: {
      title: "Begin Your CLAT Journey with CLATians Today",
      description: "Ready to transform your law school aspirations into reality? Join CLATians and experience the difference that expert coaching makes.",
      primaryButton: "Contact Our Counselors",
      secondaryButton: "Enroll Now"
    },
    footer: "CLATians: Building Legal Minds, Creating Future Leaders"
  }

// PropTypes for validation

export default function CoursesPage() {
  const pathName = usePathname();
  const index = pathName.split('/')[3];
  //console.log(data[index].courses)
  return (
    <main className="min-h-screen bg-[#e7edff]">
      <CoursesHero exam={{
          examName : data[index].examName,
          examDescription : data[index].description
      }}/>
      <CourseCategories />
      <CoursesList courseData={data[index].courses} examName={data[index].examName} batchType={"Online"}/>
      <LawEntranceExams examData={examData}/>
      <FAQ faqs={faqs}/>
    </main>
  )
}
