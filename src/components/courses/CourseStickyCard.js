import Image from 'next/image'
import Link from 'next/link'

export default function CourseStickyCard({ courseData, coursePrice, plan }) {
  console.log(courseData)
  return (
    <>
      {/* Desktop sticky card (only visible on lg screens) */}
      <div className="lg:col-span-1 hidden lg:block">
        <div className="sticky top-16">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-[200px]">
              <Image
                src={courseData.image}
                alt="CLAT Achievers 2026 Batch"
                fill
                className="object-cover"
              />
              <div className="absolute bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-3 py-1 rounded-r-lg text-sm">
                ONLINE
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold">{courseData.title}</h3>
                <div className="flex items-center gap-1">
                  <span className="text-xs bg-[#ad4a16] text-white px-2 py-0.5 rounded">New</span>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">Hinglish</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl sm:text-2xl font-bold text-red-700">&#8377;{(plan === 'regular') ? courseData.price : courseData.proPrice}</span>
                <span className="text-gray-500 line-through text-xs sm:text-sm">&#8377;{(plan === 'regular') ? courseData.originalPrice : courseData.proOriginalPrice}</span>
                <span className="flex-1 text-green-600 text-xs sm:text-sm">{`Discount of ${(plan === 'regular') ? courseData.discount : courseData.proDiscount} applied`}</span>
              </div>
              <Link href={(plan === 'regular') ? courseData.purchaseLink : courseData.proBatchPurchaseLink} target='_blank'>
                <button className="w-full py-3 px-6 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg text-sm sm:text-base truncate">
                  {`Continue with ${courseData.title}`}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet sticky bottom bar (only visible on screens smaller than lg) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-3 z-50 lg:hidden">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-red-700">&#8377;{(plan === 'regular') ? courseData.price : courseData.proPrice}</span>
            <div className="flex items-center gap-1">
              <span className="text-gray-500 line-through text-xs">&#8377;{(plan === 'regular') ? courseData.originalPrice : courseData.proOriginalPrice}</span>
              <span className="text-green-600 text-xs">{(plan === 'regular') ? courseData.discount : courseData.proDiscount}</span>
            </div>
          </div>
          <Link href={(plan === 'regular') ? courseData.purchaseLink : courseData.proBatchPurchaseLink} target='_blank'>
            <button className="py-2 px-4 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg text-sm truncate max-w-[200px]">
              {`Continue with ${courseData.title}`}
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}