
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
      batchType : "offline",
      batchFeatures : [
        {
          icon: "bi-calendar-event",
          title: "Duration:",
          content: "From Admission – CLAT 2026 Exam"
        },
        {
          icon: "bi-star",
          title: "Batch Strategy:",
          content: "Syllabus → Practice Session → Mock Test Series"
        },
        {
          icon: "bi-laptop",
          title: "Online Resources Access",
          content: ""
        },
        {
          icon: "bi-journal-text",
          title: "Monthly Magazine",
          content: "Current Affairs & Legal Affairs"
        },
        // Hidden features that show on expansion
        {
          icon: "bi-book",
          title: "Study Material",
          content: "Comprehensive study materials, DPDs & more"
        },
        {
          icon: "bi-person-video3",
          title: "Live Classes",
          content: "Interactive sessions with expert faculty"
        },
        {
          icon: "bi-question-circle",
          title: "Doubt Resolution",
          content: "Special Doubt Session (Online)"
        },
        {
          icon: "bi-graph-up",
          title: "Performance Tracking",
          content: "Regular progress monitoring and analysis"
        }
      ],
      price: "₹9,999",
      "proBatch": [
        "Live Lectures and Recorded Videos",
        "Online Resource Access",
        "Practice Modules, Notes & DPD",
        "CLATians CA CODE",
        "Sectional & Topic-wise Test",
        "Online Mock Test Series",
        "CLAT Question Banks"
  ],
  "simple": [
    "Live Lectures",
    "Notes & DPD",
    "CLATians CA CODE",
    "Sectional & Topic-wise Test",
    "Online Mock Test Series",
    "CLAT Question Banks"
  ],
  proPrice: "₹15,000",
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
      batchFeatures : [
        {
          icon: "bi-calendar-event",
          title: "Duration:",
          content: "From Admission – CLAT 2026 Exam"
        },
        {
          icon: "bi-star",
          title: "Batch Strategy:",
          content: "Syllabus → Practice Session → Mock Test Series"
        },
        {
          icon: "bi-laptop",
          title: "Online Resources Access",
          content: ""
        },
        {
          icon: "bi-journal-text",
          title: "Monthly Magazine",
          content: "Current Affairs & Legal Affairs"
        },
        // Hidden features that show on expansion
        {
          icon: "bi-book",
          title: "Study Material",
          content: "Comprehensive study materials, DPDs & more"
        },
        {
          icon: "bi-person-video3",
          title: "Live Classes",
          content: "Interactive sessions with expert faculty"
        },
        {
          icon: "bi-question-circle",
          title: "Doubt Resolution",
          content: "Special Doubt Session (Online)"
        },
        {
          icon: "bi-graph-up",
          title: "Performance Tracking",
          content: "Regular progress monitoring and analysis"
        }
      ],
      price: "₹9,999",
      "proBatch": [
        "Live Lectures and Recorded Videos",
        "Online Resource Access",
        "Practice Modules, Notes & DPD",
        "CLATians CA CODE",
        "Sectional & Topic-wise Test",
        "Online Mock Test Series",
        "CLAT Question Banks"
  ],
  "simple": [
    "Live Lectures",
    "Notes & DPD",
    "CLATians CA CODE",
    "Sectional & Topic-wise Test",
    "Online Mock Test Series",
    "CLAT Question Banks"
  ],
  proPrice: "₹15,000",
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
      batchFeatures : [
        {
          icon: "bi-calendar-event",
          title: "Duration:",
          content: "From Admission – CLAT 2026 Exam"
        },
        {
          icon: "bi-star",
          title: "Batch Strategy:",
          content: "Syllabus → Practice Session → Mock Test Series"
        },
        {
          icon: "bi-laptop",
          title: "Online Resources Access",
          content: ""
        },
        {
          icon: "bi-journal-text",
          title: "Monthly Magazine",
          content: "Current Affairs & Legal Affairs"
        },
        // Hidden features that show on expansion
        {
          icon: "bi-book",
          title: "Study Material",
          content: "Comprehensive study materials, DPDs & more"
        },
        {
          icon: "bi-person-video3",
          title: "Live Classes",
          content: "Interactive sessions with expert faculty"
        },
        {
          icon: "bi-question-circle",
          title: "Doubt Resolution",
          content: "Special Doubt Session (Online)"
        },
        {
          icon: "bi-graph-up",
          title: "Performance Tracking",
          content: "Regular progress monitoring and analysis"
        }
      ],
      price: "₹9,999",
      "proBatch": [
        "Live Lectures and Recorded Videos",
        "Online Resource Access",
        "Practice Modules, Notes & DPD",
        "CLATians CA CODE",
        "Sectional & Topic-wise Test",
        "Online Mock Test Series",
        "CLAT Question Banks"
  ],
  "simple": [
    "Live Lectures",
    "Notes & DPD",
    "CLATians CA CODE",
    "Sectional & Topic-wise Test",
    "Online Mock Test Series",
    "CLAT Question Banks"
  ],
  proPrice: "₹15,000",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },,{
      id: 4,
      parentInd : 0,
      title: "Foundation CLAT-2026",
      tag: "CLAT",
      badges: ["NEW", "Hinglish"],
      batchType : "offline",
      batchFeatures : [
        {
          icon: "bi-calendar-event",
          title: "Duration:",
          content: "From Admission – CLAT 2026 Exam"
        },
        {
          icon: "bi-star",
          title: "Batch Strategy:",
          content: "Syllabus → Practice Session → Mock Test Series"
        },
        {
          icon: "bi-laptop",
          title: "Online Resources Access",
          content: ""
        },
        {
          icon: "bi-journal-text",
          title: "Monthly Magazine",
          content: "Current Affairs & Legal Affairs"
        },
        // Hidden features that show on expansion
        {
          icon: "bi-book",
          title: "Study Material",
          content: "Comprehensive study materials, DPDs & more"
        },
        {
          icon: "bi-person-video3",
          title: "Live Classes",
          content: "Interactive sessions with expert faculty"
        },
        {
          icon: "bi-question-circle",
          title: "Doubt Resolution",
          content: "Special Doubt Session (Online)"
        },
        {
          icon: "bi-graph-up",
          title: "Performance Tracking",
          content: "Regular progress monitoring and analysis"
        }
      ],
      price: "₹9,999",
      "proBatch": [
        "Live Lectures and Recorded Videos",
        "Online Resource Access",
        "Practice Modules, Notes & DPD",
        "CLATians CA CODE",
        "Sectional & Topic-wise Test",
        "Online Mock Test Series",
        "CLAT Question Banks"
  ],
  "simple": [
    "Live Lectures",
    "Notes & DPD",
    "CLATians CA CODE",
    "Sectional & Topic-wise Test",
    "Online Mock Test Series",
    "CLAT Question Banks"
  ],
  proPrice: "₹15,000",
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    }
  ],
  "details":[
    <p>Are you searching for the best offline <strong>CLAT</strong> coaching institute to ace the <strong>Common Law Admission Test (CLAT)</strong>? Look no further! <strong>CLATians</strong>, India’s leading <strong>CLAT</strong> preparation institute, offers expert-led classroom training designed for top <strong>NLU</strong> admissions.</p>  ,

<p>With personalized mentorship, structured study material, and real-time mock tests, our <strong>Offline CLAT Course</strong> ensures focused, interactive learning to maximize your success.</p>  ,

<p>Get hands-on guidance from experienced faculty and <strong>CLAT</strong> toppers, master the <strong>CLAT</strong> syllabus with in-depth coverage, and stay ahead with our exam-oriented approach.</p>  ,

<p>Enroll in the <strong>Best Offline CLAT Course</strong> today & start your journey to <strong>NLU</strong> success!</p>

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
  ],
  "details":[
    <p>Looking for the best offline coaching for <strong>CLAT & AILET</strong> to secure admission in top <strong>NLUs</strong> and <strong>NLUD</strong>? <strong>CLATians</strong>, India’s premier law entrance coaching institute, offers expert-led classroom training designed to help you excel in the <strong>Common Law Admission Test (CLAT)</strong> and the <strong>All India Law Entrance Test (AILET)</strong>.</p>,  

<p>Our <strong>Offline CLAT & AILET Coaching</strong> provides personalized mentorship, interactive learning, structured study material, and real-time mock tests to ensure exam-focused preparation.</p> , 

<p>With one-on-one guidance, doubt-solving sessions, and a competitive classroom environment, we help you boost your accuracy, speed, and confidence to achieve your dream of getting into top <strong>National Law Universities (NLUs)</strong> and <strong>NLUD</strong>.</p>

  ]
  },
  {
    "examName": "CUET-LAW",
    "description": "Students preparing for CUET-LAW (UG) can enroll in our expert-guided online coaching, which includes study resources, crash courses, and test series.",
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
  ],
  "details" :[
    <p>Are you determined to excel in the <strong>Common University Entrance Test for Law (CUET-LAW)</strong>? Experience unparalleled preparation with <strong>CLATians'</strong> specialized offline batches—where legal aspirations meet excellence.</p> , 

<p>Our tailored programs address the unique requirements for both undergraduate and postgraduate law aspirants, ensuring targeted preparation for your specific exam pattern.</p> , 

<p>Join hundreds of successful <strong>CLATians</strong> who secured admissions in prestigious <strong>Central and State Universities</strong> through <strong>CUET-LAW</strong>.</p>  ,

<p>Enroll today to reserve your spot in India’s most result-oriented <strong>CUET-LAW</strong> offline coaching program.</p>

  ]
  },
  {
    "examName": "CLAT+OLET",
    "description": "Join our online coaching for OLET(CUET-LAW + AIL-LET + MH-CET) and get structured guidance with expert-curated courses and test series.",
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
  ],
  "details" :[
    <p>Our <strong>Offline CLAT & OLET (Other Law Entrance Test) Course</strong> is designed for aspirants who prefer in-person learning with personalized attention. Get expert guidance from our experienced mentors, who bring years of expertise in preparing students for <strong>CLAT, AILET, CUET-LAW, LSAT, MH-CET-LAW,</strong> and <strong>AIL Entrance Exams</strong>.</p>  ,

<p>At <strong>CLATians</strong>, we believe in quality over quantity. With our <strong>Offline CLAT Coaching</strong>, we focus on your unique strengths and weaknesses, providing a tailored study plan to help you succeed in competitive law exams like <strong>CLAT, AILET, CUET-LAW, MH-CET-LAW,</strong> and more.</p>

  ]
  },
{
    "examName": "OLET(Other Law Entrance Test)",
    "description": "Candidates preparing for the OLET(CUET-LAW + AIL-LET + MH-CET) 2025-2026 can enroll in our online coaching provided by Clatians at the most reasonable rates. We offer proper guidance, resources, and mock test series to help students prepare effectively.",
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
  ],
    "details":[<p>At <strong>CLATians</strong>, we understand the challenges of cracking <strong>AILET, CUET-LAW, MH-CET-LAW, LSAT,</strong> and <strong>AIL Entrance Exam</strong>. Our <strong>Offline OLET Coaching</strong> is designed to provide you with an immersive, results-driven approach to help you achieve your law school dreams.</p>  ,

<p><strong>Maximize Your Chances of Success</strong> – Our expert mentors will guide you through each step of your <strong>OLET</strong> preparation journey, ensuring that you are fully prepared to take on any challenge during your exam. With a strategic approach and a focus on exam-relevant content, <strong>CLATians</strong> helps you gain the confidence and knowledge needed to secure a seat in the top law universities.</p>  ,

<p><strong>Join Our Offline OLET Coaching Today!</strong> Take advantage of our personalized coaching, interactive learning environment, and proven study strategies to succeed in <strong>AILET, CUET-LAW, MH-CET-LAW, LSAT,</strong> and <strong>AIL Entrance Exam</strong>. Enroll today and start your path to success!</p>
]
  }
]
export default function CourseDetailsPage() {
  const {parentId, id} = useParams();
  return (
    <>
        <CourseDetails courseData={data[parseInt(parentId)].courses[parseInt(id)]} details={data[parseInt(parentId)].details}/>
    </>
  )
}
