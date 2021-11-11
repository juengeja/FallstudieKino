import './App.css';

import Home from './pages/Home';
import Program from './pages/Progam';
import SingleMovie from './pages/SingleMovie';
import Error from './pages/Error';
import AddToShoppingCart from './pages/AddToShoppingCart';
import Contact from './pages/Contact';
import ShoppingCart from './pages/ShoppingCart';
import Booking from './pages/Booking';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage'
import Corona from './pages/Corona'
import Gastro from './pages/Gastro'
import Payment from './pages/paymentMethod'

import {Route, Switch} from 'react-router-dom';

import Navbar from "./components/Navbar";

function App() {
  return (
   <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/program" component={Program}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/program/:slug" component={SingleMovie}/>
        <Route exact path="/addToShoppingCart/:slug" component={AddToShoppingCart}/>
        <Route exact path="/shoppingCart" component={ShoppingCart}/>
        <Route exact path="/booking" component={Booking}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/adminpage" component={AdminPage}/>
        <Route exact path="/corona" component={Corona}/>
        <Route exact path="/gastro" component={Gastro}/>
        <Route exact path="/payment" component={Payment}/>
        <Route component={Error} />
      </Switch>
  </>
  );
}

export default App;
