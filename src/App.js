import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Book from "./pages/Book"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/book" exact component={Book} />
          <Route path="login" exact component={Login}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;