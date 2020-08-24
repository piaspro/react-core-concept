import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=5000')
    .then(response => response.json())
    .then(data => setUser((data.results).slice(0, 20)))
  }, []);
  return (
    <div className="App">
        {
          user.map(person => <User gender = {person.gender}
            title = {person.name.title}
            firstName = {person.name.first}
            lastName = {person.name.last}
            email = {person.email}
            img = {person.picture.large}
            phone = {person.phone}
          ></User>)
        }
    </div>
  );
}
function User(props) {
  return(
    <div className="user">
          <img src={props.img} alt=""/>
          <h2>Name: {props.title}  {props.firstName}  {props.lastName}</h2>
          <h3>Email: {props.email}</h3>
          <h4>Gender: {props.gender}</h4>
          <p>Phone: <strong>{props.phone}</strong></p>
    </div>
  )
}



export default App;
