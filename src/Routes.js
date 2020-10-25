import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="Routes">
      <Router>
        <Navbar/>
      </Router>
    </div>
  );
}
