import {Routes,Route} from 'react-router-dom';
import { Home } from './components/pages/Home';
// import { About } from './components/pages/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/pages/OrderSummary';
import { NotFound } from './components/NotFound';
import { Products } from './components/pages/Products';
import {FeatureProduct} from './components/pages/FeatureProduct';
import {NewProduct} from './components/pages/NewProduct';

import './App.css';
import { Users } from './components/pages/Users';
import { UserDetails } from './components/pages/UserDetails';
import { Admin } from './components/pages/Admin';
import React from 'react';
import { Profile } from './components/pages/Profile';
import { AuthProvider } from './components/AuthContext';
import { Login } from './components/pages/Login';
import { RequireAuth } from './components/RequireAuth';

const LazyAbout = React.lazy(() => import('./components/pages/About'));

function App() {
  return (
    <div className="app">
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route
          path='about'
          element={
            <React.Suspense fallback='loading....'>
              <LazyAbout />
            </React.Suspense>
        }>
        </Route>
        <Route path='OrderSummary' element={<OrderSummary />}/>
        <Route path='products' element={<Products />} >
          <Route index element={<FeatureProduct/>}/>
          <Route path='feature' element={<FeatureProduct/>}/>
          <Route path='new' element={<NewProduct/>}/>
        </Route>
        <Route path='users' element={<Users/>}>
          <Route path=':UserId' element={<UserDetails/>}/>
          <Route path='Admin' element={<Admin/>}/>
        </Route>
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>}/>
        <Route path='Login' element={<Login />}/>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
