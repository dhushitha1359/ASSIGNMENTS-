import React, { useState } from "react";
import {
  Switch,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "white" : "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </Typography>

      <FormControlLabel
        control={
          <Switch checked={darkMode} onChange={handleToggle} />
        }
        label="Toggle Theme"
      />
    </Box>
  );
}

export default ThemeSwitch;