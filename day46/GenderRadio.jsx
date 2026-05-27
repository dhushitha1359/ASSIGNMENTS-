import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

function GenderRadio() {
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div style={{ margin: "50px" }}>
      <FormControl>
        <FormLabel>Gender</FormLabel>

        <RadioGroup value={gender} onChange={handleChange}>
          <FormControlLabel
            value="Male"
            control={<Radio />}
            label="Male"
          />

          <FormControlLabel
            value="Female"
            control={<Radio />}
            label="Female"
          />
        </RadioGroup>
      </FormControl>

      <h3>Selected Gender: {gender}</h3>
    </div>
  );
}

export default GenderRadio;