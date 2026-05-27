import React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function LayoutDemo() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: 400,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h5">
          Registration Form
        </Typography>

        <TextField label="Name" fullWidth />

        <TextField label="Email" fullWidth />

        <TextField label="Password" type="password" fullWidth />

        <Button variant="contained">
          Register
        </Button>
      </Paper>
    </Box>
  );
}

export default LayoutDemo;