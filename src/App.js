import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Home from 'pages/Home';

function App() {
  return (
   <BrowserRouter>
    <Home />
   </BrowserRouter>
  );
}

export default App;
