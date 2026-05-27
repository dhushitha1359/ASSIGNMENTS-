import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Typography, Container, Paper } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  typography: {
    h4: {
      fontWeight: "bold",
    },
  },
});

function ThemeProviderDemo() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" color="primary">
            Welcome to MUI Theme
          </Typography>

          <Typography variant="body1" sx={{ mt: 2 }}>
            This component is using a custom MUI theme.
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default ThemeProviderDemo;