import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
      const cartArray = phones.filter((phone) => phone.cart > 0);
      setCart(cartArray);
    }
  };

  const removeFromCart = (index, quan) => {
    let quantity = Number(quan) || 0;
    if (quantity === 0) {
      setError(`You have to remove atleast 1 ${items[index].name}`);
    } else if (items[cart[index].id].cart < quantity) {
      setError(
        `Can't remove more ${
          items[cart[index].id].name
        } from cart. Max Limit: ${items[cart[index].id].cart}`
      );
    } else {
      const array = phones;
      const item = array[cart[index].id];
      const newQuantity = item.quantity + quantity;
      item.quantity = newQuantity;
      item.cart = item.cart - quantity;
      setPhones(array);
      const cartArray = phones.filter((phone) => phone.cart > 0);
      setCart(cartArray);
    }
  };

  return (
    <div className="Routes">
      <Router basename="/">
        <Navbar count={cart.length} />

        <div className="container">
          {error && <Error error={error} />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products">
              <Products phones={phones} addToCart={addToCart} />
            </Route>
            <Route path="/cart">
              <Cart cart={cart} removeFromCart={removeFromCart} />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
