import { QuestItem } from "../quests-page/QuestItem";
import "./RecentQuests.css";

export function RecentQuests({ quests, completeQuest, deleteQuest }) {

  const listCompletedQuests = () => {
    return quests.map((quest) => 
      (quest.completed) && <QuestItem key={quest.id} title={quest.title} category={quest.category} status={quest.completed} completeQuest={() => completeQuest(quest.id)} deleteQuest={() => {deleteQuest(quest.id)}} />
    );
  };

  return (
    <div className="recent-quests-wrapper">
      <div className="recent-quests-heading">
        <img alt="clock icon" src="#" />
        <span>Recent Quests</span>
      </div>

      <div className="quests-review-container">{listCompletedQuests()}</div>
    </div>
  );
}