// import React from 'react';
// import LawEntranceExams from '@/components/courses/LawEntranceExams';

// // CUET-LAW exam data
// const cuetLawData = {
//   heroTitle: "Master CUET-LAW with Expert Coaching at CLATians",
//   heroSubtitle: "Your Pathway to Prestigious Law Universities",
//   introduction: [
//     "The Common University Entrance Test for Law (CUET-LAW) serves as the gateway to India's renowned central and state law universities. This comprehensive examination evaluates your proficiency in General Test, Domain-specific Test, and Language Test. At CLATians, we provide specialized CUET-LAW coaching designed by legal education experts to transform aspirants into successful law professionals.",
//     "Our CUET-LAW preparation programs are meticulously structured to address individual learning needs, helping you master the exam and secure admission to your dream law school."
//   ],
//   whyChooseTitle: "Why Choose CLATians for CUET-LAW?",
//   whyChoosePoints: [
//     "Specialized CUET-LAW faculty",
//     "Comprehensive study materials",
//     "Computer-Based Test practice",
//     "Proven success record"
//   ],
//   eligibility: {
//     title: "Understanding CUET-LAW Eligibility Requirements",
//     headers: ["Program Level", "Required Qualifications", "Minimum Marks"],
//     data: [
//       {
//         program: "UG Law Programs",
//         qualifications: "Completed Class 12th examination",
//         marks: "Requirements vary by university (typically 45-50% for General category)"
//       },
//       {
//         program: "Integrated Law Programs",
//         qualifications: "Completed Class 12th examination",
//         marks: "Requirements vary by university (typically 45-50% for General category)"
//       }
//     ],
//     footer: "Verify specific university requirements before enrolling in our specialized coaching programs."
//   },
//   examStructure: {
//     title: "CUET-LAW Exam Structure: Know What to Expect",
//     headers: ["Section", "Components", "Question Type", "Examination Duration"],
//     data: [
//       {
//         section: "Section IA & IB: Language",
//         components: "Reading comprehension, Verbal ability",
//         questionType: "MCQs",
//         duration: "Approximately 45-60 minutes"
//       },
//       {
//         section: "Section II: Domain Knowledge",
//         components: "Legal aptitude, General Knowledge",
//         questionType: "MCQs",
//         duration: "Approximately 45-60 minutes"
//       },
//       {
//         section: "Section III: General Test",
//         components: "General mental ability, Reasoning, Quantitative aptitude",
//         questionType: "MCQs",
//         duration: "Approximately 60 minutes"
//       }
//     ],
//     notes: [
//       "Computer-based test format",
//       "Most questions are Multiple Choice Questions (MCQs)",
//       "Negative marking applies for incorrect answers",
//       "Total duration: Approximately 3-4 hours"
//     ],
//     notesFooter: "This understanding helps you develop effective time management strategies during your preparation."
//   },
//   syllabus: {
//     title: "Comprehensive CUET-LAW Syllabus Coverage",
//     data: [
//       {
//         section: "Language Test",
//         topics: "Reading comprehension, vocabulary, grammar, verbal ability, language proficiency"
//       },
//       {
//         section: "Domain Knowledge",
//         topics: "Legal aptitude, legal reasoning, legal awareness, current legal affairs, Constitution of India basics"
//       },
//       {
//         section: "General Test",
//         topics: "Logical and analytical reasoning, numerical ability, quantitative techniques, data interpretation"
//       }
//     ],
//     footer: "Our expert faculty ensures complete mastery of the CUET-LAW syllabus through structured learning modules."
//   },
//   strategicApproach: {
//     title: "Strategic CUET-LAW Preparation Approach",
//     intro: "Follow these proven strategies to maximize your CUET-LAW success potential:",
//     strategies: [
//       {
//         title: "Master the Exam Framework",
//         description: "Thoroughly analyze the CUET-LAW syllabus and understand examination patterns to develop targeted preparation strategies."
//       },
//       {
//         title: "Implement a Disciplined Study Schedule",
//         description: "Create a balanced timetable covering all sections, with additional focus on challenging areas through our personalized study plans."
//       },
//       {
//         title: "Regular Assessment through Mock Tests",
//         description: "Participate in our comprehensive mock tests that simulate actual exam conditions, helping you evaluate progress and refine time management skills."
//       },
//       {
//         title: "Stay Current with Legal Developments",
//         description: "Follow our current affairs digest to remain updated on relevant legal and general developments crucial for the examination."
//       },
//       {
//         title: "Develop Effective Time Management",
//         description: "Master time allocation techniques through our specialized workshops, particularly beneficial for the computer-based test format."
//       },
//       {
//         title: "Learn from Expert Mentors",
//         description: "Benefit from our experienced faculty who provide structured guidance, proven strategies, and premium study resources."
//       }
//     ]
//   },
//   whyWeStandApart: {
//     title: "Why CLATians Stands Apart for CUET-LAW Preparation",
//     intro: "Our success record speaks volumes about our coaching excellence:",
//     points: [
//       {
//         title: "Specialized CUET-LAW Faculty",
//         description: "Instruction from legal educators and entrance exam experts who understand the nuances of the CUET-LAW pattern."
//       },
//       {
//         title: "Comprehensive Study Resources",
//         description: "Access to meticulously crafted study materials covering all CUET-LAW topics with practice questions."
//       },
//       {
//         title: "Computer-Based Test Practice",
//         description: "Regular CBT practice tests designed to mirror actual examination conditions."
//       },
//       {
//         title: "Proven Success Rate",
//         description: "Consistent record of students securing admissions to premier law universities."
//       }
//     ]
//   },
//   learningOptions: {
//     title: "Flexible Learning Options at CLATians",
//     headers: ["Program Type", "Ideal For", "Key Features"],
//     data: [
//       {
//         type: "Regular Classroom Program",
//         idealFor: "Full-time aspirants",
//         features: "Daily interactive sessions, comprehensive coverage, continuous doubt resolution, regular assessment"
//       },
//       {
//         type: "Weekend Intensive Program",
//         idealFor: "Working professionals & school students",
//         features: "Concentrated weekend sessions, focused topic coverage, specialized practice materials"
//       },
//       {
//         type: "Accelerated Revision Course",
//         idealFor: "Late starters & final preparation",
//         features: "Rapid syllabus review, strategic shortcuts, intensive mock testing, personalized feedback"
//       },
//       {
//         type: "Digital Learning Platform",
//         idealFor: "Remote learners & flexibility seekers",
//         features: "Live online classes, recorded sessions, virtual doubt clearing, digital practice resources"
//       }
//     ]
//   },
//   feeStructure: {
//     title: "Affordable Excellence: Fee Structure",
//     description: "CLATians offers competitive pricing for all CUET-LAW coaching programs with flexible payment options. Our merit scholarships make quality coaching accessible to deserving students."
//   },
//   successStories: {
//     title: "Success Stories: From CLATians to Law Universities",
//     stories: [
//       {
//         name: "Vikram Singh",
//         institution: "Delhi University's Law Faculty",
//         testimonial: "CLATians' focused CUET-LAW preparation and CBT practice sessions were crucial in securing my admission to Delhi University's Law Faculty."
//       },
//       {
//         name: "Nandini Reddy",
//         institution: "CUET-LAW Success",
//         testimonial: "The domain knowledge preparation at CLATians gave me the edge I needed to excel in the CUET-LAW examination."
//       }
//     ]
//   },
//   faqs: {
//     title: "Common Questions About CUET-LAW Preparation",
//     questions: [
//       {
//         question: "How is CUET-LAW different from CLAT?",
//         answer: "CUET-LAW is conducted by the National Testing Agency (NTA) for admission to central and state universities offering law programs, while CLAT is specifically for National Law Universities. Our comparative analysis helps you understand key differences."
//       },
//       {
//         question: "When should I begin CUET-LAW preparation?",
//         answer: "We recommend 6-8 months of dedicated preparation. However, our accelerated programs can accommodate shorter timeframes."
//       },
//       {
//         question: "Is online CUET-LAW coaching effective?",
//         answer: "Absolutely! Our digital learning platform provides comprehensive preparation with CBT simulation, live classes, and interactive doubt-clearing."
//       },
//       {
//         question: "How can I improve my performance in the Domain Knowledge section?",
//         answer: "Regular practice with our legal aptitude modules, consistent current affairs updates, and focused improvement through our targeted question banks."
//       },
//       {
//         question: "Are scholarship opportunities available?",
//         answer: "Yes, we offer merit-based scholarships to deserving candidates. Contact our admissions team for details."
//       }
//     ]
//   },
//   cta: {
//     title: "Begin Your CUET-LAW Journey with CLATians Today",
//     description: "Ready to transform your law school aspirations into reality? Join CLATians and experience the difference that expert CUET-LAW coaching makes.",
//     primaryButton: "Contact Our Counselors",
//     secondaryButton: "Enroll Now"
//   },
//   footer: "CLATians: Building Legal Minds, Creating Future Leaders"
// };

// export default function CuetLawPage() {
//   return (
//     <main>
//       <LawEntranceExams examData={cuetLawData} />
//     </main>
//   );
// }
