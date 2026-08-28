import { QuestItem } from "../quests-page/QuestItem";
import "./QuestOfTheDay.css";

export function QuestOfTheDay({ quests, completeQuest, deleteQuest }) {

  const listPendingQuests = () => {
    return quests.map((quest) => (
      !(quest.completed) && <QuestItem key={quest.id} title={quest.title} category={quest.category} status={quest.completed} completeQuest={() => completeQuest(quest.id)} deleteQuest={() => {deleteQuest(quest.id)}} />
    ));
  };


  return (
    <div className="quest-wrapper">
      <div className="quest-block-heading">
        <img alt="yellow star" src="#" />
        <span>Quest of the Day</span>
      </div>

      <div className="quest-list">{listPendingQuests()}</div>
    </div>
  );
}