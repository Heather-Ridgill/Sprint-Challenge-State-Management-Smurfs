import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/App.css";

import FormContext from "../contexts/FormContext";
import SmurfContext from "../contexts/SmurfContext";
import SmurfList from "./smurfList";
import SmurfForm from "./smurfForm";

const App = () => {
  const [smurfList, setSmurfList] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const handleChanges = event => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const newSmurf = event => {
    event.preventDefault();
    var papa = { ...formValue, id: Date.now() };
    axios
      .post("http://localhost:3333/smurfs", papa)
      .then(res => {
        setSmurfList(res.data);
        setFormValue({
          name: "",
          age: "",
          height: "",
          id: ""
        });
      })
      .catch(err => {
        console.log("Error", err);
      });
  };

  return (
    <div className="container">
      <SmurfContext.Provider value={{ smurfList }}>
        <FormContext.Provider value={{ formValue, handleChanges, newSmurf }}>
          <header>
            <h1> Hello! Welcome to Smurf Village!</h1>
            <p> Feel free to look around and meet the smurfs!</p>
          </header>
          <div className="sidebyside">
            <SmurfForm />
            <SmurfList />
          </div>
        </FormContext.Provider>
      </SmurfContext.Provider>
    </div>
  );
};

export default App;
