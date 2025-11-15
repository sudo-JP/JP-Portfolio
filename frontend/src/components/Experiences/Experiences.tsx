import '../../index.css'

type Experience = {
  title: string;
  company: string;
  date: string;
  skills: string[];
};

const experiences: Experience[] = [
  {
    title: "Software Engineer Edge Computing",
    company: "Dynamo Mobility",
    date: "Apr 2025 - Aug 2025",
    skills: ["Python", "SQL", "SQLite3", "SUMO", "Ubuntu", "NVIDIA Jetson"],
  },
  {
    title: "Backend AI Engineer",
    company: "Markitech",
    date: "Apr 2025 - Aug 2025",
    skills: ["Node.js", "Express.js", "Socket.io", "MongoDB", "Docker", "Jest", "Postman"],
  },
];
function Experiences() {
  return (
    <section id="experiences" className="bg-[#f2e9e1] py-12 px-4 md:px-16 flex flex-col items-center">
      {/* Header */}
      <h2 className="mt-3 text-[2rem] md:text-[4rem] font-bold text-center mb-8">
        Experiences
      </h2>

      {/* Cards container */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-[#9893a5] rounded-lg shadow-md p-6 flex-1 min-w-[400px] min-h-[100px] max-w-sm hover:shadow-lg hover:-translate-y-1"
          >
          <div className="flex space-y-10 flex-col">
            <div>
            <h1 className="text-xl md:text-xl font-bold text-[#f2e9e1]">
              {exp.title}
            </h1>
            <p className="text-[#f4ede8] font-semibold text-lg md:text-lg">
              {exp.company} • {exp.date}
            </p>
            </div>
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
