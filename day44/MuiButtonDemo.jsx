import React from "react";
import { Button, Stack } from "@mui/material";

function MuiButtonDemo() {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      sx={{ mt: 5 }}
    >
      <Button variant="contained">
        Save
      </Button>

      <Button variant="outlined">
        Cancel
      </Button>

      <Button variant="text" color="error">
        Delete
      </Button>
    </Stack>
  );
}

export default MuiButtonDemo;