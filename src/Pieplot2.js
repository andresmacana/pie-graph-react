import React, { useState } from "react";
import Plot from "react-plotly.js";

const PiePlot = () => {
  const [income, setIncome] = useState(1000); // Default total income
  const [expenses, setExpenses] = useState({
    Rent: 20,
    Insurances: 10,
    Food: 30,
    Transport: 15,
    Extras: 25,
  });

  const handleIncomeChange = (event) => {
    setIncome(parseFloat(event.target.value));
  };

  const handleExpenseChange = (event, label) => {
    const updatedExpenses = { ...expenses };
    updatedExpenses[label] = parseFloat(event.target.value);
    setExpenses(updatedExpenses);
  };

  const data = [
    {
      values: Object.values(expenses),
      labels: Object.keys(expenses),
      type: "pie",
    },
  ];

  return (
    <div>
      <h2>Expense Distribution</h2>
      <div>
        <label>Total Income: </label>
        <input type="number" value={income} onChange={handleIncomeChange} />
      </div>
      <div>
        <h3>Expense Distribution:</h3>
        {Object.keys(expenses).map((label) => (
          <div key={label}>
            <label>{label}: </label>
            <input
              type="number"
              value={expenses[label]}
              onChange={(event) => handleExpenseChange(event, label)}
            />
            %
          </div>
        ))}
      </div>
      <div>
        <h3>Pie Chart:</h3>
        <Plot
          data={data}
          layout={{ height: 400, width: 500, title: "Pie Chart" }}
        />
      </div>
    </div>
  );
};

export default PiePlot;
