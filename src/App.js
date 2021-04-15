import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Container maxWidth="lg">
          <Header />
          <main>
            <Switch>
              <Route exact path="/projects" render={() => <Projects />} />
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/contact" render={() => <Contact />} />
              <Route exact path="/" render={() => <Main />} />
              <Redirect to="/" />
            </Switch>
          </main>
        </Container>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
