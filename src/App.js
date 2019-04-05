import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import CharacterInfo from './characterInfo'

export default function App() {

  //Se declara e inicializa el estado
  const [characters, setCharacters] = useState([])
  const [objCharacter, setObjCharacter] = useState([])
  const [house, setHouse] = useState("")

//es como componentDidMount
  useEffect(() => {
    fetch('https://hp-api.herokuapp.com/api/characters').then((response) => response.json()).then((persons) => {
      //Se actualiza el estado pasandole el array
    
      setCharacters(persons)
    });
  })

  function handleInputChange(event, state) {

    const value = event.target.value;
    let character = state;
    let result = [];
    let objCharacter = []

   result = character.filter( item => item.name.toUpperCase() === value.toUpperCase())
   console.log(state)

   result.map((item, index) => {
     objCharacter.push({
       name: item.name,
       house: item.house,
       image: item.image,
       patronus: item.patronus,
     })
     setHouse(item.house)
   })


     setObjCharacter(objCharacter)
  
  }


  return (
    <div className="App">

      <Filter onChangeInput={(e) => handleInputChange(e, characters)}/>
      {
        characters.length > 0 &&
        <CharacterInfo  
          character={objCharacter}
          house={house}
          />
      }

    </div>
  );

}






