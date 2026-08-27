
export function QuestItem({ title, category, status }) {
  const questStatus = () => {
    if (status === true) {
      return "Completed"

    } else {
      return "Pending"
    }
  }

  return (
    <div className="quest-item">
      <span className="title">{ title }</span>
      <span className="category">{ category }</span>



      <span className="status">{questStatus()}</span>
      <button className="complete-btn">Complete</button>


      <button className="delete-btn">Delete</button>
    </div>
  );
}