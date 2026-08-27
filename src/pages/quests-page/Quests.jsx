import "./Quests.css";
import { Header } from "../../components/Header";
import { PageHeading } from "../../components/PageHeading";
import { AddNewQuest } from "./AddNewQuest";
import { AllQuestsList } from "./AllQuestsList";
import { useState } from "react";


export function Quests({page, quests, loadQuests}) {
  const [quest, setQuest] = useState([]);

  const completeQuest = (index) => {
    setQuest((prev) => {
      return prev.map((quest, i) => (i === index ? {...quest, completed: true} : quest))
    });
  };

  const deleteQuest = (index) => {
    setQuest((prev) => {
      return prev.filter((item, i) => i !== index)
    });
  };

  return (
    <>
      <Header />
      <PageHeading page={page}/>
      <AddNewQuest setQuest={setQuest} quests={quests} loadQuests={loadQuests} />
      <AllQuestsList quests={quests} quest={quest} onComplete={completeQuest} deleteQuest={deleteQuest} />
      <div>
        <p className="quest-page-tip">Completed quests help you track your progress. Keep going!</p>
      </div>
    </>
  );
}