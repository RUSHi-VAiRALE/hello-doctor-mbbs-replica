import React from 'react';

const LawEntranceExams = () => {
  const examData = {
    ugExams: [
      { name: 'CLAT UG', body: 'Consortium of NLUs' },
      { name: 'AILET', body: 'National Law University, Delhi' },
      { name: 'LSAT-India', body: 'Pearson VUE' },
      { name: 'MHCET Law', body: 'Directorate of Higher Education, Mumbai' }
    ],
    examDates: [
      { name: 'CLAT 2026', date: 'First Week of December 2025' },
      { name: 'AILET 2026', date: 'December 2025' },
      { name: 'SLAT 2026', date: 'December 2025' },
      { name: 'LSAT India', date: 'January 2025 and May 2025' }
    ],
    studyMaterials: [
      { name: 'CLAT Complete Module Set of 30', link: '#' },
      { name: 'CLAT Complete Quantitative Aptitude Module Set of 11', link: '#' },
      { name: 'CLAT Complete Legal Reasoning Module Set of 16', link: '#' },
      { name: 'CLAT & AILET 10 Previous Years Solved Papers', link: '#' }
    ],
    preparationTips: [
      'Familiarize yourself with the exam format and question types.',
      'Concentrate on core subjects like General Knowledge, Legal Aptitude, and Logical Reasoning.',
      'Practice solving previous years\' papers and taking mock tests.',
      'Stay updated with national and international current affairs.',
      'Develop a strong understanding of legal principles and problem-solving techniques.'
    ],
    eligibilityCriteria: [
      {
        title: 'For UG Courses',
        requirement: 'Must have completed class 12th or equivalent with a minimum of 50% aggregate marks.'
      },
      {
        title: 'For PG Courses',
        requirement: 'Must have a Bachelor\'s Degree in Law with an aggregate of 45% in the qualifying university exam.'
      }
    ]
  };

  const TableComponent = ({ headers, data, columns }) => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-3 text-sm">
                  {column === 'link' ? (
                    <a href={item[column]} className="text-blue-600 hover:text-blue-800">
                      Click Here
                    </a>
                  ) : (
                    item[column]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Law Entrance Exams 2025-26
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            What is Law?
          </h2>
          <p className="text-gray-600">
            A Law Entrance Exam is a standardized test used to assess the knowledge, skills, 
            and aptitude of candidates seeking admission to law schools for undergraduate or 
            postgraduate programs...
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Top Law Entrance Exams for UG Courses
          </h2>
          <TableComponent 
            headers={['Exam Name', 'Conducting Body']}
            data={examData.ugExams}
            columns={['name', 'body']}
          />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Eligibility Criteria
          </h2>
          <div className="space-y-4">
            {examData.eligibilityCriteria.map((criteria, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {criteria.title}
                </h3>
                <p className="text-gray-600">{criteria.requirement}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Exam Dates 2025-26
          </h2>
          <TableComponent 
            headers={['Exam', 'Date']}
            data={examData.examDates}
            columns={['name', 'date']}
          />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Study Materials
          </h2>
          <TableComponent 
            headers={['Study Material', 'Link']}
            data={examData.studyMaterials}
            columns={['name', 'link']}
          />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Preparation Tips
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {examData.preparationTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default LawEntranceExams;