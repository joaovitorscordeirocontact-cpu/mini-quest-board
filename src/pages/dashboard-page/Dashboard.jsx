import "./Dashboard.css";
import { Header } from "../../components/Header";
import { PageHeading } from "../../components/PageHeading";
import { SummaryCards } from "./SummaryCards";
import { QuestOfTheDay } from "./QuestOfTheDay";
import { RecentQuests } from "./RecentQuests";
import { useNavigate } from "react-router-dom";


export function Dashboard({page, quests, completeQuest, deleteQuest }) {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <PageHeading page={page}/>
      <SummaryCards quests={quests} />
      <QuestOfTheDay quests={quests} completeQuest={completeQuest} deleteQuest={deleteQuest} />
      <RecentQuests quests={quests} completeQuest={completeQuest} deleteQuest={deleteQuest} />

      <button className="view-quests-btn" onClick={() => navigate('/Quests')}>
        View all quests
      </button>
    </>
  );
}