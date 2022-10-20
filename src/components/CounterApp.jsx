import React, { useState } from "react";
import PropTypes from "prop-types";

/*Si las funciones no dependen de otros elementos del componente, se pueden definir fuera del componente
Si el componente recibe cambios cuando se vuelva a renderizar no se vuelve a asignar espacio de memoria a estas funciones*/
const handleOnClick = (e, value) => {
  console.log("onClick", e, value);
};

/*cuando hay cambios en el estado, se vuelve a renderizar el componente, 
se vuelven a ejecutar las funciones y se vuelve a asignar espacio de memoria a las funciones
*/
function CounterApp({ value }) {
  //hooks
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    console.log("Add");
    setCounter(counter + 1);
    //setCounter((c) => c + 1);
  };
  const handleSubtract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
export default CounterApp;
