import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'

function App() {
  const [selected, setSelected] = useState([]);
  const [solved, setSolved] = useState([]);

  const handleSelection = (card) => {
    setSelected((prev) => [...prev, card]);
  };

  const handleResolved = (card) => {
    setSolved((prev) => [...prev, card]);
    setSelected((prev) =>
      prev.filter((item) => item.ticket_id !== card.ticket_id)
    );
  };

  return (
    <>
      <Navbar/>
      <Hero 
        inProgressCount={selected.length} 
        resolvedCount={solved.length} 
      />
      <Dashboard
        selected={selected}
        solved={solved}
        onSelection={handleSelection}
        onResolved={handleResolved}
      />
      <Footer/>
    </>
  )
}

export default App
