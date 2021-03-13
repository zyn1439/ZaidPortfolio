import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/experience";
import Portfolio from "./Components/Portfolio/portfolio";
import ContactMe from "./Components/ContactMe/contactme";
import Footer from "./MiniComponents/footer";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router>
      <Home />
      <Skills />
      <Experience />
      <Portfolio />
      <ContactMe />
      <Footer />
      <NotificationContainer />
    </Router>
  );
}

export default App;
