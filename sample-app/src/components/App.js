import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import ErrorPage from '../pages/ErrorPage';


class App extends React.Component {


  render(){
    return (
      <BrowserRouter>
        <div className="ui container">
          <Header />
          <Switch>
            <Route path="/" component={LoginPage} exact />
            <Route path="/profile" component={ProfilePage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}


export default App;