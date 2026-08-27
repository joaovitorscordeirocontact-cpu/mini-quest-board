import "./MainFeatures.css";

const features = [
  { name: "Routing", description: "Page navigation using React Router.", icon: "🧭" },
  { name: "useState", description: "Manage local component state.", icon: "{ }" },
  { name: "useEffect", description: "Handle side effects and data fetching.", icon: "⚡" },
  { name: "useRef", description: "Access and persist mutable values.", icon: "🎯" },
  { name: "Forms", description: "Handle form inputs and submissions.", icon: "✏️" },
  { name: "Conditional Rendering", description: "Show UI based on conditions.", icon: "🔀" },
  { name: "Fetch / Axios", description: "Make API calls and handle responses.", icon: "☁️" },
  { name: "Event Handlers", description: "Respond to user interactions.", icon: "🖱️" },
];

export function MainFeatures() {
  return (
    <div className="main-features-wrapper">
      <div className="main-features-heading">
        <span className="main-features-icon">⭐</span>
        <span>Main Features</span>
      </div>

      <div className="features-list">
        {features.map((feature) => (
          <div className="feature-item" key={feature.name}>
            <span className="feature-icon">{feature.icon}</span>
            <span className="feature-name">{feature.name}</span>
            <span className="feature-description">{feature.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
