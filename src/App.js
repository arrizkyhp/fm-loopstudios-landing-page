import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Home from 'pages/Home';
import { DataProvider } from 'context/data/DataContext';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Home />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
