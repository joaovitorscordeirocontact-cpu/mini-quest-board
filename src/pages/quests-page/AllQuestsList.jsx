import { QuestItem } from "./QuestItem";
import "./AllQuestsList.css";

export function AllQuestsList({ quest, onComplete }) {

  const questList = () => {
    const quests = quest.map((questItem, i) => {
      return (
        <QuestItem key={i} title={questItem.title} category={questItem.category} status={questItem.completed} onComplete={() => onComplete(i)} />
      );
    });
    return quests;
  };

  return (
    <div className="all-quests-wrapper">
      <div className="all-quests-heading">
        <span>All Quests</span>
      </div>

      <div className="all-quests-list-container">{questList()}</div>
    </div>
  );
}