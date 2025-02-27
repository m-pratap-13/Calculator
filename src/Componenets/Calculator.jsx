import React, { useState } from "react";

const Calculator = () => {
  const buttons = [
    "C",
    "⌫",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
  ];

  const [userInput, setUserInput] = useState("");

  const handleButton = (button) => {
    let value = button.target.innerText;
    setUserInput(value);
    if (value === "C") {
      setUserInput("");
    } else if (value === "=") {
      try {
        setUserInput(eval(userInput));
      } catch (error) {
        setUserInput("Error");
      }
    } else if (value === "⌫") {
      if (userInput.length > 0) {
        setUserInput(userInput.slice(0, -1));
      } else {
        setUserInput("");
      }
    } else if (value === "%") {
      setUserInput(eval(userInput)/100);
    } else {
      setUserInput(userInput + value);
    }
  };

  return (
    <div className="container">
    <div className="calculator">
      <div className="display">{userInput}</div>
      <div className="buttons">
        {buttons.map((button) => (
          <button key={button} value="Text" onClick={handleButton}>
            {button}
          </button>
        ))}
        <button className="equal" onClick={handleButton}>
          =
        </button>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
