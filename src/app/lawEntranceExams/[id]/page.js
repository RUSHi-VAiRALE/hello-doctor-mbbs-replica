'use client'
import ExamDetails from "@/components/ExamDetails";
import { useParams } from "next/navigation";
import {examData} from '@/data/examData'
// const examData = [
//   {
//     title: "Common University Entrance Test (CUET)",
//     shortTitle: "CUET",
//     description: "Your Gateway to Prestigious Universities! Explore the exam details, preparation tips, and expert strategies.",
//     features: [
//       {
//         icon: "bi-laptop",
//         name: "Exam Mode",
//         details: "Computer-Based Test (CBT) conducted online"
//       },
//       {
//         icon: "bi-clock-history",
//         name: "Duration",
//         details: "2-3 hours (varies based on selected subjects)"
//       },
//       {
//         icon: "bi-book",
//         name: "Sections",
//         details: "Language Test, Domain Subjects, General Test"
//       },
//       {
//         icon: "bi-people",
//         name: "Eligibility",
//         details: "12th grade completion from recognized board"
//       }
//     ],
//     prepTips: [
//       {
//         icon: "bi-journal-text",
//         title: "Know the Syllabus",
//         description: "Understand the CUET exam pattern and syllabus before starting your preparation."
//       },
//       {
//         icon: "bi-lightbulb",
//         title: "Practice Mock Tests",
//         description: "Regular mock tests help improve speed and accuracy."
//       },
//       {
//         icon: "bi-calendar-check",
//         title: "Time Management",
//         description: "Allocate time wisely for each section to maximize performance."
//       }
//     ]
//   },
  
//   {
//     title: "Common Law Admission Test (CLAT)",
//     shortTitle: "CLAT",
//     description: "Your path to top National Law Universities in India!",
//     features: [
//       {
//         icon: "bi-laptop",
//         name: "Exam Mode",
//         details: "Online Computer-Based Test"
//       },
//       {
//         icon: "bi-clock",
//         name: "Duration",
//         details: "2 hours"
//       },
//       {
//         icon: "bi-journal",
//         name: "Pattern",
//         details: "150 MCQs from English, Legal Reasoning, Logical Reasoning, Quantitative Techniques"
//       },
//       {
//         icon: "bi-mortarboard",
//         name: "Eligibility",
//         details: "Minimum 45% in 12th (40% for SC/ST)"
//       }
//     ],
//     prepTips: [
//       {
//         icon: "bi-book",
//         title: "Master Legal Concepts",
//         description: "Focus on understanding basic legal principles and terminology."
//       },
//       {
//         icon: "bi-newspaper",
//         title: "Current Affairs",
//         description: "Stay updated with legal news and developments."
//       },
//       {
//         icon: "bi-graph-up",
//         title: "Practice Regularly",
//         description: "Solve previous year papers and mock tests."
//       }
//     ]
//   },

