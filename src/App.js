import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
   const [numeroLoteria, setNumeroLoteria] = useState(0)
const [numeroUsuario, setNumeroUsuario] = useState()

const crearNumero = Math.random() * 32
const redondeo = Math.floor(crearNumero)

const valoresLoteria = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, redondeo];

  const comparacion = () => {
    const ultimoNumeroLoteria = valoresLoteria[valoresLoteria.length - 1];


    if (ultimoNumeroLoteria === Number(numeroUsuario)) {
      alert("¡Felicidades, has conseguido ganar!");
    } else {
      alert("Lo siento, has perdido");
    }
  };


   const loteriaFunction = (e) => { 
    e.preventDefault()

setTimeout(() => {setNumeroLoteria(7)} ,1000)
setTimeout(() => {setNumeroLoteria(14)} ,1200)
setTimeout(() => {setNumeroLoteria(21)} ,1400)
setTimeout(() => {setNumeroLoteria(28)} ,1600)
setTimeout(() => {setNumeroLoteria(35)} ,1800)
setTimeout(() => {setNumeroLoteria(42)} ,2000)
setTimeout(() => {setNumeroLoteria(49)} ,2200)
setTimeout(() => {setNumeroLoteria(56)} ,2400)
setTimeout(() => {setNumeroLoteria(63)} ,2600)
setTimeout(() => {setNumeroLoteria(70)} ,2800)
setTimeout(() => {setNumeroLoteria(redondeo)} ,3000)
setTimeout(() => comparacion() ,4000)
}

const challangeForm = (e) => {
setNumeroUsuario(e.target.value)
}

return (
  <div className="App">
    <div className="container">
      <h1 className='presentacion1'>¿Qué número crees que jugará la lotería?</h1>
      <h1 className='presentacion2'>0 - 32</h1>
      <div className='container-result'>
        {numeroLoteria !== redondeo && (
          <h1 className="red">{numeroLoteria}</h1>
        )}
        {numeroLoteria === redondeo && (
          <div>
            <h1 className="green">{numeroLoteria}</h1>
          </div>
        )}
      </div>
    </div>

    <form className="form-container">
      <label>Escribe tu respuesta</label>
      <input type="number" onChange={challangeForm} placeholder="responde" />
      <button onClick={loteriaFunction}>Jugar</button>
      {numeroUsuario && (
        <div className="result">
          <h1>{numeroUsuario}</h1>
        </div>
      )}
    </form>
  </div>
);
      }

export default App;
