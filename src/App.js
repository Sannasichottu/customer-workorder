import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    
     <Home />
        <Sidebar />
      
    </BrowserRouter>
  );
}

export default App;
