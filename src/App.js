import './App.css';
import AuthComponent from './components/Login/AuthComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './components/Cart/Catalog';
import ProductData from './components/Cart/ProductData';
import Profile from './components/Profile/Profile';
import WatchList from './components/Cart/WatchList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthComponent/>}/>
          <Route path='/home' element={<Catalog/>}/>
          <Route path='/product/:id' element={<ProductData/>}/>
          <Route path='/user/' element={<Profile/>}/>
          <Route path='/watchlist' element={<WatchList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
