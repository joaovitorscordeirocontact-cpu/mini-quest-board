import { useState } from "react";
import "./AddNewQuest.css";


export function AddNewQuest({ setQuest }) {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  

  const addCategoryQuest = (e) => {
    setCategory(e.target.value);
  };

  const addQuestTitle = (e) => {
    setTitle(e.target.value);
  };

  const addQuest = () => {
    const newQuest = {
      title, 
      category, 
      completed: false
    };
    setQuest(prev => [...prev, newQuest]);
  }

  return (
    <div className="add-new-quest-wrapper">
      <div className="add-new-quest-heading">
        <span>Add New Quest</span>
      </div>

      <div className="input-quest-data">
        <div className="quest-title">
          <span>Quest title</span>
          <input type="text" placeholder="Put your quest title"
          onChange={addQuestTitle}/>
        </div>
        <div className="quest-category">
          <label htmlFor="categories">Choose a category:</label>

          <select name="categories" id="categories" value={category}
          onChange={addCategoryQuest}>
            <option value="">Categories</option>
            <option value="React">React</option>
            <option value="TypeScript">TypeScript</option>
            <option value="Tailwind">Tailwind</option>
            <option value="JavaScript">JavaScript</option>
          </select>
        </div>

        <div className="add-quest-btn-block">
          <button className="add-quest-btn" onClick={addQuest}>Add Quest</button>
        </div>
      </div>
    </div>
  );
}