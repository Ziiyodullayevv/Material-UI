import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [age, setAge] = useState("");
  console.log(age);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Stack spacing={2} direction={"row"}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age Lego</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            autoWidth
            onChange={handleChange}
            label={"Age lego"}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty Hover effecti</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <FormControl>
        <TextField label="Age" />
      </FormControl>
      <FormControl>
        <TextField label="Age" />
      </FormControl>
    </Stack>
  );
};

export default MuiSelect;
