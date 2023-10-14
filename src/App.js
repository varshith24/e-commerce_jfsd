import './App.css';
import AuthComponent from './components/Login/AuthComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './components/Cart/Catalog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthComponent/>}/>
          <Route path='/home' element={<Catalog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
