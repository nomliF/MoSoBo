import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Book from "./pages/Book"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookJourney from "./components/BookJourney";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/book" exact component={Book} />
          <Route path="/createAccount" exact component={CreateAccount}/>
          <Route path="/bookjourney" exact component={BookJourney}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;