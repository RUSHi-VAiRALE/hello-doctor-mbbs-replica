'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import LiveLogo from '../../public/CLATiansLive.webp'
import ClassLogo from '../../public/CLATiansClassroom.webp'
import Link from 'next/link'
import { collection, getDocs, query, where, getFirestore, orderBy } from 'firebase/firestore'
import { app } from '@/firebase'

export default function CourseCards() {
  const [onlineCourses, setOnlineCourses] = useState([
    { name: 'CLAT', href: '/courses/online/0' },
    { name: 'CLAT + AILET', href: '/courses/online/1' },
    { name: 'CUET-LAW(UG)', href: '/courses/online/2' },
    { name: 'CUET-LAW(PG)', href: '/courses/online/3' },
    { name: 'AIL-LET', href: '/courses/online/4' },
    { name: 'BOOSTER COURSES', href: '/courses/online/5' }
  ])

  const [offlineCourses, setOfflineCourses] = useState([
    { name: 'CLAT', href: '/courses/offline/0' },
    { name: 'CLAT + AILET', href: '/courses/offline/1' },
    { name: 'CUET-LAW', href: '/courses/offline/2' },
    { name: 'OLET', href: '/courses/offline/3' },
    { name: 'CLAT + OLET', href: '/courses/offline/4' },
    { name: 'MOCK TEST SERIES', href: '/mock-tests/offline' }
  ])

  const [loading, setLoading] = useState(true)

  // Fetch courses from Firebase
  useEffect(() => {
    const db = getFirestore(app)
    const fetchCourses = async () => {
      try {
        setLoading(true)

        // Fetch online courses
        const onlineQuery = query(
          collection(db, "courses"),
          where("batchType", "==", "online"),
          orderBy("createdAt", "asc")
        )
        const onlineSnapshot = await getDocs(onlineQuery)

        if (!onlineSnapshot.empty) {
          const fetchedOnlineCourses = onlineSnapshot.docs.map((doc) => ({
            name: doc.data().examName || `Course ${doc.id}`,
            href: `/courses/online/${doc.id}`
          }))

          setOnlineCourses(fetchedOnlineCourses)
        }

        // Fetch offline courses
        const offlineQuery = query(
          collection(db, "courses"),
          where("batchType", "==", "offline"),
          orderBy("createdAt", "asc")
        )
        const offlineSnapshot = await getDocs(offlineQuery)

        if (!offlineSnapshot.empty) {
          const fetchedOfflineCourses = offlineSnapshot.docs.map((doc) => ({
            name: doc.data().examName || `Course ${doc.id}`,
            href: `/courses/offline/${doc.id}`
          }))

          // Add the mock test series as the last item
          fetchedOfflineCourses.push({
            name: 'MOCK TEST SERIES',
            href: '/mock-tests/offline'
          })

          setOfflineCourses(fetchedOfflineCourses)
        }
      } catch (error) {
        console.error("Error fetching courses:", error)
        // Keep using the default courses if there's an error
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  return (
    <section className="bg-[#f3f3f3] py-12 shadow-lg shadow-gray-300/50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center shadow-b-lg">
            {/* Online Courses Card */}
            <div className="bg-white w-full gap-y-3 flex-col justify-between rounded-lg shadow-lg">
              <div className="flex flex-col gap-y-3 mb-3 justify-between items-center">
                <div className="py-1">
                  <Image
                    src={LiveLogo}
                    alt="CLATians Logo"
                    width={140}
                    height={140}
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-3 px-6 capitalize">
                  {onlineCourses.map((course, index) => (
                    <Link
                      key={course.name}
                      className="flex-1 min-w-[150px] px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors capitalize truncate text-center"
                      href={course.href}>
                      <button>
                        {course.name}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <Link href={onlineCourses.length > 0 ? onlineCourses[0].href : "/courses/online/0"}>
                  <button className="w-full py-2 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                    Explore Online Courses
                  </button>
                </Link>
              </div>
            </div>

            {/* Offline Courses Card */}
            <div className="bg-white w-full gap-y-3 flex-col justify-between rounded-lg shadow-lg">
              <div className="flex flex-col gap-y-3 mb-3 justify-between items-center">
                <div className="py-1">
                  <Image
                    src={ClassLogo}
                    alt="CLATians Logo"
                    width={140}
                    height={140}
                    className=""
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-3 px-6">
                  {offlineCourses.map((course, index) => (
                    <Link
                      key={course.name}
                      className="flex-1 min-w-[150px] px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors capitalize truncate text-center"
                      href={course.href}>
                      <button>
                        {course.name}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <Link href={offlineCourses.length > 0 ? offlineCourses[0].href : "/courses/offline/0"}>
                  <button className="w-full py-2 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                    Explore Offline Courses
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}