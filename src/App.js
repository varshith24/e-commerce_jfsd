import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './components/Cart/Catalog';
import ProductData from './components/Cart/ProductData';
import Profile from './components/Profile/Profile';
import WatchList from './components/Cart/WatchList';
import PageNotFound from './components/Error/PageNotFound';
import AllFeedBacks from './components/FeedBack/AllFeedBacks';
import ProductCardEffect from './components/extra/ProductCardEffect';
import Login from './components/Login/Login';
import Register from './components/Login/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Catalog/>}/>
          <Route path='/product/:id' element={<ProductData/>}/>
          <Route path='/user/' element={<Profile/>}/>
          <Route path='/watchlist' element={<WatchList/>}/>
          <Route path='/feedback' element={<AllFeedBacks/>}/>
          <Route path='/corou' element={<ProductCardEffect/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
