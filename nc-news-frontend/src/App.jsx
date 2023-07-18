
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import Article from './pages/Article';
import Articles from './pages/Articles';


function App() {
  

  return (
    <>
     <Nav />
      <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
     
    </>
  )
}

export default App
