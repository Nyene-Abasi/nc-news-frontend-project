
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './pages/Articles';


function App() {
  

  return (
    <>
     <Nav />
     <Header/>
      <Routes>
      <Route path="/" element={<Articles />} />
      </Routes>
     
    </>
  )
}

export default App
