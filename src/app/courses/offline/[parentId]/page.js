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
    "description": "Are you searching for the best offline CLAT coaching institute to ace the Common Law Admission Test (CLAT)? Look no further! CLATians, India’s leading CLAT preparation institute, offers expert-led classroom training designed for top NLU admissions.With personalized mentorship, structured study material, and real-time mock tests, our Offline CLAT Course ensures focused, interactive learning to maximize your success. Get hands-on guidance from experienced faculty and CLAT toppers, master the CLAT syllabus with in-depth coverage, and stay ahead with our exam-oriented approach.Enroll in the Best Offline CLAT Course Today & Start Your Journey to NLU Success!",
    "courses": [
    {
      id: 1,
      parentInd : 0,
      title: "Target CLAT-2026",
      tag: "CLAT",
      batchType : "offline",
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
      batchType : "offline",
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
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
      batchType : "offline",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
    {
      id: 4,
      parentInd : 0,
      title: "Mock test series",
      tag: "CLAT",
      batchType : "offline",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 5,
      parentInd : 0,
      title: "Foundation CLAT-2026",
      tag: "CLAT",
      badges: ["NEW", "Hinglish"],
      batchType : "offline",
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    }
  ]
  },
  {
    "examName": "CLAT + AILET",
    "description": "Looking for the best offline coaching for CLAT & AILET to secure admission in top NLUs and NLUD? CLATians, India’s premier law entrance coaching institute, offers expert-led classroom training designed to help you excel in the Common Law Admission Test (CLAT) and the All India Law Entrance Test (AILET).Our Offline CLAT & AILET Coaching provides personalized mentorship, interactive learning, structured study material, and real-time mock tests to ensure exam-focused preparation. With one-on-one guidance, doubt-solving sessions, and a competitive classroom environment, we help you boost your accuracy, speed, and confidence to achieve your dream of getting into top National Law Universities (NLUs) and NLUD.",
    "courses": [
    {
      id: 1,
      parentInd : 1,
      title: "Target CLAT + AILET 2026",
      tag: "CLAT + AILET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "offline",
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
      endDate: "31 Dec, 2025",
      batchType : "offline",
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
      startDate: "13 Jan, 2025",
      batchType : "offline",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
    {
      id: 4,
      parentInd : 1,
      title: "Mock test series",
      tag: "CLAT + AILET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "offline",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
    {
      id: 5,
      parentInd : 1,
      title: "Foundation CLAT + AILET 2026",
      tag: "CLAT + AILET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      batchType : "offline",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    }
  ]
  },
  {
    "examName": "CUET-LAW",
    "description": "Are you determined to excel in the Common University Entrance Test for Law (CUET-LAW)? Experience unparalleled preparation with CLATians' specialized offline batches—where legal aspirations meet excellence.Our tailored programs address the unique requirements for both undergraduate and postgraduate law aspirants, ensuring targeted preparation for your specific exam pattern.Join hundreds of successful CLATians who secured admissions in prestigious Central and State Universities through CUET-LAW. Enroll today to reserve your spot in India's most result-oriented CUET-LAW offline coaching program.",
    "courses": [
    {
      id: 1,
      parentInd : 2,
      title: "Target CUET-LAW 2026",
      tag: "CUET-LAW",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "offline",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 2,
      parentInd : 2,
      title: "Advanced Crash Courses",
      tag: "CUET-LAW",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      batchType : "offline",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 3,
      parentInd : 2,
      title: "Crash Course",
      tag: "CUET-LAW",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      batchType : "offline",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
    {
      id: 4,
      parentInd : 2,
      title: "Mock test series",
      tag: "CUET-LAW",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      batchType : "offline",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    }
  ]
  },
  {
    "examName": "CLAT+OLET",
    "description": "Our Offline CLAT & OLET (Other Law Entrance Test) Course is designed for aspirants who prefer in-person learning with personalized attention. Get expert guidance from our experienced mentors, who bring years of expertise in preparing students for CLAT, AILET, CUET-LAW, LSAT, MH-CET-LAW, and AIL Entrance Exams.At CLATians, we believe in quality over quantity. With our Offline CLAT Coaching, we focus on your unique strengths and weaknesses, providing a tailored study plan to help you succeed in competitive law exams like CLAT, AILET, CUET-LAW, MH-CET-LAW, and more.",
    "courses": [
    {
      id: 1,
      parentInd : 3,
      title: "Target OLET 2026",
      tag: "CLAT+OLET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "offline",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 2,
      parentInd : 3,
      title: "Advanced Crash Courses",
      tag: "CLAT+OLET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "offline",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 3,
      parentInd : 3,
      title: "Crash Course",
      tag: "CLAT+OLET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "offline",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
    {
      id: 4,
      parentInd : 3,
      title: "Mock test series",
      tag: "CLAT+OLET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "offline",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    }
  ]
  },
{
    "examName": "OLET (Other Law Entrance Test)",
    "description": "At CLATians, we understand the challenges of cracking AILET, CUET-LAW, MH-CET-LAW, LSAT and AIL Entrance Exam. Our Offline OLET Coaching is designed to provide you with an immersive, results-driven approach to help you achieve your law school dreams.Maximize Your Chances of Success Our expert mentors will guide you through each step of your OLET preparation journey, ensuring that you are fully prepared to take on any challenge during your exam. With a strategic approach and a focus on exam-relevant content, CLATians helps you gain the confidence and knowledge needed to secure a seat in the top law universities.Join Our Offline OLET Coaching Today! Take advantage of our personalized coaching, interactive learning environment, and proven study strategies to succeed in AILET, CUET-LAW, MH-CET-LAW, LSAT and AIL Entrance Exam. Enroll today and start your path to success!",
    "courses": [
    {
      id: 1,
      parentInd : 4,
      title: "Target OLET(CUET-LAW + AIL-LET + MH-CET) 2026",
      tag: "OLET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      batchType : "offline",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 2,
      parentInd : 4,
      title: "Advanced Crash Courses",
      tag: "OLET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      batchType : "offline",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 3,
      parentInd : 4,
      title: "Crash Course",
      tag: "OLET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      batchType : "offline",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
    {
      id: 4,
      parentInd : 4,
      title: "Mock test series",
      tag: "OLET",
      badges: ["NEW", "Hinglish"],
      batchType : "offline",
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 5,
      parentInd : 4,
      title: "Foundation CLAT+OLET 2026",
      tag: "OLET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      batchType : "offline",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
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
      <CoursesList courseData={data[index].courses} examName={data[index].examName} batchType={"Offline"}/>
      <LawEntranceExams examData={examData}/>
      <FAQ faqs={faqs}/>
    </main>
  )
}
