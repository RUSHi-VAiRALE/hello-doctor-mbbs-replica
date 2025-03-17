'use client'

import { parseRelativeUrl } from "next/dist/shared/lib/router/utils/parse-relative-url"

export default function MoreDetails({details}) {
  

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
        More Details
      </h2>
      
      <div className="space-y-4 sm:space-y-6">
        {details.map((detail, index) => (
          <div 
            key={index}
            className="flex items-start group gap-1 hover:bg-gray-50 border-b-[1px] pb-2 transition-all duration-300"
          >
            <div className="flex-shrink-0">
              <div className="w-8 rounded-full text-black flex items-center justify-center text-md">
              {(index + 1).toString().padStart(2, '0')}.
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}