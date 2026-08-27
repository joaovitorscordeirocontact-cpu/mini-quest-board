import "./Quests.css";
import { Header } from "../../components/Header";
import { PageHeading } from "../../components/PageHeading";
import { AddNewQuest } from "./AddNewQuest";
import { AllQuestsList } from "./AllQuestsList";


export function Quests({page}) {
  return (
    <>
      <Header />
      <PageHeading page={page}/>
      <AddNewQuest />
      <AllQuestsList />
      <div>
        <p className="quest-page-tip">Completed quests help you track your progress. Keep going!</p>
      </div>
    </>
  );
}