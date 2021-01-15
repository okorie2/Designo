
import './App.css';
import MainApp from './index';
import {Switch, Route} from 'react-router-dom'
import Footer from './components/Footer/footer'
import Home from './Screens/Home/home'
import Nav from './components/Navbar/navbar'
import Web from './Screens/Web page/web'
import Appage from './Screens/App page/app'
import Graphicspage from './Screens/Graphics page/graphics'
import Aboutpage from './Screens/About page/about'
import Location from './Screens/Locations page/location'
import Contact from './Screens/Contact page/contact'

function App() {
  return (
    <div className="App">
     
      <Nav/>
      
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/web" component={Web}/>
       <Route exact path="/app" component={Appage}/>
       <Route exact path="/graphics" component={Graphicspage}/>
       <Route exact path="/location" component={Location}/>
       <Route exact path="/about" component={Aboutpage}/>
       <Route exact path="/contact" component={Contact}/>
     </Switch>
      <Footer/>
     
     
     
    </div>
  );
}

export default App;
