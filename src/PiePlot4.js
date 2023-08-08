import React, { useState } from "react";
import Plot from "react-plotly.js";
import "./PiePlot.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PiePlot = () => {
  const [income, setIncome] = useState(1000);
  const [expenses, setExpenses] = useState({
    Rent: 200,
    Insurances: 100,
    Food: 300,
    Transport: 150,
    Car_lease: 354,
    School: 600,
    Extras: 250,
  });

  const handleIncomeChange = (event) => {
    setIncome(parseFloat(event.target.value));
  };

  const handleExpenseChange = (event, label) => {
    const updatedExpenses = { ...expenses };
    updatedExpenses[label] = parseFloat(event.target.value);
    setExpenses(updatedExpenses);
  };

  const totalExpensesDollars = Object.values(expenses).reduce(
    (total, value) => total + value,
    0
  );
  const remainingBudgetDollars = income - totalExpensesDollars;

  const data = [
    {
      values: Object.values(expenses).map(
        (value) => (value / totalExpensesDollars) * 100
      ),
      labels: Object.keys(expenses),
      type: "pie",
    },
  ];

  const chartConfig = {
    responsive: true,
  };

  return (
    <div className="container mt-5 custom-container">
      <div className="row">
        <div className="col-md-6">
          <h2>Total Income</h2>
          <div>
            <label>Total Income: $</label>
            <input
              type="number"
              value={income}
              onChange={handleIncomeChange}
              className="form-control"
            />
          </div>
          <div>
            <h3>Expense Distribution:</h3>
            {Object.keys(expenses).map((label) => (
              <div key={label}>
                <label>{label}: $</label>
                <input
                  type="number"
                  value={expenses[label]}
                  onChange={(event) => handleExpenseChange(event, label)}
                  className="form-control"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h3>Expenses</h3>
          <div className="chart-container">
            <Plot
              data={data}
              layout={{ height: 400, width: 500, title: "Expenses" }}
              config={chartConfig}
            />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 custom-summary">
          <h3>Summary:</h3>
          <p>Total Expenses: ${totalExpensesDollars.toFixed(2)}</p>
          <p>Remaining Budget: ${remainingBudgetDollars.toFixed(2)}</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 text-center custom-footer">
          <p>
            &copy; {new Date().getFullYear()} Jorge Macana. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PiePlot;
