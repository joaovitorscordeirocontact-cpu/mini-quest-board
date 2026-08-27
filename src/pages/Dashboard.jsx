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

function SummaryCards() {
  return (
    <div className="summary-cards-block">
      <div className="total-quests-card">
        <div className="card-image">
          <img alt="clipboard image" src="#"/>
        </div>
        <div className="card-info">
          <span>Total Quests</span>
          <span>0</span>
        </div>
      </div>

      <div className="completed-quests-card">
        <div className="card-image">
          <img alt="clipboard image" src="#"/>
        </div>
        <div className="card-info">
          <span>Completed</span>
          <span>0</span>
        </div>
      </div>

      <div className="pending-quests-card">
        <div className="card-image">
          <img alt="clipboard image" src="#"/>
        </div>
        <div className="card-info">
          <span>Pending</span>
          <span>0</span>
        </div>
      </div>

      <div className="progress-card">
        <div className="card-image">
          <img alt="clipboard image" src="#"/>
        </div>
        <div className="card-info">
          <span>Progress</span>
          <span>0</span>
        </div>
        <div className="progress-bar"></div>
      </div>
    </div>
  );
}

function QuestOfTheDay(){
  return (
    <div className="quest-block">
      <div className="quest-block-heading">
        <img alt="yellow star" src="#"/>
        <span>Quest of the Day</span>
      </div>

      <div className="quest-list"></div>
    </div>
  );
}


export function Dashboard(){
  return (
    <>
      <Header/>
      <PageHeading page={currentPage[0]}/>
      <SummaryCards/>
      <QuestOfTheDay/>
    </>
  );
}