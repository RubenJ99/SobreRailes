"use strict";

const monthCtx = document.getElementById("monthlySales").getContext("2d");
const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const labels = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'];


const data = {
  labels: labels,
  datasets: [
    {
      label: "Gastos",
      data: [45,50,60,20,0,40],
      borderColor: 'rgb(0, 102, 179)',
      backgroundColor: 'rgb(25, 156, 255)',
    },
  ],
};

const config = new Chart(monthCtx, {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
    hover: {
      mode: "index",
      intersec: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        min: 0,
        max: 100,
        ticks: {
          // forces step size to be 50 units
          stepSize: 50,
        },
      },
    },
  },
});

config.reset();
config.render();