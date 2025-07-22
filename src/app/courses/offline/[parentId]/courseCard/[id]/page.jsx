
// 'use client'
// import { useState, useEffect } from 'react'
// import CourseDetails from "@/components/courses/CourseDetails"
// import { useParams } from "next/navigation"
// import { doc, getDoc, getFirestore } from 'firebase/firestore'
// import { app } from '@/firebase'

// // Fallback data in case Firebase fetch fails
// const data = [
//   {
//     "examName": "CLAT Entrance Exam",
//     "description": "Candidates preparing for the CLAT 2025-2026 can enroll in our online coaching provided by Clatians at the most reasonable rates. We offer proper guidance, resources, and mock test series to help students prepare effectively.",
//     "courses": [
//       {
//         id: 1,
//         parentInd: 0,
//         title: "Target CLAT-2026",
//         tag: "CLAT",
//         batchType: "offline",
//         batchFeatures: [
//           {
//             icon: "bi-calendar-event",
//             title: "Duration:",
//             content: "From Admission – CLAT 2026 Exam"
//           },
//           {
//             icon: "bi-star",
//             title: "Batch Strategy:",
//             content: "Syllabus → Practice Session → Mock Test Series"
//           },
//           {
//             icon: "bi-laptop",
//             title: "Online Resources Access",
//             content: ""
//           },
//           {
//             icon: "bi-journal-text",
//             title: "Monthly Magazine",
//             content: "Current Affairs & Legal Affairs"
//           },
//           // Hidden features that show on expansion
//           {
//             icon: "bi-book",
//             title: "Study Material",
//             content: "Comprehensive study materials, DPDs & more"
//           },
//           {
//             icon: "bi-person-video3",
//             title: "Live Classes",
//             content: "Interactive sessions with expert faculty"
//           },
//           {
//             icon: "bi-question-circle",
//             title: "Doubt Resolution",
//             content: "Special Doubt Session (Online)"
//           },
//           {
//             icon: "bi-graph-up",
//             title: "Performance Tracking",
//             content: "Regular progress monitoring and analysis"
//           }
//         ],
//         price: "₹9,999",
//         "proBatch": [
//           "Live Lectures and Recorded Videos",
//           "Online Resource Access",
//           "Practice Modules, Notes & DPD",
//           "CLATians CA CODE",
//           "Sectional & Topic-wise Test",
//           "Online Mock Test Series",
//           "CLAT Question Banks"
//         ],
//         "simple": [
//           "Live Lectures",
//           "Notes & DPD",
//           "CLATians CA CODE",
//           "Sectional & Topic-wise Test",
//           "Online Mock Test Series",
//           "CLAT Question Banks"
//         ],
//         proPrice: "₹15,000",
//         badges: ["NEW", "Hinglish"],
//         startDate: "13 Jan, 2025",
//         endDate: "31 Dec, 2025",
//         features: "Premium Features Included",
//         price: "₹9,999",
//         originalPrice: "₹21,000",
//         discount: "55% OFF",
//         image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
//         id: 4,
//         parentInd: 0,
//         title: "Foundation CLAT-2026",
//         tag: "CLAT",
//         badges: ["NEW", "Hinglish"],
//         batchType: "offline",
//         batchFeatures: [
//           {
//             icon: "bi-calendar-event",
//             title: "Duration:",
//             content: "From Admission – CLAT 2026 Exam"
//           },
//           {
//             icon: "bi-star",
//             title: "Batch Strategy:",
//             content: "Syllabus → Practice Session → Mock Test Series"
//           },
//           {
//             icon: "bi-laptop",
//             title: "Online Resources Access",
//             content: ""
//           },
//           {
//             icon: "bi-journal-text",
//             title: "Monthly Magazine",
//             content: "Current Affairs & Legal Affairs"
//           },
//           // Hidden features that show on expansion
//           {
//             icon: "bi-book",
//             title: "Study Material",
//             content: "Comprehensive study materials, DPDs & more"
//           },
//           {
//             icon: "bi-person-video3",
//             title: "Live Classes",
//             content: "Interactive sessions with expert faculty"
//           },
//           {
//             icon: "bi-question-circle",
//             title: "Doubt Resolution",
//             content: "Special Doubt Session (Online)"
//           },
//           {
//             icon: "bi-graph-up",
//             title: "Performance Tracking",
//             content: "Regular progress monitoring and analysis"
//           }
//         ],
//         price: "₹9,999",
//         "proBatch": [
//           "Live Lectures and Recorded Videos",
//           "Online Resource Access",
//           "Practice Modules, Notes & DPD",
//           "CLATians CA CODE",
//           "Sectional & Topic-wise Test",
//           "Online Mock Test Series",
//           "CLAT Question Banks"
//         ],
//         "simple": [
//           "Live Lectures",
//           "Notes & DPD",
//           "CLATians CA CODE",
//           "Sectional & Topic-wise Test",
//           "Online Mock Test Series",
//           "CLAT Question Banks"
//         ],
//         proPrice: "₹15,000",
//         startDate: "13 Jan, 2025",
//         endDate: "31 Dec, 2025",
//         features: "Premium Features Included",
//         price: "₹9,999",
//         originalPrice: "₹21,000",
//         discount: "55% OFF",
//         image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
//       }
//     ],
//     "details": [
//       <p>Are you searching for the best offline <strong>CLAT</strong> coaching institute to ace the <strong>Common Law Admission Test (CLAT)</strong>? Look no further! <strong>CLATians</strong>, India’s leading <strong>CLAT</strong> preparation institute, offers expert-led classroom training designed for top <strong>NLU</strong> admissions.</p>,

