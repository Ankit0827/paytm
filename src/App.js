import Navbar from './components/Navbarandfooter/Navbar'
import Home from './components/pages/Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recharge from './components/pages/Subpages/Recharge';
import Book from './components/pages/Subpages/Book'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Payment from './components/pages/Payment';
import Financial from './components/pages/Financial';
import Paytmmoney from './components/pages/Paytmmoney';
import Insurance from './components/pages/Insurance';
import PersonalLoan from './components/pages/PersonalLoan';
import CarasolPaytm from './components/pages/CarasolPaytm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Home/>
      <Recharge/>
      <Book/>
      <Payment/>
      <Financial/>
      <Paytmmoney/>
      <Insurance/>
      <PersonalLoan/>
      <CarasolPaytm/>
      <Routes>
        <Route></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
