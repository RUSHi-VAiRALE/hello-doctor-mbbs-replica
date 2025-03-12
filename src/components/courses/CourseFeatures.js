import { useState } from 'react'
export default function CourseFeatures({setPriceHook}) {
  const [selectedPlan, setSelectedPlan] = useState('pro') // Add this line at the top

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

  const handlePlanSelect = (price, plan) => {
    setPriceHook(price)
    setSelectedPlan(plan)
  }

  return (
    <div className="bg-white rounded-t-0 rounded-b-2xl p-4 sm:p-8 shadow-xl">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Batch Features</h2>
      
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Regular Batch */}
        <div className={`group relative border-2 rounded-xl p-4 sm:p-6 bg-gradient-to-r from-amber-50 to-red-50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
          selectedPlan === 'regular' 
            ? 'border-amber-500 shadow-amber-200/50 shadow-lg' 
            : 'border-gray-200'
        }`}>
          <div className="absolute -top-3 -right-3 z-10">
            {selectedPlan === 'regular' && (
              <div className="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                <i className="bi bi-check-circle-fill text-md"></i>
              </div>
            )}
          </div>
          <div className="border border-gray-200 rounded-xl p-4 sm:p-6 bg-gradient-to-r from-amber-50 to-red-50 transition-all duration-300 hover:border-amber-200">
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
          {/* Hover Select Button - Regular Batch */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-black/50 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
            <button 
              onClick={() => handlePlanSelect('9,999', 'regular')}
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Select Plan
            </button>
          </div>
        </div>

        {/* Pro Batch */}
        <div className={`group relative border-2 rounded-xl p-4 sm:p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
          selectedPlan === 'pro' 
            ? 'border-green-500 shadow-green-200/50 shadow-lg' 
            : 'border-gray-200'
        }`}>
          <div className="absolute -top-3 -right-3 z-10">
            {selectedPlan === 'pro' && (
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                <i className="bi bi-check-circle-fill text-md"></i>
              </div>
            )}
          </div>
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
          {/* Hover Select Button - Pro Batch */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-black/50 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
            <button 
              onClick={() => handlePlanSelect('14,999', 'pro')}
              className="bg-gradient-to-r from-green-400 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Select Pro Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}