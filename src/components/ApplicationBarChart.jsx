import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ApplicationBarChart = ({ data }) => {
  if (!data || !data.applicationsPerProgram)
    return <p>No data for Bar Chart</p>;
  console.log("Bar Chart data:", data);
  const labels = data.applicationsPerProgram.map((item) => item.program);
  const counts = data.applicationsPerProgram.map((item) => item.count);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Applications",
        data: counts,
        backgroundColor: "rgba(53, 162, 235, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Applications Per Program",
      },
    },
  };

  return <Bar options={options} data={chartData} />;
};

export default ApplicationBarChart;
