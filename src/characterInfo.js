import React, {  useState, useEffect } from 'react';

export default function CharacterInfo({ character, house }) {

  const [persons, setPersons] = useState([]);


  
  useEffect(() => {

      fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`).then((response) => response.json()).then((persons) => {
        //Se actualiza el estado pasandole el array
    
        setPersons(persons)

      });
    
  }, [house])


  return (

    <div className="container-info">
      <div className="wrapper-card">
        {
          persons.length > 0 &&
          persons.map((item, index) => {
            return (<div className="card">
              <p className="text">{item.name}</p>
              <div className="container-img">
                <img className="img" src={item.image} alt="" />
              </div>
              <p className="text">Casa: <span>{item.house}</span></p>
              <p className="text">Patronus: <span>{item.patronus}</span> </p>
            </div>
            )
          })
        }
      </div>

    </div>
  );

}