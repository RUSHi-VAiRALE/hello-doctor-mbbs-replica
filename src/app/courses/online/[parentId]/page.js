'use client'

import { useState, useEffect } from 'react'
import CoursesHero from '@/components/courses/CoursesHero'
import CourseCategories from '@/components/courses/CourseCategories'
import CoursesList from '@/components/courses/CoursesList'
import LawEntranceExams from '@/components/courses/LawEntranceExams'
import FAQ from '@/components/FAQ'
import { usePathname } from 'next/navigation'
import { doc, getDoc, collection, getFirestore, query, where, getDocs } from 'firebase/firestore'
import { app } from '../../../../firebase'
import { data, faqs, examDataCourse } from '@/data/examData'

export default function CoursesPage() {
  const pathName = usePathname();
  const parentId = pathName.split('/')[3];
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [examDataFromFirebase, setExamDataFromFirebase] = useState(null);

  useEffect(() => {
    const db = getFirestore(app)
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        
        // Try to fetch the course document by ID first
        const courseDocRef = doc(db, "courses", parentId);
        const courseDocSnap = await getDoc(courseDocRef);
        
        if (courseDocSnap.exists()) {
          const courseData = courseDocSnap.data();
          
          // Fetch the courseItems subcollection
          const courseItemsRef = collection(db, "courses", parentId, "courseItems");
          //const courseItemsQuery = query(courseItemsRef, where("batchType", "==", "online"));
          const courseItemsSnapshot = await getDocs(courseItemsRef);
          
          // If we have course items, add them to the course data
          if (!courseItemsSnapshot.empty) {
            const courseItems = courseItemsSnapshot.docs.map(doc => ({
              id: doc.id,
              link: `/courses/${courseData.batchType}/${parentId}/courseCard/${doc.id}`,
              ...doc.data()
            }));
            
            // Create a complete course object with the main data and course items
            setCourseData({
              ...courseData,
              courses: courseItems
            });
          } else if (courseData.courses && Array.isArray(courseData.courses)) {
            // If no subcollection but has courses array, use that
            setCourseData(courseData);
          } else {
            // If no courses data at all, use fallback
            setCourseData(data[parseInt(parentId)] || data[0]);
          }
        } else {
          // If no document with this ID, try to find by parentInd
          const coursesQuery = query(
            collection(db, "courses"), 
            where("parentInd", "==", parseInt(parentId)),
            where("batchType", "==", "online")
          );
          
          const querySnapshot = await getDocs(coursesQuery);
          
          if (!querySnapshot.empty) {
            // Get the first matching document
            const courseDoc = querySnapshot.docs[0];
            const courseData = courseDoc.data();
            
            // Fetch the courseItems subcollection for this document
            const courseItemsRef = collection(db, "courses", courseDoc.id, "courseItems");
            const courseItemsQuery = query(courseItemsRef, where("batchType", "==", "online"));
            const courseItemsSnapshot = await getDocs(courseItemsQuery);
            
            if (!courseItemsSnapshot.empty) {
              const courseItems = courseItemsSnapshot.docs.map(doc => ({
                id: doc.id,
                link: `/courses/online/${parentId}/courseCard/${doc.id}`,
                ...doc.data()
              }));
              
              setCourseData({
                ...courseData,
                courses: courseItems
              });
            } else if (courseData.courses && Array.isArray(courseData.courses)) {
              // If no subcollection but has courses array, use that
              setCourseData(courseData);
            } else {
              // If no courses data at all, use fallback
              setCourseData(data[parseInt(parentId)] || data[0]);
            }
          } else {
            // If no data found in Firebase, use fallback data
            setCourseData(data[parseInt(parentId)] || data[0]);
          }
        }

        // Fetch exam data from exams collection
        let examName = "";
        if (courseDocSnap.exists()) {
          examName = courseDocSnap.data().examName;
        } else {
          // If course document doesn't exist, try to get exam name from fallback data
          examName = data[parseInt(parentId)]?.examName || data[0].examName;
        }

        // Query the exams collection based on the exam name
        if (examName) {
          const examsQuery = query(
            collection(db, "exams"),
            where("name", "==", examName)
          );
          
          const examsSnapshot = await getDocs(examsQuery);
          
          if (!examsSnapshot.empty) {
            // Get the first matching exam document
            const examDoc = examsSnapshot.docs[0];
            setExamDataFromFirebase(examDoc.data());
          } else {
            // If no matching exam found, use fallback examData
            setExamDataFromFirebase(null);
          }
        }
        
      } catch (err) {
        console.error("Error fetching course data:", err);
        setError(err);
        // Use fallback data on error
        setCourseData(data[parseInt(parentId)] || data[0]);
        setExamDataFromFirebase(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [parentId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#e7edff] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    console.error("Error loading course data:", error);
  }

  // Use the fetched data or fallback to the hardcoded data
  const finalCourseData = courseData || data[parseInt(parentId)] || data[0];
  const finalExamData = examDataFromFirebase || examDataCourse;

  return (
    <main className="min-h-screen bg-[#e7edff]">
      <CoursesHero exam={{
        examName: finalCourseData.courseName,
        examDescription: finalCourseData.description
      }}/>
      <CourseCategories />
      <CoursesList courseData={finalCourseData.courses} examName={finalCourseData.examName} batchType={"Online"}/>
      <LawEntranceExams examData={finalExamData}/>
      <FAQ faqs={faqs}/>
    </main>
  )
}
