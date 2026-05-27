import React from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
} from "@mui/material";

function LoginForm() {
  return (
    <Paper elevation={4} sx={{ p: 4, width: 350, margin: "50px auto" }}>
      <Typography variant="h5" gutterBottom>
        Login Form
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField label="Email" variant="outlined" fullWidth />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
        />

        <Button variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </Paper>
  );
}

export default LoginForm;