import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Compare from './Pages/Compare';
import Timeline from './Pages/Timeline';
import BasicNav from './componets/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BasicNav />
      <Routes>
        <Route path='/' element= { <Dashboard/> } />
        <Route path='/Compare' element= { <Compare/> } />
        <Route path='/Timeline' element= { <Timeline/> } />
      </Routes>
    </div>
  );
}

export default App;
