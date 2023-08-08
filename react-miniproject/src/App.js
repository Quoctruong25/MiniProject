import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProductComponent from './components/ListProductComponent';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <Router> 
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path='/' component={ListProductComponent} exact /> 
            <Route path='/products' component={ListProductComponent} />
            <Route path='/addproducts' component={CreateProduct} />
          </Switch>
        </div>
        <FooterComponent />
    </Router>
  );
}

export default App;

