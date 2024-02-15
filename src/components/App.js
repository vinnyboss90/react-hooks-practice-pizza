import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  
  const [pizzas, setPizzas] = useState([])
  const [selectedPizza, setSelectedPizza] = useState({
    topping: '',
    size: '',
    vegetarian: true
  })

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
      .then(response =>response.json())
      .then(data => setPizzas(data))
  },[])

  function handleFormChange(key, value) {
    setSelectedPizza({
      ...selectedPizza,
      [key]: value
    })
  }

  function handleEditPizzas(editedPizza) {
    const updatedPizzas = pizzas.map(pizza => 
     pizza.id === editedPizza.id ? editedPizza : pizza
    )
    setPizzas(updatedPizzas)
    setSelectedPizza(editedPizza)
  }

  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} onFormChange={handleFormChange} onEditPizzas={handleEditPizzas} />
      <PizzaList onSelectPizza={setSelectedPizza} pizzas={pizzas} />
    </>
  );
}

export default App;