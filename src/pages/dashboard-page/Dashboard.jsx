import "./Dashboard.css";
import { Header } from "../../components/Header";
import { PageHeading } from "../../components/PageHeading";
import { SummaryCards } from "./SummaryCards";
import { QuestOfTheDay } from "./QuestOfTheDay";
import { RecentQuests } from "./RecentQuests";


export function Dashboard({page}) {
  

  return (
    <>
      <Header />
      <PageHeading page={page}/>
      <SummaryCards />
      <QuestOfTheDay />
      <RecentQuests />

      <button className="view-quests-btn">
        View all quests
      </button>
    </>
  );
}