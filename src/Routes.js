import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import items from "./components/items";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

export default function App() {
  const [phones] = useState(items);
  const [cart, setcart] = useState([]);

  const addToCart = (e) => {
    const index = e.target.getAttribute('index')
    console.log(index)
  } 

  return (
    <div className="Routes">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products">
              <Products phones={phones} cart={cart} addToCart={addToCart}/>
            </Route>
            <Route exact path="/cart" component={Cart} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
