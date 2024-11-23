import './App.css';
import React, { useState } from 'react';
import { animals } from './compononts/AnimalsDb';

function App() {
  const [randomAnimal, seRandomAnimal] = useState(getRandomAnimal());
  const[result, setResult] = useState("");

  function getRandomAnimal() {
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex].name;
  }

  function handleAnimalClick(clickedAninmal){
    if(clickedAninmal === randomAnimal){
      setResult("Win");
    }
    else{
      setResult("Lose");
    }
  }

  function resetGame(){
    seRandomAnimal(getRandomAnimal());
    setResult("");
  }




  return (
    <div className="body">
     <div className='top-container'>
      <h1>Animal Matching Game</h1>
     </div>
    
     <div className='main-one'>

     <div className='left-container'>
     </div>

     <div class Name='mid-container'>
     </div>

     <div className='right-container'>
     </div>

     </div>  
     </div>
  );
}

export default App;
