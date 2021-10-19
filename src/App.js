import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
