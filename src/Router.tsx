import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RestrictedRoute from './components/RestrictedRoute';
import LoginPage from './pages/login/LoginPage';
import PixPage from './pages/pix/PixPage';

const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RestrictedRoute element={<PixPage />} />} />
      <Route path='/login' element={<LoginPage />} />
    </Route>
  )
)

export default Routers