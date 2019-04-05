import React, { Component, useEffect } from 'react';

import './App.css';

export default function Filter(props) {

  return (
    <div className="container-input">
      <h1 className="title">Harry Potter Characters</h1>
      <h2 className="subtitle">Introduce el nombre de un personaje</h2>
      <input
        className="input"
        type="text"
        onChange={props.onChangeInput}
        placeholder="Introduce el nombre" />
    </div>
  );

}