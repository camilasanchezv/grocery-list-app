import React, { useState, useEffect } from "react";
import './App.css';

//components
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("other");

  //lists
  const [other, setOther] = useState([]);
  const [food, setFood] = useState([]);
  const [pharmacy, setPharmacy] = useState([]);

  //save to local
  useEffect(() => {
    getLocalItems();
  }, []);

  useEffect(() => {
    saveLocalItems();
  }, [food, pharmacy, other, status]);

  const saveLocalItems = () => {
    localStorage.setItem("food", JSON.stringify(food));
    localStorage.setItem("pharmacy", JSON.stringify(pharmacy));
    localStorage.setItem("other", JSON.stringify(other));
  };

  const getLocalItems = () => {
    if (localStorage.getItem("food") === null) {
      localStorage.setItem("food", JSON.stringify([]));
    } else {
      let localFood = JSON.parse(localStorage.getItem("food"));
      setFood(localFood);
    }
    if (localStorage.getItem("pharmacy") === null) {
      localStorage.setItem("pharmacy", JSON.stringify([]));
    } else {
      let localPharmacy = JSON.parse(localStorage.getItem("pharmacy"));
      setPharmacy(localPharmacy);
    }
    if (localStorage.getItem("other") === null) {
      localStorage.setItem("other", JSON.stringify([]));
    } else {
      let localOther = JSON.parse(localStorage.getItem("other"));
      setOther(localOther);
    }
  };

  return (
    <div className="App">
      <header className="header-title">
        My Groceries
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        other={other}
        setOther={setOther}
        setStatus={setStatus}
        status={status}
        setFood={setFood}
        food={food}
        pharmacy={pharmacy}
        setPharmacy={setPharmacy}
      />
      <div className="lists-container">
        <ItemsList
          title="FOOD"
          items={food}
          setItems={setFood}
        />
        <ItemsList
          title="PHARMACY"
          items={pharmacy}
          setItems={setPharmacy}
        />
        <ItemsList
          title="OTHER"
          items={other}
          setItems={setOther}
        />
      </div>
    </div>
  );
}

export default App;
