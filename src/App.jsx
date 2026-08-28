import './App.css'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Dashboard } from './pages/dashboard-page/Dashboard'
import { Quests } from './pages/quests-page/Quests'
import { About } from './pages/about-page/About'

function App() {
  const [quests, setQuests] = useState([]);

  const loadQuests = async () => {
    const response = await axios.get('/api/quests');
    setQuests(response.data);
  }

  const deleteQuest = async(index) => {
    await axios.delete(`/api/quests/${index}`);
    await loadQuests();
  };

  const completeQuest = async(index) => {
    await axios.patch(`/api/quests/${index}`, {
      completed: true
    });
    await loadQuests();
  };

  useEffect(() => {
    const renderQuestdata = async() => {
      await loadQuests();
    } 
    renderQuestdata()
  }, []);


  let currentPage = [{
    name: "Dashboard",
    paragraph: "Track your small study quests and progress."
  }, {
    name: "Quests",
    paragraph: "Create, manage, and complete your study quests."
  }, {
    name: "About",
    paragraph: "A small React practice app for quests, routing, state, and API calls."
  }];

  return (
    <Routes>
      <Route index element={<Dashboard page={currentPage[0]} quests={quests} loadQuests={loadQuests} completeQuest={completeQuest} deleteQuest={deleteQuest} />} />
      <Route path='/Quests' element={<Quests page={currentPage[1]} quests={quests} loadQuests={loadQuests} completeQuest={completeQuest} deleteQuest={deleteQuest} />} />
      <Route path='/About' element={<About page={currentPage[2]} />} />
    </Routes>
  )
}

export default App
