
'use client'
import CourseDetails from "@/components/courses/CourseDetails"
import { useParams } from "next/navigation"
const data = [
  {
    "examName": "CLAT Entrance Exam",
    "description": "Candidates preparing for the CLAT 2025-2026 can enroll in our online coaching provided by Clatians at the most reasonable rates. We offer proper guidance, resources, and mock test series to help students prepare effectively.",
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
  ],
  "details" : [
    <p>Looking for the <strong>best online CLAT coaching</strong> to ace the <strong>Common Law Admission Test (CLAT)</strong>? Join <strong>CLATians</strong>, India&apos;s leading <strong>CLAT preparation platform</strong></p>,
    <p>We offer <strong>live interactive classes, expert mentorship, structured study material, and real-time mock tests</strong>.</p>,
    <p>Our <strong>Online CLAT Course</strong> ensures <strong>flexible learning, AI-driven performance analysis, and 24/7 access to study resources.</strong></p>,
    <p>Secure a seat in the top <strong>NLUs (National Law Universities)</strong> from the comfort of your home with CLATians</p>,
  ]
  },
  {
    "examName": "CLAT + AILET",
    "description": "Prepare for CLAT and AILET 2025-2026 with our comprehensive online coaching. Get access to advanced study material, test series, and expert guidance.",
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
  ],
  "details" : [<p>1. Looking for the best online <strong>CLAT & AILET</strong> coaching to ace the <strong>Common Law Admission Test (CLAT)</strong> and <strong>All India LawEntrance Test (AILET)</strong>? Join <strong>CLATians</strong>, India's leading online law entrance preparation platform.</p>  ,
              <p>We offer live interactive classes, expert mentorship, structured study material, and real-time mock tests.</p>  ,
              <p>3. Our Online <strong>CLAT & AILET Course</strong> ensures flexible learning, personalized doubt-solving sessions, and exam-focused preparation.</p>  ,

              <p>4. Secure admission in top <strong>National Law Universities (NLUs)</strong> and <strong>NLU Delhi</strong> with <strong>CLATians</strong>.</p>]

  },
  {
    "examName": "CUET-LAW (UG)",
    "description": "Students preparing for CUET-LAW (UG) can enroll in our expert-guided online coaching, which includes study resources, crash courses, and test series.",
    "courses": [
    {
      id: 1,
      parentInd : 2,
      title: "Target CUET-LAW(UG) 2026",
      tag: "CLAT + AILET",
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
      tag: "CLAT + AILET",
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
    },
    {
      id: 4,
      parentInd : 2,
      title: "Mock test series",
      tag: "CLAT + AILET",
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
  ],
  "details" : [
    <p>1. Looking for the best online <strong>CUET-LAW (UG)</strong> coaching to secure admission in top central universities? Join <strong>CLATians</strong>, India&apos;s leading <strong>CUET Law</strong> preparation institute.</p>,

<p>2. We offer live interactive classes, expert mentorship, structured study material, and real-time mock tests.</p>,

<p>3. Our Online <strong>CUET-LAW (UG) Course</strong> provides flexible learning, personalized attention, and exam-focused preparation.</p>,

<p>4. Excel in the <strong>CUET-LAW (UG)</strong> entrance exam and secure a seat in prestigious law programs at central universities with <strong>CLATians</strong>.</p>

  ]
  },
  {
    "examName": "CUET-LAW (PG)",
    "description": "Enroll in CUET-LAW (PG) coaching and get the best preparation resources, including advanced courses and mock test series.",
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
  ],
  "details" :[
    <p>Looking for the best online <strong>CUET-LAW (PG)</strong> coaching to excel in the <strong>Common University Entrance Test for Law (PG)</strong>? Join <strong>CLATians</strong>, India&apos;s leading <strong>CUET-LAW (PG)</strong> preparation institute.</p>, 

<p>We offer live interactive classes, expert mentorship, structured study material, and real-time mock tests.</p>,

<p>Our Online <strong>CUET-LAW (PG) Course</strong> ensures personalized guidance, flexible learning, and exam-focused preparation.</p> , 

<p>Secure admission to top central universities and law schools with <strong>CLATians</strong>.</p>

  ]
  },
  {
    "examName": "AIL-LET",
    "description": "Join our online coaching for AIL-LET and get structured guidance with expert-curated courses and test series.",
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
  ],"details" : [
      <p>Looking for the best online coaching for <strong>AIL-LET</strong> to secure admission to the <strong>Army Institute of Law (AIL), Mohali</strong>? Join <strong>CLATians</strong>, India&apos;s leading <strong>AIL-LET</strong> preparation institute.</p>,

<p>We offer live interactive classes, expert mentorship, structured study material, and real-time mock tests.</p>,  

<p>Our <strong>AIL-LET Online Batch</strong> ensures personalized guidance, flexible learning, and strategic preparation.</p>,  

<p>Ace the <strong>AIL Law Entrance Test (AIL-LET)</strong> and secure your dream seat with <strong>CLATians</strong>.</p>

  ]
  },
  {
    "examName": "Booster Courses",
    "description": "Specialized booster courses to strengthen core subjects in law exams, including Legal Reasoning, English, Logical Reasoning, Current Affairs, and Math.",
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
    ],
    "details" : [
    <p>Struggling with a specific section of the <strong>Common Law Admission Test (CLAT)</strong>? Strengthen your weak areas with <strong>CLATians Online BOOSTER Batches
    </strong>, designed to provide in-depth, subject-wise coaching for <strong>Legal Reasoning, English, Logical Reasoning, Current Affairs,</strong> and <strong>Math</strong>.
    </p> , 
      <p>Our expert-led online classes, exam-focused study material, and real-time mock tests ensure you master each section and boost your overall <strong>CLAT</strong> score.</p>,
  ]
  },
  
]
export default function CourseDetailsPage() {
  const {parentId, id} = useParams();
  return (
    <>
        <CourseDetails courseData={data[parseInt(parentId)].courses[parseInt(id)]} details={data[parseInt(parentId)].details}/>
    </>
  )
}
