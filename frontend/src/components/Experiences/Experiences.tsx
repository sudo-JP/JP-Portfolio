import '../../index.css'

type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
};

const experiences: Experience[] = [
  {
    title: "Software Engineer Edge Computing",
    company: "Dynamo Mobility",
    date: "Jan 2025 - Apr 2025",
    description:
      "Led Agile sprints and built Python pipelines for data processing and Edge AI deployments on NVIDIA Jetson devices.",
    skills: ["Python", "SQL", "SQLite3", "SUMO", "Ubuntu", "NVIDIA Jetson"],
  },
  {
    title: "Backend AI Engineer",
    company: "Markitech",
    date: "Apr 2025 - Aug 2025",
    description:
      "Developed Node.js REST APIs and Socket.io services, configured MongoDB, and implemented automated webhook systems.",
    skills: ["Node.js", "Express.js", "Socket.io", "MongoDB", "Docker", "Jest", "Postman"],
  },
];
function Experiences() {
  return (
    <section className="bg-[#f2e9e1] py-12 px-4 md:px-16 flex flex-col items-center">
      {/* Header */}
      <h2 className="mt-3 text-[2rem] md:text-[4rem] font-bold text-center mb-8">
        Experiences
      </h2>

      {/* Cards container */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-[#9893a5] rounded-lg shadow-md p-6 flex-1 min-w-[400px] min-h-[300px] max-w-sm"
          >
            <h1 className="text-xl md:text-xl font-bold text-[#f2e9e1]">
              {exp.title}
            </h1>
            <p className="text-[#f4ede8] font-semibold text-lg md:text-lg">
              {exp.company} • {exp.date}
            </p>
            <p className="mt-2 text-[#575279] font-semibold text-lg md:text-lg">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-teal-200 text-teal-800 text-xs md:text-sm px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
