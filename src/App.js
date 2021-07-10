import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Graph from './Graphs/compo/Graph';
//import Loadingspinner from './components/LoadingSpinner/Loadingspinner';
import Frontpage from './components/Frontpage';
import Main from './components/Main';
import Aboutus from './components/AboutUs/Aboutus';
function App() {
  //const Frontpage = React.lazy(()=>import('./components/Frontpage'));
  //const Main = React.lazy(()=>import('./components/Main'));
  //const Aboutus = React.lazy(()=>import('./components/AboutUs/Aboutus'));
  return (
    <Router>
      
       <Switch>
          <Route path='/' exact component={Frontpage}></Route> 
          <Route path='/algorithms' component={Main}></Route>        
          <Route path='/graphs' component={Graph}></Route>
          <Route path='/contact' component={Aboutus}></Route>
    </Switch>
    
    </Router>
      
     
  );
}

export default App;
