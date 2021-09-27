import './App.scss';
import Nav from './components/Nav/Nav'
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </Switch> 
      </div>
    </Router>  
  );
}

export default App;
