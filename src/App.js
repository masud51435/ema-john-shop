import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/inventory/Inventory'
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/placeOrder/PlaceOrder';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path ="/">
           <Shop></Shop>
          </Route>
          <Route path ="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path='/placeOrder'>
            <PlaceOrder></PlaceOrder>
          </Route> 
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
