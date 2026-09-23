import { useState } from 'react'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import HerbResult from './pages/HerbResult/HerbResult.jsx'
import './App.css'

export default function App() {
  const [page, setPage] = useState('overview')
  const [herb, setHerb] = useState(null)
  const [saved, setSaved] = useState(false)
  const [recentHerbs, setRecentHerbs] = useState([])

  function completeScan(file) {
    const preview = file ? URL.createObjectURL(file) : undefined
    const result = { name: 'Rosemary', scientific: 'Salvia rosmarinus', score: file ? '96%' : '96%', time: 'Just now', result: 'Mediterranean', preview, initials: 'R', tone: 'match-green' }
    setHerb(result)
    setRecentHerbs((current) => [result, ...current.filter((item) => item.time !== 'Just now')])
    setSaved(false)
    setPage('result')
  }

  return page === 'result'
    ? <HerbResult herb={herb} onBack={() => setPage('overview')} onSave={() => setSaved((value) => !value)} saved={saved} />
    : <Dashboard onScan={() => completeScan()} onPhotoSelect={(file) => file && completeScan(file)} onOpenHerb={(item) => { setHerb(item); setPage('result') }} recentHerbs={recentHerbs} />
}
