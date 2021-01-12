import React, { Component } from 'react'

export default class Home extends Component {
constructor(){

    super();
    this.state={
        data:[]
    }
}

getDate =() => {
    var comment =localStorage.getItem('allShifts');
    console.log(comment);
  }
    render() {
        return (
            <div>
                <button onClick={this.getData}>View all shifts</button>
             </div>
        )
    }
}
