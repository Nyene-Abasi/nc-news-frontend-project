
import { useState } from 'react';
import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Topic from './pages/Topic';

export const UserContext = createContext(null)

function App() {
  
  const [user, setUser] = useState('')
  return (
    <>
    
    <UserContext.Provider value={{user, setUser}}>
<Nav />
 <Routes>
 <Route path="/" element={<Articles />} />
 <Route path="/articles/:article_id" element={<Article />} />
 <Route path="/articles/topic/:topic" element={<Topic/> }/>
 </Routes>
 </UserContext.Provider >

    </>
  )
}

export default App
