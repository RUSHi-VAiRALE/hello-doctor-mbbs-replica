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
    {
      id: 4,
      parentInd : 0,
      title: "Mock test series",
      tag: "CLAT",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      batchType : "online",
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
    {
      id: 4,
      parentInd : 1,
      title: "Mock test series",
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
    }
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
    {
      id: 4,
      parentInd : 2,
      title: "Mock test series",
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
    }
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
    {
      id: 4,
      parentInd : 3,
      title: "Mock test series",
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
    }
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
    {
      id: 4,
      parentInd : 4,
      title: "Mock test series",
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
    }
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
      <LawEntranceExams />
      <FAQ faqs={faqs}/>
    </main>
  )
}
