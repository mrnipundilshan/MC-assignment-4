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
      <h1>Result</h1>
      <h2>{result && `You ${result}`}</h2>
     </div>

     <div className='mid-container'>
      <h1>Animal Name</h1>
      <h2>{randomAnimal}</h2>
     </div>

     <div className='right-container'>
      <div className='grid'>
        {animals.map((animal,index)=>(
          <img
            key={index}
            src={require(`../src/fig/${animal.img}`)}
            alt={animal.name}
            onClick={()=>handleAnimalClick(animal.name)}
            className='animal-image'
          />
        ))}
      </div>
     </div>

     </div>  
     </div>
  );
}

export default App;
