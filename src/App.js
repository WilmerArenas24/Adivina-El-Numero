import React from "react";
import imagen from '../src/imagenes/number-blocks.png'

function App() {
  return (
    <div>      
    <img className="image" src={imagen} alt="Adivina el número" />
    <h1>Adivina el número</h1>
    </div>
    
  );
}

export default App;
