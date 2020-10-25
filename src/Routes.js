import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="Routes">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
