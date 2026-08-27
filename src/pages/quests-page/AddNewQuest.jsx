import "./AddNewQuest.css";

export function AddNewQuest() {
  return (
    <div className="add-new-quest-wrapper">
      <div className="add-new-quest-heading">
        <span>Add New Quest</span>
      </div>

      <div className="input-quest-data">
        <div className="quest-title">
          <span>Quest title</span>
          <input type="text" placeholder="Put your quest title"/>
        </div>
        <div className="quest-category">
          <label htmlFor="categories">Choose a category:</label>

          <select name="categories" id="categories">
            <option value="">Categories</option>
            <option value="React">React</option>
            <option value="TypeScript">TypeScript</option>
            <option value="Tailwind">Tailwind</option>
            <option value="JavaScript">JavaScript</option>
          </select>
        </div>

        <div className="add-quest-btn-block">
          <button className="add-quest-btn">Add Quest</button>
        </div>
      </div>
    </div>
  );
}