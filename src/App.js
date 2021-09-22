import './App.css';
import { BrowserRouter as Router, route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Ecomm from './components/Ecomm';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Contact from './components/Contact';
import Forgot from './components/Forgot';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="Container">
      <Router>
        <Header />
        <Navbar/>

        <Switch>
          <route exact path="/">
            <Ecomm />
          </route>
          <route path="/login">
            <Login />
          </route>
          <route path="/signup">
            <Signup />
          </route>
          <route path="/contact">
            <Contact />
          </route>
          <route path="/Profile">
            <Profile />
          </route>
          <route path="/forgot">
            <Forgot />
          </route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
