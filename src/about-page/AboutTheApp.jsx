import "./AboutTheApp.css";

export function AboutTheApp() {
  return (
    <div className="about-app-wrapper">
      <div className="about-app-heading">
        <span className="about-app-icon">ℹ️</span>
        <span>About the App</span>
      </div>

      <p className="about-app-text">
        Mini Quest Board is a lightweight practice application built with
        React. It helps you track small study quests, manage progress, and
        explore core React concepts like state, effects, routing, forms, and
        API calls.
      </p>
    </div>
  );
}
