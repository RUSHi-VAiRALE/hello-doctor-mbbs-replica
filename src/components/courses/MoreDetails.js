'use client'

import { parseRelativeUrl } from "next/dist/shared/lib/router/utils/parse-relative-url"

export default function MoreDetails() {
  const details = [
    <p>Comprehensive <strong>Syllabus Coverage of CLAT, & AILET</strong> 2026</p>,
    <p>Live Interactive Classes from Monday to Friday.</p>,
    <p><strong>300+ Hours Live lectures</strong> (January to November 2025) with class notes.</p>,
    <p>Classes will start from 13th January and end (with revision classes) by 25th November 2025.</p>,
    <p>Batch is accessible to the enrolled students till <strong>31 Dec 2025</strong>.</p>,
    <p><strong>20 Mock Test Series</strong> (15 CLAT & 5 AILET) with video solutions.</p>,
    <p><strong>Total 22 Monthly Magazines & 80+ Weekly Magazines</strong>(Current Affairs & Legal Reasoning (January-November 2025)</p>,
    <p>Total <strong>200+ Daily Practice Problems (DPPs)</strong> with detailed solutions</p>,
    <p>Total <strong>30 Practice Sheets (15 Sectional Tests & 15 Topicwise Tests)</strong> with detailed solutions</p>,
    <p>7000+ Question Bank in DPP Format & Lecture Notes</p>,
    <p>Doubt Solving Support System through Doubt Engine (CLAT Experts resolve your doubts within 24 hours)</p>,
    <p>For any queries & concerns, please reach out to us on clatians@clat.com</p>,
    <p>The registration fee is included in the price of the batch which is showing on the website. The breakup of registration fee will be mentioned on invoice. You may be provided with access to Notes, PYQ's. Mock Test Papers, AITS Test Series, Previous year batches & other materials, the access can vary depending on the batch you purchase, so that exact details might change from one batch to another.</p>
  ]

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