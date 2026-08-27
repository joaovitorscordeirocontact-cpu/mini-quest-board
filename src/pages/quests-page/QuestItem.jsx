import "./QuestItem.css";

export function QuestItem({ title, category, status }) {
  const questStatus = () => {
    if (status === true) {
      return "Completed"

    } else {
      return "Pending"
    }
  }

  return (
    <div className="quest-item" data-status={status}>
      <span className="title">{ title }</span>
      <span className="category" data-category={category}>{ category }</span>



      <span className="status" data-status={status}>{questStatus()}</span>
      {!status && <button className="complete-btn">Complete</button>}


      <button className="delete-btn">Delete</button>
    </div>
  );
}