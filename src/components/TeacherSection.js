'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '@/firebase'

export default function TeacherSection() {
  const [teachers, setTeachers] = useState([])
  const [selectedTeacher, setSelectedTeacher] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch teachers from Firebase
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setLoading(true)
        const db = getFirestore(app)
        const teachersCollection = collection(db, "teachers")
        const teachersSnapshot = await getDocs(teachersCollection)
        const teachersData = teachersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        if (teachersData.length > 0) {
          setTeachers(teachersData)
          setSelectedTeacher(teachersData[0])
        } else {
          // Fallback data if no teachers found
          const fallbackTeachers = [
            {
              id: 1,
              name: "A. K. Singh",
              role: "Director CLATians",
              location: "Patna, India",
              exp: 15,
              description: "Expert in teaching Legal Reasoning and Legal Awareness for CLAT and other law entrance exams.",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
              email: "alexendra@clatwallah.com",
              phone: "+91-98765-43210"
            },
            {
              id: 2,
              name: "Dr. Priya Sharma",
              role: "Senior Faculty",
              location: "Delhi, India",
              exp: 12,
              description: "Specialist in Constitutional Law and Current Affairs with extensive teaching experience.",
              image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
              email: "priya.sharma@clatwallah.com",
              phone: "+91-98765-43211"
            },
            {
              id: 3,
              name: "Prof. Rajesh Kumar",
              role: "Legal Reasoning Expert",
              location: "Mumbai, India",
              exp: 18,
              description: "Renowned expert in Logical Reasoning and Critical Thinking for law entrance examinations.",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
              email: "rajesh.kumar@clatwallah.com",
              phone: "+91-98765-43212"
            }
          ]
          setTeachers(fallbackTeachers)
          setSelectedTeacher(fallbackTeachers[0])
        }
      } catch (error) {
        console.error("Error fetching teachers:", error)
        // Fallback data in case of error
        const fallbackTeachers = [
          {
            id: 1,
            name: "A. K. Singh",
            role: "Director CLATians",
            location: "Patna, India",
            exp: 15,
            description: "Expert in teaching Legal Reasoning and Legal Awareness for CLAT and other law entrance exams.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            email: "alexendra@clatwallah.com",
            phone: "+91-98765-43210"
          }
        ]
        setTeachers(fallbackTeachers)
        setSelectedTeacher(fallbackTeachers[0])
      } finally {
        setLoading(false)
      }
    }

    fetchTeachers()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#ad4a16] to-[#8f3a17] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <i className="bi bi-people-fill mr-2"></i>
              OUR TEACHERS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
              Learn from the Best
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Meet our expert faculty members who are dedicated to your success
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#ad4a16]"></div>
          </div>
        </div>
      </section>
    )
  }

  if (!selectedTeacher) {
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#ad4a16] to-[#8f3a17] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <i className="bi bi-people-fill mr-2"></i>
            OUR TEACHERS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
            Learn from the Best
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet our expert faculty members who are dedicated to your success in legal education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Selected Teacher Information */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-5/12">
                  <div className="relative aspect-square group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <Image
                      src={selectedTeacher.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"}
                      alt={selectedTeacher.name}
                      fill
                      className="relative rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105 z-10"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg z-20">
                      <i className="bi bi-award-fill text-2xl text-[#ad4a16]"></i>
                    </div>
                  </div>
                </div>

                <div className="md:w-7/12 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedTeacher.name}</h3>
                    <p className="text-[#ad4a16] font-semibold text-lg">{selectedTeacher.role}</p>
                    <p className="text-gray-600 flex items-center gap-2 mt-2">
                      <i className="bi bi-geo-alt-fill text-[#ad4a16]"></i>
                      {selectedTeacher.location}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#ad4a16]/10 to-[#8f3a17]/10 rounded-lg p-4">
                    <p className="text-gray-700 text-justify leading-relaxed">
                      {selectedTeacher.description} Over <strong className='text-[#ad4a16]'>{selectedTeacher.exp}+ years</strong> of experience in guiding students for top NLUs.
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {[
                      { icon: 'bi-facebook', color: 'from-blue-500 to-blue-600' },
                      { icon: 'bi-twitter-x', color: 'from-gray-700 to-gray-800' },
                      { icon: 'bi-linkedin', color: 'from-blue-600 to-blue-700' },
                      { icon: 'bi-instagram', color: 'from-pink-500 to-purple-600' }
                    ].map((social, index) => (
                      <a key={index} href="#" className={`w-10 h-10 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <i className={`bi ${social.icon}`}></i>
                      </a>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 h-8 rounded-full bg-[#ad4a16]/10 flex items-center justify-center">
                        <i className="bi bi-telephone-fill text-[#ad4a16]"></i>
                      </div>
                      <span className="font-medium">{selectedTeacher.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 h-8 rounded-full bg-[#ad4a16]/10 flex items-center justify-center">
                        <i className="bi bi-envelope-fill text-[#ad4a16]"></i>
                      </div>
                      <span className="font-medium">{selectedTeacher.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Teacher Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className={`group cursor-pointer transition-all duration-300 ${selectedTeacher.id === teacher.id
                      ? 'transform scale-105'
                      : 'hover:scale-105'
                    }`}
                  onClick={() => setSelectedTeacher(teacher)}
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src={teacher.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"}
                      alt={teacher.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${selectedTeacher.id === teacher.id
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-100'
                      }`}>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h4 className="font-bold text-sm mb-1 truncate">{teacher.name}</h4>
                        <p className="text-xs opacity-90 truncate">{teacher.role}</p>
                      </div>
                    </div>

                    {/* Selected indicator */}
                    {selectedTeacher.id === teacher.id && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-[#ad4a16] rounded-full flex items-center justify-center">
                        <i className="bi bi-check text-white text-sm"></i>
                      </div>
                    )}

                    {/* Hover indicator */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ad4a16]/50 rounded-2xl transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm mb-4">
                Click on any teacher to learn more about their expertise
              </p>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-[#ad4a16] rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-[#8f3a17] rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-[#312518] rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}