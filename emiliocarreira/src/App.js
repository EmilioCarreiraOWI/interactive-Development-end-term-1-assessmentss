
import './App.css';
import { Route, Routes } from 'react-router-dom';
import dashboard from './Pages/dashboard';
import compare from './Pages/Compare';
import timeline from './Pages/Timeline';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= { <dashboard/>}/>
        <Route path="compare" element= { <compare/>}/>
        <Route path="timeline" element= { <timeline/>}/>
      </Routes>
    </div>
  );
}

export default App;
