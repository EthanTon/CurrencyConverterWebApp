import { React, useState, useEffect } from 'react'
import { accessData, updateData, getSymbols} from './Data'
import updateButton from './assets/update.svg'
import divider from './assets/divider.svg'
import "./index.css"


function App() {
  useEffect(() => {updateData()},[]);
  
  
  

  return (
    <>
      <div className="container">
        <>
          <center>
            <InputField />
            <OptionsMenu className="align-left" />
            <a href="https://fixer.io/faq" className="align-right">
              source
            </a>
          </center>
        </>
      </div>
    </>
  );
}

function InputField() {
  const symbols = getSymbols();
  const units = Object.keys(symbols).sort();

  const [currency1Unit, setCurrency1Unit] = useState("Euro");
  const [currency1, setCurrency1] = useState("1.00");

  const [currency2Unit, setCurrency2Unit] = useState("Euro");
  const [currency2, setCurrency2] = useState("1.00");

  function convert(value = 1, inputCurrency = "EUR", outputCurrency = "EUR") {
    const data = accessData();
    return (
      ((value * data.get("rate")[outputCurrency]) /
      data.get("rate")[inputCurrency]).toFixed(2).replace(/\.(\d)$/, '.$10')
    );
  }

  function Title() {
    return (
      <div className="Title-Section">
        <div className="base">1 {currency1Unit} equals</div>
        <div className="converted">
          {convert(1, symbols[currency1Unit], symbols[currency2Unit])}{" "}
          {currency2Unit}
        </div>
      </div>
    );
  }


  return (
    <>
      <Title/>
      <form className="input-field">
        <input
          className="currency-input"
          type="number"
          min="0"
          value={currency1}
          onChange={(e) => {
              setCurrency1(e.target.value);
              setCurrency2(
                convert(
                  e.target.value,
                  symbols[currency1Unit],
                  symbols[currency2Unit]
                )
              );
          }}></input>
        <p className="divider">
          <img src={divider} />
        </p>
        <label>
          <select
            className="currency-list"
            value={currency1Unit}
            onChange={(a) => {
              setCurrency1Unit(a.target.value);
              setCurrency2(
                convert(
                  currency1,
                  symbols[a.target.value],
                  symbols[currency2Unit]
                )
              );
            }}>
            <option></option>
            {units.map((units) => {
              return <option key={units}>{units}</option>;
            })}
          </select>
        </label>
      </form>
      <form className="input-field">
        <input
          className="currency-input"
          type="number"
          min="0"
          value={currency2}
          onChange={(e) => {
              setCurrency2(e.target.value);
              setCurrency1(
                convert(
                  e.target.value,
                  symbols[currency2Unit],
                  symbols[currency1Unit]
                )
              );
          }}></input>
        <p className="divider">
          <img src={divider} />
        </p>
        <label>
          <select
            className="currency-list"
            value={currency2Unit}
            onChange={(a) => {
              setCurrency2Unit(a.target.value);
              setCurrency1(
                convert(
                  currency2,
                  symbols[a.target.value],
                  symbols[currency1Unit]
                )
              );
            }}>
            <option></option>
            {units.map((units) => {
              return <option key={units}>{units}</option>;
            })}
          </select>
        </label>
      </form>
    </>
  );
}

function OptionsMenu() {
  const [timestamp, setTimestamp] = useState(accessData().get("lastUpdated"));

  return (
    <>
      <button
        className="update"
        id="update"
        onClick={() => {
          updateData();
          setTimestamp(accessData().get("lastUpdated"));
        }}>
        <center>
          <img src={updateButton} />
        </center>
      </button>
      <label className="timestamp_Dark"> Last Updated: {timestamp}</label>
    </>
  );
}




export default App
