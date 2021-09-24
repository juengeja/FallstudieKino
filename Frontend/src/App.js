import './App.css';

import Home from './pages/Home';
import Program from './pages/Progam';
import SingleMovie from './pages/SingleMovie';
import Error from './pages/Error';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

import {Route, Switch} from 'react-router-dom';

import Navbar from "./components/Navbar";

function App() {
  return (
   <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/program" component={Program}/>
        <Route exact path="/booking" component={Booking}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/program/:slug" component={SingleMovie}/>
        <Route component={Error} />
      </Switch>
  </>
  );
}

export default App;
