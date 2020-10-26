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
  const [phones, setPhones] = useState(items);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    return setTimeout(() => {
      setError("");
    }, 5000);
  }, [error, setError]);

  const addToCart = (index, quan) => {
    let quantity = Number(quan) || 0;
    if (quantity === 0) {
      setError(`You have to add atleast 1 ${items[index].name}`);
    } else if (items[index].quantity < quantity) {
      setError(
        `Can't add more ${items[index].name} to cart. Max Limit: ${items[index].quantity}`
      );
    } else {
      const array = phones;
      const item = array[index];
      const newQuantity = item.quantity - quantity;
      item.quantity = newQuantity;
      item.cart = item.cart + quantity;
      setPhones(array);
      const cartArray = phones.filter(phone => phone.cart > 0)
      setCart(cartArray)
    }
  };

  return (
    <div className="Routes">
      <Router>
        <Navbar count={cart.length} />

        <div className="container">
          {error && <Error error={error} />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products">
              <Products phones={phones} addToCart={addToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart cart={phones} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
