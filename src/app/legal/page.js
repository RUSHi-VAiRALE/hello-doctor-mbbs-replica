// import AboutHero from "@/components/AboutHero"
// import Image from "next/image"
// import Link from "next/link"
// import { FaArrowRight, FaBell } from "react-icons/fa"

// export default function LegalComingSoon() {
//   return (
//     <>
//       <AboutHero route="Home" page="Legal" />

//       <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-red-50">
//         <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//             <div className="w-full lg:w-1/2">
//               <span className="inline-block bg-[#ad4a16]/10 text-[#ad4a16] px-4 py-2 rounded-md text-sm font-medium mb-4">
//                 COMING SOON
//               </span>
//               <h1 className="text-3xl md:text-5xl font-bold mb-6">Legal Resources & Information</h1>
//               <p className="text-gray-600 text-lg mb-8">
//                 We're working on a comprehensive legal section with resources, case studies, and expert insights to help you in your law journey. Stay tuned for updates!
//               </p>

//               <div className="bg-white p-6 rounded-xl shadow-md mb-8">
//                 <h3 className="text-xl font-bold mb-4">Get Notified When We Launch</h3>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   />
//                   <button className="px-6 py-3 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
//                     Notify Me <FaBell className="ml-2" />
//                   </button>
//                 </div>
//               </div>

//               <Link href="/blog" className="inline-flex items-center text-[#ad4a16] font-medium hover:text-[#8f3a17] transition-colors">
//                 Check out our blog in the meantime <FaArrowRight className="ml-2" />
//               </Link>
//             </div>

//             <div className="w-full lg:w-1/2">
//               <div className="relative h-[300px] md:h-[400px] w-full">
//                 <Image
//                   src="https://cdn.pixabay.com/photo/2018/04/07/13/11/justice-3298892_1280.jpg"
//                   alt="Legal Resources Coming Soon"
//                   fill
//                   className="object-cover rounded-xl shadow-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }