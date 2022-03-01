import './App.css';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home'
import LeagueDetail from './pages/LeagueDetail'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:slug' element={<LeagueDetail />} />
      <Route path='*' element={<h1>page not found</h1>} />
    </Routes>
  );
}

export default App;
