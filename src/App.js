import React from 'reactn';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/checkout" component={Checkout} />
    </Router>
  );
}

export default App;
