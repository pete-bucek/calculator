/*
 *  _____ _______         _                      _
 * |_   _|__   __|       | |                    | |
 *   | |    | |_ __   ___| |___      _____  _ __| | __  ___ ____
 *   | |    | | '_ \ / _ \ __\ \ /\ / / _ \| '__| |/ / / __|_  /
 *  _| |_   | | | | |  __/ |_ \ V  V / (_) | |  |   < | (__ / /
 * |_____|  |_|_| |_|\___|\__| \_/\_/ \___/|_|  |_|\_(_)___/___|
 *                   ___
 *                  |  _|___ ___ ___
 *                  |  _|  _| -_| -_|  LICENCE
 *                  |_| |_| |___|___|
 *
 * IT ZPRAVODAJSTVÍ  <>  PROGRAMOVÁNÍ  <>  HW A SW  <>  KOMUNITA
 *
 * Tento zdrojový kód pochází z IT sociální sítě WWW.ITNETWORK.CZ
 *
 * Můžete ho upravovat a používat jak chcete, musíte však zmínit
 * odkaz na http://www.itnetwork.cz
 */

import React, { useState } from "react";
import NumberInput from "./NumberInput";
import Select from "react-select";
import Result from "./Result";

const CalculatorForm = (props) => {
  const [selectedOptionState, setSelectedOptionState] = useState({
    selectedOption: {
      value: "--Vyberte operaci--",
      label: "--Vyberte operaci--",
    },
  });
  const [resultState, setResultState] = useState(null);

  const options = [
    { value: "ADD", label: "Sčítání" },
    { value: "SUBTRACT", label: "Odčítání" },
    { value: "MULTIPLY", label: "Násobení" },
    { value: "DIVIDE", label: "Dělení" },
  ];

  let calculate = () => {
    const { x, y } = props;
    switch (selectedOptionState.selectedOptionState.value) {
      case "ADD":
        return parseFloat(x) + parseFloat(y);
      case "SUBTRACT":
        return parseFloat(x) - parseFloat(y);
      case "MULTIPLY":
        return parseFloat(x) * parseFloat(y);
      case "DIVIDE":
        return parseFloat(x) / parseFloat(y);
      default:
        return null; // Sem by to nikdy nemělo dojít.
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = calculate();
    console.log(result);
    setResultState(result);
  };
  const handleChange = (selectedOptionState) => {
    setSelectedOptionState({ selectedOptionState });
  };
  return (
    <div>
      <form className="CalculatorForm" onSubmit={handleSubmit}>
        <NumberInput
          OnChange={props.xOnChange}
          name="x"
          label="První číslo:"
          value={props.x}
        />
        <NumberInput
          OnChange={props.yOnChange}
          name="y"
          label="Druhé číslo:"
          value={props.y}
        />
        <Select
          onChange={handleChange}
          value={selectedOptionState.selectedOption}
          options={options}
        />
        <input value="Spočítej" type="submit" />
      </form>
      <Result value={resultState} />
    </div>
  );
};

export default CalculatorForm;
