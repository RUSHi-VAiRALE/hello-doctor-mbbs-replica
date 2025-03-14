export const examData = [
  {
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
},

{
  id: 'cuet',
  title: 'CUET Law Entrance Exam Guide: 5-Year and 3-Year Programs',
  shortTitle: 'CUET Law',
  description: 'Your Gateway to Central Universities Law Programs',
  overview: 'The Central University Entrance Test (CUET) for Law programs is a standardized examination for admission to 5-year integrated law programs (BA LLB, BBA LLB, BSc LLB) and 3-year LLB programs offered by various Central Universities across India. Organized by the National Testing Agency (NTA), CUET Law provides a single-window opportunity for students seeking admission to prestigious law universities without having to appear for multiple entrance examinations.CUET Law aims to standardize the admission process for law programs, ensuring a merit-based, transparent selection process that evaluates candidates on their aptitude for legal studies. The exam focuses on testing logical reasoning, legal aptitude, general knowledge, and language comprehension—skills essential for success in legal education.',

  updates: [
    { date: 'March 5, 2025', description: 'NTA announces the tentative schedule for CUET Law 2025-26 admissions. Applications expected to open by end of March.' },
    { date: 'February 28, 2025', description: 'Two new Central Universities added to the list of participating institutions.' },
    { date: 'February 15, 2025', description: 'Revised syllabus announced for the Legal Reasoning section.' },
    { date: 'January 30, 2025', description: 'NTA launches new practice portal with free mock tests.' }
  ],

  patterns: [
    {
      title: 'CUET 5-Year Program Pattern',
      duration: '3 hours',
      mode: 'Computer-Based Test (CBT)',
      sections: [
        { name: 'English Language', questions: '40', marksPerQuestion: 1, totalMarks: '40' },
        { name: 'Legal Reasoning', questions: '50', marksPerQuestion: 1, totalMarks: '50' },
        { name: 'General Knowledge & Current Affairs', questions: '40', marksPerQuestion: 1, totalMarks: '40' },
        { name: 'Logical Reasoning', questions: '40', marksPerQuestion: 1, totalMarks: '40' },
        { name: 'Quantitative Techniques', questions: '30', marksPerQuestion: 1, totalMarks: '30' }
      ],
      markingScheme: [
        '1 mark awarded for each correct answer',
        '0.25 marks deducted for each incorrect answer',
        'No marks deducted for unattempted questions'
      ]
    },
    {
      title: 'CUET 3-Year Program Pattern',
      duration: '3 hours',
      mode: 'Computer-Based Test (CBT)',
      sections: [
        { name: 'English Language', questions: '40', marksPerQuestion: 1, totalMarks: '40' },
        { name: 'Legal Reasoning', questions: '50', marksPerQuestion: 1, totalMarks: '50' },
        { name: 'General Knowledge & Current Affairs', questions: '50', marksPerQuestion: 1, totalMarks: '50' },
        { name: 'Logical Reasoning', questions: '40', marksPerQuestion: 1, totalMarks: '40' }
      ],
      markingScheme: [
        '1 mark awarded for each correct answer',
        '0.25 marks deducted for each incorrect answer',
        'No marks deducted for unattempted questions'
      ]
    }
  ],

  eligibility: [
    {
      title: 'For 5-Year Programs',
      criteria: [
        'Passed 10+2 or equivalent examination from a recognized board',
        '45% aggregate for General/OBC categories, 40% for SC/ST/PwD categories',
        'Maximum 20 years for General category (as of July 1 of the admission year). Relaxation of 5 years for SC/ST/PwD candidates'
      ]
    },
    {
      title: 'For 3-Year Programs',
      criteria: [
        'Completed Bachelor\'s degree (10+2+3 pattern)',
        '45% aggregate for General/OBC categories, 40% for SC/ST/PwD categories.',
        '•	No specific age limit (as per Bar Council of India guidelines, however, individual universities may have their own restrictions).'
      ]
    }
  ],

  syllabus: [
    {
      title: 'CUET Law Syllabus',
      subjects: [
        {
          name: 'English Language',
          topics: [
            'Reading Comprehension',
            'Vocabulary',
            'Grammar',
            'Sentence Correction',
            'Idioms and Phrases',
            'Synonyms and Antonyms',
            'Para Jumbles and Completion',
            'Fill in the Blanks',
            'Spotting Errors'
          ]
        },
        {
          name: 'Legal Reasoning',
          topics: [
            'Legal Maxims',
            'Legal Knowledge',
            'Legal Principles and Facts',
            'Indian Constitution',
            'Law of Contracts',
            'Criminal Law',
            'Law of Torts',
            'Family Law',
            'Legal Propositions'
          ]
        },{
  "name": "General Knowledge & Current Affairs",
  "topics": [
    "History of India",
    "Geography",
    "Indian Polity and Constitution",
    "Economics",
    "Science and Technology",
    "Current Events (National and International)",
    "Sports",
    "Books and Authors",
    "Art and Culture",
    "Awards and Recognitions"
  ]
},{
  "name": "Logical Reasoning",
  "topics": [
    "Analytical Reasoning",
    "Logical Sequences",
    "Blood Relations",
    "Direction Sense",
    "Series Completion",
    "Coding-Decoding",
    "Statements and Assumptions",
    "Syllogisms",
    "Logical Deduction",
    "Cause and Effect",
    "Analogies",
    "Strong and Weak Arguments"
  ]
},{
  "name": "Quantitative Techniques (Only for 5-Year Program)",
  "topics": [
    "Number System",
    "Percentages",
    "Profit and Loss",
    "Simple and Compound Interest",
    "Time, Speed, and Distance",
    "Work and Time",
    "Ratio and Proportion",
    "Averages",
    "Basic Algebra",
    "Data Interpretation"
  ]
}
        // ... Add other subjects similarly
      ]
    }
  ],

  applicationSteps: [
    {
      title: 'Registration',
      description: 'Visit cuet.nta.nic.in and register with basic details like name, email ID, and mobile number.'
    },
    {
      title: 'Form Filling',
      description: 'Complete the application with personal and academic details'
    },
    {
      title: 'Document Upload',
      description: 'Upload required documents and photographs like Passport-sized photograph (recent), Signature,Category certificate (if applicable) and PwD certificate (if applicable)'
    },
    {
      title: 'Center Selection',
      description: 'Choose preferred test centers (usually 3-4 options in order of preference).'
    },
    {
      title: 'Fee Payment',
      description: 'Pay application fee online through available payment methods'
    },{
      title : 'Confirmation',
      description : 'After successful payment, download and print the confirmation page for future reference.'
    }
  ],

  applicationFees: [
    {
      category: 'General/OBC',
      amount: '800-1000'
    },
    {
      category: 'SC/ST/PwD',
      amount: '400-500'
    }
  ],

  importantDates: [
    { event: 'Application Start', date: 'January-February' },
    { event: 'Application Deadline', date: 'March-April' },
    { event: 'Admit Card Release', date: '10-15 days before exam' },
    { event: 'Exam Date', date: 'May-June' },
    { event: 'Result Declaration', date: 'June-July' },
    { event: 'Counseling Process', date: 'July-August' }
  ],

  universities: [
  {
    "name": "Delhi University",
    "location": "Delhi",
    "department": "Faculty of Law",
    "website": "law.du.ac.in",
    "rank": 1,
    "established": 1924
  },
  {
    "name": "Banaras Hindu University",
    "location": "Varanasi, Uttar Pradesh",
    "department": "Faculty of Law",
    "website": "bhu.ac.in/law",
    "rank": 2,
    "established": 1916
  },
  {
    "name": "Jamia Millia Islamia",
    "location": "Delhi",
    "department": "Faculty of Law",
    "website": "jmi.ac.in/law",
    "rank": 3,
    "established": 1920
  },
  {
    "name": "The English and Foreign Languages University",
    "location": "Hyderabad, Telangana",
    "department": "Not Applicable",
    "website": "efluniversity.ac.in",
    "rank": 4,
    "established": 1958
  },
  {
    "name": "Aligarh Muslim University",
    "location": "Aligarh, Uttar Pradesh",
    "department": "Faculty of Law",
    "website": "amu.ac.in/department/law",
    "rank": 5,
    "established": 1875
  },
  {
    "name": "Visva-Bharati University",
    "location": "Santiniketan, West Bengal",
    "department": "Not Applicable",
    "website": "visvabharati.ac.in",
    "rank": 6,
    "established": 1921
  },
  {
    "name": "Central University of Gujarat",
    "location": "Gandhinagar, Gujarat",
    "department": "Not Applicable",
    "website": "cug.ac.in",
    "rank": 7,
    "established": 2009
  },
  {
    "name": "Central University of Kerala",
    "location": "Kasaragod, Kerala",
    "department": "Not Applicable",
    "website": "cukerala.ac.in",
    "rank": 8,
    "established": 2009
  },
  {
    "name": "Central University of Punjab",
    "location": "Bathinda, Punjab",
    "department": "Not Applicable",
    "website": "cup.edu.in",
    "rank": 9,
    "established": 2009
  },
  {
    "name": "Central University of Jharkhand",
    "location": "Ranchi, Jharkhand",
    "department": "Not Applicable",
    "website": "cuj.ac.in",
    "rank": 10,
    "established": 2009
  },
  {
    "name": "Central University of Rajasthan",
    "location": "Ajmer, Rajasthan",
    "department": "Not Applicable",
    "website": "curaj.ac.in",
    "rank": 11,
    "established": 2009
  }
],

  preparationTips: [
  {
    "name": "English Language",
    "tips": [
      "Read newspapers, magazines, and good books regularly",
      "Maintain a personal vocabulary diary",
      "Practice grammar exercises and reading comprehension passages",
      "Solve previous years' question papers"
    ]
  },
  {
    "name": "Legal Reasoning",
    "tips": [
      "Read about basic legal concepts and principles",
      "Study landmark judgments",
      "Practice application of legal principles to given situations",
      "Focus on understanding rather than memorizing"
    ]
  },
  {
    "name": "General Knowledge & Current Affairs",
    "tips": [
      "Read newspapers daily (print or digital)",
      "Follow reliable news websites and apps",
      "Maintain notes on important events",
      "Refer to standard GK books and yearbooks",
      "Subscribe to monthly GK magazines"
    ]
  },
  {
    "name": "Logical Reasoning",
    "tips": [
      "Practice puzzles and brain teasers",
      "Solve reasoning problems daily",
      "Understand logical patterns and techniques",
      "Time yourself while solving practice questions"
    ]
  },
  {
    "name": "Quantitative Techniques",
    "tips": [
      "Strengthen your basic mathematical concepts",
      "Practice calculation shortcuts",
      "Solve data interpretation problems regularly",
      "Focus on accuracy and speed"
    ]
  },
  {
    "name": "General Tips",
    "tips": [
      "Create a structured study plan with dedicated time for each section",
      "Take regular mock tests to simulate actual exam conditions",
      "Analyze your performance and work on weak areas",
      "Join a reliable coaching program like CLATians for specialized guidance",
      "Manage time effectively during the exam (allocate time to each section)",
      "Attempt questions strategically (attempt easy questions first)"
    ]
  }
]
,
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
      description: 'CUET Consortium Website',
      link: 'https://consortiumofnlus.ac.in'
    },
    {
      title: 'Sample Papers',
      description: 'Official CUET sample papers and previous year questions',
      link: '#'
    },
    {
      title: 'Study Material',
      description: 'Recommended books and online resources',
      link: '#'
    }
  ]
},
{
  "id": "lsat",
  "title": "LSAT (Law School Admission Test): A Comprehensive Guide for 5-Year Integrated Programs",
  "shortTitle": "LSAT",
  "description": "Your Gateway to Prestigious Law Institutions",
  "overview": "The Law School Admission Test (LSAT) is a standardized examination designed to assess key skills necessary for success in law school. For students interested in 5-year integrated law programs, the LSAT-India serves as a gateway to some of the most prestigious law institutions in the country.The LSAT evaluates critical reading, analytical reasoning, logical reasoning, and persuasive writing skills – all essential competencies for prospective law students. Unlike many other entrance exams, the LSAT doesn't test specific subject knowledge but rather focuses on skills that predict success in legal education.The 5-year integrated law programs in India (BA LLB, BBA LLB, BSc LLB) allow students to pursue law studies directly after completing their 12th standard education, making it an attractive option for those who have early clarity about their legal career aspirations.",
  
  "updates": [
    { "date": "March 2025", "description": "Digital Testing Format: LSAT-India has fully transitioned to computer-based testing at designated centers." },
    { "date": "March 2025", "description": "Additional Test Dates: Starting 2025, LSAT-India is offering more flexible testing options throughout the year." },
    { "date": "March 2025", "description": "Score Validity: LSAT-India scores are now valid for two years from the test date." },
    { "date": "March 2025", "description": "New Participating Law Schools: Several additional law institutions have begun accepting LSAT-India scores." }
  ],
  
  "eligibility": [
    {
      "title": "Academic Qualifications",
      "criteria": [
        "Completed or appearing in Class 12th (10+2) examination from a recognized board",
        "Minimum 45% aggregate marks in qualifying examination (40% for SC/ST categories)"
      ]
    },
    {
      "title": "Age Requirements",
      "criteria": [
        "No specific age limitations set by LSAT-India itself",
        "However, individual law schools may have their own age requirements (typically minimum 17 years)"
      ]
    },{
  "title": "Important Considerations",
  "criteria": [
    "Meeting LSAT eligibility doesn't guarantee admission to law schools",
    "Each participating law school may have additional eligibility requirements",
    "Candidates must check specific requirements of their target institutions"
  ]
},
    {
      "title": "Nationality",
      "criteria": [
        "Open to Indian nationals as well as NRIs, PIOs, and foreign nationals"
      ]
    }
  ],

  "patterns": [
    {
      "title": "LSAT-India Format",
      "duration": "2 hours and 20 minutes",
      "mode": "Digital (computer-based)",
      "sections": [
        { "name": "Reading Comprehension", "questions": "24-26", "marksPerQuestion": 1, "totalMarks": "24-26" },
        { "name": "Analytical Reasoning", "questions": "22-24", "marksPerQuestion": 1, "totalMarks": "22-24" },
        { "name": "Logical Reasoning - Section 1", "questions": "24-26", "marksPerQuestion": 1, "totalMarks": "24-26" },
        { "name": "Logical Reasoning - Section 2", "questions": "24-26", "marksPerQuestion": 1, "totalMarks": "24-26" }
      ],
      "markingScheme": [
        "+1 for each correct answer",
        "No negative marking for incorrect answers",
        "Raw scores are converted to LSAT-India score (percentile ranking)"
      ]
    }
  ],
  
  "syllabus": [
    {
      "title": "LSAT Syllabus",
      "subjects": [
        {
          "name": "Reading Comprehension",
          "topics": [
            "Complex Text Analysis",
            "Main Idea Identification",
            "Inference Drawing",
            "Author's Perspective",
            "Comparative Reading"
          ]
        },
        {
          "name": "Analytical Reasoning",
          "topics": [
            "Logic Games",
            "Grouping Problems",
            "Sequencing Problems",
            "Assignment Problems",
            "Hybrid Problems"
          ]
        },
        {
          "name": "Logical Reasoning",
          "topics": [
            "Argument Analysis",
            "Flaw Detection",
            "Strengthening/Weakening Arguments",
            "Assumption Identification",
            "Drawing Conclusions",
            "Resolving Paradoxes",
            "Principle Application"
          ]
        }
      ]
    }
  ],
  
  "applicationSteps": [
    {
      "title": "Create an Account",
      "description": "Visit the official LSAT-India website (lsatindia.in) and register with a valid email ID"
    },
    {
      "title": "Complete Profile",
      "description": "Fill in personal details, contact information, educational background and upload documents"
    },
    {
      "title": "Select Test Date and Center",
      "description": "Choose preferred test date from available options and select a test center based on your location"
    },
    {
      "title": "Pay Registration Fee",
      "description": "Pay approximately ₹3,800-4,500 via credit/debit card or net banking"
    },
    {
      "title": "Download Admit Card",
      "description": "Available approximately 7-10 days before the examination"
    }
  ],
  
  "applicationFees": [
    {
      "category": "Standard Fee",
      "amount": "₹3,800-4,500"
    }
  ],
  
  "importantDates": [
    { "event": "Registration Opens", "date": "November-December" },
    { "event": "Early Registration Deadline", "date": "January-February" },
    { "event": "Regular Registration Deadline", "date": "March-April" },
    { "event": "Late Registration", "date": "April-May (with late fee)" },
    { "event": "Admit Card Release", "date": "7-10 days before exam" },
    { "event": "Main Exam Date", "date": "May-June" },
    { "event": "Additional Test Dates", "date": "January, March, July (if offered)" },
    { "event": "Results Declaration", "date": "3-4 weeks after exam" },
    { "event": "Counseling & Admission Process", "date": "June-August" }
  ],
  
  "universities": [
  {
    "name": "Jindal Global Law School",
    "location": "Sonipat",
    "department": "Law School",
    "website": "jgls.edu.in",
    "rank": 1,
    "established": 2009
  },
  {
    "name": "UPES School of Law",
    "location": "Dehradun",
    "department": "School of Law",
    "website": "upes.ac.in",
    "rank": 2,
    "established": 2003
  },
  {
    "name": "Symbiosis Law School",
    "location": "Pune",
    "department": "Law School",
    "website": "symlaw.ac.in",
    "rank": 3,
    "established": 1977
  },
  {
    "name": "NMIMS School of Law",
    "location": "Mumbai",
    "department": "School of Law",
    "website": "nmims.edu",
    "rank": 4,
    "established": 2018
  },
  {
    "name": "The Northcap University",
    "location": "Gurugram",
    "department": "School of Law",
    "website": "ncuindia.edu",
    "rank": 5,
    "established": 1996
  },
  {
    "name": "BML Munjal University",
    "location": "Gurugram",
    "department": "School of Law",
    "website": "bmu.edu.in",
    "rank": 6,
    "established": 2014
  }
],
  
  "preparationTips": [
    {
      "name": "Reading Comprehension",
      "tips": [
        "Develop active reading skills",
        "Practice summarizing complex passages",
        "Work on reading speed without sacrificing comprehension",
        "Focus on identifying main ideas and author's perspective"
      ]
    },
    {
      "name": "Analytical Reasoning",
      "tips": [
        "Master diagramming techniques for logic games",
        "Practice organizing information efficiently",
        "Develop methods for tracking multiple conditions",
        "Work on time management for complex puzzles"
      ]
    },
    {
      "name": "Logical Reasoning",
      "tips": [
        "Study common argument structures",
        "Learn to identify premises and conclusions",
        "Practice spotting logical fallacies",
        "Develop skills in strengthening/weakening arguments"
      ]
    },{
  "name": "Time Management Skills",
  "tips": [
    "Allocate specific time for each section",
    "Learn when to move on from difficult questions",
    "Practice with timed sections regularly",
    "Develop strategies for difficult questions"
  ]
}
  ],
  
  "strategies": [
    {
      "title": "Understand the Test Format",
      "description": "Familiarize yourself with question types and section structures"
    },
    {
      "title": "Time Management Skills",
      "description": "Allocate specific time for each section and practice with timed sections regularly"
    },
    {
      "title": "Create a Study Schedule",
      "description": "Begin preparation 3-6 months before exam with specific days for different sections"
    },
    {
      "title": "Track Your Progress",
      "description": "Maintain an error log of missed questions and identify patterns in mistakes"
    },
    {
      "title": "Mental Preparation",
      "description": "Practice stress management techniques and ensure proper sleep before the exam"
    }
  ],
  
  "resources": [
    {
      "title": "Official Website",
      "description": "LSAT-India Official Portal",
      "link": "lsatindia.in"
    },
    {
      "title": "Official Materials",
      "description": "LSAT-India Official Guide and practice tests",
      "link": "lsatindia.in/prepare-for-the-test"
    },
    {
      "title": "Online Resources",
      "description": "Khan Academy's free LSAT prep (partnership with LSAC)",
      "link": "khanacademy.org/lsat"
    }
  ]
},
{
  "id": "mh-cet-law",
  "title": "MH-CET LAW 2025: Complete Guide for 5-Year and 3-Year Programs",
  "shortTitle": "MH-CET LAW",
  "description": "Your Gateway to Law Colleges in Maharashtra",
  "overview": "Maharashtra Common Entrance Test for Law (MH-CET LAW) is a state-level entrance examination conducted for admission to law courses in various law colleges across Maharashtra. The exam is conducted for two programs: •	5-Year Integrated Law Program: For students who have completed or are appearing for their 12th standard examination (LLB program integrated with BA, BCom, or BSc) •	3-Year Law Program: For candidates who have already completed their graduation (LLB program) MH-CET LAW scores are accepted by government, government-aided, and private unaided law colleges in Maharashtra for admission to law programs.",
  
  "updates": [
    { "date": "March 8, 2025", "description": "Initial guide published with tentative information based on previous years' patterns." }
  ],
  
  "patterns": [
    {
      "title": "5-Year Integrated Law Program",
      "duration": "2 hours (120 minutes)",
      "mode": "Computer-Based Test (Online)",
      "sections": [
        { "name": "Legal Aptitude & Legal Reasoning", "questions": "40", "marksPerQuestion": 1, "totalMarks": "40" },
        { "name": "General Knowledge with Current Affairs", "questions": "30", "marksPerQuestion": 1, "totalMarks": "30" },
        { "name": "Logical & Analytical Reasoning", "questions": "40", "marksPerQuestion": 1, "totalMarks": "40" },
        { "name": "English", "questions": "40", "marksPerQuestion": 1, "totalMarks": "40" }
      ],
      "markingScheme": [
        "+1 for each correct answer",
        "No negative marking for incorrect answers",
        "Maximum marks: 150"
      ]
    },
    {
      "title": "3-Year Law Program",
      "duration": "2 hours (120 minutes)",
      "mode": "Computer-Based Test (Online)",
      "sections": [
        { "name": "Legal Aptitude & Legal Reasoning", "questions": "40", "marksPerQuestion": 1, "totalMarks": "40" },
        { "name": "General Knowledge with Current Affairs", "questions": "30", "marksPerQuestion": 1, "totalMarks": "30" },
        { "name": "Logical & Analytical Reasoning", "questions": "40", "marksPerQuestion": 1, "totalMarks": "40" },
        { "name": "English", "questions": "40", "marksPerQuestion": 1, "totalMarks": "40" }
      ],
      "markingScheme": [
        "+1 for each correct answer",
        "No negative marking for incorrect answers",
        "Maximum marks: 150"
      ]
    },
  ],
  
  "eligibility": [
    {
      "title": "5-Year Integrated Law Program",
      "criteria": [
        "Candidate must have passed 12th standard (HSC) or equivalent examination from any recognized board with minimum 45% marks (40% for SC/ST category candidates from Maharashtra)",
        "Maximum age limit: 20 years for general category (22 years for SC/ST/OBC candidates) as on the first day of July in the year of admission",
        "No minimum age limit"
      ]
    },
    {
      "title": "3-Year Law Program",
      "criteria": [
        "Candidate must be a graduate in any discipline from any recognized university with minimum 45% marks (40% for SC/ST category candidates from Maharashtra)",
        "Maximum age limit: No upper age limit",
        "Minimum age: Candidate should be 20 years of age as on the first day of July in the year of admission"
      ]
    }
  ],
  
  "syllabus": [
    {
      "title": "MH-CET LAW Syllabus",
      "subjects": [
        {
          "name": "Legal Aptitude & Legal Reasoning",
          "topics": [
            "Legal Propositions",
            "Legal Maxims",
            "Legal Facts vs. Opinions",
            "Legal Precedents",
            "Legal Principles and their Application",
            "Law of Torts",
            "Indian Contract Act",
            "Criminal Law",
            "Constitutional Law",
            "Family Law",
            "Legal Terms and Concepts",
            "Legal Problem Solving"
          ]
        },
        {
          "name": "General Knowledge with Current Affairs",
          "topics": [
            "Current Events of National and International Importance",
            "History of India and Indian National Movement",
            "Indian and World Geography",
            "Indian Polity and Governance",
            "Economic and Social Development",
            "Environmental Issues",
            "General Science",
            "Art and Culture",
            "Current Affairs (last 6-8 months)",
            "Books and Authors",
            "Important Government Schemes",
            "Sports",
            "Awards and Honors"
          ]
        },
        {
          "name": "Logical & Analytical Reasoning",
          "topics": [
            "Verbal Reasoning (Analogy, Classification, Series Completion, Logical Deduction, Blood Relations, Direction Sense, Coding-Decoding)",
            "Analytical Reasoning (Statements and Arguments, Statements and Assumptions, Statements and Courses of Action, Logical Problems, Syllogism, Input-Output, Critical Reasoning)"
          ]
        },
        {
          "name": "English",
          "topics": [
            "Reading Comprehension",
            "Vocabulary",
            "Grammar",
            "Sentence Correction",
            "Fill in the Blanks",
            "Spotting Errors",
            "Idioms and Phrases",
            "Synonyms and Antonyms",
            "One Word Substitution",
            "Para Jumbles",
            "Cloze Test"
          ]
        }
      ]
    }
  ],
  
  "applicationSteps": [
    {
      "title": "Visit Official Website",
      "description": "Visit the official website: cetcell.mahacet.org"
    },
    {
      "title": "Register for MH-CET LAW",
      "description": "Click on 'MH-CET LAW 2025' section and register by providing basic details and creating login credentials"
    },
    {
      "title": "Complete Application Form",
      "description": "Fill the application form with all required personal, academic, and contact details"
    },
    {
      "title": "Upload Documents",
      "description": "Upload scanned documents: Photograph (3.5 cm × 4.5 cm), Signature, and Required certificates (category certificates if applicable)"
    },
    {
      "title": "Pay Application Fee",
      "description": "Pay the application fee online through credit card/debit card/net banking/UPI"
    },
    {
      "title": "Submit and Print",
      "description": "Submit the application form and take a printout for future reference"
    }
  ],
  
  "applicationFees": [
    {
      "category": "General/OBC",
      "amount": "800"
    },
    {
      "category": "SC/ST/PwD (Maharashtra)",
      "amount": "600"
    }
  ],
  
  "importantDates": [
    { "event": "Release of Notification", "date": "February 2025" },
    { "event": "Online Application Starts", "date": "February - March 2025" },
    { "event": "Last Date for Application", "date": "March - April 2025" },
    { "event": "Admit Card Release", "date": "April 2025" },
    { "event": "Exam Date (5-Year Program)", "date": "April - May 2025" },
    { "event": "Exam Date (3-Year Program)", "date": "April - May 2025" },
    { "event": "Result Declaration", "date": "May - June 2025" },
    { "event": "Counselling Process", "date": "June - July 2025" }
  ],
  
  "universities": [
  {
    "name": "Government Law College",
    "location": "Mumbai",
    "department": "Law College",
    "website": "glcmumbai.com",
    "rank": 1,
    "established": 1855
  },
  {
    "name": "ILS Law College",
    "location": "Pune",
    "department": "Law College",
    "website": "ilslaw.edu",
    "rank": 2,
    "established": 1924
  },
  {
    "name": "Symbiosis Law School",
    "location": "Pune",
    "department": "Law School",
    "website": "symlaw.ac.in",
    "rank": 3,
    "established": 1977
  },
  {
    "name": "K.C. Law College",
    "location": "Mumbai",
    "department": "Law College",
    "website": "kclawcollege.edu.in",
    "rank": 4,
    "established": 1955
  },
  {
    "name": "D.E.S. Shri Navalmal Firodia Law College",
    "location": "Pune",
    "department": "Law College",
    "website": "deslaw.edu.in",
    "rank": 5,
    "established": 2004
  },
  {
    "name": "Maharashtra National Law University",
    "location": "Mumbai",
    "department": "Law University",
    "website": "mnlumumbai.edu.in",
    "rank": 6,
    "established": 2014
  }
],
  
  "preparationTips": [
    {
  "name": "General Tips",
  "tips": [
    "Understand the Exam Pattern: Familiarize yourself with the exam structure, marking scheme, and time constraints",
    "Create a Study Plan: Develop a balanced study schedule covering all sections",
    "Focus on Fundamentals: Build strong foundational knowledge in all subjects",
    "Regular Practice: Solve previous years' papers and take mock tests",
    "Time Management: Practice solving questions within the time limit"
  ]
},
    {
      "name": "Legal Aptitude & Legal Reasoning",
      "tips": [
        "Focus on legal principles and their applications",
        "Read bare acts of important laws",
        "Practice legal reasoning questions regularly",
        "Create notes of important legal maxims and principles",
        "Solve previous years' questions"
      ]
    },
    {
      "name": "General Knowledge with Current Affairs",
      "tips": [
        "Read newspapers and magazines daily",
        "Follow reliable news websites",
        "Make notes of important events",
        "Focus on events of the past 6-8 months",
        "Study basic facts about India and the world",
        "Refer to yearbooks and general knowledge compendiums"
      ]
    },
    {
      "name": "Logical & Analytical Reasoning",
      "tips": [
        "Practice different types of reasoning questions daily",
        "Learn shortcuts for solving problems quickly",
        "Identify patterns in questions",
        "Take sectional tests",
        "Develop analytical thinking skills"
      ]
    },
    {
      "name": "English",
      "tips": [
        "Improve vocabulary by reading diverse materials",
        "Practice reading comprehension regularly",
        "Learn grammar rules and their applications",
        "Solve questions on sentence correction and error spotting",
        "Practice para jumbles and cloze tests"
      ]
    }
  ],
  
  "strategies": [
    {
      "title": "Understand the Exam Pattern",
      "description": "Familiarize yourself with the exam structure, marking scheme, and time constraints"
    },
    {
      "title": "Create a Study Plan",
      "description": "Develop a balanced study schedule covering all sections"
    },
    {
      "title": "Focus on Fundamentals",
      "description": "Build strong foundational knowledge in all subjects"
    },
    {
      "title": "Regular Practice",
      "description": "Solve previous years' papers and take mock tests"
    },
    {
      "title": "Time Management",
      "description": "Practice solving questions within the time limit"
    }
  ],
  
  "resources": [
    {
      "title": "Official Website",
      "description": "Maharashtra CET Cell Official Portal",
      "link": "cetcell.mahacet.org"
    },
    {
      "title": "Recommended Books",
      "description": [
        "Universal's Guide to MH-CET Law for 3 Years/5 Years LLB",
        "MH-CET Law Entrance Exam by Arihant Publications",
        "Legal Aptitude for CLAT and other Law Entrance Examinations by R.S. Aggarwal",
        "Manorama Yearbook",
        "A Modern Approach to Logical Reasoning by R.S. Aggarwal",
        "Word Power Made Easy by Norman Lewis"
      ],
      "link": "cetcell.mahacet.org"
    },
    {
      "title": "Coaching",
      "description": "CLATians MH-CET LAW Coaching Program",
      "link": "cetcell.mahacet.org"
    }
  ],
},
{
  "id": "ail-let",
  "title": "Army Institute of Law Entrance Test 2025: Complete Guide",
  "shortTitle": "AIL LET",
  "description": "Your Gateway to the Army Institute of Law, Mohali",
  "overview": "The Army Institute of Law (AIL), Mohali is a prestigious law institution established in 1999 by the Indian Army under the aegis of the Army Welfare Education Society (AWES). The institute conducts the Army Institute of Law Law Entrance Test (AIL LET) for admission to its 5-year integrated BA LLB program and 3-year LLB program. Known for its disciplined approach to legal education, AIL provides quality education to the wards of Army personnel and civilians alike.",
  
  "updates": [
    { "date": "March 10, 2025", "description": "Initial guide published with tentative information based on previous years' patterns." },
    { "date": "March 10, 2025", "description": "Application portal for AIL LET 2025 expected to open in February 2025" },
    { "date": "March 10, 2025", "description": "Exam pattern remains consistent with previous year" },
    { "date": "March 10, 2025", "description": "Stay tuned for official notification release" },
    { "date": "March 10, 2025", "description": "Check back for updates on exam centers and admit card release dates" }
  ],
  
  "patterns": [
    {
      "title": "5-Year Integrated BA LLB Program",
      "duration": "2 hours (120 minutes)",
      "mode": "Computer-Based Test (Online)",
      "sections": [
        { "name": "English", "questions": "30", "marksPerQuestion": 1, "totalMarks": "30" },
        { "name": "General Knowledge & Current Affairs", "questions": "30", "marksPerQuestion": 1, "totalMarks": "30" },
        { "name": "Legal Aptitude", "questions": "30", "marksPerQuestion": 1, "totalMarks": "30" },
        { "name": "Logical Reasoning", "questions": "30", "marksPerQuestion": 1, "totalMarks": "30" },
        { "name": "Elementary Mathematics (Numerical Ability)", "questions": "30", "marksPerQuestion": 1, "totalMarks": "30" }
      ],
      "markingScheme": [
        "+1 for each correct answer",
        "No negative marking for incorrect answers",
        "Maximum marks: 150"
      ]
    },
  ],
  
  "eligibility": [
    {
      "title": "5-Year Integrated BA LLB Program",
      "criteria": [
        "Candidates must have passed 10+2 or equivalent examination from a recognized board",
        "Minimum 50% aggregate marks in 10+2 (45% for SC/ST categories)",
        "Maximum age limit: 21 years (23 years for SC/ST and J&K residents)",
        "Candidates appearing in 10+2 can also apply (admission subject to fulfilling criteria)"
      ]
    },
  ],
  
  "syllabus": [
    {
      "title": "AIL LET Syllabus",
      "subjects": [
        {
          "name": "English",
          "topics": [
            "Reading Comprehension",
            "Vocabulary (Synonyms, Antonyms, Analogies)",
            "Grammar (Parts of Speech, Sentence Structure)",
            "Error Detection and Correction",
            "Idioms and Phrases",
            "Fill in the Blanks",
            "Cloze Test"
          ]
        },
        {
          "name": "General Knowledge & Current Affairs",
          "topics": [
            "History of India",
            "Indian Polity and Constitution",
            "Geography (Indian and World)",
            "Economics (Basic Concepts)",
            "Static GK (Books, Authors, Awards, Sports)",
            "Current Affairs (Last 6-12 months)",
            "Science and Technology"
          ]
        },
        {
          "name": "Legal Aptitude",
          "topics": [
            "Legal Terms and Maxims",
            "Constitutional Law Basics",
            "Legal Principles and their Application",
            "Legal Reasoning",
            "Indian Legal System",
            "Basic Understanding of Torts, Contracts, and Criminal Law"
          ]
        },
        {
          "name": "Logical Reasoning",
          "topics": [
            "Verbal Reasoning",
            "Analytical Reasoning",
            "Critical Reasoning",
            "Logical Deduction",
            "Syllogisms",
            "Statement-Assumption",
            "Logical Sequence",
            "Blood Relations",
            "Direction Sense"
          ]
        },
        {
          "name": "Elementary Mathematics (Numerical Ability)",
          "topics": [
            "Number System",
            "Percentage",
            "Profit and Loss",
            "Simple and Compound Interest",
            "Ratio and Proportion",
            "Time, Speed and Distance",
            "Averages",
            "Data Interpretation",
            "Basic Algebra and Geometry"
          ]
        }
      ]
    }
  ],
  
  "applicationSteps": [
    {
      "title": "Visit Official Website",
      "description": "Visit the official AIL website: www.ail.ac.in"
    },
    {
      "title": "Register",
      "description": "Register and create a login ID"
    },
    {
      "title": "Complete Application Form",
      "description": "Fill the online application form with accurate details"
    },
    {
      "title": "Upload Documents",
      "description": "Upload required documents (photograph, signature, etc.)"
    },
    {
      "title": "Pay Application Fee",
      "description": "Pay the application fee online"
    },
    {
      "title": "Submit and Print",
      "description": "Submit the application and take a printout for future reference"
    }
  ],
  
  "applicationFees": [
    {
      "category": "General/OBC",
      "amount": "1,500"
    },
    {
      "category": "SC/ST",
      "amount": "1,000"
    }
  ],
  
  "importantDates": [
    { "event": "Application Start Date", "date": "First week of February 2025" },
    { "event": "Application End Date", "date": "Last week of April 2025" },
    { "event": "Admit Card Release", "date": "Second week of May 2025" },
    { "event": "Entrance Exam Date", "date": "Last week of May 2025" },
    { "event": "Result Declaration", "date": "Second week of June 2025" },
    { "event": "Counseling Process", "date": "Last week of June 2025" },
    { "event": "Commencement of Classes", "date": "First week of August 2025" }
  ],
  
  "universities": [
    {
  "name": "Army Institute of Law",
  "location": "Mohali",
  "department": "Law College",
  "website": "www.ail.ac.in",
  "affiliation": "Punjabi University, Patiala",
  "rank": 1,
  "established": 1999
}

  ],
  
  "preparationTips": [
    {
      "name": "English",
      "tips": [
        "Read newspapers, magazines, and quality books to improve vocabulary",
        "Practice reading comprehension passages regularly",
        "Work on grammar rules and their applications",
        "Learn common idioms and phrases"
      ]
    },
    {
      "name": "General Knowledge & Current Affairs",
      "tips": [
        "Read newspapers daily (The Hindu, Indian Express)",
        "Follow reputable news websites and magazines",
        "Make notes of important events, appointments, and awards",
        "Use GK mobile apps for daily quizzes"
      ]
    },
    {
      "name": "Legal Aptitude",
      "tips": [
        "Understand basic legal concepts and principles",
        "Practice legal reasoning questions from previous years' papers",
        "Learn important legal maxims and terminology",
        "Read about landmark judgments"
      ]
    },
    {
      "name": "Logical Reasoning",
      "tips": [
        "Practice puzzles and brain teasers",
        "Solve logical reasoning questions from aptitude books",
        "Develop analytical thinking through regular practice",
        "Time yourself while solving problems"
      ]
    },
    {
      "name": "Mathematics (Numerical Ability)",
      "tips": [
        "Revise basic mathematical concepts",
        "Practice calculation techniques to improve speed",
        "Focus on data interpretation and percentage calculations",
        "Solve previous years' questions"
      ]
    }
  ],
  
  "strategies": [
    {
      "title": "Understand the Exam Pattern",
      "description": "Familiarize yourself with the exam structure, marking scheme, and time constraints"
    },
    {
      "title": "Create a Study Plan",
      "description": "Develop a balanced study schedule covering all sections"
    },
    {
      "title": "Focus on Fundamentals",
      "description": "Build strong foundational knowledge in all subjects"
    },
    {
      "title": "Regular Practice",
      "description": "Solve previous years' papers and take mock tests"
    },
    {
      "title": "Time Management",
      "description": "Practice solving questions within the time limit"
    }
  ],
  
  "resources": [
    {
      "title": "Official Website",
      "description": "Army Institute of Law Official Portal",
      "link": "www.ail.ac.in"
    },
    {
      "title": "Recommended Books",
      "description": [
        "Previous years' question papers",
        "Standard preparation books for law entrance exams",
        "Online mock tests",
        "Current affairs compilations",
        "Legal reasoning guides"
      ],
      "link": "www.ail.ac.in"
    },
    {
      "title": "Admission Details",
      "description": "Information about seat distribution (60 for Army wards, 20 for civilians in 5-year program; 45 for Army wards, 15 for civilians in 3-year program)",
      "link": "www.ail.ac.in"
    }
  ],
  
  "admissionProcess": [
    {
      "title": "Entrance Examination (AIL LET)",
      "description": "Take the computer-based test on the scheduled date"
    },
    {
      "title": "Merit List Preparation",
      "description": "Merit list prepared based on entrance exam scores"
    },
    {
      "title": "Counseling and Document Verification",
      "description": "Attend the counseling session with all original documents"
    },
    {
      "title": "Fee Payment and Admission Confirmation",
      "description": "Pay the required fees to confirm admission"
    }
  ]
},{
  "id": "ai-let",
  "title": "All India Law Entrance Test",
  "shortTitle": "AI-LET",
  "description": "Stay informed with the latest announcements and developments related to AILET examinations. This section is regularly updated to provide you with timely information.",
  "overview": "The All India Law Entrance Test (AILET) is a national-level entrance examination conducted by National Law University, Delhi (NLU Delhi) for admissions to its undergraduate (BA LLB), postgraduate (LLM), and doctoral (PhD) programs. Unlike other National Law Universities that admit students through CLAT, NLU Delhi maintains its independent entrance examination, making AILET a crucial gateway to one of India's most prestigious law schools.",
  
  "updates": [
  { "date": "March 5, 2025", "description": "AILET 2025 final admission process completed for all categories." },
  { "date": "February 20, 2025", "description": "Foreign national seat allocation results announced for AILET 2025." },
  { "date": "February 10, 2025", "description": "Second waiting list for AILET 2025 BA LLB admissions released." },
  { "date": "January 25, 2025", "description": "First waiting list for AILET 2025 BA LLB admissions released." },
  { "date": "January 15, 2025", "description": "AILET 2025 first merit list released for all programs." },
  { "date": "January 2, 2025", "description": "AILET 2025 results declared with category-wise cutoffs." },
  { "date": "December 10, 2024", "description": "AILET 2025 examination successfully conducted across India." },
  { "date": "December 1, 2024", "description": "AILET 2025 admit cards released for download." },
  { "date": "October 30, 2024", "description": "AILET 2025 application process closed." }
]
,
  
  "patterns": [
    {
      "title": "AILET BA LLB (Hons.)",
      "duration": "2 hours (120 minutes)",
      "mode": "Computer-Based Test (Online)",
      "sections": [
        { "name": "English", "questions": "35", "marksPerQuestion": 1, "totalMarks": "35" },
        { "name": "General Knowledge & Current Affairs", "questions": "35", "marksPerQuestion": 1, "totalMarks": "35" },
        { "name": "Legal Aptitude", "questions": "35", "marksPerQuestion": 1, "totalMarks": "35" },
        { "name": "Logical Reasoning", "questions": "35", "marksPerQuestion": 1, "totalMarks": "35" },
        { "name": "Quantitative Techniques", "questions": "10", "marksPerQuestion": 1, "totalMarks": "10" }
      ],
      "markingScheme": [
        "+1 for each correct answer",
        "0.25 marks deducted for each incorrect answer (negative marking)",
        "Maximum marks: 150"
      ]
    },
    {
      "title": "AILET LLM",
      "duration": "2 hours (120 minutes)",
      "mode": "Computer-Based Test (Online)",
      "sections": [
        { "name": "Law of Contracts", "questions": "20", "marksPerQuestion": 1, "totalMarks": "20" },
        { "name": "Constitutional Law", "questions": "20", "marksPerQuestion": 1, "totalMarks": "20" },
        { "name": "Jurisprudence", "questions": "20", "marksPerQuestion": 1, "totalMarks": "20" },
        { "name": "Family Law", "questions": "20", "marksPerQuestion": 1, "totalMarks": "20" },
        { "name": "Public International Law", "questions": "20", "marksPerQuestion": 1, "totalMarks": "20" },
        { "name": "Criminal Law", "questions": "25", "marksPerQuestion": 1, "totalMarks": "25" },
        { "name": "Research Methodology", "questions": "25", "marksPerQuestion": 1, "totalMarks": "25" }
      ],
      "markingScheme": [
        "+1 for each correct answer",
        "0.25 marks deducted for each incorrect answer (negative marking)",
        "Maximum marks: 150"
      ]
    }
  ],
  
  "eligibility": [
    {
      "title": "BA LLB (Hons.) - 5-year Integrated Program",
      "criteria": [
        "Candidates must have passed 10+2 or equivalent examination with a minimum of 50% marks (45% for SC/ST/OBC/PWD categories)",
        "Age limit: Not more than 21 years as of July 31 of the admission year (23 years for SC/ST/OBC/PWD categories)",
      ]
    },
    {
      "title": "LLM - 1-year Program",
      "criteria": [
        "Candidates must have completed LLB or an equivalent law degree with a minimum of 55% marks (50% for SC/ST/OBC/PWD categories)",
        "No upper age limits"
      ]
    },
    {
      "title": "PhD in Law",
      "criteria": [
        "Candidates must have completed LLM or an equivalent law degree with a minimum of 55% marks (50% for SC/ST/OBC/PWD categories)",
        "Qualified UGC NET/JRF or equivalent examination in law",
        "No upper age limits"
      ]
    }
  ],
  
  "syllabus": [
    {
      "title": "AILET BA LLB Syllabus",
      "subjects": [
        {
          "name": "English",
          "topics": [
            "Reading Comprehension",
            "Vocabulary (Synonyms, Antonyms, Analogies)",
            "Grammar (Parts of Speech, Sentence Structure)",
            "Error Detection and Correction",
            "Idioms and Phrases",
            "Fill in the Blanks",
            "Cloze Test"
          ]
        },
        {
          "name": "General Knowledge & Current Affairs",
          "topics": [
            "History of India",
            "Indian Polity and Constitution",
            "Geography (Indian and World)",
            "Economics (Basic Concepts)",
            "Static GK (Books, Authors, Awards, Sports)",
            "Current Affairs (Last 6-12 months)",
            "Science and Technology"
          ]
        },
        {
          "name": "Legal Aptitude",
          "topics": [
            "Legal Terms and Maxims",
            "Constitutional Law Basics",
            "Legal Principles and their Application",
            "Legal Reasoning",
            "Indian Legal System",
            "Basic Understanding of Torts, Contracts, and Criminal Law"
          ]
        },
        {
          "name": "Logical Reasoning",
          "topics": [
            "Verbal Reasoning",
            "Analytical Reasoning",
            "Critical Reasoning",
            "Logical Deduction",
            "Syllogisms",
            "Statement-Assumption",
            "Logical Sequence",
            "Blood Relations",
            "Direction Sense"
          ]
        },
        {
          "name": "Quantitative Techniques",
          "topics": [
            "Number System",
            "Percentage",
            "Profit and Loss",
            "Simple and Compound Interest",
            "Ratio and Proportion",
            "Time, Speed and Distance",
            "Averages",
            "Data Interpretation",
            "Basic Algebra and Geometry"
          ]
        },
        {
  "name": "AILET LLM Syllabus",
  "topics": [
    "Constitutional Law",
    "Jurisprudence",
    "Law of Contracts",
    "Torts",
    "Criminal Law",
    "Family Law",
    "Public International Law",
    "Administrative Law",
    "Company Law",
    "Research Methodology"
  ]
},{
  "name": "AILET PhD Syllabus",
  "topics": [
    "Research Methodology",
    "Subject-specific knowledge",
    "Current legal developments",
    "Legal scholarship and academic writing"
  ]
}

      ]
    }
  ],
  
  "applicationSteps": [
    {
      "title": "Visit Official Website",
      "description": "Visit the official AIL website: www.ail.ac.in"
    },
    {
      "title": "Register",
      "description": "Register and create a login ID"
    },
    {
      "title": "Complete Application Form",
      "description": "Fill the online application form with accurate details"
    },
    {
      "title": "Upload Documents",
      "description": "Upload required documents (photograph, signature, etc.)"
    },
    {
      "title": "Pay Application Fee",
      "description": "Pay the application fee online"
    },
    {
      "title": "Submit and Print",
      "description": "Submit the application and take a printout for future reference"
    }
  ],
  
  "applicationFees": [
    {
      "category": "General/OBC",
      "amount": "₹1,500"
    },
    {
      "category": "SC/ST",
      "amount": "₹1,000"
    }
  ],
  
  "importantDates": [
    { "event": "Application Start Date", "date": "First week of February 2025" },
    { "event": "Application End Date", "date": "Last week of April 2025" },
    { "event": "Admit Card Release", "date": "Second week of May 2025" },
    { "event": "Entrance Exam Date", "date": "Last week of May 2025" },
    { "event": "Result Declaration", "date": "Second week of June 2025" },
    { "event": "Counseling Process", "date": "Last week of June 2025" },
    { "event": "Commencement of Classes", "date": "First week of August 2025" }
  ],
  
  "universities": [
    {
      "name": "National Law University, Delhi",
      "location": "Delhi",
      "established" : 2008,
      "rank": 1,
      "website": "nludelhi.ac.in",
      "department": "Law College",
      "affiliation": "Punjabi University, Patiala"
    }
  ],
  
  "preparationTips": [
  {
    "name": "English",
    "tips": [
      "Read quality newspapers, magazines, and literary works",
      "Practice reading comprehension regularly",
      "Improve vocabulary through word lists and flashcards",
      "Focus on grammar rules and their application",
      "Solve previous years' papers for pattern familiarization"
    ]
  },
  {
    "name": "General Knowledge & Current Affairs",
    "tips": [
      "Follow a daily news routine covering major publications",
      "Create monthly compilations of important events",
      "Study static GK topics systematically",
      "Focus on legal developments and landmark judgments",
      "Maintain a current affairs diary"
    ]
  },
  {
    "name": "Legal Aptitude",
    "tips": [
      "Understand basic legal principles and terminology",
      "Practice legal reasoning questions from previous papers",
      "Read about landmark cases in simple language",
      "Develop analytical skills to apply legal principles to facts",
      "Study the Constitution of India and basic laws"
    ]
  },
  {
    "name": "Reasoning",
    "tips": [
      "Solve puzzles, critical reasoning problems regularly",
      "Practice analytical reasoning sets",
      "Study syllogisms, assumptions, and inferences",
      "Work on speed and accuracy through timed practice",
      "Focus on logical consistency in arguments"
    ]
  },
  {
    "name": "Quantitative Techniques",
    "tips": [
      "Master basic mathematical concepts",
      "Practice data interpretation sets",
      "Focus on speed calculations",
      "Solve previous years' questions regularly",
      "Identify shortcuts for quick calculations"
    ]
  },
  {
    "name": "AILET Performance Improvement Strategies",
    "tips": [
      "Mock Tests: Take regular mock tests under timed conditions",
      "Section-wise Analysis: Identify strengths and weaknesses in each section",
      "Time Management: Develop a strategy for allocating time to each section",
      "Revision Schedule: Create a systematic revision plan for all topics",
      "Error Analysis: Maintain an error log to avoid repeating mistakes",
      "Strategic Guessing: Learn when to attempt questions and when to leave them"
    ]
  }
]
,
  
  "strategies": [
    {
      "title": "Understand the Exam Pattern",
      "description": "Familiarize yourself with the exam structure, marking scheme, and time constraints"
    },
    {
      "title": "Create a Study Plan",
      "description": "Develop a balanced study schedule covering all sections"
    },
    {
      "title": "Focus on Fundamentals",
      "description": "Build strong foundational knowledge in all subjects"
    },
    {
      "title": "Regular Practice",
      "description": "Solve previous years' papers and take mock tests"
    },
    {
      "title": "Time Management",
      "description": "Practice solving questions within the time limit"
    }
  ],
  
  "resources": [
    {
      "title": "Official Website",
      "description": "Army Institute of Law Official Portal",
      "link": "www.ail.ac.in"
    },
    {
      "title": "Recommended Books",
      "description": [
        "Previous years' question papers",
        "Standard preparation books for law entrance exams",
        "Online mock tests",
        "Current affairs compilations",
        "Legal reasoning guides"
      ],
      "link": "www.ail.ac.in"
    },
    {
      "title": "Admission Details",
      "description": "Information about seat distribution (60 for Army wards, 20 for civilians in 5-year program; 45 for Army wards, 15 for civilians in 3-year program)",
      "link": "www.ail.ac.in"
    }
  ],
  
  "admissionProcess": [
    {
      "title": "Entrance Examination (AIL LET)",
      "description": "Take the computer-based test on the scheduled date"
    },
    {
      "title": "Merit List Preparation",
      "description": "Merit list prepared based on entrance exam scores"
    },
    {
      "title": "Counseling and Document Verification",
      "description": "Attend the counseling session with all original documents"
    },
    {
      "title": "Fee Payment and Admission Confirmation",
      "description": "Pay the required fees to confirm admission"
    }
  ]
}
]