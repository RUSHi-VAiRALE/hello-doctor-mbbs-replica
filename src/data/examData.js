export const examData = {
  id: 'clat',
  title: 'A Comprehensive Guide to Common Law Admission Test (CLAT)',
  shortTitle: 'CLAT',
  description: 'Your Gateway to National Law Universities',
  overview: 'The Common Law Admission Test (CLAT) is a national-level Law Entrance Examination in India for admission to undergraduate (UG) and postgraduate (PG) law programs offered by 26 National Law Universities (NLUs). Established in 2008, CLAT has become the premier law entrance examination in India, determining admissions to approximately 3000+ seats in these prestigious institutions annually.',
  
  updates: [
    { date: 'May 2025', description: 'CLAT 2026 notification expected to be released' },
    { date: 'Mid-July 2025', description: 'CLAT 2025 final admission lists released by all participating NLUs' },
    { date: 'January 20, 2025', description: 'Third CLAT 2025 counseling round completed' },
    { date: 'January 5, 2025', description: 'Second CLAT 2025 counseling round completed' },
    { date: 'December 28, 2024', description: 'First CLAT 2025 counseling round initiated' },
    { date: 'December 22, 2024', description: 'CLAT 2025 results declared; cutoffs announced for all NLUs' },
    { date: 'December 8, 2024', description: 'CLAT 2025 examination successfully conducted' },
    { date: 'November 30, 2024', description: 'CLAT 2025 admit cards released for download' }
  ],

  patterns: [
    {
      title: 'CLAT UG Pattern',
      duration: '2 hours',
      mode: 'offline (pen and paper)',
      sections: [
        { name: 'English Language', questions: '30-40', marksPerQuestion: 1, totalMarks: '30-40' },
        { name: 'Current Affairs & GK', questions: '30-40', marksPerQuestion: 1, totalMarks: '30-40' },
        { name: 'Legal Reasoning', questions: '25-35', marksPerQuestion: 1, totalMarks: '25-35' },
        { name: 'Logical Reasoning', questions: '25-35', marksPerQuestion: 1, totalMarks: '25-35' },
        { name: 'Quantitative Techniques', questions: '10-15', marksPerQuestion: 1, totalMarks: '10-15' }
      ],
      markingScheme: [
        '1 mark awarded for each correct answer',
        '0.25 marks deducted for each incorrect answer (negative marking)',
        'No marks deducted for unattempted questions'
      ]
    },
    {
      title: 'CLAT PG Pattern',
      duration: '2 hours',
      mode: 'offline (pen and paper)',
      sections: [
        { name: 'Constitutional Law', questions: '25-30', marksPerQuestion: 1, totalMarks: '25-30' },
        { name: 'Jurisprudence', questions: '10-15', marksPerQuestion: 1, totalMarks: '10-15' },
        { name: 'Other Law Subjects', questions: '45-50', marksPerQuestion: 1, totalMarks: '45-50' },
        { name: 'Current Affairs & GK', questions: '25-30', marksPerQuestion: 1, totalMarks: '25-30' }
      ],
      markingScheme: [
        '1 mark awarded for each correct answer',
        '0.25 marks deducted for each incorrect answer (negative marking)',
        'No marks deducted for unattempted questions'
      ]
    }
  ],

  eligibility: [
    {
      title: 'For CLAT UG',
      criteria: [
        'Candidates must have passed or be appearing in the final year of Class 12 (10+2) or equivalent examination',
        'Minimum of 45% marks (40% for SC/ST/OBC/PWD categories)',
        'No upper age limit'
      ]
    },
    {
      title: 'For CLAT PG',
      criteria: [
        'Candidates must have completed an LLB degree or be in the final year of the LLB program',
        'Minimum 50% marks in LLB (45% for SC/ST/OBC/PWD categories)'
      ]
    }
  ],

  syllabus: [
    {
      title: 'CLAT UG Syllabus',
      subjects: [
        {
          name: 'English Language',
          topics: [
            'Reading comprehension',
            'Grammar and usage',
            'Vocabulary',
            'Verbal reasoning'
          ]
        },
        {
          name: 'Current Affairs & GK',
          topics: [
            'Static GK (History, Geography, Economics, Polity, etc.)',
            'Current events of national and international importance',
            'Business and economy news',
            'Legal developments'
          ]
        },
        {
          name: 'Legal Reasoning',
          topics: [
            'Study of law and legal principles',
            'Legal propositions and application to factual scenarios',
            'Understanding legal precedents and their applications'
          ]
        },
        {
          name: 'Logical Reasoning',
          topics: [
            'Logical deduction',
            'Analogy',
            'Blood relations',
            'Sequences and series',
            'Analytical reasoning',
            'Coding-decoding'
          ]
        },
        {
          name: 'Quantitative Techniques',
          topics: [
            'Basic mathematics',
            'Numerical ability',
            'Data interpretation',
            'Elementary algebra',
            'Statistical analysis'
          ]
        }
      ]
    },
    {
      title: 'CLAT PG Syllabus',
      subjects: [
        {
          name: 'Constitutional Law',
          topics: [
            'Fundamental rights and duties',
            'Directive principles',
            'Constitutional amendments',
            'Federal structure'
          ]
        },
        {
          name: 'Jurisprudence',
          topics: [
            'Legal theories',
            'Natural law',
            'Legal positivism',
            'Sociological jurisprudence'
          ]
        },
        {
          name: 'Other Law Subjects',
          topics: [
            'Criminal Law',
            'Contract Law',
            'Tort Law',
            'Family Law',
            'Property Law',
            'Company Law',
            'Public International Law',
            'Tax Law',
            'Environmental Law'
          ]
        }
      ]
    }
  ],

  applicationSteps: [
    {
      title: 'Registration',
      description: 'Create an account on the official CLAT website'
    },
    {
      title: 'Form Filling',
      description: 'Complete the online application form with personal, academic, and contact details'
    },
    {
      title: 'Document Upload',
      description: 'Upload photograph, signature, and required documents as per specifications'
    },
    {
      title: 'Fee Payment',
      description: 'Pay the application fee online through credit/debit card, net banking, or UPI'
    },
    {
      title: 'Confirmation',
      description: 'Download and print the completed application form for future reference'
    }
  ],

  applicationFees: [
    {
      category: 'General/OBC/PWD/NRI/OCI/PIO',
      amount: '4000'
    },
    {
      category: 'SC/ST/BPL',
      amount: '3500'
    }
  ],

  importantDates: [
    { event: 'Application Start', date: 'September 2024' },
    { event: 'Application Deadline', date: 'November 2024' },
    { event: 'Admit Card Release', date: 'December 2024' },
    { event: 'Exam Date', date: 'First/Second week of December 2024' },
    { event: 'Result Declaration', date: 'Last week of December 2024' },
    { event: 'Counseling Process', date: 'January-February 2025' }
  ],

  universities: [
    
  {
    "rank": 1,
    "name": "National Law School of India University (NLSIU)",
    "location": "Bangalore, Karnataka",
    "established": 1987,
    "website": "www.nls.ac.in"
  },
  {
    "rank": 2,
    "name": "National Academy of Legal Studies and Research (NALSAR)",
    "location": "Hyderabad, Telangana",
    "established": 1998,
    "website": "www.nalsar.ac.in"
  },
  {
    "rank": 3,
    "name": "West Bengal National University of Juridical Sciences (WBNUJS)",
    "location": "Kolkata, West Bengal",
    "established": 1999,
    "website": "www.nujs.edu"
  },
  {
    "rank": 4,
    "name": "National Law University, Delhi (NLU Delhi)",
    "location": "New Delhi",
    "established": 2008,
    "website": "nludelhi.ac.in"
  },
  {
    "rank": 5,
    "name": "National Law Institute University (NLIU)",
    "location": "Bhopal, Madhya Pradesh",
    "established": 1997,
    "website": "www.nliu.ac.in"
  },
  {
    "rank": 6,
    "name": "Gujarat National Law University (GNLU)",
    "location": "Gandhinagar, Gujarat",
    "established": 2003,
    "website": "www.gnlu.ac.in"
  },
  {
    "rank": 7,
    "name": "Rajiv Gandhi National University of Law (RGNUL)",
    "location": "Patiala, Punjab",
    "established": 2006,
    "website": "www.rgnul.ac.in"
  },
  {
    "rank": 8,
    "name": "Hidayatullah National Law University (HNLU)",
    "location": "Raipur, Chhattisgarh",
    "established": 2003,
    "website": "www.hnlu.ac.in"
  },
  {
    "rank": 9,
    "name": "Dr. Ram Manohar Lohiya National Law University (RMLNLU)",
    "location": "Lucknow, Uttar Pradesh",
    "established": 2005,
    "website": "www.rmlnlu.ac.in"
  },
  {
    "rank": 10,
    "name": "National University of Advanced Legal Studies (NUALS)",
    "location": "Kochi, Kerala",
    "established": 2005,
    "website": "www.nuals.ac.in"
  },
  {
    "rank": 11,
    "name": "Chanakya National Law University (CNLU)",
    "location": "Patna, Bihar",
    "established": 2006,
    "website": "www.cnlu.ac.in"
  },
  {
    "rank": 12,
    "name": "National Law University Odisha (NLUO)",
    "location": "Cuttack, Odisha",
    "established": 2009,
    "website": "www.nluo.ac.in"
  },
  {
    "rank": 13,
    "name": "National Law University and Judicial Academy (NLUJA)",
    "location": "Guwahati, Assam",
    "established": 2010,
    "website": "www.nluassam.ac.in"
  },
  {
    "rank": 14,
    "name": "National University of Study and Research in Law (NUSRL)",
    "location": "Ranchi, Jharkhand",
    "established": 2010,
    "website": "www.nusrlranchi.ac.in"
  },
  {
    "rank": 15,
    "name": "Tamil Nadu National Law University (TNNLU)",
    "location": "Tiruchirappalli, Tamil Nadu",
    "established": 2012,
    "website": "www.tnnlu.ac.in"
  },
  {
    "rank": 16,
    "name": "Maharashtra National Law University, Mumbai (MNLU Mumbai)",
    "location": "Mumbai, Maharashtra",
    "established": 2014,
    "website": "www.mnlumumbai.edu.in"
  },
  {
    "rank": 17,
    "name": "Maharashtra National Law University, Nagpur (MNLU Nagpur)",
    "location": "Nagpur, Maharashtra",
    "established": 2015,
    "website": "www.nlunagpur.ac.in"
  },
  {
    "rank": 18,
    "name": "Maharashtra National Law University, Aurangabad (MNLU Aurangabad)",
    "location": "Aurangabad, Maharashtra",
    "established": 2017,
    "website": "www.mnlua.ac.in"
  },
  {
    "rank": 19,
    "name": "Himachal Pradesh National Law University (HPNLU)",
    "location": "Shimla, Himachal Pradesh",
    "established": 2016,
    "website": "www.hpnlu.ac.in"
  },
  {
    "rank": 20,
    "name": "Dharmashastra National Law University (DNLU)",
    "location": "Jabalpur, Madhya Pradesh",
    "established": 2018,
    "website": "www.mpdnlu.ac.in"
  },
  {
    "rank": 21,
    "name": "Dr. B.R. Ambedkar National Law University (DBRANLU)",
    "location": "Sonipat, Haryana",
    "established": 2019,
    "website": "www.dbranlu.ac.in"
  },
  {
    "rank": 22,
    "name": "National Law University, Tripura (NLUT)",
    "location": "Agartala, Tripura",
    "established": 2020,
    "website": "www.nlutripura.ac.in"
  },
  {
    "rank": 23,
    "name": "Uttaranchal University of Law (UUL)",
    "location": "Dehradun, Uttarakhand",
    "established": 2020,
    "website": "www.uttarakhanduniversity.ac.in"
  },
  {
    "rank": 24,
    "name": "Rajasthan National Law University (RNLU)",
    "location": "Jodhpur, Rajasthan",
    "established": 2001,
    "website": "www.rmlnlu.ac.in"
  }
    // ... Add all universities
  ],

  preparationTips: [
    {
      name: 'English Language',
      icon: 'bi-book',
      tips: [
        'Read newspapers, magazines, and literary works daily',
        'Practice reading comprehension regularly',
        'Improve vocabulary through word lists and flashcards',
        'Solve previous years\' papers for grammar and vocabulary questions'
      ]
    },
    {
      name: 'Current Affairs & GK',
      icon: 'bi-globe',
      tips: [
        'Follow a daily news routine covering major publications',
        'Create monthly compilations of important events',
        'Study static GK topics systematically',
        'Focus on legal developments and landmark judgments'
      ]
    },
    // ... Add all subjects
  ],

  strategies: [
    {
      title: 'Mock Tests',
      description: 'Take regular mock tests under timed conditions'
    },
    {
      title: 'Section-wise Analysis',
      description: 'Identify strengths and weaknesses in each section'
    },
    {
      title: 'Time Management',
      description: 'Develop a strategy for allocating time to each section'
    },
    {
      title: 'Revision Schedule',
      description: 'Create a systematic revision plan for all topics'
    },
    {
      title: 'Error Analysis',
      description: 'Maintain an error log to avoid repeating mistakes'
    }
  ],

  resources: [
    {
      title: 'Official Website',
      description: 'CLAT Consortium Website',
      link: 'https://consortiumofnlus.ac.in'
    },
    {
      title: 'Sample Papers',
      description: 'Official CLAT sample papers and previous year questions',
      link: '#'
    },
    {
      title: 'Study Material',
      description: 'Recommended books and online resources',
      link: '#'
    }
  ]
} 