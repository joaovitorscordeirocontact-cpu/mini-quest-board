import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard-page/Dashboard'
import { Quests } from './pages/quests-page/Quests'

function App() {
  let currentPage = [{
      name: "Dashboard",
      paragraph: "Track your small study quests and progress."
    }, {
      name: "Quests",
      paragraph: "Create, manage, and complete your study quests."
    }];
  return (
    <Routes>
      <Route index element={<Dashboard page={currentPage[0]}/>} />
      <Route path='/Quests' element={<Quests page={currentPage[1]}/>}/>
    </Routes>
  )
}

export default App
