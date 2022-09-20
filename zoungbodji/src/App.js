
import './components/App.scss'; 
import Welcome from './components/Welcome';
import Login from './components/Login';
import Navigation from './components/Navigation';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import 'react-slideshow-image/dist/styles.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
      <Navigation/>
      <Switch>
       <Route path='/Login'>
        <Login/>
        </Route> 
        <Route path='/Welcome'>
        <Welcome/>
        </Route> 
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
