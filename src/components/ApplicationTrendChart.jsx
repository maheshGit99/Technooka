import React, { useState, useEffect } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { Line } from "react-chartjs-2";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"; 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const ApplicationTrendChart = ({ data }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [filteredData, setFilteredData] = useState(data.applicationTrends || []);

 useEffect(() => {
  if (!fromDate && !toDate) {
    setFilteredData(data.applicationTrends);
    return;
  }
  const filtered = data.applicationTrends.filter((item) => {
    const itemDate = dayjs(item.date);
    if (fromDate && itemDate.isBefore(fromDate, 'day')) return false;
    if (toDate && itemDate.isAfter(toDate, 'day')) return false;
    return true;
  });
  setFilteredData(filtered);
}, [fromDate, toDate, data.applicationTrends]);


  const chartData = {
    labels: filteredData.map((d) => d.date),
    datasets: [
      {
        label: "Applications",
        data: filteredData.map((d) => d.applications),
        fill: false,
        backgroundColor: "#3f51b5",
        borderColor: "#3f51b5",
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Application Trends
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <DatePicker
            label="From"
            value={fromDate}
            onChange={(newValue) => setFromDate(newValue)}
            renderInput={(params) => <TextField {...params} size="small" />}
          />
          <DatePicker
            label="To"
            value={toDate}
            onChange={(newValue) => setToDate(newValue)}
            renderInput={(params) => <TextField {...params} size="small" />}
          />
        </Box>
      </LocalizationProvider>

      <Line data={chartData} />
    </Box>
  );
};

export default ApplicationTrendChart;
