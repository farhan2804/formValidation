import React, { useState } from "react";
import "./form.css";
const Form = () => {
  const [Name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [disableButton, setDisabledButton] = useState(true);
  const [activefield, setActivefield] = useState(null);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    const buttonDisabled = value.trim() === "" || number.trim() === "";
    setDisabledButton(buttonDisabled);
    if (value.trim() === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  const handleNumberChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    const buttonDisabled = value.trim() === "" || Name.trim() === "";
    setDisabledButton(buttonDisabled);
    if (value.trim() === "") {
      setNumberError(true);
    } else {
      setNumberError(false);
    }
  };

  const handleBlur = () => {
    if (activefield === "Name" && Name.trim() === "") {
      setNameError(true);
    }
    if (activefield === "number" && number.trim() === "") {
      setNumberError(true);
    }
  };

  const handleClick = (field) => {
    setActivefield(field);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setNumber("");
    setDisabledButton(true);
    console.log('form submitted')
  };
  return (
    <>
      <div className="FormContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter your name"
            onChange={handleNameChange}
            onBlur={handleBlur}
            value={Name}
            onClick={() => handleClick("Name")}
          />
          <p>{nameError ? "Name should be not be Empty" : ""}</p>
          <input
            type="number"
            placeholder="enter your number"
            onChange={handleNumberChange}
            onBlur={handleBlur}
            value={number}
            onClick={() => handleClick("number")}
          />
          <p>{numberError ? "Number should not be Empty" : ""}</p>
          <button type="submit" disabled={disableButton}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
