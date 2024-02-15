import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onSelectPizza }) {
  
  const displayedPizzas = pizzas.map(pizza => {
    return (
      <Pizza key={pizza.id} onSelectPizza={onSelectPizza} pizzaInfo={pizza} />
    )
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {displayedPizzas}
      </tbody>
    </table>
  )
}

export default PizzaList;