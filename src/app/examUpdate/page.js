import ExamUpdates from "@/components/examUpdates/examUpdate"

const examUpdates = {
    title : "All Law Entrance Exam Updates & Notifications",
    description : "Get real-time alerts on exam schedules, syllabus updates, and results and updates.",
    updates : [
        [
    { date: 'May 2025', description: 'CLAT 2026 notification expected to be released' },
    { date: 'Mid-July 2025', description: 'CLAT 2025 final admission lists released by all participating NLUs' },
    { date: 'January 20, 2025', description: 'Third CLAT 2025 counseling round completed' },
    { date: 'January 5, 2025', description: 'Second CLAT 2025 counseling round completed' },
    { date: 'December 28, 2024', description: 'First CLAT 2025 counseling round initiated' },
    { date: 'December 22, 2024', description: 'CLAT 2025 results declared; cutoffs announced for all NLUs' },
    { date: 'December 8, 2024', description: 'CLAT 2025 examination successfully conducted' },
    { date: 'November 30, 2024', description: 'CLAT 2025 admit cards released for download' }
  ],[
    { "date": "March 10, 2025", "description": "Initial guide published with tentative information based on previous years' patterns." }
  ],
  [
    { "date": "March 8, 2025", "description": "Initial guide published with tentative information based on previous years' patterns." }
  ],
  [
    { "date": "March 2025", "description": "Digital Testing Format: LSAT-India has fully transitioned to computer-based testing at designated centers." },
    { "date": "March 2025", "description": "Additional Test Dates: Starting 2025, LSAT-India is offering more flexible testing options throughout the year." },
    { "date": "March 2025", "description": "Score Validity: LSAT-India scores are now valid for two years from the test date." },
    { "date": "March 2025", "description": "New Participating Law Schools: Several additional law institutions have begun accepting LSAT-India scores." }
  ],
  [
    { date: 'March 5, 2025', description: 'NTA announces the tentative schedule for CUET Law 2025-26 admissions. Applications expected to open by end of March.' },
    { date: 'February 28, 2025', description: 'Two new Central Universities added to the list of participating institutions.' },
    { date: 'February 15, 2025', description: 'Revised syllabus announced for the Legal Reasoning section.' },
    { date: 'January 30, 2025', description: 'NTA launches new practice portal with free mock tests.' }
  ],[
    { "date": "March 10, 2025", "description": "Initial guide published with tentative information based on previous years' patterns." }
  ]
    ]
}
export default function ExamUpdate (){
    return (
        <>
        <ExamUpdates exam={examUpdates}/>
    </>
    )
}