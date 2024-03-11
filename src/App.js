import './App.css';
import { Routes, Route } from 'react-router-dom'; // Import Routes along with Route
import { BrowserRouter } from 'react-router-dom';
import Mainhome from './Pages/Mainhome';
import Game from './Pages/Game/game';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> {/* Wrap Routes around your Route components */}
          <Route path="/" element={<Mainhome/>}/> {/* Add Routes here */}
          <Route path="/game" element={<Game/>}/> {/* Add Routes here */}
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
