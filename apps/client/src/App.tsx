import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [greeting, setGreeting] = useState('');
  const [cat, setCat] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then(setGreeting)
  }, []);

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((json) => setCat(json.fact))
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{greeting}</h1>
      <h2>Here's Your Random Cat Fat of the Day</h2>
      <p>{cat}</p>
    </>
  )
}

export default App
