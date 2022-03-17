// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Error from './Error';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar/>

       <Switch>

            <Route exact path='/'>
                <Home/>
            </Route>

            <Route path='/About'>
                <About/>
            </Route>

            <Route path='/Service'>
                <Service/>
            </Route>

            <Route path='*'>
                <Error/>
            </Route>

         
       </Switch>

      </Router>
    </div>
  );
}

export default App;
