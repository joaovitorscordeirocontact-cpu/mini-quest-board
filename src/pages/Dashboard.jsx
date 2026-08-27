import { Header } from "../components/Header";
import { PageHeading } from "../components/PageHeading";
import { SummaryCards } from "./SummaryCards";
import { QuestOfTheDay } from "./QuestOfTheDay";
import { RecentQuests } from "./RecentQuests";


export function Dashboard() {
  let currentPage = [{
    name: "Dashboard",
    paragraph: "Track your small study quests and progress."
  }, {
    name: "Quests",
    paragraph: "Track your small study quests and progress."
  }];

  return (
    <>
      <Header />
      <PageHeading page={currentPage[0]} />
      <SummaryCards />
      <QuestOfTheDay />
      <RecentQuests />

      <button className="view-quests-btn">
        View all quests
      </button>
    </>
  );
}