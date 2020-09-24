import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Proverbs from './components/proverb/Proverbs';
import SignIn from './components/signin/SignIn'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Proverbs} />
            <Route exact path='/signin' component={SignIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
