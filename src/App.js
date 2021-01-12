import React, { Component } from 'react'
import Main from "./Main";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
export default class App extends Component {
  constructor(){
  super();
  this.state={
    allShifts: []
  }
}

setAllShifts = (data) => {
  let array = this.state.allShifts;
  this.setState({
    allShifts: [...array, data]
  },()=>{
    localStorage.setItem("allShifts",this.state.allShifts)
  })
}
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/Home">
              <Home/>
            </Route>
            <Route path="/">
            <Main setAllShifts={this.setAllShifts.bind(this)}/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