//       <p>With personalized mentorship, structured study material, and real-time mock tests, our <strong>Offline CLAT Course</strong> ensures focused, interactive learning to maximize your success.</p>,

//       <p>Get hands-on guidance from experienced faculty and <strong>CLAT</strong> toppers, master the <strong>CLAT</strong> syllabus with in-depth coverage, and stay ahead with our exam-oriented approach.</p>,

//       <p>Enroll in the <strong>Best Offline CLAT Course</strong> today & start your journey to <strong>NLU</strong> success!</p>

//     ]
//   }
// ]
// export default function CourseDetailsPage() {
//   const { parentId, id } = useParams();
//   const [courseData, setCourseData] = useState(null);
//   const [courseDetails, setCourseDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCourseData = async () => {
//       try {
//         setLoading(true);
//         const db = getFirestore(app);

//         // Fetch the parent course document
//         const parentDocRef = doc(db, "courses", parentId);
//         const parentDocSnap = await getDoc(parentDocRef);

//         if (!parentDocSnap.exists()) {
//           throw new Error("Parent course not found");
//         }

//         const parentData = parentDocSnap.data();

//         // Fetch the specific course item from the subcollection
//         const courseItemRef = doc(db, "courses", parentId, "courseItems", id);
//         const courseItemSnap = await getDoc(courseItemRef);

//         if (!courseItemSnap.exists()) {
//           throw new Error("Course item not found");
//         }
//         const courseDataTmp = courseItemSnap.data();
//         const courseItemData = {
//           ...parentData,
//           ...courseDataTmp,
//         }

//         // Set the course data and details
//         setCourseData(courseItemData);

//         // Keep the details object as is from the parent document
//         setCourseDetails(parentData.details || data[0].details);

//       } catch (err) {
//         console.error("Error fetching course data:", err);
//         setError(err);

//         // Use fallback data on error
//         if (data[parseInt(parentId)] && data[parseInt(parentId)].courses[parseInt(id)]) {
//           setCourseData(data[parseInt(parentId)].courses[parseInt(id)]);
//           setCourseDetails(data[parseInt(parentId)].details);
//         } else {
//           setCourseData(data[0].courses[0]);
//           setCourseDetails(data[0].details);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseData();
//   }, [parentId, id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     console.error("Error loading course data:", error);
//   }

//   return (
//     <>
//       <CourseDetails
//         parentId={parentId}
//         courseData={courseData}
//         details={courseDetails}
//       />
//     </>
//   )
// }
