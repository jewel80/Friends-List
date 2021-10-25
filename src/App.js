import React from 'react';
import './App.css';

const App = () => (<PersonList />)

const PersonList = () =>{
  const people =[
    {img:"matin", name:"MD. ABDUL MATIN", job:"Director Operation"},
    {img:"enam_sir", name:"SYED ENAMUL HOQUE", job:"Director"},
    {img:"purabi", name:"Purabi Khisa", job:"Manager, Administration"},
  ]
  // console.log(people)

  
  return (
    <section>
      <Person person={people[0]}/>
      <Person person={people[1]}/>
      <Person person={people[2]}/>
    </section>
  )
}


const Person = (props) =>{
  // console.log(props)
  const {img, name, job}= props.person;
  const {children} =props;
  const url =`https://www.orogenicgroup-bd.com/front/img/team/${img}.jpg`;
  console.log(url)
  return (
    <div className="person">
      <img width="60"  src={url} alt="matin-photo"/>
      <div>
        <h4>{name}</h4>
        <h6>{job}</h6>
      </div>
    </div>
  )
}

export default App;
