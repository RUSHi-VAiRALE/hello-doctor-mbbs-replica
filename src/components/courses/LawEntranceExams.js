import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';


const LawEntranceExams = ({ examData }) => {
  
  // Table component for responsive tables
  const ResponsiveTable = ({ title, headers, data, cellRenderer }) => (
    <div className="mb-8">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-orange-100 to-orange-50">
            <tr>
              {headers.map((header, index) => (
                <th 
                  key={index} 
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-orange-50 transition-colors">
                {cellRenderer(row, rowIndex)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-[#E7EDFF] py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {examData.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-orange-600 font-semibold">
            {examData.heroSubtitle}
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-12">
          <div className="md:flex items-start gap-8">
            <div className="md:w-2/3">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {examData.introduction}
                </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <div className="bg-orange-100 rounded-lg p-4 border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{examData.whyChooseTitle}</h3>
                <ul className="text-gray-700 space-y-2">
                  {examData.whyChoosePoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Requirements */}
        {examData.eligibility && (
          <>
            <ResponsiveTable
              title={examData.eligibility.title}
              headers={examData.eligibility.headers}
              data={examData.eligibility.data}
              cellRenderer={(row) => (
                <>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.program}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {row.qualifications}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-pre-line">
                    {row.marks}
                  </td>
                </>
              )}
            />
            <p className="text-gray-700 mb-12">
              {examData.eligibility.footer}
            </p>
          </>
        )}

        {/* Exam Structure */}
        {examData.examStructure && (
          <>
            <ResponsiveTable
              title={examData.examStructure.title}
              headers={examData.examStructure.headers}
              data={examData.examStructure.data}
              cellRenderer={(row) => (
                <>
                  {Object.keys(row).map((key, index) => (
                    <td key={index} className="px-4 py-4 text-sm text-gray-700">
                      {index === 0 ? (
                        <span className="font-medium text-gray-900">{row[key]}</span>
                      ) : (
                        row[key]
                      )}
                    </td>
                  ))}
                </>
              )}
            />

            <div className="bg-[#FFEDD5] rounded-lg p-6 mb-12 border-l-4 border-[#F97316]">
              <h4 className="font-semibold text-gray-800 mb-2">Important Notes:</h4>
              <ul className="text-gray-700 space-y-2">
                {examData.examStructure.notes.map((note, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#F97316] mr-2">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-700">
                {examData.examStructure.notesFooter}
              </p>
            </div>
          </>
        )}

        {/* Syllabus Coverage */}
        {examData.syllabus && (
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              {examData.syllabus.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {examData.syllabus.data.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.section}</h3>
                  <p className="text-gray-700">{item.topics}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-700">
              {examData.syllabus.footer}
            </p>
          </div>
        )}

        {/* Strategic Approach */}
        {examData.strategicApproach && (
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              {examData.strategicApproach.title}
            </h2>
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <p className="text-gray-700 mb-6">
                {examData.strategicApproach.intro}
              </p>
              <div className="space-y-6">
                {examData.strategicApproach.strategies.map((strategy, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{index + 1}. {strategy.title}</h3>
                    <p className="text-gray-700 ml-6">
                      • {strategy.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Why We Stand Apart */}
        {examData.whyWeStandApart && (
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              {examData.whyWeStandApart.title}
            </h2>
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-6 md:p-8">
              <p className="text-gray-800 mb-6">
                {examData.whyWeStandApart.intro}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {examData.whyWeStandApart.points.map((point, index) => (
                  <div key={index} className="bg-white rounded-lg p-5 shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{point.title}</h3>
                    <p className="text-gray-700">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Learning Options */}
        {examData.learningOptions && (
          <ResponsiveTable
            title={examData.learningOptions.title}
            headers={examData.learningOptions.headers}
            data={examData.learningOptions.data}
            cellRenderer={(row) => (
              <>
                {Object.keys(row).map((key, index) => (
                  <td key={index} className="px-4 py-4 text-sm text-gray-700">
                    {index === 0 ? (
                      <span className="font-medium text-gray-900">{row[key]}</span>
                    ) : (
                      row[key]
                    )}
                  </td>
                ))}
              </>
            )}
          />
        )}

        {/* Fee Structure */}
        {examData.feeStructure && (
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              {examData.feeStructure.title}
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700">
                {examData.feeStructure.description}
              </p>
            </div>
          </div>
        )}

        {/* Success Stories */}
        {examData.successStories && (
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              {examData.successStories.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {examData.successStories.stories.map((story, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.institution}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "{story.testimonial}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {examData.faqs && (
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              {examData.faqs.title}
            </h2>
            <div className="space-y-4">
              {examData.faqs.questions.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{index + 1}. {faq.question}</h3>
                  <p className="text-gray-700 ml-6">
                    • {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        {/* <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-8 text-white text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {examData.cta.title}
          </h2>
          <p className="mb-6 text-white/90">
            {examData.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-orange-600 hover:bg-orange-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              {examData.cta.primaryButton}
            </button>
            <button className="bg-orange-600 text-white hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition-colors border border-white/30">
              {examData.cta.secondaryButton}
            </button>
          </div>
        </div>

        Footer
        <div className="text-center text-gray-600 border-t border-gray-200 pt-8">
          <p>{examData.footer}</p>
        </div> */}
      </div>
    </div>
  );
};


export default LawEntranceExams;