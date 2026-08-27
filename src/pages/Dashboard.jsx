import { Link, NavLink } from "react-router-dom";
import "./Dashboard.css";


function Header() {
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
let currentPage = [{
  name: "Dashboard",
  paragraph: "Track your small study quests and progress."
},{
  name: "Quests",
  paragraph: "Track your small study quests and progress."
}];

function PageHeading({ page }) {
  return (
    <div className="Heading-block">
      <p className="page-name-heading">{page.name}</p>
      <p className="info-paragraph">{page.paragraph}</p>
    </div>
  );
}

export function Dashboard(){
  return (
    <>
      <Header/>
      <PageHeading page={currentPage[0]}/>
    </>
  );
}