import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./Book/Books"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookJourney from "./Book/BookJourney";
import MyJourney from "./Book/MyJourney"

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
          <Route path="/books" exact component={Books} />
          <Route path="/createAccount" exact component={CreateAccount}/>
          <Route path="/bookjourney" exact component={BookJourney}/>
          <Route path="/myjourney" exact component={MyJourney}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;