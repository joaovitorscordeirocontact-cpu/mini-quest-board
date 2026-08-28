import "./Quests.css";
import { Header } from "../../components/Header";
import { PageHeading } from "../../components/PageHeading";
import { AddNewQuest } from "./AddNewQuest";
import { AllQuestsList } from "./AllQuestsList";
import { useState } from "react";


export function Quests({page, quests, loadQuests, completeQuest, deleteQuest}) {
  const [quest, setQuest] = useState([]);
  const [lastAddedId, setLastAddedId] = useState([]);


  return (
    <>
      <Header />
      <PageHeading page={page}/>
      <AddNewQuest setQuest={setQuest} quests={quests} loadQuests={loadQuests} setLastAddedId={setLastAddedId} />
      <AllQuestsList quests={quests} quest={quest} completeQuest={completeQuest} deleteQuest={deleteQuest} lastAddedId={lastAddedId} />
      <div>
        <p className="quest-page-tip">Completed quests help you track your progress. Keep going!</p>
      </div>
    </>
  );
}