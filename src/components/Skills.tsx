'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    "Test Automation": [
      "Selenium WebDriver",
      "Playwright",
      "Cypress",
      "Appium",
      "RobotFramework",
      "TestNG",
      "JUnit",
      "Cucumber/Behave",
      "REST Assured",
      "Postman",
      "UFT/QTP",
    ],
    "Programming & Scripting": [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "Shell Scripting",
      "VBScript",
      "SQL",
    ],
    "AI & ML in Testing": [
      "LLM Integration",
      "NLP for Test Generation",
      "Test Optimization",
      "Predictive Analytics",
      "AI-Driven Bug Detection",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
    ],
    "DevOps & Tools": [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "AWS",
      "Azure DevOps",
      "Git",
    ],
    "Project Management": [
      "JIRA",
      "Confluence",
      "Agile/Scrum",
      "Kanban",
      "TestRail",
      "Quality Center",
      "XRay",
    ],
    "Testing Types": [
      "API Testing",
      "Performance Testing",
      "Mobile Testing",
      "Security Testing",
      "Visual Regression",
      "Cross-browser Testing",
      "Localization Testing",
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Technical Mastery
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
