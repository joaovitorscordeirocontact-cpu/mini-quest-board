import "./QuestItem.css";

export function QuestItem({ title, category, status, completeQuest, deleteQuest, itemRef }) {
  const questStatus = () => {
    if (status === true) {
      return "Completed"

    } else {
      return "Pending"
    }
  }


  return (
    <div className="quest-item" data-status={status} ref={itemRef}>
      <span className="title">{title}</span>

      <div className="quest-badges">
        <span className="category" data-category={category}>{category}</span>
        <span className="status" data-status={status}>{questStatus()}</span>
      </div>

      <div className="quest-actions">
        {!status && (
          <button className="complete-btn" onClick={completeQuest}>
            Complete
          </button>
        )}
        <button className="delete-btn" onClick={deleteQuest}>Delete</button>
      </div>
    </div>
  );
}