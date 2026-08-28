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
    try{
      const response = await axios.get('/api/Quests');

      setQuests(response.data);
    } catch(error) {
      console.error('Error:', error);
    } finally {
      console.log('Axios get process finished!');
    }
  }


  const deleteQuest = async (id) => {
    await axios.delete(`/api/quests/${id}`);
    await loadQuests();
  };

  const completeQuest = async (id) => {
    await axios.patch(`/api/quests/${id}`, {
      completed: true
    });
    await loadQuests();
  };

  useEffect(() => {
    const renderQuestdata = async () => {
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
