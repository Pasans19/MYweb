import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';
import Mainhome from './Pages/Mainhome';
import Game from './Pages/Game/game';
import Admin from './Pages/Adminpannel/admin';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> {/* Wrap Routes around your Route components */}
          <Route path="/" element={<Mainhome/>}/> {/* Add Routes here */}
          <Route path="/game" element={<Game/>}/> {/* Add Routes here */}
          <Route path="/admin" element={<Admin/>}/>
          
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
