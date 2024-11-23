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
  
  return (
    <div className="App">
      <table>
        
      </table>
    </div>
  );
}

export default App;
