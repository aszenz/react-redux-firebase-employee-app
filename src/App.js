import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'
import EditEmployee from './components/employees/EditEmployee';
import CreateEmployee from './components/employees/CreateEmployee';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={CreateEmployee} />
            <Route path='/employee/:id' component={EditEmployee} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
