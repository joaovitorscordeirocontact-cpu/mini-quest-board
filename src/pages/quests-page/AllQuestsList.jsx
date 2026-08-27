import axios from "axios";
import { QuestItem } from "./QuestItem";
import "./AllQuestsList.css";
import { useState, useEffect } from "react";

export function AllQuestsList({ quests }) {

  const questList = () => {
    return quests.map((questItem) => {
      return (
        <QuestItem key={questItem.id} title={questItem.title} category={questItem.category} status={questItem.completed} /*onComplete={() => onComplete(quests.id)} deleteQuest={() => deleteQuest(quests.id)}*/ />
      );
    });
  }


  return (
    <div className="all-quests-wrapper">
      <div className="all-quests-heading">
        <span>All Quests</span>
      </div>

      <div className="all-quests-list-container">{questList()}</div>
    </div>
  );
}