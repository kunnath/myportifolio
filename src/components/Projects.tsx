'use client';

import { motion } from 'framer-motion';

const Projects = () => {
  const professionalExperience = [
    {
      role: "Senior QA Consultant & AI Automation Expert",
      company: "Dinexora",
      location: "Berlin, Germany",
      duration: "Feb 2025 – Present",
      highlights: [
        {
          category: "AI Innovation",
          details: "Pioneered AI-driven test automation solutions using Natural Language Processing with Playwright, revolutionizing test script creation and maintenance."
        },
        {
          category: "Strategic Consulting",
          details: "Provided expert QA consulting services to startups and enterprises, helping them scale their products across European and Indian markets."
        },
        {
          category: "Technical Leadership",
          details: "Implemented cutting-edge AI-powered testing frameworks that reduced test creation time by 70% while improving coverage."
        },
        {
          category: "International Impact",
          details: "Successfully guided multiple companies in expanding their digital footprint across diverse markets, ensuring seamless product localization and quality."
        }
      ]
    },
    {
      role: "QA Manager",
      company: "Leading Tech Company",
      duration: "2018 – 2025",
      highlights: [
        {
          category: "Leadership",
          details: "Managed and mentored a high-performing team of 10+ QA engineers."
        },
        {
          category: "AI & Automation",
          details: "Spearheaded AI-driven test automation frameworks, cutting testing time by 60%."
        },
        {
          category: "CI/CD Excellence",
          details: "Developed and maintained robust CI/CD pipelines ensuring faster and reliable releases."
        }
      ]
    },
    {
      role: "Sr Test Architect",
      company: "Leading Service and Product Company",
      duration: "2008 – 2017",
      highlights: [
        {
          category: "Strategic Test Architecture",
          details: "Designed enterprise-wide test strategies for web & mobile platforms."
        },
        {
          category: "Automation Frameworks",
          details: "Implemented scalable frameworks using Selenium, Appium, TestNG, and Cucumber."
        },
        {
          category: "Integrated Testing",
          details: "Embedded performance, API, and security testing into CI/CD pipelines."
        },
        {
          category: "Mentorship",
          details: "Guided QA engineers on automation, DevOps practices, and test architecture."
        }
      ]
    }
  ];

  const automationTools = [
    {
      title: "BDD Framework: Wolt BDD Testing Project",
      techStack: ["Python", "Behave (Cucumber)", "Selenium WebDriver"],
      objective: "Automate end-to-end tests for the Wolt website while providing a modern, visually appealing test execution dashboard.",
      features: [
        "BDD framework with reusable step definitions",
        "Advanced dashboard for monitoring test execution in real-time",
        "Mobile testing support for Android and iOS devices",
        "Cross-browser automation using Selenium WebDriver",
        "CI/CD integration ready for scalable automation"
      ],
      impact: "Provides clear visibility of test coverage, accelerates regression testing, and ensures high-quality deployments."
    },
    {
      title: "AI-Powered Test Case Generation: Intelix.ai",
      gitRepo: "Intelix.ai",
      objective: "Automatically generate high-quality manual test cases in XRAY format from JIRA ticket descriptions using a local LLM.",
      summary: "A complete AI-powered QA system integrating JIRA, AI-based test case generation, and modern storage & visualization",
      features: [
        "JIRA API integration to fetch ticket descriptions automatically",
        "Local LLM-based test case generation (offline, privacy-safe)",
        "Storage of test cases in Qdrant Vector DB for easy retrieval",
        "React-based UI for test case generation, viewing, and export in CSV/XRay format"
      ],
      impact: "Transforms manual QA processes into an AI-driven workflow, reducing human effort and increasing test accuracy."
    },
    {
      title: "Automation AI Framework: Jiraa2a",
      gitRepo: "Jiraa2a",
      objective: "Visualize JIRA issue relationships and leverage AI to generate test cases directly from requirement data.",
      features: [
        "Connect to JIRA and visualize issues in an interactive graph",
        "Explore requirements, test cases, and defects with advanced filters",
        "Tabbed UI with analytics, charts, and multiple export options (PNG, JPEG, PDF, CSV)",
        "AI-powered test case generation in XRay format using Ollama LLM",
        "Intelligent parsing of descriptions for acceptance criteria and requirements",
        "Structured data extraction ensures accurate and detailed test cases"
      ],
      impact: "Bridges project management and QA, enabling data-driven test generation and real-time insights into requirements coverage."
    },
    {
      title: "QA Automation Tool: QAinteliagent",
      gitRepo: "QAinteliagent",
      objective: "Automate test case and script generation from functional requirements using AI.",
      features: [
        "Extract test cases from PDF requirements using Claude AI",
        "Generate test cases in standard, BDD, XRay-compatible, or detailed formats",
        "Generate synthetic test data for testing completeness",
        "Auto-generate automated test scripts using Playwright",
        "Analyze test cases to identify missing information or gaps"
      ]
    }
  ];

  const projects = [
    {
      title: "CT Digital & Healthcare Imaging Systems",
      client: "General Electric - John F. Welch Technology Centre",
      location: "Bangalore, India",
      duration: "July 2017 - May 2018",
      role: "Technical Architect",
      domain: "Healthcare - Medical Imaging",
      projectName: "Internet Protocol Management (CT Digital / CT Scan)",
      description: "Led strategic QA initiatives for GE Healthcare's mission-critical CT Digital and CT Scan systems. Architected enterprise-grade automation solutions while ensuring compliance with healthcare regulations and delivering exceptional quality in medical imaging systems.",
      industryFocus: "Medical Device & Healthcare Technology",
      compliance: ["Healthcare Regulations", "Medical Device Standards", "Quality Control"],
      highlights: [
        "60% reduction in testing cycles",
        "Enterprise-grade automation framework",
        "Regulatory-compliant QA processes",
        "Technology stack: RobotFramework, Selenium, Python, Jenkins"
      ],
      achievements: [
        {
          category: "Healthcare Innovation",
          points: [
            "Architected QA solutions for medical imaging systems",
            "Ensured compliance with healthcare regulations",
            "Validated critical CT scan workflows",
            "Integrated clinical testing requirements"
          ]
        },
        {
          category: "Technical Excellence",
          points: [
            "Developed enterprise automation frameworks",
            "Implemented CI/CD pipelines for healthcare systems",
            "Created comprehensive test coverage strategy",
            "Established automated reporting systems"
          ]
        },
        {
          category: "Process Leadership",
          points: [
            "Led Agile QA practices in healthcare context",
            "Managed cross-functional team collaboration",
            "Streamlined testing lifecycle processes",
            "Reduced manual testing effort by 60%"
          ]
        },
        {
          category: "Quality Impact",
          points: [
            "Enhanced medical device testing reliability",
            "Accelerated product release cycles",
            "Improved defect detection efficiency",
            "Established healthcare-specific QA standards"
          ]
        }
      ],
      certifications: ["Healthcare Systems", "Medical Device Testing"],
      systemComponents: ["CT Digital Interface", "Scan Systems", "Integration Layer"],
    },
    {
      title: "Video Service & Camera Platform",
      client: "Smartfrog GmbH",
      location: "Berlin, Germany",
      duration: "Jul 2019 - Oct 2020",
      role: "Senior Quality Manager",
      domain: "IoT / Video & Camera Services",
      description: "Leading end-to-end QA strategy and automation initiatives for Smartfrog's Video Service and Camera platform. Managing comprehensive QA processes across web, mobile, and IoT devices with integrated CI/CD pipelines and automated testing frameworks.",
      platforms: ["Web", "Mobile (iOS/Android)", "IoT Cameras"],
      highlights: [
        "70% increase in testing efficiency",
        "End-to-end IoT device automation",
        "Cross-platform test coverage",
        "Technology stack: RobotFramework, Appium, Python, Docker, GoCD"
      ],
      achievements: [
        {
          category: "DevOps & Infrastructure",
          points: [
            "Integrated QA automation with GoCD pipelines",
            "Implemented Infrastructure as Code (IaC) for test environments",
            "Automated environment provisioning and deployment",
            "Established containerized testing using Docker"
          ]
        },
        {
          category: "Automation Architecture",
          points: [
            "Designed cross-platform automation frameworks",
            "Built comprehensive mobile testing solutions",
            "Implemented IoT device automation strategies",
            "Created unified web, mobile, and device testing approach"
          ]
        },
        {
          category: "Process Excellence",
          points: [
            "Aligned QA with Kanban methodology",
            "Optimized workflow and feedback cycles",
            "Enhanced testing efficiency by 60-70%",
            "Accelerated release cycles through automation"
          ]
        },
        {
          category: "Leadership Impact",
          points: [
            "Mentored QA team on automation best practices",
            "Led CI/CD integration initiatives",
            "Established IoT testing standards",
            "Strengthened team technical capabilities"
          ]
        }
      ]
    },
    {
      title: "Aggreko Y.Cube Energy Management Platform",
      client: "Aggreko GmbH",
      location: "Berlin, Germany",
      duration: "July 2018 - February 2019",
      role: "Technical Architect",
      domain: "Energy / Industrial Solutions",
      description: "Led the architectural design and implementation of automation framework for Y.Cube platform, a sophisticated energy management solution. Integrated QA automation with DevOps practices while managing end-to-end quality assurance operations.",
      highlights: [
        "Reduced manual regression effort by 60% through intelligent automation",
        "Accelerated release cycles with CI/CD pipeline integration",
        "Implemented multi-environment testing using OpenShift (OKD)",
        "Technology stack: OpenShift, Jenkins, Python, RobotFramework, Docker"
      ],
      achievements: [
        {
          category: "Technical Architecture",
          points: [
            "Designed scalable automation framework for multi-environment testing",
            "Implemented containerized test execution using Docker",
            "Integrated automated tests with OpenShift (OKD) infrastructure"
          ]
        },
        {
          category: "DevOps Integration",
          points: [
            "Built comprehensive CI/CD pipelines in Jenkins",
            "Automated deployment and testing workflows",
            "Established DevOps practices within QA processes"
          ]
        },
        {
          category: "Leadership & Process",
          points: [
            "Led QA team using Scrum and Kanban methodologies",
            "Mentored team members in automation best practices",
            "Streamlined testing lifecycle and improved efficiency"
          ]
        },
        {
          category: "Quality Impact",
          points: [
            "60% reduction in manual regression testing effort",
            "Significantly improved release reliability",
            "Enhanced test coverage across platform components"
          ]
        }
      ]
    },
    {
      title: "Mercedes-Benz Trade-in Value Automation",
      client: "Mercedes-Benz",
      duration: "2023 - 2024",
      description: "Led the end-to-end design and implementation of a robust automation framework for Mercedes-Benz's Trade-in Value platform, covering multiple countries (DE, EN, SA, CN) and languages.",
      role: "QA Manager & Automation Architect",
      highlights: [
        "Designed scalable Playwright automation framework supporting multiple locales",
        "Implemented filter-driven dynamic testing for vehicle configurations",
        "Automated testing for German, English, Saudi Arabic, and Chinese sites",
        "Integrated tests with GitHub Actions for CI/CD pipeline",
        "Implemented parallel execution with comprehensive reporting",
        "Reduced manual testing time significantly across markets",
        "Technology stack: Playwright, TypeScript, GitHub Actions, Allure Reports"
      ],
      achievements: [
        {
          category: "Automation Architecture",
          points: [
            "Built scalable framework supporting multiple locales",
            "Implemented dynamic testing for vehicle configurations",
            "Created modular, maintainable framework design"
          ]
        },
        {
          category: "Multilingual Testing",
          points: [
            "Automated testing in 4 languages",
            "Ensured localized content accuracy",
            "Validated UI consistency across markets"
          ]
        },
        {
          category: "CI/CD Integration",
          points: [
            "GitHub Actions integration",
            "Parallel test execution",
            "Comprehensive artifact reporting"
          ]
        },
        {
          category: "Leadership",
          points: [
            "Defined QA standards and strategy",
            "Mentored team in automation practices",
            "Improved overall testing efficiency"
          ]
        }
      ]
    },
    {
      title: "Cleaning Service Management System",
      client: "Service Industry",
      duration: "Feb 2025 - May 2025",
      description: "Developed a comprehensive multilingual booking platform for cleaning services",
      highlights: [
        "Implemented secure payment gateway integration",
        "Built real-time updates system for service status",
        "Developed advanced admin dashboards for operations management",
        "Created API-ready architecture for multiple service modules",
        "Managed staff scheduling, user booking, and inventory systems",
        "Technology stack: React, Node.js, MongoDB, WebSocket, Stripe API"
      ]
    },
    {
      title: "Real-Time EEG Brainwave Monitor",
      client: "Healthcare Technology",
      duration: "Feb 2025 - Jun 2025",
      description: "Developed a mobile application for cognitive tracking and mindfulness using EEG data",
      highlights: [
        "Integrated real-time EEG data processing",
        "Implemented cognitive tracking algorithms",
        "Created mindfulness features with real-time feedback",
        "Built mobile app with cross-platform compatibility",
        "Technology stack: React Native, TensorFlow, Python, Bluetooth LE"
      ]
    },
    {
      title: "Test Automation Framework",
      client: "Major Financial Institution",
      duration: "2024 - 2025",
      description: "Led the development of an AI-powered test automation framework",
      highlights: [
        "Reduced testing time by 60% through AI-driven test optimization",
        "Implemented ML algorithms for predictive test case selection",
        "Integrated with CI/CD pipeline for automated regression testing",
        "Technology stack: Python, Selenium, TensorFlow, Jenkins"
      ]
    },
    {
      title: "Quality Assurance Transformation",
      client: "Healthcare Technology Provider",
      duration: "2023 - 2024",
      description: "Modernized QA processes and tooling for a healthcare platform",
      highlights: [
        "Implemented BDD framework using Cucumber and Playwright",
        "Established automated security testing pipeline",
        "Reduced bug escape rate by 75%",
        "Technology stack: TypeScript, Playwright, Cucumber, Azure DevOps"
      ]
    },
    {
      title: "Mobile App Testing Framework",
      client: "E-commerce Platform",
      duration: "2023",
      description: "Designed and implemented mobile app testing solution",
      highlights: [
        "Created cross-platform test suite for iOS and Android",
        "Implemented visual regression testing",
        "Achieved 90% test automation coverage",
        "Technology stack: Appium, JavaScript, Docker, AWS Device Farm"
      ]
    },
    {
      title: "IflightNeo & Airline Solutions Portfolio",
      client: "IBS Software Pvt. Ltd",
      location: "Trivandrum, India",
      duration: "April 2014 - January 2016",
      role: "Senior Test Lead / Automation Architect",
      domain: "Airlines & Logistics",
      products: ["IflightNeo", "Opsman", "Skycon", "Flydubai (CSR)"],
      description: "Led comprehensive QA strategy and automation initiatives for multiple mission-critical airline products, encompassing reservation systems, operations platforms, and customer service solutions. Established a Testing Center of Excellence (TCoE) while driving enterprise-wide automation adoption.",
      highlights: [
        "50% reduction in regression testing time",
        "Multiple airline systems automated",
        "TCoE establishment & standardization",
        "Technology stack: Selenium, QTP/UFT, RobotFramework, Jenkins"
      ],
      achievements: [
        {
          category: "Technical Leadership",
          points: [
            "Designed enterprise-grade automation frameworks for airline systems",
            "Implemented reusable test components across products",
            "Established scalable testing architecture for complex workflows",
            "Led technical evaluations and RFP responses"
          ]
        },
        {
          category: "Process Excellence",
          points: [
            "Created Testing Center of Excellence (TCoE)",
            "Standardized QA practices across products",
            "Optimized test coverage and reduced defect leakage",
            "Implemented Agile testing methodologies"
          ]
        },
        {
          category: "Project Management",
          points: [
            "Managed multiple product testing lifecycles",
            "Led sprint planning and backlog grooming",
            "Coordinated cross-functional testing activities",
            "Mentored junior QA engineers"
          ]
        },
        {
          category: "Business Impact",
          points: [
            "Enhanced product quality across airline systems",
            "Reduced regression testing time by 50%",
            "Improved delivery consistency across projects",
            "Contributed to successful client demonstrations"
          ]
        }
      ]
    },
    {
      title: "Walmart Logistics & Retail Systems Automation",
      client: "Walmart",
      duration: "2017 - 2019",
      description: "Led the automation strategy and implementation for Walmart's comprehensive logistics and retail systems, covering Transportation Management, Warehouse Stores, Freight Management, and Route Management.",
      role: "Senior QA Automation Lead",
      highlights: [
        "Designed automation frameworks using QTP/UFT with Jenkins integration",
        "Implemented continuous testing pipelines for logistics systems",
        "Led POCs and client demonstrations for automation validation",
        "Developed comprehensive test strategy and documentation",
        "Technology stack: QTP/UFT, Jenkins, Quality Center, VBScript"
      ],
      achievements: [
        {
          category: "Framework Development",
          points: [
            "Built robust automation frameworks integrated with CI/CD",
            "Enhanced object repositories and reusable components",
            "Implemented comprehensive reporting mechanisms"
          ]
        },
        {
          category: "Team Leadership",
          points: [
            "Mentored automation team on frameworks and tools",
            "Conducted technical training and knowledge transfer",
            "Provided ongoing technical support and guidance"
          ]
        },
        {
          category: "Process Improvement",
          points: [
            "Developed test plans and strategy guidelines",
            "Created estimation models for automation projects",
            "Established metrics for coverage and reporting"
          ]
        },
        {
          category: "Technical Impact",
          points: [
            "Automated complex logistics workflows",
            "Reduced testing cycle time significantly",
            "Improved test coverage and reliability"
          ]
        }
      ]
    }
  ];

  const skillCategories = {
    qaAutomation: {
      title: "QA & Automation",
      skills: ["Test Architecture", "Test Automation", "Cross-border QA", "Strategic Planning", "Quality Consulting", "Playwright"],
      colorClass: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:text-blue-800"
    },
    dataScience: {
      title: "Data Science & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks", "Computer Vision", "Natural Language Processing", "Deep Learning"],
      colorClass: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 hover:text-purple-800"
    },
    dataProcessing: {
      title: "Data Processing & Visualization",
      skills: ["NumPy", "Pandas", "PySpark", "Matplotlib", "Seaborn"],
      colorClass: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:text-green-800"
    },
    mlops: {
      title: "MLOps & Analysis",
      skills: ["MLflow", "Docker", "Kubernetes", "CI/CD for ML", "Statistical Analysis", "Time Series Analysis", "A/B Testing"],
      colorClass: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 hover:text-indigo-800"
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovation in QA Automation, AI Integration, and Quality Excellence
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {professionalExperience.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-8 relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                </div>

                <div className="space-y-4">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4 group-hover:bg-white transition-colors">
                      <h4 className="font-semibold text-blue-600 mb-2">
                        {highlight.category}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {highlight.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Automation Tools Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Automation Solutions
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {automationTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {tool.title}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {tool.objective}
                  </p>
                  <div className="space-y-4">
                    {tool.features && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-600 mb-3">Key Features</h5>
                        <ul className="list-disc list-inside space-y-2">
                          {tool.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-600 text-sm">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {tool.techStack && (
                      <div className="flex flex-wrap gap-2">
                        {tool.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Project Portfolio
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h4>
                    {project.client && (
                      <p className="text-gray-600 mb-1">{project.client}</p>
                    )}
                    <div className="flex flex-wrap gap-2 items-center text-sm text-gray-500">
                      {project.duration && (
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {project.duration}
                        </span>
                      )}
                      {project.location && (
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {project.description && (
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>
                  )}

                  {project.highlights && (
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-600 mb-3">Highlights</h5>
                        <ul className="list-disc list-inside space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-gray-600 text-sm">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {project.achievements && (
                    <div className="mt-6 space-y-4">
                      {project.achievements.map((achievement, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-blue-600 mb-3">
                            {achievement.category}
                          </h5>
                          <ul className="list-disc list-inside space-y-2">
                            {achievement.points.map((point, pointIdx) => (
                              <li key={pointIdx} className="text-gray-600 text-sm">
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
