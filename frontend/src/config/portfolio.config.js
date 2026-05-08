/* =========================================================================
   PORTFOLIO CONFIG  —  Single source of truth.
   Edit any value here to update the entire site. No backend required.
   ========================================================================= */

const config = {
  /* -- Title page / student profile ------------------------------------- */
  student: {
    fullName: "MARCK ELIZ MADARCOS",
    studentId: "MA22-IT-02773",
    course: "Bachelor of Science in INFORMATION TECHNOLOGY",
    year: "4th Year",
    school: "OCCIDENTAL MINDORO STATE COLLEGE",
    college: "College of INFORMATION TECHNOLOGY",
    program: "ON-THE-JOB-TRAINING",
    internshipPeriod: "JANUARY 30, 2026 — MAY 4, 2026",
    hostCompany: "RED CROSS MINDORO CHAPTER",
    adviser: "MARITES D. ESCULTOR, MIT",
    portrait: null, // optional URL
  },

  /* -- Brand / hero ----------------------------------------------------- */
  brand: {
    siteTitle: "OJT E-Portfolio",
    tagline: "A documentation of practice, learning, and purpose.",
    accentLabel: " Welcome to my Portfolio",
  },

  /* -- Acknowledgment --------------------------------------------------- */
  acknowledgment: {
    intro:
      "I would like to express my heartfelt gratitude to everyone who supported me throughout this On-the-Job Training journey.",
    paragraphs: [
      "To my OJT coordinator and adviser — thank you for the guidance, encouragement, and constant support throughout the program.",
      "To my host company and mentors — thank you for sharing your knowledge, patience, and the lessons that shaped my growth as a student professional.",
      "To my fellow interns — thank you for the teamwork, laughter, and shared moments that made the experience meaningful.",
      "To my family and friends — thank you for the love, motivation, and unwavering belief in me.",
      "And above all, to the Almighty — thank You for the strength, wisdom, and grace to complete this training with purpose.",
    ],
    closing: "I will carry the lessons and memories from this journey into every chapter that follows.",
  },

  /* -- Trainee Prayer --------------------------------------------------- */
  prayer: {
    title: "Student Trainee Prayer",
    body: [
      "Dear Heavenly Father,",
      "Thank You for walking with me through this internship. Your guidance gave me strength to overcome each challenge and the wisdom to learn and understand more deeply.",
      "I thank You for the lessons, the experiences, and the skills I have gained. I ask Your forgiveness where I fell short, and I am grateful that You never left my side.",
      "Continue to bless me and my fellow interns as we step forward. Keep us grounded in our values, guide us toward meaningful work, and help us become the people You have called us to be.",
      "Amen.",
    ],
  },

  /* -- Personal Philosophy ---------------------------------------------- */
  philosophy: {
    motto: "Progress through Purpose and Practice",
    paragraphs: [
      "I believe that real progress comes from steady learning paired with a clear sense of purpose. Curiosity has always been my compass — and I trust that effort, knowledge, and persistence can change not only my own life but also the lives of those around me.",
      "Growth, for me, isn't about being the best — it's about staying consistent even when things get hard. Every challenge along the way teaches something worth keeping.",
      "Success is meant to be shared. What I learn, I want to use to help others. And at the heart of it all, I want to live with honesty, patience, and respect.",
      "Life is not a race; it is a journey. I want to walk it with purpose, passion, and integrity.",
    ],
  },

  /* -- Career Plan ------------------------------------------------------ */
  career: {
    pillars: [
      {
        index: "01",
        title: "Immediate Goals (0–6 Months)",
        items: [
          "Secure a full-time role in software or web development after graduation",
          "Target positions like junior developer, technical support, or entry-level analyst",
          "Continue building my online portfolio and personal projects",
          "Maintain and grow my GitHub repositories",
          "Expand my network through developer communities and industry events",
        ],
      },
      {
        index: "02",
        title: "Skill Development Focus",
        items: [
          "Master modern stacks — React, Node.js, FastAPI, and databases",
          "Learn fundamentals of business analysis and data analytics",
          "Gain hands-on experience through freelance and volunteer projects",
          "Stay active in communities like GitHub and Stack Overflow",
          "Sharpen both technical depth and analytical thinking",
        ],
      },
      {
        index: "03",
        title: "Long-Term Vision",
        items: [
          "Grow into a full-stack developer or senior analyst",
          "Use technology to solve real-world problems",
          "Build solutions for underserved communities",
          "Contribute to the technological growth of my hometown",
          "Balance career growth with meaningful social impact",
        ],
      },
    ],
    commitment: {
      title: "Personal Commitment",
      paragraphs: [
        "I am committed to continuous learning and growth in the technology field. By focusing on both technical expertise and practical application, I aim to build a career that advances my own goals while contributing to the development of communities that need it most.",
        "Technology should serve a purpose beyond innovation — it should create meaningful change in people's lives.",
      ],
    },
  },

  /* -- Chapter I -------------------------------------------------------- */
  introduction: {
    sections: [
      {
        id: "importance",
        label: "A.",
        title: "Importance of Internship",
        body: [
          "An internship bridges the distance between classroom learning and the realities of the workplace. It allows the student to translate theory into action — to feel the weight of deadlines, the rhythm of teamwork, and the discipline of professional practice.",
          "Beyond technical skills, the program nurtures soft skills that no textbook can teach: communication, accountability, patience, and the quiet courage to ask questions. These are the foundations of a lasting career.",
        ],
      },
      {
        id: "objectives",
        label: "B.",
        title: "Objectives of Internship",
        body: [
          "To apply the knowledge and skills acquired throughout the academic program to real-world projects.",
          "To gain exposure to professional standards, workflows, and industry best practices.",
          "To develop adaptability, communication, and collaborative problem-solving skills.",
          "To document and reflect on the learning process throughout the internship period.",
        ],
        list: true,
      },
      {
        id: "time-place",
        label: "C.",
        title: "Time and Place",
        body: [
          "The internship was conducted at the host company between the dates listed on the title page. Daily schedules, attendance, and project assignments are documented in the Daily Time Record and Weekly Accomplishment Reports under Chapter III.",
        ],
      },
    ],
  },

  /* -- Chapter II ------------------------------------------------------- */
  company: {
    sections: [
      {
        id: "nature",
        label: "A.",
        title: "Nature of the Agency",
        body: [
          "The Philippine Red Cross Occidental Mindoro Chapter is a humanitarian, non-profit organization that provides voluntary services aimed at protecting life and promoting human dignity, especially during emergencies and disasters. It operates as an auxiliary to the government, delivering services such as disaster risk reduction and response, blood donation and management, health and welfare assistance, safety training, and community-based volunteer programs.",
        ],
      },
      {
        id: "mvg",
        label: "B.",
        title: "Mission, Vision & Goal",
        body: [
          "Mission — PRC-Occidental Mindoro efficient, and responsive humanitarian services to the most vulnerable in accordance with the principles and values of the Red Cross and Red Crescent Movement.",
          "Vision — The PRC-Occidental Mindoro Chapter will be the foremost humanitarian organization in Occidental Mindoro in service provided and number of people served.",
        ],
        list: true,
      },
      {
        id: "history",
        label: "C.",
        title: "History / Background",
        image: "/images/H.png",
        body: [
          "The Occidental Mindoro Red Cross Chapter was separated from Batangas-Mindoro Chapter in 1958. The first chairman of the board of directors was the late Governor Mariano Tajonera, followed by the present chairman, Governor Arsenio L. Villaroza. The new chapter since its independence was administered by Mrs. Fanny Lesaca until 1962. After her, came Mrs. Jaunaria C. Padilla who was administrator until September 1971. From September 1971 to date, Mr. Jose S. Rodil runs the chapter.",
          "The first board members of the chapter was composed of Gov. Mariano Tajonera as chairman; Mayor Teodoro Malabanan as vice chairman; Atty. Amador Catama Jr. as secretary; Provincial Treasurer Paulino Ganda as treasurer; Provincial Auditor Santiago Maceren as Auditor; with Fiscal Alfonso Adora, Dr. Benjamin Velasco, Mayor Domingo Niebres, Supt. Vicente Lavides, Engr. Artemio Tiangco, Mayor Julian Villena, Victoriano Dinglasan, Mario San Luis, Apolo Tria, Reynaldo Isler, Pedro Florescio, Francisco Liboro, Manuel Medina, Pantaleon Opena, Rev. Fr. Enrique Schmitz, mayor Isabelo Abeleda, Johnny Cheng, Amado Pio de Roda and Marquez Tenedora as members.",
          "At the start of its operation, the chapter office was located at Mamburao, but by virtue of a resolution of the Board of Directors, it was transferred to San Jose, the most progressive and populous town in the province. The municipal council of San Jose readily welcomed and housed the Red Cross office at the municipal building.",
          "In August 1963, Dr. Telesforo Calasanz visited the Chapter. He inaugurated two first aid stations in his capacity as PNRC manager at that time.",
          "One provincial safety institute, five municipal safety institutes, and three municipal nursing institutes have been held by the chapter in the ensuing years.",
          "First Aid stations and mobile units were established during athletic meets, rallies, elections, disasters and other big crowd gatherings.",
          "Mass blood donations were conducted and turned out a success. People of the province responded wholeheartedly to the idea of blood-letting.",
          "The Chapter was able to serve thousands of victims of typhoons and fires that hit the province. Aid was extended in the form of food, clothing and medicines",
          "The Mindoro Occidental Red Cross chapter is at present ready to serve the less fortunate member of our society within the scope of Red Cross policies. With the help of its enthusiastic and ever willing leaders, the chapter is able to meet the demands of the times.",
          "From then on, Occidental Mindoro Red Cross Chapter triumphantly evolved as the number one humanitarian organization in the province. True to its mission, the organization delivers humanitarian programs independently.",
        ],
      },
      {
        id: "org",
        label: "D.",
        title: "Organizational chart",
        body: [
          "This organizational chart outlines the leadership and staff structure of the Philippine Red Cross Occidental Mindoro Chapter, headed by Secretary General Gwendolyn T. Pang and Officer in Charge Cirilo P. Salamanca III. It details the distribution of specialized roles across blood services, disaster management, and Safety Services, while highlighting the essential support provided by a dedicated team of chapter base volunteers.",
        ],
        image: "/images/org-structure.png" // <-- add this
      },
    ],
  },

  /* -- Chapter III ------------------------------------------------------ */
  work: {
    sections: [
      {
        id: "weekly",
        label: "A.",
        title: "Weekly Accomplishment Report",

          body: [
            "A weekly summary of tasks completed..."
          ], // 👈 DO NOT REMOVE THIS


        weekly: [
              {
                week: "Week 1",
                dateRange: "Jan 30 – Feb 6, 2026",
                days: [
                  {
                    day: "Thu",
                    date: "Jan 30",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Deployment and orientation at the host company, including an introduction to the team, overview of company policies, and initial training on tools and software used in daily tasks."
                  },
                  {
                    day: "Mon",
                    date: "Feb 2",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Continued orientation and training, including shadowing team members to understand workflow and project management processes. Assigned first tasks related to data entry and document organization."
                  },
                  {
                    day: "Tue",
                    date: "Feb 3",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "OIC give me a task of gathering a data to to put inside the Factbook page of the chapter, and I also did some research about the history of the chapter and the services that they provide to the public. I also did some data entry work and document organization."
                  },
                  {
                    day: "Wed",
                    date: "Feb 4",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "I continued to work on the Factbook page, gathering more data and organizing it into a clear and concise format. I also attended a team meeting where we discussed upcoming projects and deadlines."
                  },
                  {
                    day: "Thu",
                    date: "Feb 5",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "I continued to work on the Factbook page, gathering more data and organizing it into a clear and concise format. I also attended a team meeting where we discussed upcoming projects and deadlines."
                  },
                  {
                    day: "Fri",
                    date: "Feb 6",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "edited flyers for Mobile Blood Donation campaigns to inform the public about its purpose and importance, as assigned by Sir Ado. "
                  }
                ]
              },

              {
                week: "Week 2",
                dateRange: "Feb 9 – Feb 13, 2026",
                days: [
                  {
                    day: "Mon",
                    date: "Feb 9",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "RC143 Certificate, Blood Certificate, Red Cross Youth Certificate Edit Using Canva"
                  },
                  {
                    day: "Tue",
                    date: "Feb 10",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Continued on making RC143 Certificate, Blood Certificate, Red Cross Youth Certificate Edit Using Canva"
                  },
                  {
                    day: "Wed",
                    date: "Feb 11",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Suggestion and Finalization for Standee Tarpaulin"
                  },
                  {
                    day: "Thu",
                    date: "Feb 12",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Continued on Suggestion and Finalization for Standee Tarpaulin  "
                  },
                  {
                    day: "Fri",
                    date: "Feb 13",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Visualization of the Standee Tarpaulin using Canva, and finalization of the design for printing."
                  }
                ]
              },

              {
                week: "Week 3",
                dateRange: "Feb 16 – Feb 20, 2026",
                days: [
                  {
                    day: "Mon",
                    date: "Feb 16",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Create Standie Tarp Membership Program   using Canva Encoding for safety and services "
                  },
                  {
                    day: "Wed",
                    date: "Feb 18",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Continued on Creating Standie Tarp Membership Program using Canva Encoding for safety and services "
                  },
                  {
                    day: "Thu",
                    date: "Feb 19",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Continued on Creating Standie Tarp Membership Program using Canva Encoding for safety and services "
                  },
                  {
                    day: "Fri",
                    date: "Feb 20",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Continued on Creating Standie Tarp Membership Program using Canva Encoding for safety and services "
                  }
                ]
              },

              {
                week: "Week 4",
                dateRange: "Feb 23 – Feb 27, 2026",
                days: [
                  {
                    day: "Mon",
                    date: "Feb 23",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Preparation for OFAT Training by sir Kim Harold 2 Days, including gathering materials and setting up the training space."
                  },
                  {
                    day: "Tue",
                    date: "Feb 24",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "OFAT Training by sir Kim Harold 2 Days."
                  },
                  {
                    day: "Wed",
                    date: "Feb 25",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "OFAT Training by sir Kim Harold 2 Days."
                  },
                  {
                    day: "Thu",
                    date: "Feb 26",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Assist for CNHS color fun run and Reviewing steps of Bandaging."
                  },
                  {
                    day: "Fri",
                    date: "Feb 27",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Help on stripping blood."
                  }
                ]
              },

              {
                week: "Week 5",
                dateRange: "Mar 2 – Mar 6, 2026",
                days: [
                  {
                    day: "Mon",
                    date: "Mar 2",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Back on Encoding data to Factbook"
                  },
                  {
                    day: "Tue",
                    date: "Mar 3",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Back on Encoding data to Factbook"
                  },
                  {
                    day: "Wed",
                    date: "Mar 4",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Help organizing the file and document of the chapter"
                  },
                  {
                    day: "Thu",
                    date: "Mar 5",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Back on Encoding data to Factbook"
                  },
                  {
                    day: "Fri",
                    date: "Mar 6",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Chapter Conducted a meeting for upcoming MRAA in Sablayan, Occidental Mindoro"
                  }
                ]
              },

              {
                week: "Week 6",
                dateRange: "Mar 8 – Mar 13, 2026",
                days: [
                  {
                    day: "Sun",
                    date: "Mar 8",
                    tasks: [{ time: "15:30", activity: "Task" }],
                    notes: "Preparing to leave the chapter for the MRAA in Sablayan, Occidental Mindoro"
                  },
                  {
                    day: "Mon",
                    date: "Mar 9",
                    tasks: [{ time: "06:00", activity: "Task" }],
                    notes: "Track and Field at Sablayan Complex with Sir Harold and Sir Cirillo First aid Station"
                  },
                  {
                    day: "Tue",
                    date: "Mar 10",
                    tasks: [{ time: "05:00", activity: "Task" }],
                    notes: "Sepac Takraw medic Sablayan Complex "
                  },
                  {
                    day: "Wed",
                    date: "Mar 11",
                    tasks: [{ time: "07:30", activity: "Task" }],
                    notes: "Track and Field at Sablayan Complex with Sir Harold and Sir Cirillo First aid Station"
                  },
                  {
                    day: "Thu",
                    date: "Mar 12",
                    tasks: [{ time: "05:00", activity: "Task" }],
                    notes: "Sepac Takraw medic Sablayan Complex "
                  },
                  {
                    day: "Fri",
                    date: "Mar 13",
                    tasks: [{ time: "07:30", activity: "Task" }],
                    notes: "Preparing to leave the MRAA in Sablayan, Occidental Mindoro"
                  }
                ]
              },

              {
                week: "Week 7",
                dateRange: "Mar 16 – Mar 20, 2026",
                days: [
                  {
                    day: "Mon",
                    date: "Mar 16",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Edit Participant Record & Inventory Checking "
                  },
                  {
                    day: "Tue",
                    date: "Mar 17",
                    tasks: [{ time: "08:50", activity: "Task" }],
                    notes: "Edit Participant Record & Inventory Checking"
                  },
                  {
                    day: "Wed",
                    date: "Mar 18",
                    tasks: [{ time: "09:00", activity: "Task" }],
                    notes: "Edit Participant Record & Inventory Checking"
                  },
                  {
                    day: "Thu",
                    date: "Mar 19",
                    tasks: [{ time: "08:10", activity: "Task" }],
                    notes: "Edit Participant Record & Inventory Checking"
                  },
                  {
                    day: "Fri",
                    date: "Mar 20",
                    tasks: [{ time: "08:40", activity: "Task" }],
                    notes: "Edit Participant Record & Inventory Checking"
                  }
                ]
              },

              {
                week: "Week 8",
                dateRange: "Mar 23 – Mar 27, 2026",
                days: [
                  {
                    day: "Mon",
                    date: "Mar 23",
                    tasks: [{ time: "08:50", activity: "Task" }],
                    notes: "OFAT Training by sir Harold in Pilot "
                  },
                  {
                    day: "Tue",
                    date: "Mar 24",
                    tasks: [{ time: "08:30", activity: "Task" }],
                    notes: "OFAT Training by sir Harold in Pilot "
                  },
                  {
                    day: "Wed",
                    date: "Mar 25",
                    tasks: [{ time: "08:10", activity: "Task" }],
                    notes: "Help on stripping blood and organizing the blood bag in the storage room"
                  },
                  {
                    day: "Thu",
                    date: "Mar 26",
                    tasks: [{ time: "08:40", activity: "Task" }],
                    notes: "Help on stripping blood and organizing the blood bag in the storage room"
                  },
                  {
                    day: "Fri",
                    date: "Mar 27",
                    tasks: [{ time: "08:40", activity: "Task" }],
                    notes: "Listening at NHQ WASH office online meet "
                  }
                ]
              },

              {
                week: "Week 9",
                dateRange: "Mar 30 – Apr 5, 2026",
                days: [
                  {
                    day: "Mon",
                    date: "Mar 30",
                    tasks: [{ time: "08:40", activity: "Task" }],
                    notes: "Meeting with the team of volunteer that is going to Krus na Parang 2026 and preparation for the event"
                  },
                  {
                    day: "Tue",
                    date: "Mar 31",
                    tasks: [{ time: "06:00", activity: "Task" }],
                    notes: "Preparing to leave the chapter for the Krus na Parang 2026 event in Abra De Ilog, Occidental Mindoro"
                  },
                  {
                    day: "Wed",
                    date: "Apr 1",
                    tasks: [{ time: "04:00", activity: "Task" }],
                    notes: "Kruz na parang in Abra De Ilog Occidental Mindoro First aid Station 14 "
                  },
                  {
                    day: "Thu",
                    date: "Apr 2",
                    tasks: [{ time: "04:00", activity: "Task" }],
                    notes: "Kruz na parang in Abra De Ilog Occidental Mindoro First aid Station 14 "
                  },
                  {
                    day: "Fri",
                    date: "Apr 3",
                    tasks: [{ time: "04:00", activity: "Task" }],
                    notes: "Kruz na parang in Abra De Ilog Occidental Mindoro First aid Station 14 "
                  },
                  {
                    day: "Sat",
                    date: "Apr 4",
                    tasks: [{ time: "04:00", activity: "Task" }],
                    notes: "Kruz na parang in Abra De Ilog Occidental Mindoro First aid Station 14 and end of the event"
                  },
                  {
                    day: "Sun",
                    date: "Apr 5",
                    tasks: [{ time: "04:00", activity: "Task" }],
                    notes: "Preparing to leave the Abra De Ilog, Occidental Mindoro and going back to the chapter"
                  }
                ]
              },

              {
                week: "Week 10",
                dateRange: "Apr 6 – Apr 10, 2026",
                days: [
                  {
                    day: "Mon",
                    date: "Apr 6",
                    tasks: [{ time: "07:30", activity: "Task" }],
                    notes: "Organizing documents "
                  },
                  {
                    day: "Tue",
                    date: "Apr 7",
                    tasks: [{ time: "09:00", activity: "Task" }],
                    notes: "Scanned documents and organizing the file of the chapter"
                  },
                  {
                    day: "Fri",
                    date: "Apr 10",
                    tasks: [{ time: "09:30", activity: "Task" }],
                    notes: "Finalizing documents and preparing for the next meeting"
                  }
                ]
              },

              {
                week: "Week 11",
                dateRange: "Apr 14 – Apr 17, 2026",
                days: [
                  {
                    day: "Mon",
                    date: "Apr 14",
                    tasks: [{ time: "08:30", activity: "Task" }],
                    notes: "Inventory checking "
                  },
                  {
                    day: "Wed",
                    date: "Apr 16",
                    tasks: [{ time: "08:15", activity: "Task" }],
                    notes: "Inventory checking "
                  },
                  {
                    day: "Thu",
                    date: "Apr 17",
                    tasks: [{ time: "08:00", activity: "Task" }],
                    notes: "Inventory checking "
                  }
                ]
              },

              {
                week: "Week 12",
                dateRange: "Apr 20 – Apr 23, 2026",
                days: [
                  {
                    day: "Mon",
                    date: "Apr 20",
                    tasks: [{ time: "10:00", activity: "Task" }],
                    notes: "Inventory checking and organizing the storage room of the chapter"
                  },
                  {
                    day: "Wed",
                    date: "Apr 22",
                    tasks: [{ time: "09:30", activity: "Task" }],
                    notes: "Inventory checking and organizing the storage room of the chapter"
                  },
                  {
                    day: "Thu",
                    date: "Apr 23",
                    tasks: [{ time: "09:00", activity: "Task" }],
                    notes: "Inventory checking and organizing the storage room of the chapter"
                  }
                ]
              },

              {
                week: "Week 13",
                dateRange: "Apr 30 – May 1, 2026",
                days: [
                  {
                    day: "Thu",
                    date: "Apr 30",
                    tasks: [{ time: "06:30", activity: "Task" }],
                    notes: "First day of the Youth Volunteer Formation Course held at SJAA,"
                  },
                  {
                    day: "Fri",
                    date: "May 1",
                    tasks: [{ time: "06:30-5:30", activity: "Task" }],
                    notes: "Final OJT completion"
                  }
                ]
              }
            ]
      },
      {
        id: "dtr",
        label: "B.",
        title: "Daily Time Record",
        body: [
          "Records of daily attendance, time-in and time-out, and total hours rendered. The full official record is preserved in Appendix J.",
        ],
        dtr: [
                { date: "2026-01-30", timeIn: "09:30 AM", timeOut: "12:15 PM", hours: "2.75 hrs" },

                { date: "2026-02-02", timeIn: "08:00 AM", timeOut: "06:15 PM", hours: "9.25 hrs" },
                { date: "2026-02-03", timeIn: "08:00 AM", timeOut: "05:30 PM", hours: "8.92 hrs" },
                { date: "2026-02-04", timeIn: "08:30 AM", timeOut: "05:30 PM", hours: "8.00 hrs" },
                { date: "2026-02-05", timeIn: "08:00 AM", timeOut: "05:35 PM", hours: "8.58 hrs" },
                { date: "2026-02-06", timeIn: "08:15 AM", timeOut: "06:00 PM", hours: "8.75 hrs" },
                { date: "2026-02-09", timeIn: "08:00 AM", timeOut: "05:40 PM", hours: "8.75 hrs" },
                { date: "2026-02-10", timeIn: "08:30 AM", timeOut: "05:30 PM", hours: "8.00 hrs" },
                { date: "2026-02-11", timeIn: "08:20 AM", timeOut: "05:30 PM", hours: "8.00 hrs" },
                { date: "2026-02-12", timeIn: "08:00 AM", timeOut: "07:00 PM", hours: "10.00 hrs" },
                { date: "2026-02-13", timeIn: "08:15 AM", timeOut: "06:00 PM", hours: "9.25 hrs" },
                { date: "2026-02-16", timeIn: "08:15 AM", timeOut: "05:30 PM", hours: "8.25 hrs" },
                { date: "2026-02-18", timeIn: "08:10 AM", timeOut: "05:30 PM", hours: "8.50 hrs" },
                { date: "2026-02-19", timeIn: "08:50 AM", timeOut: "05:30 PM", hours: "7.42 hrs" },
                { date: "2026-02-20", timeIn: "08:00 AM", timeOut: "09:00 PM", hours: "12.17 hrs" },
                { date: "2026-02-23", timeIn: "08:30 AM", timeOut: "05:15 PM", hours: "8.75 hrs" },
                { date: "2026-02-24", timeIn: "07:00 AM", timeOut: "05:40 PM", hours: "10.67 hrs" },
                { date: "2026-02-25", timeIn: "07:00 AM", timeOut: "07:40 PM", hours: "12.67 hrs" },
                { date: "2026-02-26", timeIn: "05:00 AM", timeOut: "06:00 PM", hours: "13.00 hrs" },
                { date: "2026-02-27", timeIn: "09:00 AM", timeOut: "05:35 PM", hours: "8.58 hrs" },

                { date: "2026-03-02", timeIn: "08:10 AM", timeOut: "05:00 PM", hours: "7.83 hrs" },
                { date: "2026-03-03", timeIn: "08:30 AM", timeOut: "05:30 PM", hours: "7.17 hrs" },
                { date: "2026-03-04", timeIn: "08:20 AM", timeOut: "05:30 PM", hours: "8.00 hrs" },
                { date: "2026-03-05", timeIn: "07:50 AM", timeOut: "05:40 PM", hours: "8.50 hrs" },
                { date: "2026-03-06", timeIn: "07:50 AM", timeOut: "05:20 PM", hours: "7.67 hrs" },
                { date: "2026-03-08", timeIn: "03:30 PM", timeOut: "09:00 PM", hours: "5.50 hrs" },
                { date: "2026-03-09", timeIn: "06:00 AM", timeOut: "04:00 PM", hours: "10.00 hrs" },
                { date: "2026-03-10", timeIn: "05:00 AM", timeOut: "07:30 PM", hours: "14.50 hrs" },
                { date: "2026-03-11", timeIn: "07:30 AM", timeOut: "05:00 PM", hours: "9.50 hrs" },
                { date: "2026-03-12", timeIn: "05:00 AM", timeOut: "04:00 PM", hours: "11.00 hrs" },
                { date: "2026-03-13", timeIn: "07:30 AM", timeOut: "05:30 PM", hours: "10.00 hrs" },
                { date: "2026-03-16", timeIn: "07:50 AM", timeOut: "05:30 PM", hours: "8.67 hrs" },
                { date: "2026-03-17", timeIn: "08:50 AM", timeOut: "05:30 PM", hours: "7.33 hrs" },
                { date: "2026-03-18", timeIn: "09:00 AM", timeOut: "05:20 PM", hours: "6.33 hrs" },
                { date: "2026-03-19", timeIn: "08:10 AM", timeOut: "05:20 PM", hours: "8.17 hrs" },
                { date: "2026-03-20", timeIn: "08:40 AM", timeOut: "04:30 PM", hours: "6.83 hrs" },
                { date: "2026-03-23", timeIn: "08:50 AM", timeOut: "05:30 PM", hours: "7.33 hrs" },
                { date: "2026-03-24", timeIn: "08:30 AM", timeOut: "05:20 PM", hours: "7.83 hrs" },
                { date: "2026-03-25", timeIn: "08:10 AM", timeOut: "05:30 PM", hours: "9.33 hrs" },
                { date: "2026-03-26", timeIn: "08:40 AM", timeOut: "05:30 PM", hours: "7.83 hrs" },
                { date: "2026-03-27", timeIn: "08:40 AM", timeOut: "05:00 PM", hours: "7.33 hrs" },
                { date: "2026-03-30", timeIn: "08:40 AM", timeOut: "05:30 PM", hours: "7.75 hrs" },
                { date: "2026-03-31", timeIn: "06:00 AM", timeOut: "05:00 PM", hours: "11.00 hrs" },

                { date: "2026-04-01", timeIn: "04:00 AM", timeOut: "04:00 PM", hours: "12.00 hrs" },
                { date: "2026-04-02", timeIn: "04:00 AM", timeOut: "04:00 PM", hours: "12.00 hrs" },
                { date: "2026-04-03", timeIn: "04:00 AM", timeOut: "04:00 PM", hours: "12.00 hrs" },
                { date: "2026-04-04", timeIn: "04:00 AM", timeOut: "04:00 PM", hours: "12.00 hrs" },
                { date: "2026-04-05", timeIn: "04:00 AM", timeOut: "04:00 PM", hours: "12.00 hrs" },
                { date: "2026-04-06", timeIn: "07:30 AM", timeOut: "05:30 PM", hours: "10.00 hrs" },
                { date: "2026-04-07", timeIn: "09:00 AM", timeOut: "05:15 PM", hours: "7.25 hrs" },
                { date: "2026-04-10", timeIn: "09:30 AM", timeOut: "12:00 PM", hours: "2.50 hrs" },
                { date: "2026-04-14", timeIn: "08:30 AM", timeOut: "05:30 PM", hours: "8.00 hrs" },
                { date: "2026-04-16", timeIn: "08:15 AM", timeOut: "06:00 PM", hours: "9.75 hrs" },
                { date: "2026-04-17", timeIn: "08:00 AM", timeOut: "05:15 PM", hours: "8.25 hrs" },
                { date: "2026-04-20", timeIn: "10:00 AM", timeOut: "05:40 PM", hours: "6.50 hrs" },
                { date: "2026-04-22", timeIn: "09:30 AM", timeOut: "05:15 PM", hours: "5.75 hrs" },
                { date: "2026-04-23", timeIn: "09:00 AM", timeOut: "05:45 PM", hours: "6.75 hrs" },
                { date: "2026-04-30", timeIn: "06:30 AM", timeOut: "05:30 PM", hours: "11.00 hrs" },

                { date: "2026-05-01", timeIn: "06:30 AM", timeOut: "05:30 PM", hours: "11.00 hrs" }
              ]
      },
      {
        id: "progress",
        label: "C.",
        title: "Internship Progress Report",
        body: [
          "A periodic report submitted to the OJT coordinator detailing the trainee's growth, areas of improvement, and overall progress against the objectives stated in Chapter I.",
        ],
      },
      {
        id: "analysis",
        label: "D.",
        title: "Internship Analysis Report",
        body: [
          "A reflective analysis of the internship as a whole — what worked, what didn't, what was learned, and what the trainee would do differently. This section is the heart of the documentation: honest, specific, and forward-looking.",
        ],
      },
    ],
  },

  /* -- Chapter IV ------------------------------------------------------- */
  assessment: {
    sections: [
      {
        id: "evaluation",
        label: "A.",
        title: "Student Internship Evaluation Form",
        body: [
          "The evaluation form completed by the host company supervisor provides a structured assessment of the trainee's performance across competencies such as technical ability, communication, teamwork, and professional conduct.",
          "The completed evaluation document is attached in Appendix A.",
        ],
      },
    ],
  },

  /* -- Appendices ------------------------------------------------------- */
  appendices: [
    {
    code: "A",
    title: "Evaluation Form",
    description: "Final evaluation...",
    files: [
      {
        type: "image",
        file: "/images/Evaluation1.jpg"
      },{
        type: "image",
        file: "/images/Evaluation2.jpg"
      },{
        type: "image",
        file: "/images/Evaluation3.jpg"
      }
    ]
  },{
    code: "B",
    title: "Office Work Photos",
    description: "Office work...",
    files: [
      {
        type: "image",
        file: "/images/Photo1.jpg",
        caption: "Office Work Photo 1"
      },
      {
        type: "image",
        file: "/images/Photo2.jpg",
        caption: "Office Work Photo 2"
      },
      {
        type: "image",
        file: "/images/Photo3.jpeg",
        caption: "Office Work Photo 3"
      },
      {
        type: "image",
        file: "/images/Photo4.jpeg",
        caption: "Office Work Photo 4"
      },
      {
        type: "image",
        file: "/images/Photo5.jpg",
        caption: "Office Work Photo 5"
      },
      {
        type: "image",
        file: "/images/Photo6.jpg",
        caption: "Office Work Photo 6"
      },
      {
        type: "image",
        file: "/images/Photo7.jpg",
        caption: "Office Work Photo 7"
      }
    ]
  },
  {
    code: "C",
    title: "Evaluation Form",
    description: "Evaluation...",
    files: [
       {
        type: "image",
        file: "/appendices/Grade.jpg",
        caption: "Evaluation Form"
      }
    ]
  },   
  { 
    code: "D", 
    title: "Parent's Consent", 
    description: "Signed parental consent for participation in the program.",
    files: [
      {
        type: "image",
        file: "/images/Consent.jpg"
      }
    ] 
  },
    { 
      code: "E", 
      title: "Medical Certificate", 
      description: "Health clearance for the internship period.",
    files: [
      {
        type: "image",
        file: "/images/MMU1.jpg"
      },{
        type: "image",
        file: "/images/MMU2.jpg"
      }
    ]
    },
    { 
      code: "F", 
      title: "Certificate of Good Moral Character", 
      description: "Issued by the school's office of student affairs.",
    files: [
      {
        type: "image",
        file: "/images/GoodMoral.jpg"
      }
    ] },
    { 
      code: "G", 
      title: "Application Letter", 
      description: "Formal letter of application sent to the host company.",
    files: [
      {
        type: "image",
        file: "/images/Letter.png"
      }
    ] },
    { 
      code: "H", 
      title: "Endorsement Letter", 
      description: "Endorsement from the school to the host company.",
    files: [
      {
        type: "image",
        file: "/images/Endorsment.png"
      }
    ] },
    { 
      code: "I", 
      title: "Memorandum of Agreement", 
      description: "Signed agreement between the school and the host company.",
    files: [
      {
        type: "image",
        file: "/images/MOA1.jpg"
      },
      {
        type: "image",
        file: "/images/MOA2.jpg"
      },
      {
        type: "image",
        file: "/images/MOA3.jpg"
      },
      {
        type: "image",
        file: "/images/MOA4.jpg"
      },
      {
        type: "image",
        file: "/images/MOA5.jpg"
      }
    ] },
    { 
      code: "J", 
      title: "Daily Time Record (Time Card)", 
      description: "Complete official daily attendance record.",
    files: [
      {
        type: "pdf",
        file: "/appendices/evaluation-form.pdf"
      }
    ] },
    { 
      code: "K", 
      title: "Certificate of Completion", 
      description: "Issued by the host company upon successful completion.",
    files: [
      {
        type: "image",
        file: "/images/COC.jpg"
      }
    ] },
    { 
      code: "L", 
      title: "Certificate of Clearance", 
      description: "Clearance from the host company prior to closing.",
    files: [
      {
        type: "image",
        file: "/images/Clearance.jpg"
      }
    ] },
    { 
      code: "M", 
      title: "Pre-service Seminar Photos", 
      description: "Documentation of the pre-internship seminar.",
    files: [
      {
        type: "image",
        file: "/images/PreServiceSeminar.jpg"
      },{
        type: "image",
        file: "/images/PreServiceSeminar.jpg"
      },{
        type: "image",
        file: "/images/PreServiceSeminar.jpg"
      },{
        type: "image",
        file: "/images/PreServiceSeminar.jpg"
      },{
        type: "image",
        file: "/images/PreServiceSeminar.jpg"
      },{
        type: "image",
        file: "/images/PreServiceSeminar.jpg"
      },
    ] },
    { 
      code: "N", 
      title: "Cirtificates", 
      description: "Documents taken during the internship period, such as training certificates or awards received.",
    files: [
      {
        type: "image",
        file: "/images/Certificate.jpg",
        caption: "Certificate received during the internship."
      },
      {
        type: "image",
        file: "/images/CA.jpg",
        caption: "Certificate received during the internship."
      },
      {
        type: "image",
        file: "/images/COC.jpg",
        caption: "Certificate received during the internship."
      },
      {
        type: "image",
        file: "/images/Participation.jpg",
        caption: "Certificate received during the internship."
      },
      {
        type: "image",
        file: "/images/Certificate.jpg",
        caption: "Certificate received during the internship."
      },
    ] },
    { 
      code: "O", 
      title: "Code of Ethics", 
      description: "Code of ethics for student internship, signed and acknowledged.",
    files: [
      {
        type: "image",
        file: "/appendices/evaluation-form.pdf"
      }
    ] },
    { 
      code: "P", 
      title: "Curriculum Vitae", 
      description: "Updated CV / resume of the student trainee.",
    files: [
      {
        type: "image",
        file: "/images/CV.jpg",
        caption: "Curriculum Vitae of the student."
      },{
        type: "image",
        file: "/images/CV1.jpg",
        caption: "Updated Curriculum Vitae of the student."
      },
    ] },
    { 
      code: "Q", 
      title: "Portfolio Evaluation Form", 
      description: "Final evaluation of this E-Portfolio document.",
    files: [
      {
        type: "image",
        file: "/images/Evaluation1.jpg",
        caption: "Portfolio Evaluation Form."
      },{
        type: "image",
        file: "/images/Evaluation2.jpg",
        caption: "Portfolio Evaluation Form."
      },{
        type: "image",
        file: "/images/Evaluation3.jpg",
        caption: "Portfolio Evaluation Form."
      },
    ] },
  ],

  /* -- Navigation ------------------------------------------------------- */
  nav: [
    { to: "/", label: "Title" },
    { to: "/introduction", label: "Chapter I — Introduction" },
    { to: "/company", label: "Chapter II — Company" },
    { to: "/work", label: "Chapter III — Work" },
    { to: "/assessment", label: "Chapter IV — Assessment" },
    { to: "/appendices", label: "Appendices" },
  ],
};

export default config;