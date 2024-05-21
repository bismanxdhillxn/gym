import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";


import Home from './Home';
import Login from './Login';
import Store from "./Store";
import Payment from "./Payment";
import Checkout from "./Checkout";

function App(props) {
  return (
   
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Store/' element={<Store />} />
      {/* <Route path='/Buy/:id' element={<Payment />} />
      <Route path='/Buy/*' element={<Payment />} /> */}
      <Route path='/Buy' element={<Payment />} />
      <Route path='/Checkout/:total' element={<Checkout />} />
    
      </Routes>
      </BrowserRouter>

  );
}

export default App;

