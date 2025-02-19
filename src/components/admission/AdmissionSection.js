export default function AdmissionSection() {
  const applicationSteps = [
    "Fill out the online application form.",
    "Upload necessary documents and certificates.",
    "Pay the application fee online.",
    "Appear for entrance exams (if applicable).",
    "Wait for admission confirmation and counseling."
  ]

  const eligibilityCriteria = [
    "Minimum 45% marks in 10+2 (40% for reserved categories).",
    "Entrance exam (if applicable) qualification.",
    "Age limit as per course requirements."
  ]

  const scholarships = [
    "Merit-Based Scholarships for top-performing students.",
    "Need-Based Financial Aid for economically weaker sections.",
    "Government & Private Scholarship Opportunities."
  ]

  const feeStructure = [
    {
      course: "BA LLB",
      tuitionFee: "₹1,50,000",
      additionalCosts: "₹10,000 (Library, Exam Fees, etc.)"
    },
    {
      course: "LLM",
      tuitionFee: "₹1,20,000",
      additionalCosts: "₹8,000"
    }
  ]

  return (
    <section className="bg-[#e7edff] py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Admissions
          </h2>
          <p className="text-lg text-gray-600">
            Explore the admission process, eligibility, fees, and scholarship options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Application Process Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-red-700 mb-4">
              Application Process
            </h3>
            <p className="text-gray-600 mb-4">
              Follow these steps to apply for courses at our institute:
            </p>
            <ul className="space-y-3">
              {applicationSteps.map((step, index) => (
                <li key={index} className="flex items-start space-x-3 text-gray-600">
                  <i className="bi bi-check-circle-fill text-red-700 mt-1"></i>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility Criteria Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-red-700 mb-4">
              Eligibility Criteria
            </h3>
            <p className="text-gray-600 mb-4">
              Students must meet the following criteria to be eligible:
            </p>
            <ul className="space-y-3">
              {eligibilityCriteria.map((criteria, index) => (
                <li key={index} className="flex items-start space-x-3 text-gray-600">
                  <i className="bi bi-check-circle-fill text-red-700 mt-1"></i>
                  <span>{criteria}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fee Structure Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-red-700 mb-4">
              Fee Structure
            </h3>
            <p className="text-gray-600 mb-4">
              A transparent breakdown of tuition fees and additional costs:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr>
                    <th className="bg-red-700 text-white py-3 px-4 text-left">Course</th>
                    <th className="bg-red-700 text-white py-3 px-4 text-left">Tuition Fee (Annual)</th>
                    <th className="bg-red-700 text-white py-3 px-4 text-left">Additional Costs</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 px-4">{fee.course}</td>
                      <td className="py-3 px-4">{fee.tuitionFee}</td>
                      <td className="py-3 px-4">{fee.additionalCosts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Scholarships Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-red-700 mb-4">
              Scholarships & Financial Aid
            </h3>
            <p className="text-gray-600 mb-4">
              We offer financial assistance programs to eligible students:
            </p>
            <ul className="space-y-3">
              {scholarships.map((scholarship, index) => (
                <li key={index} className="flex items-start space-x-3 text-gray-600">
                  <i className="bi bi-award-fill text-red-700 mt-1"></i>
                  <span>{scholarship}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 hover:opacity-90 transition-opacity shadow-lg"
          >
            Apply for Admission
          </a>
        </div>
      </div>
    </section>
  )
} 