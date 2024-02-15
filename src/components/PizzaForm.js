import React from "react";

function PizzaForm({ selectedPizza, onFormChange, onEditPizzas }) {

  const { id, topping, size, vegetarian } = selectedPizza

  function handleSubmit(event) {
    event.preventDefault()
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedPizza)
    })
      .then(response => response.json())
      .then(data => onEditPizzas(data))
  }

  function handleInputChange(event) {
    onFormChange(event.target.name, event.target.value);
  }

  function handleRadioChange(event) {
    onFormChange(event.target.name, event.target.value === "Vegetarian");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={handleInputChange}
            value={topping}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select onChange={handleInputChange} value={size} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={handleRadioChange}
              checked={vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={handleRadioChange}
              checked={!vegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;