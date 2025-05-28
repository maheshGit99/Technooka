import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ApplicationBarChart from "../components/ApplicationBarChart";
import ApplicationTrendChart from "../components/ApplicationTrendChart";
import axios from "axios";
import StatusCard from "../components/StatusCard";

const AdmissionDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("data", data);
  console.log("loading", loading);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://6836e069664e72d28e428083.mockapi.io/api/v1/analytics/admissions"
      );
      setData(response.data[0]);
    } catch (err) {
      ConstantSourceNode.log("error fetching data:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Admission Analytics Dashboard
        </Typography>

        {loading && <Typography>Loading...</Typography>}

        {!loading && data && (
          <>
            {/* Status Cards */}
            <StatusCard data={data} />

            {/* Charts */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                mb: 4,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <ApplicationBarChart data={data} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <ApplicationTrendChart data={data} />
              </Box>
            </Box>

            {/* Refresh Button */}
            <Box sx={{ textAlign: "right" }}>
              <Button variant="contained" onClick={fetchData}>
                Refresh Data
              </Button>
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default AdmissionDashboard;
