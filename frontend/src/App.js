import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Sales from './components/sales/Sales';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/sales" component={Sales} />
      </Routes>
    </Router>
  );
};

export default App;
