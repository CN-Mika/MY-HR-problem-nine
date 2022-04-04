import React, { useState } from "react";
import "./App.css";

// This program should render a random day of the week when the button is clicked.
//1. In the handleClick function, create a variable that saves the value of this function's return statement. Use that variablble to update the "day" state variable located in the App component. 
// 2. Pass the handleClick function as a prop called 'handleClick' to the Button component.

let dayOfTheWeekArray=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function DayDisplay(props) {
  return (<div>{props.day}</div>);
          
}

function Button(props) {
  return <button onClick={props.handleClick}>{props.buttonText}</button>;
}

function App() {
  const [day, setDay] = useState();
  return (
    <div>
      <DayDisplay day={day} />
      <Button buttonText="Pick a day!!!" />
    </div>
  );

  function handleClick() {
      return dayOfTheWeekArray[generateRandomNumber()];

  }
}


function generateRandomNumber() {
  return Math.floor(Math.random() * 7);
}


export default App;
