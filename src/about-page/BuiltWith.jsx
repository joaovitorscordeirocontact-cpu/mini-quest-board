import "./BuiltWith.css";

const techStack = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    icon: "⚛️",
  },
  {
    name: "Vite",
    description: "Next Generation Frontend Tooling.",
    icon: "⚡",
  },
  {
    name: "React Router",
    description: "Declarative routing for React apps.",
    icon: "🧭",
  },
  {
    name: "Axios",
    description: "Promise based HTTP client for the browser.",
    icon: "AXIOS",
    wordmark: true,
  },
];

export function BuiltWith() {
  return (
    <div className="built-with-wrapper">
      <div className="built-with-heading">
        <span className="built-with-icon">❤️</span>
        <span>Built with</span>
      </div>

      <div className="tech-stack-list">
        {techStack.map((tech) => (
          <div className="tech-stack-item" key={tech.name}>
            <span
              className={
                tech.wordmark ? "tech-icon tech-icon-wordmark" : "tech-icon"
              }
            >
              {tech.icon}
            </span>
            <div className="tech-info">
              <span className="tech-name">{tech.name}</span>
              <span className="tech-description">{tech.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
