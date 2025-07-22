// 'use client'
// import { useState, useEffect } from "react";
// import ExamDetails from "@/components/ExamDetails";
// import { useParams } from "next/navigation";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { app } from "@/firebase";

// export default function LawEntranceExams() {
//     const { id } = useParams();
//     const [examData, setExamData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchExamData = async () => {
//             try {
//                 setLoading(true);
//                 const db = getFirestore(app);
//                 const examDocRef = doc(db, "lawExams", id);
//                 const examSnapshot = await getDoc(examDocRef);
                
//                 if (examSnapshot.exists()) {
//                     setExamData(examSnapshot.data());
//                 } else {
//                     setError("Exam not found");
//                 }
//             } catch (err) {
//                 console.error("Error fetching exam data:", err);
//                 setError("Failed to load exam data");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (id) {
//             fetchExamData();
//         }
//     }, [id]);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <div className="text-center p-8 bg-red-50 rounded-lg">
//                     <h2 className="text-xl font-bold text-red-600 mb-2">Error</h2>
//                     <p className="text-gray-700">{error}</p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <>
//             {examData && <ExamDetails exam={examData} />}
//         </>
//     );
// }

