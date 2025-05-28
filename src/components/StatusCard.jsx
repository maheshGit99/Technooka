import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const cardStyles = (count) => {
  if (count > 1000) 
    return { backgroundColor: "#ff4d4d", color: "#800000"};
  if (count > 500) 
    return { backgroundColor: "#ffd24d", color: "#804d00"};
  return {};
};

const StatusCard = ({ data }) => {
  if (!data) return <Typography>No Data Available</Typography>;
  const cards = [
    { title: "Total Applicants", count: data.totalApplicants },
    { title: "Verified Applicants", count: data.verifiedApplicants },
    { title: "Rejected Applicants", count: data.rejectedApplicants },
  ];

  return (
    <Grid container spacing={2}>
      {cards.map((item, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <Card sx={cardStyles(item.count)}>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="h4">{item.count}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatusCard;
