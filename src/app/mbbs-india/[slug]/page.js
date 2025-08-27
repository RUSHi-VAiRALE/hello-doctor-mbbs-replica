'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { collection, getDocs, query, where, getFirestore } from 'firebase/firestore'
import { app } from '@/firebase'
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendarAlt, FaRupeeSign, FaStar, FaCheckCircle, FaDownload, FaWhatsapp } from 'react-icons/fa'

export default function MBBSIndiaPage() {
    const params = useParams()
    const slug = params.slug
    const [mbbsData, setMbbsData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMBBSData = async () => {
            try {
                setLoading(true)
                const db = getFirestore(app, 'mbbsyatradb')

                // Query the mbbsPrograms collection for the specific slug
                const q = query(collection(db, "mbbsPrograms"), where("slug", "==", slug))
                const querySnapshot = await getDocs(q)

                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0]
                    const data = doc.data()

                    // Transform the data to match the expected structure
                    const transformedData = {
                        title: data.title || `STUDY MBBS IN ${data.subcategory?.toUpperCase() || 'INDIA'}`,
                        customField: data.customField || "",
                        subtitle: data.subtitle || `MBBS admission in ${data.subcategory || 'India'}`,
                        description: data.description || "Get expert guidance for medical college admissions with comprehensive information about MBBS programs, colleges, and admission procedures.",
                        heroImage: data.heroImage || "/400x300.svg",
                        colleges: data.colleges || [
                            {
                                name: "Sample Medical College",
                                location: "Sample Location",
                                fees: "₹2,00,000",
                                seats: "150",
                                ranking: "NIRF Rank 50",
                                established: "2000"
                            }
                        ],
                        eligibility: data.eligibility || [
                            "Must have completed 10+2 with Physics, Chemistry, Biology",
                            "Minimum 50% marks in PCB for General category",
                            "Minimum 40% marks in PCB for SC/ST/OBC category",
                            "Must have qualified NEET-UG examination",
                            "Age limit: 17-25 years for General category",
                            "Age relaxation of 5 years for SC/ST/OBC category"
                        ],
                        documents: data.documents || [
                            "NEET UG Scorecard & Rank Letter",
                            "Class 10th & 12th Mark Sheets",
                            "Transfer Certificate",
                            "Migration Certificate",
                            "Category Certificate (if applicable)",
                            "Domicile Certificate",
                            "Passport Size Photographs",
                            "Aadhar Card",
                            "Medical Fitness Certificate"
                        ],
                        // Additional fields from Firebase
                        subcategory: data.subcategory,
                        subSubcategory: data.subSubcategory,
                        category: data.category,
                        content: data.content,
                        features: data.features,
                        admissionProcess: data.admissionProcess,
                        feeStructure: data.feeStructure
                    }

                    setMbbsData(transformedData)
                } else {
                    setError('Program not found')
                }
            } catch (err) {
                console.error('Error fetching MBBS data:', err)
                setError('Failed to load program data')
            } finally {
                setLoading(false)
            }
        }

        if (slug) {
            fetchMBBSData()
        }
    }, [slug])

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading program information...</p>
                </div>
            </div>
        )
    }

    if (error || !mbbsData) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Program Not Found</h1>
                    <p className="text-gray-600 mb-6">{error || 'The requested program could not be found.'}</p>
                    <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Go Back Home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {mbbsData.title}
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            {mbbsData.customField}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                                Get Free Counselling
                            </button>
                            <button className="border-2 border-white/30 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-3 space-y-12">

                        {/* MBBS Admission Overview */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <div className="border-l-4 border-red-500 pl-4 mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">{mbbsData.subtitle}</h2>
                            </div>

                            <div className="prose max-w-none text-gray-600">
                                {mbbsData.content ? (
                                    <div dangerouslySetInnerHTML={{ __html: mbbsData.content }} />
                                ) : (
                                    <p>
                                        {mbbsData.description}
                                    </p>
                                )}

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                    <h3 className="font-semibold text-blue-800 mb-2">Key Highlights:</h3>
                                    <ul className="text-sm text-blue-700 space-y-1">
                                        {mbbsData.features ? (
                                            mbbsData.features.map((feature, index) => (
                                                <li key={index}>• {feature}</li>
                                            ))
                                        ) : (
                                            <>
                                                <li>• Government Medical Colleges</li>
                                                <li>• Affordable Fee Structure</li>
                                                <li>• Quality Medical Education</li>
                                                <li>• Excellent Clinical Exposure</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* MBBS Admission Banner */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">{mbbsData.title}</h3>
                                    <p className="text-blue-100 mb-4">Get expert guidance for medical college admissions</p>
                                    <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                                        Apply Now
                                    </button>
                                </div>
                                <div>
                                    <Image
                                        src={mbbsData.heroImage}
                                        alt="MBBS Students"
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Top Medical Colleges */}
                        {mbbsData.colleges && mbbsData.colleges.length > 0 && (
                            <div className="bg-white rounded-lg shadow-md p-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">TOP MEDICAL COLLEGES IN {mbbsData.subcategory?.toUpperCase()}</h2>

                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-blue-600 text-white">
                                                <th className="px-4 py-3 text-left text-sm font-semibold">College Name</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold">Location</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold">Established</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold">Total Fees</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold">MBBS Seats</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {mbbsData.colleges.map((college, index) => (
                                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{college.name}</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">{college.location}</td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">{college.established}</td>
                                                    <td className="px-4 py-3 text-sm text-green-600 font-semibold">{college.fees}</td>
                                                    <td className="px-4 py-3 text-sm text-blue-600 font-semibold">{college.seats}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Fee Structure */}
                        {mbbsData.feeStructure && (
                            <div className="bg-white rounded-lg shadow-md p-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Fee Structure</h2>
                                <div className="prose max-w-none text-gray-600">
                                    <div dangerouslySetInnerHTML={{ __html: mbbsData.feeStructure }} />
                                </div>
                            </div>
                        )}

                        {/* Admission Process */}
                        {mbbsData.admissionProcess && (
                            <div className="bg-white rounded-lg shadow-md p-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Admission Process</h2>
                                <div className="prose max-w-none text-gray-600">
                                    <div dangerouslySetInnerHTML={{ __html: mbbsData.admissionProcess }} />
                                </div>
                            </div>
                        )}

                        {/* Featured College Card */}
                        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-4">TOP MEDICAL COLLEGES IN {mbbsData.subcategory?.toUpperCase()}</h3>
                                <p className="text-orange-100 mb-6">Get admission in the best medical colleges with expert guidance</p>
                                <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                                    CONTACT NOW
                                </button>
                            </div>
                            <div className="absolute right-0 top-0 w-64 h-64 opacity-20">
                                <Image
                                    src={mbbsData.heroImage}
                                    alt="Medical College"
                                    width={256}
                                    height={256}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>

                        {/* Documents Required */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Documents Required To Get Admissions In Top Medical Colleges In {mbbsData.subcategory} 2024-2025</h2>

                            <p className="text-gray-600 mb-6">
                                Following are the list of documents that must be required at the time of applying for MBBS admission in {mbbsData.subcategory}:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {mbbsData.documents.map((document, index) => (
                                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                        <span className="text-gray-700 text-sm">{document}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Government Colleges Banner */}
                        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white text-center">
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold text-lg mr-4">
                                    BEST GOVT.
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">MEDICAL COLLEGES</h3>
                                    <p className="text-red-100">IN {mbbsData.subcategory?.toUpperCase()}</p>
                                </div>
                            </div>
                            <p className="text-red-100 text-sm max-w-2xl mx-auto">
                                Get admission guidance for the top government medical colleges in {mbbsData.subcategory}. Our expert counselors will help you secure your seat in the best medical institutions.
                            </p>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-6">

                        {/* Top Medical Colleges List */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Top Medical Colleges</h3>
                            <div className="space-y-3">
                                {[
                                    "Government Medical College",
                                    "All Saints University School",
                                    "American International School",
                                    "Avalon University School",
                                    "American University of Antigua",
                                    "Trinity School of Medicine",
                                    "Windsor University School",
                                    "University of Science Arts"
                                ].map((college, index) => (
                                    <div key={index} className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer border-b border-gray-100 pb-2">
                                        {college}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Colleges by State */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Top Colleges in India</h3>
                            <div className="space-y-3">
                                {[
                                    "AIIMS",
                                    "JIPMER",
                                    "KGMU",
                                    "BHU",
                                    "MAMC",
                                    "UCMS",
                                    "VMMC",
                                    "LHMC"
                                ].map((college, index) => (
                                    <div key={index} className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer border-b border-gray-100 pb-2">
                                        {college}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top MBBS in India */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Top MBBS in India</h3>
                            <div className="space-y-3">
                                {[
                                    "MBBS in Rajasthan",
                                    "MBBS in Maharashtra",
                                    "MBBS in Karnataka",
                                    "MBBS in Tamil Nadu",
                                    "MBBS in Kerala",
                                    "MBBS in Gujarat",
                                    "MBBS in Delhi",
                                    "MBBS in Punjab"
                                ].map((state, index) => (
                                    <div key={index} className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer border-b border-gray-100 pb-2">
                                        {state}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 text-white rounded-lg p-6">
                            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <FaPhone className="mr-3 text-yellow-300" />
                                    <div>
                                        <div className="text-sm">India: +91-78980252527</div>
                                        <div className="text-sm">Overseas: +91-9039038655</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="mr-3 text-yellow-300" />
                                    <span className="text-sm">mbbsyaatra@gmail.com</span>
                                </div>
                            </div>
                            <button className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold mt-4 hover:bg-blue-50 transition-colors">
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
