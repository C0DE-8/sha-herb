import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import HerbResult from './pages/HerbResult/HerbResult.jsx'
import PlantScan from './pages/PlantScan/PlantScan.jsx'
import MyHerbs from './pages/MyHerbs/MyHerbs.jsx'
import Insights from './pages/Insights/Insights.jsx'
import './App.css'

function AppRoutes() {
  const navigate = useNavigate()
  const [herb, setHerb] = useState(null)
  const [saved, setSaved] = useState(false)
  const [herbs, setHerbs] = useState([])

  function completeScan(preview) {
    const result = { name: 'Rosemary', scientific: 'Salvia rosmarinus', score: '96%', time: 'Just now', result: 'Demo result · AI not connected', preview, initials: 'R', tone: 'match-green' }
    setHerb(result)
    setHerbs((current) => [result, ...current.filter((item) => item.name !== result.name)])
    setSaved(false)
    navigate('/result')
  }

  function openHerb(item) {
    setHerb(item)
    setSaved(herbs.some((savedHerb) => savedHerb.name === item.name))
    navigate('/result')
  }

  return <Routes>
    <Route path="/" element={<Dashboard onScan={() => navigate('/scan')} onOpenHerb={openHerb} recentHerbs={herbs}/>}/>
    <Route path="/scan" element={<PlantScan onIdentify={completeScan}/>}/>
    <Route path="/result" element={<HerbResult herb={herb} onBack={() => navigate('/')} onSave={() => { if (herb) setHerbs((current) => current.some((item) => item.name === herb.name) ? current : [herb, ...current]); setSaved((value) => !value) }} saved={saved}/>}/>
    <Route path="/my-herbs" element={<MyHerbs herbs={herbs} onOpenHerb={openHerb} onScan={() => navigate('/scan')}/>}/>
    <Route path="/insights" element={<Insights herbs={herbs} onScan={() => navigate('/scan')}/>}/>
    <Route path="*" element={<Dashboard onScan={() => navigate('/scan')} onOpenHerb={openHerb} recentHerbs={herbs}/>}/>
  </Routes>
}

export default function App() {
  return <BrowserRouter><AppRoutes/></BrowserRouter>
}
