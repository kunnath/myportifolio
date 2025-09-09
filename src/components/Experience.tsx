'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "QA Manager",
      company: "Leading Tech Company",
      duration: "2020 - Present",
      description: [
        "Led and mentored a team of 10+ QA engineers",
        "Implemented AI-driven test automation frameworks",
        "Reduced testing time by 60% through efficient automation",
        "Developed and maintained CI/CD pipelines",
      ],
    },
    {
      title: "Senior QA Automation Engineer",
      company: "Previous Company",
      duration: "2018 - 2020",
      description: [
        "Designed and implemented automated test suites",
        "Integrated AI/ML solutions for test optimization",
        "Improved test coverage by 40%",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Professional Experience
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <p className="text-gray-600 mb-4">{exp.company} | {exp.duration}</p>
              <ul className="list-disc list-inside text-gray-700">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="mb-2">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
