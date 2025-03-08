export default function CourseFeatures({setPriceHook}) {
  const features = [
    "Live Lectures and Recorded Lectures",
    "Notes and DPPs",
    "Online Test series",
    "Sectional and Topic wise Tests",
    "Monthly Magazines",
    "Doubt Solving Support System"
  ]

  const proFeatures = [
    ...features,
    "Mentorship Sessions",
    "Printed Modules",
    "CLAT and AILET Previous Year Questions PYQ Book"
  ]

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xl">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Batch Features</h2>
      
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Regular Batch */}
        <div onClick={()=>setPriceHook('9,999')} className="border cursor-pointer border-gray-200 rounded-xl p-4 sm:p-6 bg-gradient-to-r from-amber-50 to-red-50">
          {/* ... Regular batch content ... */}
          <div className="border border-gray-200 rounded-xl p-4 sm:p-6 bg-gradient-to-r from-amber-50 to-red-50">
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-xl font-bold">CLAT Achievers 2026</h3>
                      <span className="text-xl sm:text-2xl font-bold text-red-700">₹9,999</span>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 sm:gap-3">
                          <i className="bi bi-check-circle-fill text-amber-500 mt-1 text-sm sm:text-base"></i>
                          <span className="text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
        </div>

        {/* Pro Batch */}
        <div onClick={()=>setPriceHook('14,999')} className="border cursor-pointer border-gray-200 rounded-xl p-4 sm:p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          {/* ... Pro batch content ... */}
          <div className="flex justify-between items-center mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-xl font-bold">CLAT PRO 2026 Batch</h3>
                      <span className="text-xl sm:text-2xl font-bold">₹14,999</span>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      {proFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 sm:gap-3">
                          <i className="bi bi-check-circle-fill text-green-400 mt-1 text-sm sm:text-base"></i>
                          <span className="text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
        </div>
      </div>
    </div>
  )
} 