//   {
//     title: "All India Law Entrance Test (AILET)",
//     shortTitle: "AILET",
//     description: "Gateway to National Law University, Delhi!",
//     features: [
//       {
//         icon: "bi-pencil",
//         name: "Exam Mode",
//         details: "Offline pen-paper based test"
//       },
//       {
//         icon: "bi-clock",
//         name: "Duration",
//         details: "1.5 hours"
//       },
//       {
//         icon: "bi-list-check",
//         name: "Sections",
//         details: "English, Legal Aptitude, Mathematics, GK, Reasoning"
//       },
//       {
//         icon: "bi-person-check",
//         name: "Eligibility",
//         details: "12th pass with minimum 50% marks"
//       }
//     ],
//     prepTips : [
//       {
//         icon: "bi-bullseye",
//         title: "Focus on Basics",
//         description: "Strong foundation in fundamental concepts is crucial."
//       },
//       {
//         icon: "bi-clock-history",
//         title: "Speed & Accuracy",
//         description: "Practice to improve time management skills."
//       },
//       {
//         icon: "bi-journal-check",
//         title: "Mock Tests",
//         description: "Take regular mock tests to assess preparation."
//       }
//     ]
//   },{
//     "title": "Law School Admission Test (LSAT)",
//     "shortTitle": "LSAT",
//     "description": "Standardized test for law school admissions worldwide.",
//     "features": [
//       {
//         "icon": "bi-pencil",
//         "name": "Exam Mode",
//         "details": "Digital exam, can be taken at a test center or remotely."
//       },
//       {
//         "icon": "bi-clock",
//         "name": "Duration",
//         "details": "2 hours 20 minutes"
//       },
//       {
//         "icon": "bi-list-check",
//         "name": "Sections",
//         "details": "Analytical Reasoning, Logical Reasoning (2 sections), Reading Comprehension, Writing Sample"
//       },
//       {
//         "icon": "bi-person-check",
//         "name": "Eligibility",
//         "details": "No specific eligibility criteria, check law school requirements."
//       }
//     ],
//     "prepTips": [
//       {
//         "icon": "bi-bullseye",
//         "title": "Focus on Logical Skills",
//         "description": "Develop strong analytical and logical reasoning abilities."
//       },
//       {
//         "icon": "bi-book",
//         "title": "Practice Reading Comprehension",
//         "description": "Improve speed and accuracy in understanding complex texts."
//       },
//       {
//         "icon": "bi-journal-check",
//         "title": "Regular Mock Tests",
//         "description": "Simulate real exam conditions to enhance performance."
//       }
//     ]
//   },
//   {
//     "title": "Army Institute of Law Entrance Test (AIL-LET)",
//     "shortTitle": "AIL-LET",
//     "description": "Entrance exam for BA LL.B at Army Institute of Law, Mohali.",
//     "features": [
//       {
//         "icon": "bi-pencil",
//         "name": "Exam Mode",
//         "details": "Online computer-based test"
//       },
//       {
//         "icon": "bi-clock",
//         "name": "Duration",
//         "details": "2 hours"
//       },
//       {
//         "icon": "bi-list-check",
//         "name": "Sections",
//         "details": "Mental Ability, General Knowledge & Current Affairs, Law Aptitude, General English"
//       },
//       {
//         "icon": "bi-person-check",
//         "name": "Eligibility",
//         "details": "12th pass with at least 45% aggregate marks"
//       }
//     ],
//     "prepTips": [
//       {
//         "icon": "bi-bullseye",
//         "title": "Strengthen Legal Aptitude",
//         "description": "Understand basic legal principles and terminologies."
//       },
//       {
//         "icon": "bi-newspaper",
//         "title": "Stay Updated",
//         "description": "Read newspapers and journals for current affairs."
//       },
//       {
//         "icon": "bi-lightbulb",
//         "title": "Enhance Mental Ability",
//         "description": "Practice logical reasoning and analytical problems."
//       }
//     ]
//   },
//   {
//     "title": "Maharashtra Common Entrance Test for Law (MH CET-LAW)",
//     "shortTitle": "MH CET-LAW",
//     "description": "State-level entrance exam for 3-year and 5-year LL.B programs in Maharashtra.",
//     "features": [
//       {
//         "icon": "bi-pencil",
//         "name": "Exam Mode",
//         "details": "Online computer-based test"
//       },
//       {
//         "icon": "bi-clock",
//         "name": "Duration",
//         "details": "2 hours"
//       },
//       {
//         "icon": "bi-list-check",
//         "name": "Sections",
//         "details": "Legal Aptitude, General Knowledge & Current Affairs, Logical Reasoning, English, Mathematics"
//       },
//       {
//         "icon": "bi-person-check",
//         "name": "Eligibility",
//         "details": "5-year LL.B: 12th pass with 45% (40% for reserved categories). 3-year LL.B: Bachelor's degree with 45% (40% for reserved categories)."
//       }
//     ],
//     "prepTips": [
//       {
//         "icon": "bi-bullseye",
//         "title": "Develop Legal Reasoning",
//         "description": "Focus on legal propositions and principles."
//       },
//       {
//         "icon": "bi-newspaper",
//         "title": "Enhance General Knowledge",
//         "description": "Stay updated with national and international events."
//       },
//       {
//         "icon": "bi-lightbulb",
//         "title": "Practice Logical Reasoning",
//         "description": "Solve puzzles and reasoning questions regularly."
//       }
//     ]
//   }]
export default function LawEntranceExams() {
    const {id} = useParams();
    console.log(examData)
    return (
        <>
            <ExamDetails exam={examData}/>
        </>
    )
}

