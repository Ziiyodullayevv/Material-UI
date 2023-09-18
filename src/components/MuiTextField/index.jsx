import { InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <TextField label="Name" color="error" size="small" variant="outlined" />
        <TextField label="Name" color="error" variant="filled" />
        <TextField label="Name" color="error" variant="standard" />
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Requared" : "Do not shore your possworld"}
        />
        <TextField
          type="password"
          label="Password"
          helperText="helper"
          disabled
        />
        <TextField label="Rady only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction={"row"} spacing={4}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
