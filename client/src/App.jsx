import './App.css'
import DeckBuilder from './components/DeckBuilder/DeckBuilder'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className='main-content'>
        <Navbar />
        <DeckBuilder />
      </div>
    </>
  )
}

export default App
