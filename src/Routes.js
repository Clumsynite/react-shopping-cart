import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import items from "./components/items";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

export default function App() {
  const [phones] = useState(items);
  const [cart, setcart] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    return setTimeout(() => {
      setError("");
    }, 5000);
  }, [error, setError]);
  const addToCart = (index, quan) => {
    let quantity = quan || 0;
    if (quantity === 0) {
      setError(`You have to add atleast 1 ${items[index].name}`);
    } else if (items[index].quantity < quantity) {
      setError(
        `Can't add more ${items[index].name} to cart. Max Limit: ${items[index].quantity}`
      );
    }
  };

  return (
    <div className="Routes">
      <Router>
        <Navbar />

        <div className="container">
          {error && <Error error={error} />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products">
              <Products phones={phones} cart={cart} addToCart={addToCart} />
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
