import "./Quests.css";
import { Header } from "../../components/Header";
import { PageHeading } from "../../components/PageHeading";
import { AddNewQuest } from "./AddNewQuest";
import { AllQuestsList } from "./AllQuestsList";
import { useState } from "react";


export function Quests({page}) {
  const [quest, setQuest] = useState([]);

  const completeQuest = (index) => {
    setQuest((prev) => {
      return prev.map((quest, i) => (i === index ? {...quest, completed: true} : quest))
    });
  };

  return (
    <>
      <Header />
      <PageHeading page={page}/>
      <AddNewQuest setQuest={setQuest}/>
      <AllQuestsList quest={quest} onComplete={completeQuest} />
      <div>
        <p className="quest-page-tip">Completed quests help you track your progress. Keep going!</p>
      </div>
    </>
  );
}