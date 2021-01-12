import React, { Component } from 'react';
import "./App.css";
export default class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      startDate:"",
      repeatType:"",
      selectShift:"",
      startTime:"",
      endTime:"",
      week:null,
      weekDays:false,
    }
  }
  setDate=(event)=>{
      this.setState({
        startDate:event.target.value
      })   
  }
 setRepeat=(event)=>{
   this.setState({
     repeatType:event.target.value
   })
 } 
 setShift=(event)=>{
   this.setState({
     selectShift:event.target.value
   })
 }
 setStartTime=(event)=>{
   this.setState({
      startTime:event.target.value
    })
 }
 setEndTime=(event)=>{
   this.setState({
      endTime:event.target.value
   })
 }
 setWeek=(event)=>{
  this.setState({
    week:event.target.value
    
  })
 }
 setWeekDays=()=>{
   if(this.state.weekDays===false){
     this.setState({
       weekDays: true
     })
   } else {
     this.setState({
       weekDays: false
     })
   }
 }
 
  render() {
    return (
      <div className="total">
        <div className="container main">
      <div className="select">Select Start Date and Shift Times</div>
      <div className="row">
      <div className="col">
      <div className="select">Select Start Date</div>
      <div className="select">Select Repeat Type</div>
      <div className="select">Select Shift</div>
      <div className="select">Select Start Time</div>
      <div className="select">Select End Time</div>
      </div>
      <div className="col main-1">
      <div className="select-1"><input type="date" onChange={this.setDate}></input></div>
      <div className="select-1">
        <select onChange={this.setRepeat}>
        <option value="None">None</option> 
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        </select>
        </div>
        <div className="select-1">
        <select onChange={this.setShift}>
          <option value="None">None</option>
        <option value="Morning Shift - 5am to 9am">Morning Shift - 5am to 9am </option> 
        </select>
        </div>
      <div className="select-1"><input type="time" onChange={this.setStartTime}></input></div>
      <div className="select-1"><input type="time" onChange={this.setEndTime}></input></div>
      </div>
      </div>
      <div className="select-2">
        <div className="select">Please select the day of the week</div>
        <div className="radio">
          <input type="radio" value="0" name="week" className="radio-1" onChange={this.setWeek}></input>SUN
          <input type="radio" value="1" name="week" className="radio-1" onChange={this.setWeek}></input>MON
          <input type="radio" value="2" name="week" className="radio-1" onChange={this.setWeek}></input>TUE
          <input type="radio" value="3" name="week" className="radio-1" onChange={this.setWeek}></input>WED
          <input type="radio" value="4" name="week" className="radio-1" onChange={this.setWeek}></input>THU
          <input type="radio" value="5" name="week" className="radio-1" onChange={this.setWeek}></input>FRI
          <input type="radio" value="6" name="week" className="radio-1" onChange={this.setWeek}></input>SAT
        </div>
      </div>
      <div className="radio-2"><input type="radio" name="weekdays" onChange={this.setWeekDays}></input>Weekdays Only</div>       
          <div className="add"> <button  className="btn btn-primary" onClick={()=>this.props.setAllShifts(this.state)}>ADD +</button></div>
     
      </div>
      </div>
    )
  }
}
