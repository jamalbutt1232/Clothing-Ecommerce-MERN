import React,{Component} from 'react';
import './App.css';
import {Switch,Route}  from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'


class App extends Component {

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    );
  }
 
}

export default App;
