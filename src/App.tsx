import './App.css';
import AsgneToken from './pages/AsgneToken';
import FullCollection from './pages/FullCollection';
import HomePage from './pages/HomePage';
import InfoCollection from './pages/InfoCollection';
import SingleStamp from './pages/SingleStamp';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TestPage from './pages/TestPage';
import GsapPage from './pages/GsapPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/gsap" element={<GsapPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/info_collection" element={<InfoCollection />} />
          <Route path="/full_collection" element={<FullCollection />} />
          <Route path="/single_stamp" element={<SingleStamp />} />
          <Route path="/asgne_token" element={<AsgneToken />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
