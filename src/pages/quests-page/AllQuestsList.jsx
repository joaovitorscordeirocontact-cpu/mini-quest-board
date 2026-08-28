import { QuestItem } from "./QuestItem";
import "./AllQuestsList.css";
import { useEffect, useRef } from "react";

export function AllQuestsList({ quests, deleteQuest, completeQuest, lastAddedId }) {
  const newestItemRef = useRef(null);

  useEffect(() => {
    if(newestItemRef.current){
      newestItemRef.current.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  }, [quests, lastAddedId])

  const questList = () => {
    return quests.map((questItem) => {
      return (
        <QuestItem key={questItem.id} title={questItem.title} category={questItem.category} status={questItem.completed} completeQuest={() => completeQuest(questItem.id)} deleteQuest={() => {deleteQuest(questItem.id)}} itemRef={questItem.id === lastAddedId ? newestItemRef : null} />
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