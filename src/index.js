import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  Map  from './components/map';
import  {landing}  from './components/landing';
import  {Login}  from './components/Login';
import  {Account}  from './components/Account';
import reducers from './reducers';
import { Route } from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const Routes = () => (

  <HashRouter>
    <div className = "app">
    <Route exact path="/explore" component={Map} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/account" component={Account} />
    <Route exact path="/landing" component={landing} />

    </div>
  </HashRouter>

);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Routes />
  </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
