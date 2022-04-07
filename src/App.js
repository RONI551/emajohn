import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/NotFound/Notfound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
    
     
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path='/shop'>
            <Shop>

            </Shop>

          </Route>
          <Route exact path='/'>
            <Shop>

            </Shop>
          </Route>
          <Route path='/review'>
          
          <OrderReview></OrderReview>
          </Route>
          <Route path='/inventory'>
          
          <Inventory></Inventory>
          </Route>
          <Route path='/Placeorder'>
          <PlaceOrder> </PlaceOrder> </Route>
          <Route path='*'>
          <Notfound></Notfound>
          
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
