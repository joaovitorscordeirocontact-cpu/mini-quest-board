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
    </>
  );
}