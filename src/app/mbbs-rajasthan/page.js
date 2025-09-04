'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendarAlt, FaRupeeSign, FaStar, FaCheckCircle, FaDownload, FaWhatsapp } from 'react-icons/fa'

// Sample data
const mbbsData = {
    title: "STUDY MBBS IN RAJASTHAN",
    subtitle: "MBBS admission in Rajasthan",
    description: "Rajasthan is one of the most preferred destinations for MBBS in India due to its excellent medical infrastructure, experienced faculty, and affordable fee structure. The state offers numerous opportunities for medical aspirants to pursue their dreams.",
    heroImage: "/400x300.svg",

    colleges: [
        {
            name: "Sawai Man Singh Medical College",
            location: "Jaipur",
            fees: "₹2,18,000",
            seats: "250",
            ranking: "NIRF Rank 28",
            established: "1947"
        },
        {
            name: "Dr. Sampurnanand Medical College",
            location: "Jodhpur",
            fees: "₹2,15,000",
            seats: "150",
            ranking: "NIRF Rank 35",
            established: "1965"
        },
        {
            name: "RNT Medical College",
            location: "Udaipur",
            fees: "₹2,20,000",
            seats: "150",
            ranking: "NIRF Rank 42",
            established: "1962"
        },
        {
            name: "Sardar Patel Medical College",
            location: "Bikaner",
            fees: "₹2,10,000",
            seats: "100",
            ranking: "NIRF Rank 48",
            established: "1965"
        },
        {
            name: "Government Medical College",
            location: "Kota",
            fees: "₹2,05,000",
            seats: "100",
            ranking: "NIRF Rank 52",
            established: "2008"
        },
        {
            name: "Jhalawar Medical College",
            location: "Jhalawar",
            fees: "₹2,00,000",
            seats: "100",
            ranking: "NIRF Rank 58",
            established: "2013"
        }
    ],

    eligibility: [
        "Must have completed 10+2 with Physics, Chemistry, Biology",
        "Minimum 50% marks in PCB for General category",
        "Minimum 40% marks in PCB for SC/ST/OBC category",
        "Must have qualified NEET-UG examination",
        "Age limit: 17-25 years for General category",
        "Age relaxation of 5 years for SC/ST/OBC category"
    ],

    documents: [
        "NEET UG Scorecard & Rank Letter",
        "Class 10th & 12th Mark Sheets",
        "Transfer Certificate",
        "Migration Certificate",
        "Category Certificate (if applicable)",
        "Domicile Certificate",
        "Passport Size Photographs",
        "Aadhar Card",
        "Medical Fitness Certificate"
    ]
}

export default function MBBSRajasthanPage() {
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
                            {mbbsData.description}
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
                                <h2 className="text-2xl font-bold text-gray-800">MBBS admission in Rajasthan</h2>
                            </div>

                            <div className="prose max-w-none text-gray-600">
                                <p className="mb-4">
                                    Rajasthan has emerged as one of the most preferred destinations for MBBS in India. The state boasts excellent medical infrastructure, experienced faculty, and affordable fee structures that make it an ideal choice for medical aspirants.
                                </p>
                                <p className="mb-4">
                                    With over 25 government medical colleges and numerous private institutions, Rajasthan offers ample opportunities for students to pursue their medical dreams. The colleges are well-equipped with modern facilities, experienced faculty, and excellent clinical exposure.
                                </p>
                                <p className="mb-6">
                                    The admission process is conducted through NEET UG, and the state has a transparent counselling system that ensures fair allocation of seats based on merit and reservation policies.
                                </p>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                    <h3 className="font-semibold text-blue-800 mb-2">Key Highlights:</h3>
                                    <ul className="text-sm text-blue-700 space-y-1">
                                        <li>• 25+ Government Medical Colleges</li>
                                        <li>• Affordable Fee Structure</li>
                                        <li>• Quality Medical Education</li>
                                        <li>• Excellent Clinical Exposure</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* MBBS Admission Banner */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">MBBS ADMISSION IN RAJASTHAN</h3>
                                    <p className="text-blue-100 mb-4">Get expert guidance for medical college admissions</p>
                                    <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                                        Apply Now
                                    </button>
                                </div>
                                <div>
                                    <Image
                                        src="/400x300.svg"
                                        alt="MBBS Students"
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Top Medical Colleges */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">TOP MEDICAL COLLEGES IN RAJASTHAN</h2>

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

                        {/* Featured College Card */}
                        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-4">TOP MEDICAL COLLEGES IN RAJASTHAN</h3>
                                <p className="text-orange-100 mb-6">Get admission in the best medical colleges with expert guidance</p>
                                <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                                    CONTACT NOW
                                </button>
                            </div>
                            <div className="absolute right-0 top-0 w-64 h-64 opacity-20">
                                <Image
                                    src="/400x300.svg"
                                    alt="Medical College"
                                    width={256}
                                    height={256}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>

                        {/* Documents Required */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Documents Required To Get Admissions In Top Medical Colleges In Rajasthan 2024-2025</h2>

                            <p className="text-gray-600 mb-6">
                                Following are the list of documents that must be required at the time of applying for MBBS admission in Rajasthan:
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
                                    <p className="text-red-100">IN RAJASTHAN</p>
                                </div>
                            </div>
                            <p className="text-red-100 text-sm max-w-2xl mx-auto">
                                Get admission guidance for the top government medical colleges in Rajasthan. Our expert counselors will help you secure your seat in the best medical institutions.
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
                                                        <div className="text-sm">India: +91 9211607005</div>
                <div className="text-sm">Overseas: +91 9211607005</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="mr-3 text-yellow-300" />
                                    <span className="text-sm">info@hellodoctor.site</span>
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