import { Link, NavLink } from "react-router-dom";
import "./Header.css"

export function Header() {
  return (
    <div className="header-menu">
      <div className="left-section">
        <Link to="/" className="logo">
          <span>Mini Quest Board</span>
        </Link>
      </div>

      <div className="middle-section">
        <NavLink to="/" className="dashboard-link header-link">
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/Quests" className="quests-link header-link">
          <span>Quests</span>
        </NavLink>

        <NavLink to="/About" className="about-link header-link">
          <span>About</span>
        </NavLink>
      </div>

      <div className="right-section">
        <button className="profile-btn">
          <img alt="User's profile image" className="profile-img" src="#"/>
        </button>
      </div>

    </div>
  );
}