const skills = [
    "Apex development", "Lightning Web Components", "Salesforce architecture", "Salesforce CRM",
    "Apex", "Visualforce", "Triggers", "REST APIs", "SOQL", "JavaScript", "CSS",
    "Service Cloud", "Sales Cloud", "Lightning", "Java", "Python", "Apex Trigger",
    "REST/SOAP API", "Metadata", "Integration", "SQL", "Visualforce", "SOQL/SOSL", "CRM",
    "React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "Tailwind CSS", "MongoDB",
    "HTML/CSS", "RDBMS", "Data management", "Redux toolkit", "Debugging", "Unit Testing",
    "Efficiency/Productivity", "Troubleshooting", "Aura", "Force.com", "PyTorch/TensorFlow",
    "Salesforce.com", "Software Development", "Process", "Machine Learning/Deep Learning"
];

const SkillsSection = () => {
    return (
        <section className="py-16 bg-gray-100 mt-32">
            <div className="max-w-7xl mx-auto px-4 text-black">
                <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                            <p className="text-lg font-medium">{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
