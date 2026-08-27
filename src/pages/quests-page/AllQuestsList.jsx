import { QuestItem } from "./QuestItem";
import "./AllQuestsList.css";

export function AllQuestsList({ quests, deleteQuest, completeQuest }) {

  const questList = () => {
    return quests.map((questItem) => {
      return (
        <QuestItem key={questItem.id} title={questItem.title} category={questItem.category} status={questItem.completed} completeQuest={() => completeQuest(questItem.id)} deleteQuest={() => {deleteQuest(questItem.id)}} />
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