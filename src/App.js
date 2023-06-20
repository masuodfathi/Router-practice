import {Routes,Route} from 'react-router-dom';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Navbar } from './components/Navbar';
import './App.css';
import { OrderSummary } from './components/OrderSummary';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='About' element={<About />}> </Route>
        <Route path='/OrderSummary' element={<OrderSummary />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
