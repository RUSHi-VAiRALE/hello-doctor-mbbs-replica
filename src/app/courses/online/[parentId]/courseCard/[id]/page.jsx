
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
      description:"The Target Batch for CLAT-2026 prepares students with expert guidance, focusing on legal reasoning, logical reasoning, current affairs, and English to excel in the CLAT exam and secure admission to top NLUs.",
      tag: "CLAT",
      batchType : "online",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
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
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 2,
      parentInd : 0,
      title: "Advanced Crash Courses",
      description:"The Advance Crash Course for CLAT-2026 provides intensive, fast-paced coaching designed to enhance last-minute preparation, helping students boost their performance and increase their chances of securing admission to top NLUs.",
      tag: "CLAT",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      batchType : "online",batchFeatures : [
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
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 3,
      parentInd : 0,
      title: "Crash Course",
      description:"The CRASH Course Batch for CLAT-2026 delivers concentrated, result-oriented coaching to help students quickly improve their skills, boost performance, and enhance their chances of securing admission to top NLUs.",
      tag: "CLAT",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",batchFeatures : [
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
      batchType : "online",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
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
      description:"The Target Batch for CLAT + AILET 2026 prepares students with expert guidance, focusing on legal reasoning, logical reasoning, current affairs, and English to excel in both CLAT and AILET exams and secure admission to top NLUs.",
      tag: "CLAT + AILET",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      batchType : "online",
      endDate: "31 Dec, 2025",
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
  originalPrice: "₹21,000",
  features: "Premium Features Included",
      
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 2,
      parentInd : 1,
      title: "Advanced Crash Courses",
      description:"The Advanced Crash Course for CLAT + AILET 2026 provides intensive, fast-paced coaching designed to enhance last-minute preparation, helping students boost their performance and increase their chances of securing admission to top NLUs.",
      tag: "CLAT + AILET",
      badges: ["NEW", "Hinglish"],
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
      startDate: "13 Jan, 2025",
      batchType : "online",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹10,000",
      proPrice: "₹15,000",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
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
      ]
    },{
      id: 3,
      parentInd : 1,
      title: "Crash Course",
      description:"The Crash Course for CLAT + AILET 2026 delivers concentrated, result-oriented coaching to help students quickly improve their skills, boost performance, and enhance their chances of securing admission to top NLUs.",
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
  ],
  "details" : [
    <p>Comprehensive Preparation Method & Syllabus Coverage of <strong>CLAT 2026</strong>.</p>,
    <p>Preparation Strategy Guide for Students: with a detailed & structured approach that will maximize your chances of success. This comprehensive plan divides your journey into three phases, each with specific goals and activities.</p>,
    <p>Well Qualified & Cooperative Faculties.</p>,
    <p><strong>5000+ Questions Practice</strong> with Solutions.</p>,
    <p>More than <strong>100 Comprehensive Tests</strong> with Solutions.</p>,
    <p>Monthly Magazines (including <strong>Current Affairs & Legal Reasoning</strong>).</p>,
    <p>Total <strong>100+ Daily Practice Drills (DPDs)</strong> with detailed solutions.</p>,
    <p>Our <strong>Adv Crash Course Pro</strong> for CLAT batch offers <strong>Special 1-1 Interaction</strong> to provide personalized coaching, targeted strategy, and expert guidance, ensuring optimized preparation and better results for your CLAT exam success.</p>,
    <p>The <strong>Personal Mentorship</strong> feature: one-on-one guidance from expert mentors. Tailored to individual needs, this personalized support helps students enhance their strengths, address weaknesses, and stay focused on their CLAT preparation. With regular progress reviews and customized strategies, students are equipped to excel in the CLAT exam and secure top <strong>NLU admissions</strong>.</p>,
    <p>Our <strong>Performance Analysis</strong> feature in this batch includes offline tests and detailed report cards to pinpoint weak areas. This helps students focus on improvement, enhancing skills in <strong>legal aptitude, reasoning, and general knowledge</strong>, ensuring steady progress and better chances of excelling in the CLAT exam and securing top <strong>NLU admissions</strong>.</p>,
    <p>Our <strong>Bilingual Teaching</strong> feature ensures that classes are taught in <strong>Hinglish (Hindi & English)</strong>, making complex concepts easier to understand. This approach helps students grasp key topics more effectively, improving their CLAT preparation and boosting their chances of securing top <strong>NLUs</strong>.</p>,
    <p>For any queries & concerns, please reach out to us on <strong>8507700177</strong>.</p>,
    <p><strong>Non-Refundable Fees:</strong> Fees for study materials, tax, and registration are not refundable.</p>,
    <p>The registration fee is included in the price of the batch shown on the website. The breakup of the registration fee will be mentioned on the invoice. The exact details might change from one batch to another.</p>,
    <p><strong>T&C Applicable</strong>.</p>
  ]
  

  },
  {
    "examName": "CUET-LAW (UG)",
    "description": "Students preparing for CUET-LAW (UG) can enroll in our expert-guided online coaching, which includes study resources, crash courses, and test series.",
    "courses": [
    {
      id: 1,
      parentInd : 2,
      title: "Target CUET-LAW(UG) 2026",
      description:"The Target Batch for CUET-LAW(UG) 2026 prepares students with expert guidance, focusing on legal reasoning, logical reasoning, current affairs, and English to excel in the CUET-LAW(UG) exam and secure admission to top NLUs.",
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
      description:"The Advanced Crash Course for CUET-LAW(UG) 2026 provides intensive, fast-paced coaching designed to enhance last-minute preparation, helping students boost their performance and increase their chances of securing admission to top NLUs.",
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
      description:"The Crash Course for CUET-LAW(UG) 2026 delivers concentrated, result-oriented coaching to help students quickly improve their skills, boost performance, and enhance their chances of securing admission to top NLUs.",
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
      description:"The Target Batch for CUET-LAW(PG) 2026 prepares students with expert guidance, focusing on legal reasoning, logical reasoning, current affairs, and English to excel in the CUET-LAW(PG) exam and secure admission to top NLUs.",
      tag: "CUET-LAW (PG)",
      badges: ["NEW", "Hinglish"],

      batchType : "online",
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹10,000",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 2,
      parentInd : 3,
      title: "Advanced Crash Courses",
      description:"The Advanced Crash Course for CUET-LAW(PG) 2026 provides intensive, fast-paced coaching designed to enhance last-minute preparation, helping students boost their performance and increase their chances of securing admission to top NLUs.",
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
      description:"The Crash Course for CUET-LAW(PG) 2026 delivers concentrated, result-oriented coaching to help students quickly improve their skills, boost performance, and enhance their chances of securing admission to top NLUs.",
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
  ],
  "details" :[
    [
      <p>Comprehensive Preparation Method & Syllabus Coverage of <strong>CLAT 2026</strong>.</p>,
      <p>Preparation Strategy Guide for Students: with a detailed & structured approach that will maximize your chances of success. This comprehensive plan divides your journey into three phases, each with specific goals and activities.</p>,
      <p>Well Qualified & Cooperative Faculties.</p>,
      <p><strong>5000+ Questions Practice</strong> with Solutions.</p>,
      <p>More than <strong>100 Comprehensive Tests</strong> with Solutions.</p>,
      <p>Monthly Magazines (including <strong>Current Affairs & Legal Reasoning</strong>).</p>,
      <p>Total <strong>100+ Daily Practice Drills (DPDs)</strong> with detailed solutions.</p>,
      <p>Our <strong>Adv Crash Course Pro</strong> for CLAT batch offers <strong>Special 1-1 Interaction</strong> to provide personalized coaching, targeted strategy, and expert guidance, ensuring optimized preparation and better results for your CLAT exam success.</p>,
      <p>The <strong>Personal Mentorship</strong> feature: one-on-one guidance from expert mentors. Tailored to individual needs, this personalized support helps students enhance their strengths, address weaknesses, and stay focused on their CLAT preparation. With regular progress reviews and customized strategies, students are equipped to excel in the CLAT exam and secure top <strong>NLU admissions</strong>.</p>,
      <p>Our <strong>Performance Analysis</strong> feature in this batch includes offline tests and detailed report cards to pinpoint weak areas. This helps students focus on improvement, enhancing skills in <strong>legal aptitude, reasoning, and general knowledge</strong>, ensuring steady progress and better chances of excelling in the CLAT exam and securing top <strong>NLU admissions</strong>.</p>,
      <p>Our <strong>Bilingual Teaching</strong> feature ensures that classes are taught in <strong>Hinglish (Hindi & English)</strong>, making complex concepts easier to understand. This approach helps students grasp key topics more effectively, improving their CLAT preparation and boosting their chances of securing top <strong>NLUs</strong>.</p>,
      <p>For any queries & concerns, please reach out to us on <strong>8507700177</strong>.</p>,
      <p><strong>Non-Refundable Fees:</strong> Fees for study materials, tax, and registration are not refundable.</p>,
      <p>The registration fee is included in the price of the batch shown on the website. The breakup of the registration fee will be mentioned on the invoice. The exact details might change from one batch to another.</p>,
      <p><strong>T&C Applicable</strong>.</p>
    ]
    

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
      description:"The Target Batch for AIL-LET 2026 prepares students with expert guidance, focusing on legal reasoning, logical reasoning, current affairs, and English to excel in the AIL-LET exam and secure admission to top NLUs.",
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
      description:"The Advanced Crash Course for AIL-LET 2026 provides intensive, fast-paced coaching designed to enhance last-minute preparation, helping students boost their performance and increase their chances of securing admission to top NLUs.",
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
      description:"The Crash Course for AIL-LET 2026 delivers concentrated, result-oriented coaching to help students quickly improve their skills, boost performance, and enhance their chances of securing admission to top NLUs.",
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
  ],"details" : [
    <p>Comprehensive Preparation Method & Syllabus Coverage of <strong>CLAT 2026</strong>.</p>,
    <p>Preparation Strategy Guide for Students: with a detailed & structured approach that will maximize your chances of success. This comprehensive plan divides your journey into three phases, each with specific goals and activities.</p>,
    <p>Well Qualified & Cooperative Faculties.</p>,
    <p><strong>5000+ Questions Practice</strong> with Solutions.</p>,
    <p>More than <strong>100 Comprehensive Tests</strong> with Solutions.</p>,
    <p>Monthly Magazines (including <strong>Current Affairs & Legal Reasoning</strong>).</p>,
    <p>Total <strong>100+ Daily Practice Drills (DPDs)</strong> with detailed solutions.</p>,
    <p>Our <strong>Adv Crash Course Pro</strong> for CLAT batch offers <strong>Special 1-1 Interaction</strong> to provide personalized coaching, targeted strategy, and expert guidance, ensuring optimized preparation and better results for your CLAT exam success.</p>,
    <p>The <strong>Personal Mentorship</strong> feature: one-on-one guidance from expert mentors. Tailored to individual needs, this personalized support helps students enhance their strengths, address weaknesses, and stay focused on their CLAT preparation. With regular progress reviews and customized strategies, students are equipped to excel in the CLAT exam and secure top <strong>NLU admissions</strong>.</p>,
    <p>Our <strong>Performance Analysis</strong> feature in this batch includes offline tests and detailed report cards to pinpoint weak areas. This helps students focus on improvement, enhancing skills in <strong>legal aptitude, reasoning, and general knowledge</strong>, ensuring steady progress and better chances of excelling in the CLAT exam and securing top <strong>NLU admissions</strong>.</p>,
    <p>Our <strong>Bilingual Teaching</strong> feature ensures that classes are taught in <strong>Hinglish (Hindi & English)</strong>, making complex concepts easier to understand. This approach helps students grasp key topics more effectively, improving their CLAT preparation and boosting their chances of securing top <strong>NLUs</strong>.</p>,
    <p>For any queries & concerns, please reach out to us on <strong>8507700177</strong>.</p>,
    <p><strong>Non-Refundable Fees:</strong> Fees for study materials, tax, and registration are not refundable.</p>,
    <p>The registration fee is included in the price of the batch shown on the website. The breakup of the registration fee will be mentioned on the invoice. The exact details might change from one batch to another.</p>,
    <p><strong>T&C Applicable</strong>.</p>
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
        "description":"The Legal Reasoning Booster course for AIL-LET 2026 strengthens students&apos; reasoning skills, critical thinking, and problem-solving abilities to excel in the AIL-LET exam and secure admission to top NLUs.",
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
        "description":"The English Booster course for AIL-LET 2026 enhances students&apos; language skills, vocabulary, grammar, and writing proficiency to excel in the AIL-LET exam and secure admission to top NLUs.",
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
        "description":"The Logical Reasoning Booster course for AIL-LET 2026 develops students&apos; analytical, deductive, and inductive reasoning skills to excel in the AIL-LET exam and secure admission to top NLUs.",
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
        "description":"The Current Affairs Booster course for AIL-LET 2026 equips students with up-to-date knowledge of national and international affairs to excel in the AIL-LET exam and secure admission to top NLUs.",
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
        "description":"The Math Booster course for AIL-LET 2026 enhances students&apos; mathematical skills, problem-solving abilities, and application of concepts to excel in the AIL-LET exam and secure admission to top NLUs.",
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
