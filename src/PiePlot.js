import React from "react";
import Plot from "react-plotly.js";

class PiePlot extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            values: [1200, 300, 400, 300, 300],
            labels: ["Rent", "Insurances", "Food", "Transport", "Extras"],
            type: "pie",
          },
        ]}
        layout={{ height: 400, width: 500, title: "Pie Chart" }}
        /* layout={{ width: 320, height: 240, title: "A Fancy Plot" }} */
      />
    );
  }
}
export default PiePlot;

/* var data = [
  {
    values: [19, 26, 55],
    labels: ["Residential", "Non-Residential", "Utility"],
    type: "pie",
  },
];

var layout = {
  height: 400,
  width: 500,
};

Plotly.newPlot("myDiv", data, layout); */

/* data={[
    {
      x: [1, 2, 3],

      y: [2, 6, 3],

      type: "scatter",

      mode: "lines+markers",

      marker: { color: "red" },
    },

    { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
  ]} */
