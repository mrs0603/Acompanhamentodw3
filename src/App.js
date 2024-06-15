import logo from './logo.svg';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Login from './login/login';
import Home from './home/home';
import Checkout from './checkout/checkout';
import Account from './account/account';
import Menu from './shared/menu';
import Adicionaproduto from './adiciona/Adicionaproduto';

function App() {
  return (
    <>
  <Menu></Menu>
    <Routes>
    <Route path='/home' element={<Home />} ></Route>
    <Route path='/login' element={<Login />} ></Route>
    <Route path='/checkout' element={<Checkout />} ></Route>
    <Route path='/account' element={<Account />} ></Route>
    <Route path='/adiciona' element={<Adicionaproduto />} ></Route>
    </Routes>
    </>
  );
}

export default App;

